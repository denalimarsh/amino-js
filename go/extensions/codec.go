package extensions

import (
	amino "github.com/tendermint/go-amino"
)

func RegisterCodec(codec *amino.Codec) {
	codec.RegisterConcrete(MsgCreateEthBridgeClaim{}, "bridge/CreateEthBridgeClaim", nil)
	codec.RegisterConcrete(MsgBurn{}, "bridge/Burn", nil)
	codec.RegisterConcrete(MsgLock{}, "bridge/Lock", nil)
}
