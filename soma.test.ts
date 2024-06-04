import soma from "./soma";

describe('testes de soma',()=>{
    test('deve verificar o resultado de uma soma',()=>{
        expect(soma(7,2)).toBe(9)
    })

    test('deve verificar o resultado incorreto de uma soma',()=>{
        expect(soma(9,4)).not.toBe(12)
    })
})