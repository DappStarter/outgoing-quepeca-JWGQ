require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt produce border tell notice crime remind concert grace lobster flee second'; 
let testAccounts = [
"0xaa35e52b03586227aea1941c5fac98e2cb280c6f9f70eeec7581303300a0f269",
"0xa3497d2568bd2c247c9694e40df27b24c53dc353f21bf5951846aedb3b203df1",
"0x67e2975be67a094ad90808f4732afa8a9566cbc3b1d8451b567f936ca6e251a0",
"0x39cf5e263c62ef1e938eb55c96363b27f012a6961d64b7f56f86c9712c9fbaf8",
"0x9b357b88d7d8288f0655e47f095a07d49a2e6f541beb5a243ea27dd667dc9711",
"0xb44ce7fcefb104c71d82da77b4cd3b3ba302de7a12427fb8dcc725dd96c13869",
"0xb3d000f1733d2e9281d2b8ed4f5bae6c72cf77d8f52129e73a09c602dc4520b5",
"0xcfc26035e3f212bd3b455a4832268d5281e7c650f07429bfb89e16b2f758ab57",
"0xa610899ca8ec2f4dbe7a16b226da7e518a4769894e57178bfa17ea1621e02882",
"0xbe5a809ffe8fc33c180e1a66ba0d1ab37e5555051bf724d73821e72bdab25c19"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


