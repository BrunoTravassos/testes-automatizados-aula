// import test from "node:test";
// import subtrair from "./subtrair.js";

const subtrair = require('./subtrair')

test('deve verificar o resultado de uma subtração',()=>{
    expect(subtrair(7,2)).toBe(5)
})