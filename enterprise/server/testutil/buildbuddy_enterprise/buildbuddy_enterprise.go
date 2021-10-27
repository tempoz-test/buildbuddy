package buildbuddy_enterprise

import (
	"fmt"
	"testing"

	"github.com/buildbuddy-io/buildbuddy/enterprise/server/testutil/testredis"
	"github.com/buildbuddy-io/buildbuddy/server/testutil/app"
)

const (
	DefaultConfig = "enterprise/config/test/buildbuddy.fakeauth.yaml"
	NoAuthConfig  = "enterprise/config/test/buildbuddy.noauth.yaml"
)

func Run(t *testing.T, args ...string) *app.App {
	return RunWithConfig(t, DefaultConfig, args...)
}

func RunWithConfig(t *testing.T, configPath string, args ...string) *app.App {
	redisTarget := testredis.Start(t)
	commandArgs := []string{
		fmt.Sprintf("--telemetry_port=%d", app.FreePort(t)),
		"--app_directory=/enterprise/app",
		"--app.default_redis_target=" + redisTarget,
	}
	commandArgs = append(commandArgs, args...)
	return app.Run(
		t,
		/* commandPath= */ "enterprise/server/cmd/server/buildbuddy_/buildbuddy",
		commandArgs,
		/* configPath= */ configPath,
	)
}
