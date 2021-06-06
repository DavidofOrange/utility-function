const { expect } = require("chai");
const { chai } = require("chai");
const { gottaGetThatMoney } = require("../index.js");

describe("gottaGetThatMoney", function() {
  it("Should return a string if NaN", () => {
    const stringTest = gottaGetThatMoney("Give me money");
    const booleanTest = gottaGetThatMoney("ten");
    expect(stringTest).to.equal("Sorry, not a number");
    expect(booleanTest).to.equal("Sorry, not a number");
  });

    it("gottaGetThatMoney Should return a string", () => {
    const tenFlyingStacks = gottaGetThatMoney(10);
    expect(typeof tenFlyingStacks).to.equal("string");
  });
});