package types

// AddressLength is the expected length of the address
const AddressLength = 20

// Address represents the 20 byte address of an Ethereum account.
type Address [AddressLength]byte

type EthereumAddress Address
