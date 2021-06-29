class imageExtend {
    constructor() {
        // return
    }

    GetHeight() {
        return this.height
    }
    GetY() {
        return this.xy
    }
    Move() {
        var speedY = 25
        this.xy[0][0] = this.xy[0][0]
        this.xy[1][0] = this.xy[1][0]
        this.xy[2][0] = this.xy[2][0]
        this.xy[3][0] = this.xy[3][0]
        this.xy[0][1] += speedY
        this.xy[1][1] += speedY
        this.xy[2][1] += speedY
        this.xy[3][1] += speedY
        
        return this.xy
    }
    Draw() {
        for (var i = 0; i < this.xy.length; i++) {
            var x = this.xy[i][0]
            var y = this.xy[i][1]
            var w = 24
            var h = 24
            ctx.fillRect(x, y, w,h)
            ctx.fillStyle = 'green';
        }
    }
    Left(width) {
        //判断是否到达最边缘
        var arriveRight = true
        for (let i = 0; i < 4; i++) {
            if(this.xy[i][0] >= width - 25) {
                arriveRight = false
            }
        }
        if(arriveRight == true) {
            this.xy[0][0] += 25
            this.xy[1][0] += 25
            this.xy[2][0] += 25
            this.xy[3][0] += 25

        }

        return this.xy
    }
    Right() {
        //判断是否到达最边缘
        var arriveLeft = true
        for (let i = 0; i < 4; i++) {
            if(this.xy[i][0] <= 0) {
                arriveLeft = false
            }
        }
        if(arriveLeft == true) {
            this.xy[0][0] -= 25
            this.xy[1][0] -= 25
            this.xy[2][0] -= 25
            this.xy[3][0] -= 25

        }

        return this.xy
    }
    Change() {  
    }
}
    