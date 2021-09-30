package redis_key_val_store

import (
	"context"
	"time"

	"github.com/buildbuddy-io/buildbuddy/server/util/status"
	"github.com/go-redis/redis"
)

const (
	ttl = 259200 * time.Second // 3 days
)

type store struct {
	rdb *redis.Client
}

func New(rdb *redis.Client) *store {
	return &store{rdb}
}

func (s *store) Set(ctx context.Context, key string, val []byte) error {
	if val == nil {
		s.rdb.Del(ctx, key)
		return nil
	}
	return s.rdb.Set(ctx, key, val, ttl).Err()
}

func (s *store) Get(ctx context.Context, key string) ([]byte, error) {
	b, err := s.rdb.Get(ctx, key).Bytes()
	if err == nil {
		return b, nil
	}
	if err == redis.Nil {
		return nil, status.NotFoundErrorf("Key %q not found in key value store", key)
	}
	return nil, err
}
