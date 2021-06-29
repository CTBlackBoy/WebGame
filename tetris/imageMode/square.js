class square extends imageExtend{
    constructor() {
        super()
        this.startXY = [[50, 0], [75, 0], [50, 25], [75, 25]]

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
        self.name = 'squ'
        return this
    }

    GetHeight() {
        super.GetHeight()
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
        
    }
}
    