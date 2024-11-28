var player = "X";
var numJog = 0;
var scoreO = 0;
var scoreX = 0;

function checkjogo(id) {
    var pc = document.getElementById('cpu').checked;
    var opt = verificaSrc(id);


    if (opt == "transp.png") {
        document.getElementById(id).src = player + ".png";
        numJog++;
        
        if (player == "X") {
            var vez = document.getElementById('vez');
            vez.textContent = 'Agora é a vez do O';
            player = "O";
            
        } else {
            var vez = document.getElementById('vez');
            vez.textContent = 'Agora é a vez do X';
            player = "X";
        }
        
        if (winchek()) {
            var mensagem = document.getElementById('mensagem');
            if (player == "O") {
                mensagem.textContent = 'Fim de jogo! X venceu';
                scoreX++; 
            } else {
                mensagem.textContent = 'Fim de jogo! O venceu';
                scoreO++;
            }
            document.getElementById('nextButton').style.display = 'block'; 
            updateScore();
            document.getElementById('end').style.display = 'block';
            return false;
            
        }

        

        if (numJog >= 9) {
            alert("Fim de Jogo!! Deu velha!!!");
            document.getElementById('mensagem').textContent = 'Fim de jogo! Deu velha!!';
            document.getElementById('nextButton').style.display = 'block'; 
            document.getElementById('end').style.display = 'block';
            return false;
        }

        
        if (pc && player == "O") {
            setTimeout(() => checkjogo(jogoDoPc()), 500); 
        }


    }
}


function verificaSrc(id) {
    var file = document.getElementById(id).src;
    return file.substring(file.length - 10, file.length);
}


function winchek() {

    return (
        (verificaSrc('a1') == verificaSrc('a2') && verificaSrc('a1') == verificaSrc('a3') && verificaSrc('a1') != "transp.png") ||
        (verificaSrc('b1') == verificaSrc('b2') && verificaSrc('b1') == verificaSrc('b3') && verificaSrc('b1') != "transp.png") ||
        (verificaSrc('a1') == verificaSrc('b2') && verificaSrc('a1') == verificaSrc('c3') && verificaSrc('a1') != "transp.png") ||
        (verificaSrc('a3') == verificaSrc('b2') && verificaSrc('a3') == verificaSrc('c1') && verificaSrc('a3') != "transp.png") ||
        (verificaSrc('a1') == verificaSrc('b1') && verificaSrc('a1') == verificaSrc('c1') && verificaSrc('a1') != "transp.png") ||
        (verificaSrc('a2') == verificaSrc('b2') && verificaSrc('a2') == verificaSrc('c2') && verificaSrc('a2') != "transp.png") ||
        (verificaSrc('a3') == verificaSrc('b3') && verificaSrc('a3') == verificaSrc('c3') && verificaSrc('a3') != "transp.png") ||
        (verificaSrc('c1') == verificaSrc('c2') && verificaSrc('c1') == verificaSrc('c3') && verificaSrc('c1') != "transp.png")
    );
}

function jogoDoPc() { 
    if (verificaSrc('b2') == "transp.png") {
        return 'b2'; 
    }
    
    if (verificaSrc('a1') == verificaSrc('a2') && verificaSrc('a3') == "transp.png") {
        return 'a3'; 
    }
    if (verificaSrc('a1') == verificaSrc('a3') && verificaSrc('a2') == "transp.png") {
        return 'a2'; 
    }
    if (verificaSrc('a2') == verificaSrc('a3') && verificaSrc('a1') == "transp.png") {
        return 'a1'; 
    }

    if (verificaSrc('b1') == verificaSrc('b2') && verificaSrc('b3') == "transp.png") {
        return 'b3'; 
    }
    if (verificaSrc('b1') == verificaSrc('b3') && verificaSrc('b2') == "transp.png") {
        return 'b2'; 
    }
    if (verificaSrc('b2') == verificaSrc('b3') && verificaSrc('b1') == "transp.png") {
        return 'b1'; 
    }

    if (verificaSrc('c1') == verificaSrc('c2') && verificaSrc('c3') == "transp.png") {
        return 'c3'; 
    }
    if (verificaSrc('c1') == verificaSrc('c3') && verificaSrc('c2') == "transp.png") {
        return 'c2'; 
    }
    if (verificaSrc('c2') == verificaSrc('c3') && verificaSrc('c1') == "transp.png") {
        return 'c1'; 
    }

    
    if (verificaSrc('a1') == verificaSrc('b1') && verificaSrc('c1') == "transp.png") {
        return 'c1'; 
    }
    if (verificaSrc('a1') == verificaSrc('c1') && verificaSrc('b1') == "transp.png") {
        return 'b1'; 
    }
    if (verificaSrc('b1') == verificaSrc('c1') && verificaSrc('a1') == "transp.png") {
        return 'a1'; 
    }

    if (verificaSrc('a2') == verificaSrc('b2') && verificaSrc('c2') == "transp.png") {
        return 'c2'; 
    }
    if (verificaSrc('a2') == verificaSrc('c2') && verificaSrc('b2') == "transp.png") {
        return 'b2'; 
    }
    if (verificaSrc('b2') == verificaSrc('c2') && verificaSrc('a2') == "transp.png") {
        return 'a2'; 
    }

    if (verificaSrc('a3') == verificaSrc('b3') && verificaSrc('c3') == "transp.png"){
        return 'c3'; 
    }
    if (verificaSrc('a3') == verificaSrc('c3') && verificaSrc('b3') == "transp.png") {
        return 'b3'; //
    }
    if (verificaSrc('b3') == verificaSrc('c3') && verificaSrc('a3') == "transp.png") {
        return 'a3'; 
    }

    
    if (verificaSrc('a1') == verificaSrc('b2') && verificaSrc('c3') == "transp.png") {
        return 'c3'; 
    }
    if (verificaSrc('a1') == verificaSrc('c3') && verificaSrc('b2') == "transp.png") {
        return 'b2'; 
    }
    if (verificaSrc('b2') == verificaSrc('c3') && verificaSrc('a1') == "transp.png") {
        return 'a1'; 
    }

    
    if (verificaSrc('a3') == verificaSrc('b2') && verificaSrc('c1') == "transp.png") {
        return 'c1';
        
    }
    if (verificaSrc('a3') == verificaSrc('c1') && verificaSrc('b2') == "transp.png") {
        return 'b2'; 
    }
    if (verificaSrc('b2') == verificaSrc('c1') && verificaSrc('a3') == "transp.png") {
        return 'a3'; 
    }

    var jogadaValida = false;
    var jogada;

    while (!jogadaValida) {
        const letra = ['a', 'b', 'c'][Math.floor(Math.random() * 3)];
        const numero = Math.floor(Math.random() * 3) + 1;
        jogada = letra + numero;

        if (verificaSrc(jogada) === "transp.png") {
            jogadaValida = true;
        }
    }

    return jogada;
}



function jogoEscondido(){

}


function updateScore() {
    document.getElementById('scoreO').textContent = scoreO;
    document.getElementById('scoreX').textContent = scoreX;
}

function restartGame() {

    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 3; j++) {
            document.getElementById(`${String.fromCharCode(96 + i)}${j}`).src = "transp.png";
        }
    }

    player = "X";
    numJog = 0;
    document.getElementById('mensagem').textContent = '';
    document.getElementById('nextButton').style.display = 'none';
    document.getElementById('end').style.display = 'none';
}

