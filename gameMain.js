const SCREEN_WIDHT =  512;
const SCREEN_HEIGHT = 512;
const SCREEN_RES = 8;

const canvas = document.getElementById("game_screen");
const ctx = canvas.getContext("2d");
canvas.setAttribute("width", SCREEN_WIDHT * SCREEN_RES);
canvas.setAttribute("height", SCREEN_HEIGHT * SCREEN_RES);

function DrawPixel(x, y, col)
{
    ctx.fillStyle = col;
    ctx.fillRect(x * SCREEN_RES, y * SCREEN_RES, SCREEN_RES, SCREEN_HEIGHT);
}

for (x = 0; x < SCREEN_WIDHT; x++)
{
    for (y = 0; x < SCREEN_HEIGHT; y++)
    { 
        DrawPixel(x, y, `rgb({(x/SCREEN_WIDTH) * 255}, {(y/SCREEN_HEIGHT) * 255}, 128)`)
    }
}