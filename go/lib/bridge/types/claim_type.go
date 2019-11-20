package types

import (
	"encoding/json"
	"fmt"
	"strconv"
)

type ClaimType int

const (
	LockText = ClaimType(iota)
	BurnText
)

var ClaimTypeToString = [...]string{"lock", "burn"}

func StringToClaimType(text string) (ClaimType, error) {
	switch text {
	case "lock":
		return LockText, nil
	case "burn":
		return BurnText, nil
	default:
		return 0, ErrInvalidClaimType()
	}
}

func (text ClaimType) String() string {
	return ClaimTypeToString[text]
}

func (text ClaimType) MarshalJSON() ([]byte, error) {
	return []byte(fmt.Sprintf("\"%v\"", text.String())), nil
}

func (text *ClaimType) UnmarshalJSON(b []byte) error {
	var j string
	err := json.Unmarshal(b, &j)
	if err != nil {
		return err
	}
	stringKey, err := strconv.Unquote(string(b))
	if err != nil {
		return err
	}

	value, err := StringToClaimType(stringKey)
	if err != nil {
		return err
	}
	*text = value
	return nil
}
