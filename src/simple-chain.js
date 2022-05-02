const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    this.chain.length;
    return this;
  },
  addLink(value) {
    if (value === undefined) {
      this.result.push(`( )`);
  } else {
    this.chain.push(`( ${value} )`);
    return this;}
  },
  removeLink( position) {
    if (!this.chain[position - 1] || position > this.chain.length || !Number.isInteger(position)){
      this.chain = [];
      throw new Error ("You can't remove incorrect link!");
    }
      this.chain.splice(position - 1, 1);
      return chainMaker;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let fin = this.chain.join('~~');
    this.chain = [];
    return fin;
  },
};

module.exports = {
  chainMaker
};

