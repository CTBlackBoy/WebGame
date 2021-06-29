class backDraw{
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    Draw() {
        var w = 24
        var h = 24
        ctx.fillRect(this.x, this.y, w,h)
        ctx.fillStyle = 'green';

    }
}