class crossback extends imageExtend{
    constructor() {
        super()
        this.startXY = [[0, 0], [25, 0], [50, 0], [50, 25]]
        
        this.xy = [[],[],[],[]]
        self = this
        self.xy[0][0] = this.startXY[0][0];
        self.xy[0][1] = this.startXY[0][1];
        self.xy[1][0] = this.startXY[1][0];
        self.xy[1][1] = this.startXY[1][1];
        self.xy[2][0] = this.startXY[2][0];
        self.xy[2][1] = this.startXY[2][1];
        self.xy[3][0] = this.startXY[3][0];
        self.xy[3][1] = this.startXY[3][1];
        self.height = 25
        self.width = 25
        self.name = 'cro'
        return this
    }

    GetHeight() {
        super.GetHeight()
    }
    GetY() {
        super.GetY()
    }

    Move() {
        super.Move()
    }
    Draw() {
        super.Draw()
    } 
    Left(width) {
        super.Left(width)
    } 
    Right() {
        super.Right()
    } 
    Change() {
        if(this.xy[3][0] == this.xy[2][0]) {
            this.xy[3][0] = this.xy[0][0] + 0
            this.xy[3][1] = this.xy[0][1] + 25
            // console.log('111');
        }else { 
            this.xy[3][0] = this.xy[0][0] + 50
            this.xy[3][1] = this.xy[2][1] + 25
        }   
    }
}
    