// import test from "node:test";
// import subtrair from "./subtrair.js";

const subtrair = require('./subtrair')

describe('testes de subtração',()=>{
    test('deve verificar o resultado de uma subtração',()=>{
        expect(subtrair(7,2)).toBe(5)
    })

    test('deve verificar o resultado incorreto de uma subtração',()=>{
        expect(subtrair(9,4)).not.toBe(3)
    })
})

