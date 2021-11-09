package prefix

import (
	"context"

	"github.com/buildbuddy-io/buildbuddy/server/environment"
	"github.com/buildbuddy-io/buildbuddy/server/interfaces"
	"github.com/buildbuddy-io/buildbuddy/server/util/authutil"
	"github.com/buildbuddy-io/buildbuddy/server/util/log"
	"github.com/buildbuddy-io/buildbuddy/server/util/status"
)

const (
	userPrefix = "user:"
)

func addPrefix(prefix, key string) string {
	r := prefix + "/" + key
	return r
}

func userPrefixCacheKey(ctx context.Context, env environment.Env, key string) (string, error) {
	if auth := env.GetAuthenticator(); auth != nil {
		if u, err := auth.AuthenticatedUser(ctx); err == nil {
			if gm, err := authutil.EffectiveGroup(ctx, u); err == nil {
				return addPrefix(gm.GroupID, key), nil
			}
		}
	}

	if !env.GetConfigurator().GetAnonymousUsageEnabled() {
		return "", status.PermissionDeniedErrorf("Anonymous access disabled, permission denied.")
	}

	return addPrefix(interfaces.AuthAnonymousUser, key), nil
}

func AttachUserPrefixToContext(ctx context.Context, env environment.Env) (context.Context, error) {
	prefix, err := userPrefixCacheKey(ctx, env, "")
	if err != nil && !env.GetConfigurator().GetAnonymousUsageEnabled() {
		return nil, status.PermissionDeniedErrorf("Anonymous access disabled, permission denied.")
	}
	return context.WithValue(ctx, userPrefix, prefix), nil
}

func UserPrefixFromContext(ctx context.Context) (string, error) {
	if v := ctx.Value(userPrefix); v != nil {
		return v.(string), nil
	}
	log.Warning("No user prefix on context -- did you forget to call AttachUserPrefixToContext")
	return "", status.PermissionDeniedErrorf("Anonymous access disabled, permission denied.")
}
