
class overScene {
    constructor() {

    }
    run() {
        ctx.clearRect(0, 0, 500, 800)
        ctx.font="40px Verdana";
        var gradient=ctx.createLinearGradient(0,0,canvas.width,0);
        gradient.addColorStop("0","magenta");
        gradient.addColorStop("0.5","blue");
        gradient.addColorStop("1.0","red");
        ctx.fillStyle=gradient;
        ctx.fillText("！！游戏结束！！",60,200);
        ctx.fillText("!最终分数为：",60,250);
        ctx.fillText(score, 60, 300)
    }
}