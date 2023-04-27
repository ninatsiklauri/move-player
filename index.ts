const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d")

canvas.width = 600
canvas.height = 600

canvas.style.border = "1px solid #000"

const image = document.getElementsByTagName("img")[0] as HTMLImageElement
console.log(image);

const player= {
    width:50,
    height:50,
    x:20,
    y:200,
    speed: 1,
    dx:0,
    dy:0,
}

function drawPlyer() {
    ctx?.drawImage(image, player.x, player.y, player.width, player.height)
}

function clear() {
    ctx?.clearRect(0,0,canvas.width, canvas.height)
}

function newPos() {
    player.x += player.dx;
    player.y += player.dy;

    detectWalls()
}

function detectWalls() {
    if(player.x < 0) {
        player.x = 0
    }

    if(player.x + player.width > canvas.width){
        player.x = canvas.width - player.width
    }

    if(player.y < 0) {
        player.y = 0
    }

    if(player.y + player.height > canvas.height){
        player.y = canvas.height - player.height
    }
}

function update() {
    clear()

    drawPlyer()

    newPos()

    requestAnimationFrame(update)
}

update()

function moveUp(){
    player.dy = -player.speed
}
function moveRight() {
    player.dx = player.speed
}
function moveLeft() {
    player.dx = -player.speed
}
function moveDown() {
    player.dy = player.speed
}
function keyDown(e:any) {
    if(e.key === "ArrowRight" || e.key === "Right"){
        moveRight()
    }else if(e.key === "ArrowLeft" || e.key === "Left"){
        moveLeft()
    }
    else if(e.key === "ArrowUp" || e.key === "Up"){
        moveUp()
    }else if(e.key === "ArrowDown" || e.key === "Down"){
        moveDown()
    }
}

function keyUp(e:any) {
    if(
        e.key === "Right" ||
        e.key === "ArrowRight" ||
        e.key === "Left" ||
        e.key === "ArrowLeft" ||
        e.key === "Up" ||
        e.key === "ArrowUp" ||
        e.key === "Down" ||
        e.key === "ArrowDown"
    ){
        player.dx = 0,
        player.dy = 0
    }
}
document.addEventListener("keydown", (e) => {
    keyDown(e)
})
document.addEventListener("keyup", keyUp)

