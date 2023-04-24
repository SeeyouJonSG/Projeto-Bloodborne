const botoesCarrosel = document.querySelectorAll('.botao')
const imagens = document.querySelectorAll('.imagem')

    botoesCarrosel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        console.log('clicou no botao')

        
        const botaoSelecionado = document.querySelector('.selecionado')
        botaoSelecionado.classList.remove('selecionado') 
        botao.classList.add('selecionado')

       const imagemAtiva = document.querySelector('.ativa')
       imagemAtiva.classList.remove('ativa')
       imagens[indice].classList.add('ativa') 




    })
})
