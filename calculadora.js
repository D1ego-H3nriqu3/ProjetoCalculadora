import PromptSync from "prompt-sync";
const prompt = PromptSync()

let indice = true

do{
    console.log(`\n=== Calculadora ===
1. Soma
2. Subtração
3. Multiplicação
4. Divisão
0. Sair`)
    let resposta = (prompt("Escolha uma opção: ")).trim()
    switch(resposta){
        case("1"):
            numerosOperacoes(resposta)
            break
        case("2"):
            numerosOperacoes(resposta)
            break
        case("3"):
            numerosOperacoes(resposta)
            break
        case("4"):
            numerosOperacoes(resposta)
            break
        case("0"):

            break
        default:
            console.log("\nDigite uma opção correspondente;")
    }
}while(indice === true)

    function numerosOperacoes(resposta){
        console.log("\n--Informando números--\n")
        let num1 = Number(prompt("Primeiro, informe o primeiro número da operação: "))
        let num2 = Number(prompt("Agora, informe o segundo número da operação: "))
        if(isNaN(num1) || isNaN(num2)){
            console.log("\nDigite apenas NÚMEROS!")
            numerosOperacoes(resposta)
        }else{
            switch(resposta){
        case("1"):
            soma(num1,num2)
            break
        case("2"):
            subtracao(num1,num2)
            break
        case("3"):
            multiplicacao(num1,num2)
            break
        case("4"):
            divisao(num1,num2)
            break
        default:
            console.log("Isso não deveria ocorrer...")
            }
        }
    }

    function soma(num1, num2){
        console.log("\n--Soma--\n")
        let resultado = num1 + num2
        console.log(`O resultado de: ${num1} + ${num2} é igual ${resultado}`)
    }

    function subtracao(num1, num2){
        console.log("\n--Subtração--\n")
        let resultado = num1 - num2
        console.log(`O resultado de: ${num1} - ${num2} é igual ${resultado}`)
    }

    function multiplicacao(num1, num2){
        console.log("\n--Multiplicação--\n")
        let resultado = num1 * num2
        console.log(`O resultado de: ${num1} * ${num2} é igual ${resultado}`)
    }

    function divisao(num1, num2){
        console.log("\n--Divisão--\n")
        let resultado = num1 / num2
        console.log(`O resultado de: ${num1} / ${num2} é igual ${resultado}`)
    }