const d = document;
let x= 0,
    y=0;

export function moveBall (e, ball, stage) {
    const $ball = d.querySelector(ball),
        $stage = d.querySelector(stage),
        limitBall = $ball.getBoundingClientRect(),
        limitStage = $stage.getBoundingClientRect();

        switch (e.keyCode) {
            case 37:
                e.preventDefault();
                if(limitBall.left > limitStage.left) x--;
                break;
            case 38:
                e.preventDefault();
                if (limitBall.top > limitStage.top) y--;
                break;
            case 39:
                e.preventDefault();
                if (limitBall.right < limitStage.right) x++;
                break;
            case 40:
                e.preventDefault();
                if (limitBall.bottom < limitStage.bottom) y++;
                break;
        
            default:
                break;
            }
            $ball.style.transform = `translate(${x* 10}px, ${y* 10}px)`;
}

export function shortcuts (e) {

    if (e.key === "a" && e.altKey) {
        alert("Haz invocado una alerta por medio del teclado!");
    }
    
    if (e.key === "c" && e.altKey) {
        confirm("Haz invocado una confirmacion por medio del teclado!");
    }

    if (e.key === "p" && e.altKey) {
        prompt("Haz invocado un aviso por medio del teclado!");
    }
}
