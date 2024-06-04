
//exportacao unitaria
// export function subtrair(num1,num2){
//     return num1 - num2;
// }

// export const nome = 'Subtrair'

// export const usuario = {
//     nome: 'Bruno',
//     email: 'bruno@email'
// }


//Exportação em bloco
// export  {
//     subtrair,
//     nome,
//     usuario
// }


//exportação default um por arquivo

export default function subtrair(num1:number,num2:number){
    return num1 - num2;
}

const nome = 'Subtrair'

const usuario = {
    nome: 'Bruno',
    email: 'bruno@email'
}

// export default{
//     subtrair,
//     nome,
//     usuario
// }

//module.exports = subtrair