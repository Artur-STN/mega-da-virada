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

    let divisoriaAllCartelas = document.getElementById('divisoriaAllCartelas')

    let vezes = document.getElementById('input').value

    if (vezes <= 0) {

        alert('Número de cartelas invalidas, Digite novamente!')

    } else if (vezes >= 26) {

        alert('Limite atingido, Digite novamente!')

    } else {

        limparCartelas()

        let recado = document.getElementById('recado')

        if (vezes >= 10) {

            recado.style.display = "block"

        } else {

            recado.style.display = "none"

        }

        let allCartelas = []

        for (var i = 0; i < vezes; i++) {

            allCartelas.push(criarCartela())

        }

        allCartelas.sort(sortfunction)

        for (let index = 0; index < allCartelas.length; index++) {

            let divCartela = document.createElement('div')

            let tagH1_Cartela = document.createElement('h1')

            let divisoriaAllNumbers = document.createElement('div')

            let tagP_Primeiro = document.createElement('p')
            let tagP_Segundo = document.createElement('p')
            let tagP_Terceiro = document.createElement('p')
            let tagP_Quarto = document.createElement('p')
            let tagP_Quinto = document.createElement('p')
            let tagP_Sexto = document.createElement('p')

            divCartela.classList.add('divCartela')

            tagH1_Cartela.classList.add('tagH1Cartela')

            divisoriaAllNumbers.classList.add('divisoriaAllNumbers')

            tagP_Primeiro.classList.add('pPrimeiroTagCartela')
            tagP_Primeiro.classList.add('tagCartelaP')
            tagP_Segundo.classList.add('pSegundoTagCartela')
            tagP_Segundo.classList.add('tagCartelaP')
            tagP_Terceiro.classList.add('pTerceiroTagCartela')
            tagP_Terceiro.classList.add('tagCartelaP')
            tagP_Quarto.classList.add('pQuartoTagCartela')
            tagP_Quarto.classList.add('tagCartelaP')
            tagP_Quinto.classList.add('pQuintoTagCartela')
            tagP_Quinto.classList.add('tagCartelaP')
            tagP_Sexto.classList.add('pSextoTagCartela')
            tagP_Sexto.classList.add('tagCartelaP')

            divisoriaAllCartelas.appendChild(divCartela)

            divCartela.appendChild(tagH1_Cartela)
            tagH1_Cartela.innerHTML = `Cartela ${index + 1}`

            divCartela.appendChild(divisoriaAllNumbers)

            divisoriaAllNumbers.appendChild(tagP_Primeiro)
            tagP_Primeiro.innerHTML = allCartelas[index][0]

            divisoriaAllNumbers.appendChild(tagP_Segundo)
            tagP_Segundo.innerHTML = allCartelas[index][1]

            divisoriaAllNumbers.appendChild(tagP_Terceiro)
            tagP_Terceiro.innerHTML = allCartelas[index][2]

            divisoriaAllNumbers.appendChild(tagP_Quarto)
            tagP_Quarto.innerHTML = allCartelas[index][3]

            divisoriaAllNumbers.appendChild(tagP_Quinto)
            tagP_Quinto.innerHTML = allCartelas[index][4]

            divisoriaAllNumbers.appendChild(tagP_Sexto)
            tagP_Sexto.innerHTML = allCartelas[index][5]


        }

        console.log(allCartelas)

    }

}

function limparCartelas() {

    let divisoriaAllCartelas = document.getElementById('divisoriaAllCartelas')
    
    let vezes = document.getElementById('input')
    
    let recado = document.getElementById('recado')
    
    divisoriaAllCartelas.innerHTML = ''
    
    vezes.value = ''
    
    recado.style.display = "none"

}