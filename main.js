const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

// * check browser comptability of canvas
// if (canvas.getContext) {
//     // * set width of canvas
//     // canvas.width = window.innerWidth-100;
// }

// // * fillrect (x , y ,width , height)
// ctx.fillStyle = 'red';
// ctx.fillRect(20, 20, 150, 150)


// // * strokeRect(x,y,width,height)
// ctx.lineWidth=5
// ctx.strokeStyl="green"
// ctx.strokeRect(20,200 , 150 ,150)


// // * clearRect (x,y,width,height)
// ctx.clearRect(25,25, 140 ,140)

// // * fillText(text , x ,y)
// ctx.fillStyle='purple'
// ctx.font="30px Arial"
// ctx.fillText('HELLO' , 300 , 100 )

// * ==================================

// * PATHS


// * TRIANGLES
// ctx.beginPath()
// ctx.moveTo(50, 50);
// ctx.lineTo(150, 50)
// ctx.lineTo(100, 200)
// // ctx.lineTo(50 , 50);
// ctx.closePath();
// // ctx.stroke()
// ctx.fill()


// ctx.beginPath()
// ctx.moveTo(200, 50);
// ctx.lineTo(150, 200)
// ctx.lineTo(250, 200)
// ctx.closePath();
// // ctx.stroke()
// ctx.fill()



// * Rectangle
// ctx.beginPath()
// ctx.rect(300, 50, 150, 100)
// ctx.fill()

// * Archs
// ctx.beginPath();
// const centerX = canvas.width / 2;
// const centerY = canvas.height / 2;
// // Draw head
// ctx.arc(centerX, centerY, 200, 0, Math.PI * 2);
// // Move to mouth
// ctx.moveTo(centerX + 100, centerY);
// // Draw mouth
// ctx.arc(centerX, centerY, 100, 0, Math.PI, false);
// // Move left eye
// ctx.moveTo(centerX - 60, centerY - 80);
// // Draw left eye
// ctx.arc(centerX - 80, centerY - 80, 20, 0, Math.PI * 2);
// // Move to right eye
// ctx.moveTo(centerX + 100, centerY - 80);
// // Draw right eye
// ctx.arc(centerX + 80, centerY - 80, 20, 0, Math.PI * 2);
// ctx.stroke();



// * animation 
const circle = {
    x: 200,
    y: 200,
    size: 30,
    // MOVMENT 
    dx: 5,
    dy: 4
};
function drawCircle() {
    ctx.beginPath()
    ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2)
    ctx.fillStyle = 'purple'
    ctx.fill()
}

function circleAnimate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawCircle()
    circle.x += circle.dx
    circle.y += circle.dy

    // Collison detection on side
    if (circle.x + circle.size > canvas.width || circle.x - circle.size < 0) {
        circle.dx *= -1
    }
    if (circle.y + circle.size > canvas.height || circle.y - circle.size < 0) {
        circle.dy *= -1
    }
    requestAnimationFrame(circleAnimate)
}

circleAnimate()


let coin='coin'
for(let i = 0;i<6;i++){
    console.log(coin+i)
}