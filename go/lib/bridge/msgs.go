package bridge

import (
	"github.com/cosmos/amino-js/go/lib/bridge/types"
	sdk "github.com/cosmos/amino-js/go/lib/cosmos/cosmos-sdk/types"
)

type MsgTransfer struct {
	Recipient sdk.AccAddress `json:"recipient"`
	Amount    sdk.Coins      `json:"amount"`
}

type MsgSender struct {
	Sender sdk.AccAddress `json:"sender"`
}

type MsgModule struct {
	Module string         `json:"module"`
	Sender sdk.AccAddress `json:"sender"`
}

type MsgBurn struct {
	EthereumChainID  int                   `json:"ethereum_chain_id"`
	TokenContract    types.EthereumAddress `json:"token_contract"`
	CosmosSender     sdk.AccAddress        `json:"cosmos_sender"`
	EthereumReceiver types.EthereumAddress `json:"ethereum_receiver"`
	Amount           sdk.Coins             `json:"amount"`
}

type MsgAction struct {
	Action string `json:"action"`
}
