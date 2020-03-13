package extensions

import (
	amino "github.com/tendermint/go-amino"
)

func RegisterCodec(codec *amino.Codec) {
	codec.RegisterConcrete(BridgeTx{}, "bridge/BridgeTx", nil)
	codec.RegisterConcrete(MsgTransfer{}, "bridge/MsgTransfer", nil)
	codec.RegisterConcrete(MsgSender{}, "bridge/MsgSender", nil)
	codec.RegisterConcrete(MsgModule{}, "bridge/MsgModule", nil)
	codec.RegisterConcrete(MsgBurn{}, "bridge/MsgBurn", nil)
	codec.RegisterConcrete(MsgAction{}, "bridge/MsgAction", nil)
}
