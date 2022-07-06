/* **
It is necessary to create fields for input and output of data
Html example:
    <p txt></p>
    <script src="index.js"></script>
** */
let words = `Lorem Ipsum is simply dummy text of the printing 
            and typesetting industry.\n\n
            Lorem Ipsum has been the industry's standard dummy 
            text ever since the 1500s, when an unknown printer 
            took a galley of type and scrambled it to make a 
            type specimen book.\n\n
            press "r" to reload`;

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