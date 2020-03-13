package extensions

import (
	bridge "github.com/cosmos/amino-js/go/lib/bridge/types"
	sdk "github.com/cosmos/amino-js/go/lib/cosmos/cosmos-sdk/types"
	"github.com/cosmos/amino-js/go/lib/tendermint/tendermint/libs/common"
	tm "github.com/cosmos/amino-js/go/lib/tendermint/tendermint/types"
)

var _ sdk.Tx = (*BridgeTx)(nil)

type BridgeTx struct {
	Hash     string           `json:"hash"`
	Height   int64            `json:"height"`
	Index    uint32           `json:"index"`
	TxResult BridgeResponseTx `json:"tx_result"`
	Tx       tm.Tx            `json:"tx"`
}

type BridgeResponseTx struct {
	Code      uint32          `protobuf:"varint,1,opt,name=code,proto3" json:"code,omitempty"`
	Data      []byte          `protobuf:"bytes,2,opt,name=data,proto3" json:"data,omitempty"`
	Log       string          `protobuf:"bytes,3,opt,name=log,proto3" json:"log,omitempty"`
	Info      string          `protobuf:"bytes,4,opt,name=info,proto3" json:"info,omitempty"`
	GasWanted int64           `protobuf:"varint,5,opt,name=gas_wanted,json=gasWanted,proto3" json:"gas_wanted,omitempty"`
	GasUsed   int64           `protobuf:"varint,6,opt,name=gas_used,json=gasUsed,proto3" json:"gas_used,omitempty"`
	Events    []common.KVPair `protobuf:"bytes,7,rep,name=events" json:"events,omitempty"`
	Codespace string          `protobuf:"bytes,8,opt,name=codespace,proto3" json:"codespace,omitempty"`
}

var _ sdk.Msg = (*MsgBurn)(nil)

type MsgBurn struct {
	Amount           sdk.Coins              `json:"amount,omitempty"`
	CosmosSender     sdk.AccAddress         `json:"cosmos_sender,omitempty"`
	EthereumChainID  int                    `json:"ethereum_chain_id,omitempty"`
	EthereumReceiver bridge.EthereumAddress `json:"ethereum_receiver,omitempty"`
	TokenContract    bridge.EthereumAddress `json:"token_contract,omitempty"` // TODO: update to `json:"token_contract_address"`
}

var _ sdk.Msg = (*MsgAction)(nil)

type MsgAction struct {
	Action string `json:"action"`
}

var _ sdk.Msg = (*MsgTransfer)(nil)

type MsgTransfer struct {
	Recipient sdk.AccAddress `json:"recipient"`
	Amount    sdk.Coins      `json:"amount"`
}

var _ sdk.Msg = (*MsgSender)(nil)

type MsgSender struct {
	Sender sdk.AccAddress `json:"sender"`
}

var _ sdk.Msg = (*MsgModule)(nil)

type MsgModule struct {
	Module string         `json:"module"`
	Sender sdk.AccAddress `json:"sender"`
}
