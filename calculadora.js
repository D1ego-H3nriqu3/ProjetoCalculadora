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

            break
        case("2"):

            break
        case("3"):

            break
        case("4"):

            break
        case("0"):

            break
        default:
            console.log("\nDigite uma opção correspondente;")
    }
}while(indice === true)