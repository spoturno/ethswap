const { assert } = require('chai');

const Token = artifacts.require('Token');
const EthSwap = artifacts.require('EthSwap');

require('chai').use(require('chai-as-promised')).should()

function tokens(n){
    return web3.utils.toWei(n, 'ether');
}

contract('EthSwap', ([deployer, investor]) => {
    let token, ethswap;

    before(async () => {
        token = await Token.new();
        ethSwap = await EthSwap.new();
        //transfer all tokens to EthSwap (1 million)
        await token.transfer(ehtSwap.adress, tokens('1000000'));
    })

    describe('Token deployment', async () => {
        it('contract has a name', async () => {
            const name = await token.name()
            assert.equal(name, 'MATE Token')
        })
    })
})