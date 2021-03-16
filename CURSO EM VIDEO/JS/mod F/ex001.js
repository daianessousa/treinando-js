/* let num = [5,8,2,9,3]
//num[3] = 6 
//num.push(7)
//num.length //tamanho do vetor
num.sort()
console.log(`O vetor é: ${num} ele tem ${num.length} posições`) 

let valores = [8, 1, 2,4,5,67,9]
valores.sort()
for (let pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem os valores ${valores[pos]}`)
}
let num = [2,6,8,10,9]
for (let pos in num){
    console.log(`A posição ${pos} tem os valores ${num[pos]}`) 
}*/

let num = [4,5,6,7,8,9]
num.push(1)
let pos = num.indexOf(7) //retorna a posição do valor
console.log(`o valor está na posição ${pos}`)