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

const burnTxData = 'ughWYOfsCrMICkBDNTI1MUI4Rjg4QUYyMzZDQzVFNzVDQjc3NzhEMjFDRjFDQzEzNTZEOTA2QTVDNjVGMUJEQ0Q1Mzk2MTVFRjMxEJeeBCKZBhqWBlt7Im1zZ19pbmRleCI6MCwic3VjY2VzcyI6dHJ1ZSwibG9nIjoiIiwiZXZlbnRzIjpbeyJ0eXBlIjoiYnVybiIsImF0dHJpYnV0ZXMiOlt7ImtleSI6ImV0aGVyZXVtX2NoYWluX2lkIiwidmFsdWUiOiIzIn0seyJrZXkiOiJ0b2tlbl9jb250cmFjdCIsInZhbHVlIjoiMHg2ODJjMkFFNDA1M0VhYzY0Y0YxQkFhQTA0QzczOTcwM0RjMDQzRjBBIn0seyJrZXkiOiJjb3Ntb3Nfc2VuZGVyIiwidmFsdWUiOiJjb3Ntb3MxcXdudzJyOWFrNzk1MzZjNGRxdHJ0azJwbDJubHpwcWg3NjNybHMifSx7ImtleSI6ImV0aGVyZXVtX3JlY2VpdmVyIiwidmFsdWUiOiIweDdCOTVCNkVDN0ViRDczNTcyMjk4Y0VmMzJCYjU0RkE0MDgyMDczNTkifSx7ImtleSI6ImFtb3VudCIsInZhbHVlIjoiMXN0YWtlIn1dfSx7InR5cGUiOiJtZXNzYWdlIiwiYXR0cmlidXRlcyI6W3sia2V5Ijoic2VuZGVyIiwidmFsdWUiOiJjb3Ntb3MxcXdudzJyOWFrNzk1MzZjNGRxdHJ0azJwbDJubHpwcWg3NjNybHMifSx7ImtleSI6Im1vZHVsZSIsInZhbHVlIjoiZXRoYnJpZGdlIn0seyJrZXkiOiJzZW5kZXIiLCJ2YWx1ZSI6ImNvc21vczFxd253MnI5YWs3OTUzNmM0ZHF0cnRrMnBsMm5senBxaDc2M3JscyJ9LHsia2V5IjoiYWN0aW9uIiwidmFsdWUiOiJidXJuIn1dfSx7InR5cGUiOiJ0cmFuc2ZlciIsImF0dHJpYnV0ZXMiOlt7ImtleSI6InJlY2lwaWVudCIsInZhbHVlIjoiY29zbW9zMWwzZGZ0ZjQ5OXU0Z3ZkZXV1emRsMnBndjRmMHhkdG51ZW5zNXd2In0seyJrZXkiOiJhbW91bnQiLCJ2YWx1ZSI6IjFzdGFrZSJ9XX1dfV0qzgHMASgoFqkKVID+h3cIAxIUaCwq5AU+rGTPG6qgTHOXA9wEPwoaFAOm5Qy9t4tI6xVoFjXZQfqn8QQXIhR7lbbsfr1zVyKYzvMrtU+kCCBzWSoKCgVzdGFrZRIBMRIEEMCaDBpqCibrWumHIQLSd46NU8TNPq5KoiQ5gsf1NOEc570jHMOI5iOsRLIc1BJAVb3H8EYCymIjOpGOXRQc/yUpdU0Uneyin+xkE2ZSdhxabP/8VVHl+wq5bmcPKH8xX2DqJDEFag9pu/rZfwSRvA=='

const burnTx = {
    'type':  'bridge/BridgeTx',
    'value': {
        "hash": "C5251B8F88AF236CC5E75CB7778D21CF1CC1356D906A5C65F1BDCD539615EF31",
        "height": "69399",
        "index": 0,
        "tx_result": {
            "code": 0,
            "data": null,
            "log": "[{\"msg_index\":0,\"success\":true,\"log\":\"\",\"events\":[{\"type\":\"burn\",\"attributes\":[{\"key\":\"ethereum_chain_id\",\"value\":\"3\"},{\"key\":\"token_contract\",\"value\":\"0x682c2AE4053Eac64cF1BAaA04C739703Dc043F0A\"},{\"key\":\"cosmos_sender\",\"value\":\"cosmos1qwnw2r9ak79536c4dqtrtk2pl2nlzpqh763rls\"},{\"key\":\"ethereum_receiver\",\"value\":\"0x7B95B6EC7EbD73572298cEf32Bb54FA408207359\"},{\"key\":\"amount\",\"value\":\"1stake\"}]},{\"type\":\"message\",\"attributes\":[{\"key\":\"sender\",\"value\":\"cosmos1qwnw2r9ak79536c4dqtrtk2pl2nlzpqh763rls\"},{\"key\":\"module\",\"value\":\"ethbridge\"},{\"key\":\"sender\",\"value\":\"cosmos1qwnw2r9ak79536c4dqtrtk2pl2nlzpqh763rls\"},{\"key\":\"action\",\"value\":\"burn\"}]},{\"type\":\"transfer\",\"attributes\":[{\"key\":\"recipient\",\"value\":\"cosmos1l3dftf499u4gvdeuuzdl2pgv4f0xdtnuens5wv\"},{\"key\":\"amount\",\"value\":\"1stake\"}]}]}]",
            "info": "",
            "gasWanted": "200000",
            "gasUsed": "64791",
            "events": [
                {
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
                        'amount':  '1stake',
                        // TODO: Change cosmos_sender type to ValAddress to support original 'cosmos1qwnw2r9ak79536c4dqtrtk2pl2nlzpqh763rls',
                        'cosmos_sender':  'cosmos1h806c7khnvmjlywdrkdgk2vrayy2mmvf9rxk2r',
                        'ethereum_chain_id': '3',
                        'ethereum_receiver':  '0x7B95B6EC7EbD73572298cEf32Bb54FA408207359',
                        'token_contract':  '0x682c2AE4053Eac64cF1BAaA04C739703Dc043F0A'
                    }
                },
                {
                    'type':  'bridge/MsgAction',
                    'value': {
                        'action': 'burn' 
                    }
                }
            ],
            "codespace": ""
        },
        'tx': 'zAEoKBapClSA/od3CAMSFGgsKuQFPqxkzxuqoExzlwPcBD8KGhQDpuUMvbeLSOsVaBY12UH6p/EEFyIUe5W27H69c1cimM7zK7VPpAggc1kqCgoFc3Rha2USATESBBDAmgwaagom61rphyEC0neOjVPEzT6uSqIkOYLH9TThHOe9IxzDiOYjrESyHNQSQFW9x/BGAspiIzqRjl0UHP8lKXVNFJ3sop/sZBNmUnYcWmz//FVR5fsKuW5nDyh/MV9g6iQxBWoPabv62X8Ekbw='
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
                const value = Amino.unmarshalBridgeTx(bytes, true);
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
                const bytes = Amino.marshalBridgeTx(burnTx, true);
                const data  = Amino.bytesToBase64(bytes);
                expect(data).toBe(burnTxData);
            });
        });
    });
});
