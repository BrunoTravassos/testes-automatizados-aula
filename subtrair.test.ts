// import test from "node:test";
import subtrair from "./subtrair";

//const subtrair = require('./subtrair')

describe('testes de subtração',()=>{
    test('deve verificar o resultado de uma subtração',()=>{
        expect(subtrair(7,2.5)).toBeCloseTo(4.5)
        expect(subtrair(72,2)).toBe(70)
    })

    test('deve verificar o resultado incorreto de uma subtração',()=>{
        expect(subtrair(9,4)).not.toBe(3)
    })
})

