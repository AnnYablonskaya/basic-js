const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {

  let newDNS = {};
  
  for (let i = 0; i < domains.length; i++) {
    let array = domains[i].split('.').reverse();
    let  item='';
    for (let j = 0; j < array.length; j++) {
      item = item + '.' + array[j];
      newDNS.hasOwnProperty(item) ? newDNS[item]++ : newDNS[item] = 1;
    }
  }
  return newDNS;
}


module.exports = {
  getDNSStats
};
