require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom clog other security notice birth shift protect good credit fun team'; 
let testAccounts = [
"0xcf2d65905c484ceea062d329e9ea0c93d65e755bd714073a762bfd11107869c3",
"0x937918e68c1acc6f639692ce298dc15752ccc66e9cae5e81eb9f46f4c8505c30",
"0x16f74da60e6bbeb29de4d846b615d9da0343755111b0e538865b9468b4ab64b1",
"0x54a05015a2c7e682730c6fdb269cfe847bdcf4859e9422e9848bf68880438f67",
"0x123b3b4c31d10ea31ac6b890d58b3830c18098d9b4b144d7ab1467f69e63b042",
"0x9a52864afe42aea2b8c672e28fe79b4ecb15b3c20292f6ffe3b85671bde78c2c",
"0x1372fa5893e7c908af93e0a9afc1080e9c0428464d085a06c35f84f7ae515106",
"0xce37d90040cb2cafc924d8fea2a76f4f83e22a2cd397b1c0cc5fb05e1e81f0b1",
"0x2c340b61bc46baa3a8d9969e461c554365d4244e1d2c51a29e69715d7236cb68",
"0xbf6a9b6974cc0932fdeb692abe9cba6aeac74b48b4243ff6c8bf4f536cd8fdcb"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

