const character = document.getElementsByClassName("character")[0]; 
const containerCharacter = document.getElementsByClassName("container-character")[0]; 
//"pega" elemento com o seletor classe igual character |
//document é por onde acessa a página html             | ----> comentários linhas 1 e 2
//[0] seleciona primeiro item da classe                |

const VELOCITY = 10; //declara variável constante com valor 10

const SCREEN_WIDTH = screen.width;  // declara variável constante para receber propriedade de leitura do width 
const SCREEN_HEIGHT = screen.height; //declara variável constante para receber propriedade de leitura do height

let xPosition = 500; //declara variável para definir posicionamento no eixo x
let yPosition = 300; //declara variável para definir posicionamento no eixo y

const keysAvaiable = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]  // declara array com as setas 
const directions = ["turnUp", "turnLeft", "turnRight", "turnDown"]; //declara array com os movimentos

window.addEventListener("keydown", (event) => { //acessar a página inteira e quando o evento "keydown" ocorre executa a função arrow
    const key  = event.key; //declara constante que recebe os eventos de key

    const keyPressedAvaiable =  keysAvaiable.some((currentKey) => {
        return currentKey === key;
    }) //retorna em key o tipo de tecla pressionada

    if(!keyPressedAvaiable) return; //Verfica se a tecla condiz com o estabelecido no array, se não ele finaliza a execução da função

    directions.forEach((direction) => { // realiza um "for" dentro do array directions
        if(character.classList.contains(direction)) character.classList.remove(direction);  //!
    })


    if(key === "ArrowUp"){ //verifica se a tecla é seta para cima 
        if(yPosition == 0){
            yPosition += VELOCITY; //colisão em cima
        }else{
            character.classList.add("turnUp"); //se for adiciona os valores de turnUp ao character
            yPosition -= VELOCITY; //subtrai 10 no eixo y(ou seja, sobe 10)
        }
    }

    if(key === "ArrowDown"){//verifica se a tecla é seta para baixo 
        if(yPosition == 570){
            yPosition-= VELOCITY; //colisão embaixo
        }else{
            character.classList.add("turnDown");//se for adiciona os valores de turnUp ao character
            yPosition += VELOCITY;//adiciona 10 no eixo y(ou seja, desce 10)
        }
    }

    if(key === "ArrowLeft"){//verifica se a tecla é seta para esquerda
        if(xPosition == -10){
            xPosition += VELOCITY;//colisão esquerda
        }else{
            character.classList.add("turnLeft"); //se for adiciona os valores de turnUp ao character
            xPosition -= VELOCITY;//subtrai 10 no eixo x(ou seja, volta 10)
        }
        
    }

    if(key === "ArrowRight"){//verifica se a tecla é seta para direita
        if(xPosition == 1200){
            xPosition -= VELOCITY;//colisão direita
        }else{
            character.classList.add("turnRight");//se for adiciona os valores de turnUp ao character
            xPosition += VELOCITY;//subtrai 10 no eixo x(ou seja, "anda" 10)
        }
    }

    containerCharacter.style.top = `${yPosition}px`; //altera valor de top da classe containerCharacter 
    containerCharacter.style.left = `${xPosition}px` //altera valor de left da classe containerCharacter 
});

