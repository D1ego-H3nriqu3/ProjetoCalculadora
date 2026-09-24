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
            numerosOperacoes()
            break
        case("2"):
            numerosOperacoes()
            break
        case("3"):
            numerosOperacoes()
            break
        case("4"):
            numerosOperacoes()
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
            numerosOperacoes()
        }else{
            switch(resposta){
        case("1"):

            break
        case("2"):

            break
        case("3"):

            break
        case("4"):

            break
        default:
            console.log("Isso não deveria ocorrer...")
            }
        }
    }