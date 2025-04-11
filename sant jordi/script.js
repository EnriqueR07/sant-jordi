document.addEventListener("DOMContentLoaded", function () {
    const scoreDisplay = document.getElementById("score");
    const width = 28;
    let score = 0;
    const grid = document.querySelector(".grid");



    // 0 - petalos 
    // 1 - paret 
    // 2 - guarida 
    // 3 - rosa superpoder 
    // 4 - buit 
    //5 - rosa
    

    const layout = [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1,
        1, 3, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 3, 1, 1, 3, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 3, 1,
        1, 3, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 3, 1, 1, 3, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 3, 1,
        1, 3, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 3, 1, 1, 3, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 3, 1,
        1, 3, 3, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 3, 3, 3, 3, 3, 3, 3, 1,
        1, 3, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 3, 1,
        1, 3, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 3, 1,
        1, 3, 3, 3, 3, 3, 5, 3, 3, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 5, 3, 3, 3, 1,
        1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 3, 2, 2, 3, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 3, 3, 3, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 3, 3, 3, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1,
        1, 3, 3, 4, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1,
        1, 3, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 3, 1, 1, 3, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 3, 1,
        1, 5, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 3, 1, 1, 3, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 3, 1,
        1, 3, 3, 3, 1, 1, 3, 3, 3, 3, 3, 3, 5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 3, 3, 3, 1,
        1, 1, 1, 3, 1, 1, 3, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 3, 1, 1, 3, 1, 1, 1,
        1, 1, 1, 3, 1, 1, 3, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 3, 1, 1, 3, 1, 1, 1,
        1, 3, 3, 3, 3, 4, 3, 1, 1, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 1, 1, 3, 3, 3, 4, 3, 3, 1,
        1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1,
        1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1,
        1, 3, 3, 3, 3, 3, 3, 3, 5, 5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1

        ]
       
        // 3- pac-dot
        // 1- mur
        // 2- cau dels fantasmes
        // 3- power-pellet
        // 4- camí
        //5-guarida

    

    // create board
    let squares = [];
    // create board
    
    function createboard(){
        for (let i = 0; i < layout.length; i++) {
            const square = document.createElement("div");
    
            if (layout[i] == 0) {
                square.classList.add("huecos");
            } else if (layout[i] == 1) {
                square.classList.add("murs");
            } else if (layout[i] == 2) {  // Cambiado de rosa a guarida
                square.classList.add("guarida"); // Esto es para el valor 2 en el layout
            } else if (layout[i] == 3) {
                square.classList.add("petalos");
            } else if (layout[i] == 4) {
                square.classList.add("camino");
            } else if (layout[i] == 5) {  // Cambiado de guarida a rosa
                square.classList.add("rosa");  // Esto es para el valor 5 en el layout
            }
    
            grid.appendChild(square);
            squares.push(square);
        }
    }
    
    function rosaAgafada(){
        console.log("Intentando agarrar rosa en: ", posicioPrincep);
        if(squares[posicioPrincep].classList.contains('rosa')){
            console.log("¡Agarraste una rosa!");
            score += 10;
            scoreDisplay.innerHTML = score;
            squares[posicioPrincep].classList.remove('rosa');
    
            espantaDracs(true);
            setTimeout(() => espantaDracs(false), 10000);
        }
    }
    


    function petalosAgafar(){
        console.log("Intentando agarrar rosa en: ", posicioPrincep);
        if(squares[posicioPrincep].classList.contains('petalos')){
            console.log("¡Agarraste una rosa!");
            score += 10;
            scoreDisplay.innerHTML = score;
            squares[posicioPrincep].classList.remove('petalos');
    

        }
    }
    
    

    function comerDragonAsustado() {
        dracs.forEach((drac, i) => {
            if (
                drac.isScared &&
                drac.currentIndex === posicioPrincep
            ) {
                console.log("¡Te comiste un dragón asustado!");
                score += 50;
                scoreDisplay.innerHTML = score;
    
                squares[drac.currentIndex].classList.remove(drac.ClassName, 'drac', 'drac-asustat');
    
                clearInterval(drac.timerId);
    
                dracs.splice(i, 1);
            }
        });
    }
    

    function espantaDracs(scareddrac){
        dracs.forEach(drac=>drac.isScared=scareddrac)
    }
    createboard();
    console.log(squares)

    let posicioPrincep;
    let decisio = Math.floor(Math.random() * 2);
    posicioPrincep = decisio == 0 ? 116 : 134;
    squares[posicioPrincep].classList.add("princep");

    function movePrincep(e) {
        squares[posicioPrincep].classList.remove("princep");

        if (e.key === "ArrowLeft" && squares[posicioPrincep - 1] &&
            !squares[posicioPrincep - 1].classList.contains("murs") &&
            !squares[posicioPrincep - 1].classList.contains("guarida")) {
            posicioPrincep -= 1;
        }
        if (e.key === "ArrowRight" && squares[posicioPrincep + 1] &&
            !squares[posicioPrincep + 1].classList.contains("murs") &&
            !squares[posicioPrincep + 1].classList.contains("guarida")) {
            posicioPrincep += 1;
        }
        if (e.key === "ArrowUp" && squares[posicioPrincep - width] &&
            !squares[posicioPrincep - width].classList.contains("murs") &&
            !squares[posicioPrincep - width].classList.contains("guarida")) {
            posicioPrincep -= width;
        }
        if (e.key === "ArrowDown" && squares[posicioPrincep + width] &&
            !squares[posicioPrincep + width].classList.contains("murs") &&
            !squares[posicioPrincep + width].classList.contains("guarida")) {
            posicioPrincep += width;
        }

        squares[posicioPrincep].classList.add("princep");

        rosaAgafada();
        petalosAgafar();
        chekforgameover();
        comerDragonAsustado();


    }

    document.addEventListener("keyup", movePrincep);

    class Drac {
        constructor(ClassName, startIndex, speed){
            this.ClassName=ClassName
            this.startIndex
            this.speed=speed
            this.currentIndex=startIndex
            this.isScared= false
            this.timerId= NaN
        }
    }
    
    const dracs = [
        new Drac('drac1', 348, 250),
        new Drac('drac2', 376, 400),
        new Drac('drac3', 351, 300),

        new Drac('drac4', 379, 500)
    ]

    dracs.forEach(drac=>squares[drac.currentIndex].classList.add(drac.ClassName, 'drac'))

    dracs.forEach(drac=>moveDrac(drac))

    function moveDrac(drac){
        const directions =[-1,1, width, -width]
        let direction =directions[Math.floor(Math.random()*directions.length)]

        drac.timerId=setInterval(function(){
            if(
                !squares[drac.currentIndex+direction].classList.contains('murs') &&
                !squares[drac.currentIndex+direction].classList.contains('drac')
             ){
        
                squares[drac.currentIndex].classList.remove(drac.ClassName, 'drac', 'drac-asustat')
                drac.currentIndex+=direction
                squares[drac.currentIndex].classList.add(drac.ClassName, 'drac')
         
             }
             else {
                direction = directions[Math.floor(Math.random() * directions.length)];
              }
              
        if(drac.isScared){
            squares[drac.currentIndex].classList.add('drac-asustat')
        }
        
        
            }, drac.speed
    
    )

    comerDragonAsustado();
    chekforgameover();
    

    }

    function chekforgameover(){
        if(
            squares[posicioPrincep].classList.contains ('drac')&&
            ! squares[posicioPrincep].classList.contains ('drac-asustat'
            )
        )
        {
            dracs.forEach(drac=>clearInterval(drac.timerId ))
            document.removeEventListener['keyup',movePrincep]
            setTimeout(function(){aler('game over')})

    }
    }

    
    function checkForWin(){
        if(score>=100){
            dracs.forEach(drac=>clearInterval(drac.timerId)
        document.removeEventListener('keyup', movePrincep))
        setTimeout(function(){alert('hasganado')},500)
        }
    }
    

})
 

//COMER DRAGONES 
//PERDER O GANAR 
