let words = `
        CLI Simulator iniciado em ${new Date()}\n
        Eu sou André Albuquerque [ @andreguigo nas redes sociais ].\n
        Todos os dias, um aprendizado a mais e atualmente, engenheiro de software em Recife.\n\n
        Carregando experiências:\n
        [ KURIER TECNOLOGIA ]: \n Dev pleno\n Out 2021/atualmente\n
        [ FUSION DMS ]:\n Dev pleno\n Set 2020 a Set 2021\n
        [ FACULDADE NOVA ROMA ]:\n Webmaster\n Jun 2014 a Set 2020\n
        [ INTERNE HOME CARE ]:\n Comunicação\n Out 2013 a Mai 2014\n
        [ ... ]\n\n
        Para mais XP consulte e siga-me no GitHub ou no LinkedIn\n\n
        pressione "r" para recarregar`;

function start() {
    let i = 0;
    let loadtxt = ``;

    const temp = setInterval(() => {
        loadtxt = loadtxt + words[i];
        document.querySelector('p[txt]').innerText = `${loadtxt}_`;
            
        if (i === (words.length - 1))
            clearInterval(temp);

        i++;        
    }, 25);    
}

document.querySelector('body').onkeydown = function(e) {
    e.preventDefault();
    
    if (e.keyCode === 82)
        start();
}

start();