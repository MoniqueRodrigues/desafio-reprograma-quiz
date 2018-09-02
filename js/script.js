//chamando o botão para o js:
let botoes=document.querySelectorAll(".btn")
let gabarito=['b','b','a']
let respostaUsuario=[]
let questao=1
let acertos=0


//função para desabilitar os botoes conforme o parametro dado:
function desabilitaBotoes(seletor) {
    document.querySelectorAll(seletor).forEach(function(botao){
        botao.disabled=true;
      
    })
}


//função para habilitar os botoes conforme o parametro dado:
function habilitaBotoes(seletor) {
    document.querySelectorAll(seletor).forEach(function(botao){
        botao.disabled=false
      
    })
}

botoes.forEach(function(botao){
    desabilitaBotoes("#questao-2 button")
    desabilitaBotoes("#questao-3 button")

    //criando função ouvidor addEventListener no botão:
    botao.addEventListener('click', function(){
        //add no array de respostas
        respostaUsuario.push(botao.value)
        
        //add class para identificar quem foi clicado:
        botao.classList.add('mudaCorBotao')
        

        //desabilita os 3 botoes da questao
        desabilitaBotoes("#questao-" + questao + " button")
        
        //vai para a proxima questao
        ++questao
        
        //habilita os botoes da proxima questao
        habilitaBotoes("#questao-" + questao + " button")
        console.log(respostaUsuario)

        if(questao>3){
            correcao()
        }
    })
})
//comparar resposta do usuario com o gabarito

function correcao(){
    for(i=0;i< respostaUsuario.length;i++){
        
        if(gabarito[i]==respostaUsuario[i]){
            acertos++    
                        
        }
   }
   let frase= document.querySelector('#resultado')
   frase.innerHTML='SUA QUANTIDADE DE ACERTOS É: ' + acertos + '.'

   if(acertos<2){
       let fraseFinal=document.querySelector('#fraseFinal') 
       alert('Você não foi bem, tente novamente!');
       location.reload()
   }else{
      alert('Tá entendida hein, parabéns!');
        
   }
 }
   