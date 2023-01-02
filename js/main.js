const listaBotoesProjetos = document.querySelectorAll('[data-botao]')                    // lista com todos botões
const botaoHTML = document.querySelector('[data-botao="HTMLCSS"]')                       // botão "HTML CSS"
const botaoJS = document.querySelector('[data-botao="JavaScript"]')                      // botão "JavaScript"  
const listaBotoesLinguagem = document.querySelectorAll('[data-linguagem]')               // lista com os dois botões
const botoesProjetosHTML = document.querySelectorAll('[data-botao="HTML"]')              // os botões dos projetos HTML
const botoesProjetosJS = document.querySelectorAll('[data-botao="JS"]')                  // os botões dos projetos JS

const sectionsLinguagens = document.querySelectorAll('[data-projetos]')                  // as duas sections que envolvem todo o conteudo

const listaConteudosHTML = document.querySelectorAll('[data-conteudoHTML]')              // lista com os projetos HTMLCSS
const listaConteudosJS = document.querySelectorAll('[data-conteudoJS]')                  // lista com os projetos JS

listaBotoesLinguagem.forEach(botao => botao.addEventListener("click", function(evento){
    botaoClicado = evento.target;
    botaoClicadoDataset = botaoClicado.dataset.botao;

    if(botaoClicadoDataset == "HTMLCSS") {	
	inativarBotao(botaoJS);
    } else if(botaoClicadoDataset == "JavaScript") {
	inativarBotao(botaoHTML);
    }
    ativarBotao(botaoClicado);

    for(var x=0; x<sectionsLinguagens.length; x++){
        sectionAtual = sectionsLinguagens[x];
        sectionAtualDataset = sectionAtual.dataset.projetos;
        mostrarOuEsconderConteudo(sectionAtualDataset, botaoClicadoDataset, sectionAtual);
    }
}))

listaBotoesProjetos.forEach(botao => botao.addEventListener("click", function(evento){
    botaoClicado = evento.target;
    botaoClicadoDataset = botaoClicado.dataset.botao;
    botaoClicadoConteudoDataset = botaoClicado.dataset.conteudo;

    if (botaoClicadoDataset == "HTML") {
	    inativarBotoes(botoesProjetosHTML);
    } else if (botaoClicadoDataset == "JS") {
	    inativarBotoes(botoesProjetosJS);
    }
    ativarBotao(botaoClicado)

    if (botaoClicadoDataset == "HTML") {
        for(var x=0; x<listaConteudosHTML.length; x++){
        conteudoAtual = listaConteudosHTML[x];
        conteudoAtualDataset = listaConteudosHTML[x].dataset.conteudo; 
        mostrarOuEsconderConteudo(conteudoAtualDataset, botaoClicadoConteudoDataset, conteudoAtual);
        }
    } else if (botaoClicadoDataset == "JS"){        
        for(var x=0; x<listaConteudosJS.length; x++){
        conteudoAtual = listaConteudosJS[x];
        conteudoAtualDataset = listaConteudosJS[x].dataset.conteudo; 
        mostrarOuEsconderConteudo(conteudoAtualDataset, botaoClicadoConteudoDataset, conteudoAtual);
        }
    }
}))

function inativarBotao(botao) {
    botao.classList.remove("ativa");              
}    

function inativarBotoes(botoes) {
    botoes.forEach(botao => botao.classList.remove("ativa"));              
}    

function ativarBotao(botao) {
    botao.classList.add("ativa");
}

function mostrarOuEsconderConteudo(conteudoAtual, botaoAtual, conteudoMostrar){
    if(conteudoAtual == botaoAtual){
        conteudoMostrar.classList.remove("hide");
    } else {
        conteudoMostrar.classList.add("hide");
    }
}










