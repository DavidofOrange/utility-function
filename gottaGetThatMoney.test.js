const { expect } = require("chai");
const { gottaGetThatMoney } = require("./index.js");

describe("gottaGetThatMoney", function() {
  it("Should throw an error if amount is not a number", () => {
    const stringTest = gottaGetThatMoney("Give me money");
    const booleanTest = gottaGetThatMoney(true);
    expect(stringTest).to.throw();
    expect(booleanTest).to.throw();
  });

    it("gottaGetThatMoney Should return a string", () => {
    const tenFlyingStacks = gottaGetThatMoney(10);
    expect(typeof tenFlyingStacks).to.equal("string");
  });
});