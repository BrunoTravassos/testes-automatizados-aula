import divisao from "./divisao";

describe('testes de divisão',()=>{
    test('deve verificar o resultado de uma divisão',()=>{
        expect(divisao(6,2)).toBe(3)
    })

    test('deve verificar o resultado incorreto de uma divisão',()=>{
        expect(divisao(9,2)).not.toBeCloseTo(4)
    })
})