/*FUNÇÕES SEM RETORNO*/
function somar(n1, n2)
{
    var resultado
    resultado =n1+n2
    alert("Função soma sem retorno "+resultado)
}

/*FUNÇÕES COM RETORNO*/
function subtrair(n1,n2)
{
    var resultado
    resultado=n1-n2
    return(resultado)
}


somar(35,10)
somar(8,9)

var r
r=subtrai(14,8)
alert("Função subtrair foi chamada e retornou o seguinte resultado "+r)