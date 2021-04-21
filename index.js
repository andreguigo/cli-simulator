const txt = document.querySelector('p[txt]');
const words = ` CLI Simulator iniciado em ${new Date()}
                \nEu sou André Albuquerque [ @andreguigo nas redes sociais ].
                Todos os dias, um aprendizado a mais e atualmente, engenheiro de software em Recife.
                \nCarregando experiências:

                \n[ FUSION DMS ]: \n Dev pleno \n Set 2020...
                \n[ FACULDADE NOVA ROMA ]: \n Webmaster \n Jun 2014 a Set 2020
                \n[ INTERNE HOME CARE ]:\n Ana de Comunicação \n Out 2013 a Mai 2014
                \n[ ... ]

                \nPara mais XP consulte e siga-me no GitHub ou no LinkedIn
                \n\npressione "r" para recarregar`;

function start() {
    let i = 0;
    let loadtxt = ``;

    const temp = setInterval(() => {
        loadtxt = loadtxt + words[i];
        txt.innerText = `${loadtxt}`;
            
        if (i === (words.length - 1))
            clearInterval(temp);

        i++;        
    }, 15);    
}

const body = document.querySelector('body');
body.onkeydown = function(e) {
    e.preventDefault();
    
    if (e.keyCode === 82)
        start();
}

start();