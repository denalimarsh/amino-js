package extensions

import (
	bridge "github.com/cosmos/amino-js/go/lib/bridge/types"
	sdk "github.com/cosmos/amino-js/go/lib/cosmos/cosmos-sdk/types"
)

var _ sdk.Msg = (*MsgCreateEthBridgeClaim)(nil)
var _ sdk.Msg = (*MsgBurn)(nil)
var _ sdk.Msg = (*MsgLock)(nil)

type MsgCreateEthBridgeClaim struct {
	EthereumChainID       int
	BridgeContractAddress bridge.EthereumAddress
	Nonce                 int
	Symbol                string
	TokenContractAddress  bridge.EthereumAddress
	EthereumSender        bridge.EthereumAddress
	CosmosReceiver        sdk.AccAddress
	ValidatorAddress      sdk.ValAddress
	Amount                sdk.Coins
	ClaimType             bridge.ClaimType
}

type MsgBurn struct {
	EthereumChainID  int
	TokenContract    bridge.EthereumAddress
	CosmosSender     sdk.AccAddress
	EthereumReceiver bridge.EthereumAddress
	Amount           sdk.Coins
}

type MsgLock struct {
	EthereumChainID  int
	TokenContract    bridge.EthereumAddress
	CosmosSender     sdk.AccAddress
	EthereumReceiver bridge.EthereumAddress
	Amount           sdk.Coins
}
