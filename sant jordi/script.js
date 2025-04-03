document.addEventListener("DOMContentLoaded", function () {
    const scoreDisplay = document.getElementById("score");
    const width = 28;
    let score = 0;
    const grid = document.querySelector(".grid");

    if (!grid) {
        console.error("No se encontró el elemento .grid en el HTML.");
        return;
    }

    // 0 - petalos 
    // 1 - paret 
    // 2 - guarida 
    // 3 - rosa superpoder 
    // 4 - buit 
    //5 - rosa
    

    const layout = [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 0, 1,
        1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 5, 5, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 5, 5, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 5, 5, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 5, 5, 5, 5, 5, 5, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 5, 5, 5, 5, 5, 5, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 5, 5, 5, 5, 5, 5, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 4, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1,
        1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
        1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
        1, 0, 0, 0, 0, 4, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 4, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1

        ]
       
        // 0- pac-dot
        // 1- mur
        // 2- cau dels fantasmes
        // 3- power-pellet
        // 4- camí
        //5-guarida

    

    // create board
    let squares = [];

    function createBoard() {
        for (let i = 0; i < layout.length; i++) {
            const square = document.createElement("div");

            if (layout[i] == 0) {
                square.classList.add("hueco");
            } else if (layout[i] == 1) {
                square.classList.add("murs");
            } else if (layout[i] == 2) {
                square.classList.add("rosa");
            } else if (layout[i] == 3) {
                square.classList.add("petalos");
            } else if (layout[i] == 4) {
                square.classList.add("camino");
            } else if (layout[i] == 5) {
                square.classList.add("guarida");
            }

            grid.appendChild(square);
            squares.push(square);
        }
    }

    createBoard();

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
    }

    document.addEventListener("keyup", movePrincep);

    let guaridaPositions = [];
    for (let i = 0; i < layout.length; i++) {
        if (layout[i] === 5) {
            guaridaPositions.push(i);
        }
    }

    let dragones = ["drac1", "drac2", "drac3", "drac4"];
    let posicionesDragones = {};

    dragones.forEach(dragon => {
        let posicion = guaridaPositions[Math.floor(Math.random() * guaridaPositions.length)];
        posicionesDragones[dragon] = posicion;
        squares[posicion].classList.add(dragon);
    });

    function moveDragons() {
        dragones.forEach(dragon => {
            let posicionActual = posicionesDragones[dragon];
            squares[posicionActual].classList.remove(dragon);
    
            let possibleMoves = [
                posicionActual - 1,   
                posicionActual + 1,   
                posicionActual - width, 
                posicionActual + width  
            ].filter(pos =>
                pos >= 0 && pos < squares.length && 
                !squares[pos].classList.contains("murs") && 
                !squares[pos].classList.contains("guarida") 
            );
    
            if (possibleMoves.length > 0) {
                let nuevaPosicion = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
                posicionesDragones[dragon] = nuevaPosicion;
                squares[nuevaPosicion].classList.add(dragon);
            }
        });
    }
    
    setTimeout(() => {
        guaridaPositions.forEach(pos => {
            squares[pos].classList.remove("guarida"); 
        });
    }, 3000);
    
    setInterval(moveDragons, 1000);


    function comerPetalos() {
        if (squares[posicioPrincep].classList.contains("petalos")) {
            score += 5;
            scoreDisplay.innerHTML = score;
            squares[posicioPrincep].classList.remove("petalos");
        }
    }
    

});
