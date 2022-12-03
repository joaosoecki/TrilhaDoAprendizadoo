var n1, n2, sub;

n1=parseInt(prompt("Entre com um valor:"))
n2=parseInt(prompt("Entre com outro valor:"))

if(n1>n2)
{
    sub=n1-n2
    alert("O resultado é: "+sub)
}
else{
    alert("O programa não permite exibir resultado negativo")
}

