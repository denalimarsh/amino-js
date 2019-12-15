export interface BridgeTx extends BridgeTxResult {
}

export interface BridgeTxResult {
    hash:     string;
    height:   string;
    index:    number;
    tx_result: BridgeResponseTx;
    tx:       string;
}

export interface BridgeResponseTx {
    code:                 number;
    data?:                 null;         
    log?:                  string;        
    info?:                 string;          
    gasWanted:            string;          
    gasUsed:              string;          
    events:               BridgeMsg[];
    codespace:            string;
    XXX_NoUnkeyedLiteral?: string;
    XXX_unrecognized?:     string;
    XXX_sizecache?:        string;
}

interface BridgeMsg {
}

export interface MsgBurn extends BridgeMsg {
}

export interface MsgAction extends BridgeMsg {

}

export interface MsgTransfer extends BridgeMsg {

}

export interface MsgSender extends BridgeMsg {

}

export interface MsgModule extends BridgeMsg {

}
