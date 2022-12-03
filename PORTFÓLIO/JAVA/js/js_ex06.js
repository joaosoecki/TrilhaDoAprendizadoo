var dia 

dia=parseInt(prompt("Digite um número correspondente ao dia da semana: "))

switch(dia){
    case 1:
        {
            alert("Domingo")
            break
        }
    case 2:
        {
            alert("Segunda-feira")
            break
        }
    case 3:
        {
            alert("Terça-feira")
            break
        }
    case 4:
        {
            alert("Quarta feira")
        }
    case 5:
        {
            alert("Quinta-feira")
            break
        }
    case 6:
        {
            alert("Sexta-feira")
            break
        }
    case 7:
        {
            alert("Sabado")
        }
    default:{
        alert("Opção inválida")
    }
}