package extensions

import (
	sdk "github.com/cosmos/amino-js/go/lib/cosmos/cosmos-sdk/types"
	abci "github.com/cosmos/amino-js/go/lib/tendermint/tendermint/abci/types"
)

var _ sdk.Msg = (*TxCreateMarket)(nil)

type TxCreateMarket struct {
	Account sdk.AccAddress
	Market  string
}

var _ sdk.Tx = (*TxBridgeEventData)(nil)

type TxBridgeEventData struct {
	TxResult
}

type TxResult struct {
	Height int64                  `json:"height"`
	Index  uint32                 `json:"index"`
	Tx     Tx                     `json:"tx"`
	Result abci.ResponseDeliverTx `json:"result"`
}

type Tx []byte
