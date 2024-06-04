import multiplicacao from "./multiplicacao";

describe('testes de multiplicação',()=>{
    test('deve verificar o resultado de uma multiplicação',()=>{
        expect(multiplicacao(7,2)).toBe(14)
    })

    test('deve verificar o resultado incorreto de uma multiplicação',()=>{
        expect(multiplicacao(9,4)).not.toBe(32)
    })
})