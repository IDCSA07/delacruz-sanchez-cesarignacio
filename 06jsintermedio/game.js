const readline = require('readline');
const { stdin, stdout } = process;

// Códigos de color ANSI
const colors = {
    reset: "\x1b[0m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m"
};

// Función para limpiar la consola
function limpiarConsola() {
    process.stdout.write('\u001B[2J\u001B[0;0f');
}

// Función para imprimir el tablero
function imprimirTablero(tablero) {
    limpiarConsola();
    console.log("   1    2    3    4    5    6");
    console.log("  ┌────┬────┬────┬────┬────┬────┐");
    for (let i = 0; i < 6; i++) {
        let fila = `${i + 1} `;
        for (let j = 0; j < 6; j++) {
            let texto = tablero[i][j];
            if (texto === 'X') {
                fila += colors.green + `│  ${texto} ` + colors.reset;
            } else if (texto === 'O') {
                fila += colors.red + `│  ${texto} ` + colors.reset;
            } else {
                fila += `│  ${texto} `;
            }
        }
        fila += "│";
        console.log(fila);
        if (i !== 5) {
            console.log("  ├────┼────┼────┼────┼────┼────┤");
        }
    }
    console.log("  └────┴────┴────┴────┴────┴────┘");
}

// Función para verificar si el jugador actual ha ganado
function verificarGanador(tablero, jugador) {
    // Verificar filas y columnas
    for (let i = 0; i < 6; i++) {
        if (tablero[i][0] === jugador && tablero[i][1] === jugador && tablero[i][2] === jugador && tablero[i][3] === jugador && tablero[i][4] === jugador && tablero[i][5] === jugador) {
            return true;
        }
        if (tablero[0][i] === jugador && tablero[1][i] === jugador && tablero[2][i] === jugador && tablero[3][i] === jugador && tablero[4][i] === jugador && tablero[5][i] === jugador) {
            return true;
        }
    }
    // Verificar diagonales
    if (tablero[0][0] === jugador && tablero[1][1] === jugador && tablero[2][2] === jugador && tablero[3][3] === jugador && tablero[4][4] === jugador && tablero[5][5] === jugador) {
        return true;
    }
    if (tablero[0][5] === jugador && tablero[1][4] === jugador && tablero[2][3] === jugador && tablero[3][2] === jugador && tablero[4][1] === jugador && tablero[5][0] === jugador) {
        return true;
    }
    return false;
}

// Función para verificar si hay un empate
function verificarEmpate(tablero) {
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
            if (tablero[i][j] === ' ') {
                return false;
            }
        }
    }
    return true;
}

// Función para obtener la entrada del jugador
function obtenerEntrada(jugador) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        rl.question(`${jugador === 'X' ? colors.green : colors.red}Jugador ${jugador}, seleccione una fila y columna (por ejemplo, 3 4), presione '0' para reiniciar el juego, presione las teclas flechas para terminar el juego: ${colors.reset}`, (entrada) => {
            rl.close();
            if (entrada === '0') {
                console.log(`${colors.yellow}Reiniciando el juego...${colors.reset}`);
                juegoGatoDeGatos(); // Reiniciar el juego
            } else {
                const coordenadas = entrada.split(' ').map(coord => parseInt(coord));
                if (coordenadas.length === 2 && coordenadas.every(coord => coord >= 1 && coord <= 6)) {
                    resolve(coordenadas);
                } else {
                    console.log(`${colors.yellow}Entrada inválida. Por favor, ingrese dos números entre 1 y 6 separados por un espacio, o presione '0' para reiniciar el juego.${colors.reset}`);
                    obtenerEntrada(jugador).then(resolve);
                }
            }
        });
    });
}

// Función principal del juego
async function juegoGatoDeGatos() {
    let tablero = [
        [' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ']
    ];

    let jugadorActual = 'X';

    // Manejar las teclas de flecha y la tecla '0' para reiniciar
    stdin.setRawMode(true);
    stdin.resume();
    stdin.setEncoding('utf8');
    stdin.on('data', (key) => {
        if (key === '\u001B\u005B\u0041' || key === '\u001B\u005B\u0043' || key === '\u001B\u005B\u0042' || key === '\u001B\u005B\u0044') {
            console.log('Juego terminado.');
            process.exit();
        } else if (key === '0') {
            console.log(`${colors.yellow}Reiniciando el juego...${colors.reset}`);
            juegoGatoDeGatos(); // Reiniciar el juego
        }
    });

    while (true) {
        imprimirTablero(tablero);
        const [fila, columna] = await obtenerEntrada(jugadorActual);
        if (tablero[fila - 1][columna - 1] === ' ') {
            tablero[fila - 1][columna - 1] = jugadorActual;
            if (verificarGanador(tablero, jugadorActual)) {
                imprimirTablero(tablero);
                console.log(`¡Jugador ${jugadorActual} ha ganado!`);
                break;
            }
            if (verificarEmpate(tablero)) {
                imprimirTablero(tablero);
                console.log("¡Empate!");
                break;
            }
            jugadorActual = jugadorActual === 'X' ? 'O' : 'X';
        } else {
            console.log(`${colors.yellow}¡Esa casilla ya está ocupada! Inténtalo de nuevo.${colors.reset}`);
        }
    }
}

// Iniciar el juego
juegoGatoDeGatos();