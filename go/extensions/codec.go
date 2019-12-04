package extensions

import (
	bridge "github.com/cosmos/amino-js/go/lib/bridge"
	amino "github.com/tendermint/go-amino"
)

func RegisterCodec(codec *amino.Codec) {
	codec.RegisterConcrete(TxCreateMarket{}, "microtick/CreateMarket", nil)
	codec.RegisterConcrete(TxBridgeEventData{}, "bridge/TxBridgeEventData", nil)
	codec.RegisterConcrete(bridge.MsgTransfer{}, "bridge/MsgTransfer", nil)
	codec.RegisterConcrete(bridge.MsgSender{}, "bridge/MsgSender", nil)
	codec.RegisterConcrete(bridge.MsgModule{}, "bridge/MsgModule", nil)
	codec.RegisterConcrete(bridge.MsgBurn{}, "bridge/MsgBurn", nil)
	codec.RegisterConcrete(bridge.MsgAction{}, "bridge/MsgAction", nil)
}
