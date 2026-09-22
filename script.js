const corazon = document.getElementById("corazon");

if (corazon) {

    corazon.innerHTML = "";

    const formaCorazon = [
        "    XXXX       XXXX    ",
        "  XXXXXXXX   XXXXXXXX  ",
        " XXXXXXXXXX XXXXXXXXXX ",
        "XXXXXXXXXXXXXXXXXXXXXXXX",
        "XXXXXXXXXXXXXXXXXXXXXXXX",
        "XXXXXXXXXXXXXXXXXXXXXXXX",
        " XXXXXXXXXXXXXXXXXXXXXX ",
        "  XXXXXXXXXXXXXXXXXXXX  ",
        "   XXXXXXXXXXXXXXXXXX   ",
        "    XXXXXXXXXXXXXXXX    ",
        "      XXXXXXXXXXXX      ",
        "       XXXXXXXXXX       ",
        "        XXXXXXXX        ",
        "         XXXXXX         ",
        "          XXXX          ",
        "           XX           "
    ];

    let numeroFlor = 0;

    formaCorazon.forEach((fila, filaIndex) => {

        for (let columna = 1; columna < fila.length; columna++) {

            if (fila[columna] === "X") {

                const flor = document.createElement("div");

                flor.className = "girasol-corazon";

                flor.style.gridColumn = columna + 1;
                flor.style.gridRow = filaIndex + 1;

                flor.style.animationDelay =
                    `${numeroFlor * 0.03}s`;

                corazon.appendChild(flor);

                numeroFlor++;
            }
        }
    });
}
