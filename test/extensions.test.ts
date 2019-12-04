import * as Amino from '../';

const txData = 'lwHwYl3uCh+ISBeyChRXmZp0ijNn4Ck45U3Dn8935ucetBIDeHl6EgQQwIQ9GmoKJuta6YchAzLLqrGgOXVl8+8m3O9tiZdKb4+gQzLloFrMRVmRbBsXEkCeEfjb2IvhUPcricANV/yyMPst0/O64zndCsGH3ywQ0izw1Sk8k1NRD3PFAWJ1YRoUUGM/XbHvh+k7GzKnCZbn';

const tx = {
    'type':  'auth/StdTx',
    'value': {
        'msg':        [{
            'type':  'microtick/CreateMarket',
            'value': {
                'Account': 'cosmos127ve5ay2xdn7q2fcu4xu8870wlnww845pv6ten',
                'Market':  'xyz'
            }
        }],
        'fee':        {
            'amount': null,
            'gas':    '1000000'
        },
        'signatures': [
            {
                'signature': 'nhH429iL4VD3K4nADVf8sjD7LdPzuuM53QrBh98sENIs8NUpPJNTUQ9zxQFidWEaFFBjP12x74fpOxsypwmW5w==',
                'pub_key':   {
                    'type':  'tendermint/PubKeySecp256k1',
                    'value': 'AzLLqrGgOXVl8+8m3O9tiZdKb4+gQzLloFrMRVmRbBsX'
                }
            }
        ],
        'memo':       ''
    }
};

const burnTxData = 'zAEoKBapClSA/od3CAMSFGgsKuQFPqxkzxuqoExzlwPcBD8KGhQDpuUMvbeLSOsVaBY12UH6p/EEFyIUe5W27H69c1cimM7zK7VPpAggc1kqCgoFc3Rha2USATESBBDAmgwaagom61rphyEC0neOjVPEzT6uSqIkOYLH9TThHOe9IxzDiOYjrESyHNQSQFW9x/BGAspiIzqRjl0UHP8lKXVNFJ3sop/sZBNmUnYcWmz//FVR5fsKuW5nDyh/MV9g6iQxBWoPabv62X8Ekbw=';

const burnTx = {
    'type':  'bridge/TxBridgeEventData',
    'value': {
        'msg':        [{
            'type':  'bridge/MsgTransfer',
            'value': {
                'recipient': 'cosmos1l3dftf499u4gvdeuuzdl2pgv4f0xdtnuens5wv',
                'amount':  '1stake'
            }
        },
        {
            'type':  'bridge/MsgSender',
            'value': {
                'sender': 'cosmos1qwnw2r9ak79536c4dqtrtk2pl2nlzpqh763rls'      
            }
        },
        {
            'type':  'bridge/MsgModule',
            'value': {
                'module': 'ethbridge',      
                'sender': 'cosmos1qwnw2r9ak79536c4dqtrtk2pl2nlzpqh763rls'      
            }
        },
        {
            'type':  'bridge/MsgBurn',
            'value': {
                'EthereumChainID': '3',
                'TokenContract':  '0x682c2AE4053Eac64cF1BAaA04C739703Dc043F0A',
                'CosmosSender':  'cosmos1qwnw2r9ak79536c4dqtrtk2pl2nlzpqh763rls',
                'EthereumReceiver':  '0x7B95B6EC7EbD73572298cEf32Bb54FA408207359',
                'Amount':  '1stake'
            }
        },
        {
            'type':  'bridge/MsgAction',
            'value': {
                'action': 'burn' 
            }
        }]
    }
};

describe('Extensions', () => {
    describe('decoding', () => {
        describe('Tx', () => {
            it('decodes bytes', () => {
                const bytes = Amino.base64ToBytes(txData);
                const value = Amino.unmarshalTx(bytes, true);
                expect(value).toMatchObject(tx);
            });
        });

        describe('TxBurn', () => {
            it('decodes bytes', () => {
                const bytes = Amino.base64ToBytes(burnTxData);
                const value = Amino.unmarshalTx(bytes, true);
                expect(value).toMatchObject(burnTx);
            });
        });
    });

    describe('encoding', () => {
        describe('Tx', () => {
            it('encodes value', () => {
                const bytes = Amino.marshalTx(tx, true);
                const data  = Amino.bytesToBase64(bytes);
                expect(data).toBe(txData);
            });
        });

        describe('TxBurn', () => {
            it('encodes value', () => {
                const bytes = Amino.marshalTx(burnTx, true);
                const data  = Amino.bytesToBase64(bytes);
                expect(data).toBe(burnTxData);
            });
        });
    });
});
