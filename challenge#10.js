
let hero = {
  powerLevel: 99,
  getPower() {
    return this.powerLevel;
  }
}

let getPower = hero.getPower;

let hero2 = { powerLevel: 42 };

console.log(getPower());//undefined

console.log(getPower.apply(hero2));//42


//polyfill
Object.prototype.customApply = function (obj, params = []) {

  let uuid = Date.now()
  obj[uuid] = this
  let result = obj[uuid](...params)
  delete obj[uuid]
  return result
}

console.log(getPower.customApply(hero2))