const utils = require('../helper/utils');

function fetchChain(chain) {
  return async () => {
    const response = await utils.fetchURL(`https://firebasestorage.googleapis.com/v0/b/bloomify/o/config%2F${chain}.json?alt=media`);
    const tvl =  Object
      .values(response.data.tvls)
      .reduce((acc, tvl) => acc + tvl, 0);
    if(tvl === 0){
      throw new Error(`chain ${chain} tvl is 0`)
    }

    return tvl;
  }
}

module.exports = {
  bsc:{
    fetch: fetchChain('bsc')
  },
  fetch: fetchChain('bsc')
}
