let num = document.querySelector("input#fnum")
let lista = document.querySelector("select#flista")
let res = document.querySelector("div#res")
let valores = []

function isNumber(n){
    //Verifica se o número está entre 0 e 100
    if(n >=1 && n <= 100){
        return true
    }else{
        return false
    }
}
function inLista(n, l){
    //Verifica se o número já está no vetor
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(num.value.length == 0 ){
        window.alert("[ERRO]Digite um valor.")
    }else{
        if(isNumber(num.value) && !inLista(num.value, valores)){
           valores.push(Number(num.value))
           let opt = document.createElement("option")
           opt.text = `Número ${num.value} adicionado!`
           lista.appendChild(opt)
           res.innerHTML = ""
        }else{
            window.alert("[ERRO]Valor inválido ou já inserido na lista.")
        } 
        num.value = ``
        num.focus()     
    }
}

function finalizar(){
    let total = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    for(let pos in valores){
        if(valores[pos] > maior){
            maior = valores[pos]
        }

        if(valores[pos] < menor){
            menor = valores[pos]
        }   

        soma += valores[pos]
    }

    let media = soma / total


    res.innerHTML = `<p>Ao total temos <strong>${total}</strong> números.</p>`

    res.innerHTML += `<p>O <strong>maior</strong> valor é <strong>${maior}</strong>.</p>`

    res.innerHTML += `<p>O <strong>menor</strong> valor é <strong>${menor}.</strong></p>`

    res.innerHTML += `<p>A <strong>soma</strong> dos valores é <strong>${soma}</strong></p>`

    res.innerHTML += `<p>A <strong>média</strong> dos valores é <strong>${media}</strong></p>`
}