
class startScene {
    constructor() {
        
    }
    run() {
        ctx.font="40px Verdana";
        var gradient=ctx.createLinearGradient(0,0,canvas.width,0);
        gradient.addColorStop("0","magenta");
        gradient.addColorStop("0.5","blue");
        gradient.addColorStop("1.0","red");
        ctx.fillStyle=gradient;
        ctx.fillText("俄罗斯方块",90,200);
        ctx.font="20px Verdana";
        ctx.fillText("按Enter进入游戏",100,250);
        ctx.font="15px Verdana";
        ctx.fillText("游戏中按K暂停/开始，按方向下快速掉落，按Q游戏结束",40,300);
        ctx.fillText("方块碰到边框顶部游戏自动结束",40,350);

    }
}