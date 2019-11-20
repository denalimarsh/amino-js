package types

import (
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

type CodeType = sdk.CodeType

const (
	DefaultCodespace sdk.CodespaceType = "ethbridge"

	CodeInvalidEthNonce     CodeType = 1
	CodeInvalidEthAddress   CodeType = 2
	CodeErrJSONMarshalling  CodeType = 3
	CodeInvalidEthSymbol    CodeType = 4
	CodeErrInvalidClaimType CodeType = 5
	CodeErrInvalidChainID   CodeType = 6
)

func ErrInvalidEthNonce(codespace sdk.CodespaceType) sdk.Error {
	return sdk.NewError(codespace, CodeInvalidEthNonce, "invalid ethereum nonce provided, must be >= 0")
}

func ErrInvalidEthAddress(codespace sdk.CodespaceType) sdk.Error {
	return sdk.NewError(codespace, CodeInvalidEthAddress, "invalid ethereum address provided, must be a valid hex-encoded Ethereum address")
}

func ErrInvalidChainID(codespace sdk.CodespaceType, chainID string) sdk.Error {
	return sdk.NewError(codespace, CodeErrInvalidChainID, fmt.Sprintf("invalid ethereum chain id '%s'", chainID))
}

func ErrJSONMarshalling(codespace sdk.CodespaceType) sdk.Error {
	return sdk.NewError(codespace, CodeErrJSONMarshalling, "error marshalling JSON for this claim")
}

func ErrInvalidEthSymbol(codespace sdk.CodespaceType) sdk.Error {
	return sdk.NewError(codespace, CodeInvalidEthSymbol, "invalid symbol provided, symbol \"eth\" must have null address set as token contract address")
}

func ErrInvalidClaimType() sdk.Error {
	return sdk.NewError(DefaultCodespace, CodeErrInvalidClaimType, "invalid claim type provided")
}
