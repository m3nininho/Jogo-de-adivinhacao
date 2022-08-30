const form = document.getElementById('formulario');

const lista = ['filme', 'jogo', 'carro', 'bola'];

function adivinhar(){
  alert('Seja bem vindo ao jogo');
    const resposta = prompt('Deseja continuar? A resposta deve ser: \n (1) SIM \n (2) NÃO e sair do aplicativo');

    if(resposta !== '1'){
        alert('Até mais garoto(a)');
    } else{
        alert('Ok, vamos continuar.');
    }

    if(resposta === '1'){
       const palavraAleatoria = lista[Math.floor(Math.random() * lista.length)]
        alert(`Os possíves nomes são: ${lista}... memorize-as`);
        while(true){
            const respostaDoUsuario = prompt('Qual é a resposta correta?'.toLowerCase());
            if(respostaDoUsuario !== palavraAleatoria){
                alert('Você errou');
            } else if(respostaDoUsuario === palavraAleatoria){
                alert('Você acertou');
                break
            }
        }
    }
         
}


form.addEventListener('submit', adivinhar)