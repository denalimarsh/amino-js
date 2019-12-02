package extensions

import (
	amino "github.com/tendermint/go-amino"
)

func RegisterCodec(codec *amino.Codec) {
	codec.RegisterConcrete(MsgCreateEthBridgeClaim{}, "bridge/MsgCreateEthBridgeClaim", nil)
	codec.RegisterConcrete(MsgBurn{}, "bridge/MsgBurn", nil)
	codec.RegisterConcrete(MsgLock{}, "bridge/MsgLock", nil)
}
