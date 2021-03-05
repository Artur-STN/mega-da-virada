function sortfunction(a, b) {

    return (a - b)

}

function criarCartela() {

    cartela = []

    while (true) {

        let numero = Math.floor(Math.random() * (60 - 01) + 01)

        if (!cartela.includes(numero)) {

            if (numero < 10) {
                
                numero = '0' + numero

            }
            
            
            cartela.push(numero);

        }

        cartela.sort(sortfunction)

        if (cartela.length == 6) {

            break

        }

    }

    console.log(cartela)

    return cartela

}

// CODIGO PRINCIPAL
function gerarCartelas() {

    let vezes = document.getElementById('input').value

    let pCartela = document.getElementById('tagH1Cartela')

    let pPrimeiro = document.getElementById('pPrimeiroTagCartela')
    let pSegundo = document.getElementById('pSegundoTagCartela')
    let pTerceiro = document.getElementById('pTerceiroTagCartela')
    let pQuarto = document.getElementById('pQuartoTagCartela')
    let pQuinto = document.getElementById('pQuintoTagCartela')
    let pSexto = document.getElementById('pSextoTagCartela')

    if (vezes <= 0) {

        alert('Número de cartelas invalidas, Digite novamente!')

    } else if (vezes >= 2) {

        alert('Limite atingido, Digite novamente!')

    } else {

        let allCartelas = []

        for (var i = 0; i < vezes; i++) {

            allCartelas.push(criarCartela())

        }

        allCartelas.sort(sortfunction)

        for (let index = 0; index < allCartelas.length; index++) {

            
            if (index == 0) {

                pCartela.innerHTML = `Cartela ${index + 1}`

                pPrimeiro.innerHTML = allCartelas[index][0]
                pSegundo.innerHTML = allCartelas[index][1]
                pTerceiro.innerHTML = allCartelas[index][2]
                pQuarto.innerHTML = allCartelas[index][3]
                pQuinto.innerHTML = allCartelas[index][4]
                pSexto.innerHTML = allCartelas[index][5]
                
            } else {

                pCartela.innerHTML += `Cartela ${index + 1}`

                pPrimeiro.innerHTML += allCartelas[index][0]
                pSegundo.innerHTML += allCartelas[index][1]
                pTerceiro.innerHTML += allCartelas[index][2]
                pQuarto.innerHTML += allCartelas[index][3]
                pQuinto.innerHTML += allCartelas[index][4]
                pSexto.innerHTML += allCartelas[index][5]

            } 

        }

        console.log(allCartelas)

    }

}

function limparCartelas() {

    let vezes = document.getElementById('input')

    let pCartela = document.getElementById('tagH1Cartela')

    let pPrimeiro = document.getElementById('pPrimeiroTagCartela')
    let pSegundo = document.getElementById('pSegundoTagCartela')
    let pTerceiro = document.getElementById('pTerceiroTagCartela')
    let pQuarto = document.getElementById('pQuartoTagCartela')
    let pQuinto = document.getElementById('pQuintoTagCartela')
    let pSexto = document.getElementById('pSextoTagCartela')

    vezes.value = ''

    pCartela.innerHTML = ''
    pPrimeiro.innerHTML = ''
    pSegundo.innerHTML = ''
    pTerceiro.innerHTML = ''
    pQuarto.innerHTML = ''
    pQuinto.innerHTML = ''
    pSexto.innerHTML = ''

}