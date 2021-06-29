
class Game{
    constructor() {
        this.name =  'tetris'
        // 'arrTop' : false,
        this.arrButtom = false

        return this
    }

    drawLine() {
        //划线
        // var canvas_width = document.getElementById("id-canvas").clientWidth
        // var canvas_height = document.getElementById("id-canvas").clientHeight
        ctx.beginPath();
        var x_number = canvas_width / 25
        var y_number = canvas_height / 25
        for (let i = 1; i < y_number; i++) {
            ctx.moveTo(0, 25*i);
            ctx.lineTo(500, 25*i);
        }
        for (let i = 1; i < x_number; i++) {
            ctx.moveTo(25*i,0);
            ctx.lineTo(25*i, 800);
        }
        ctx.closePath();
        ctx.stroke();
        //画所有格子
        for (let i = 0; i < allBlock.length; i++) {
            var Block = new backDraw(allBlock[i][0], allBlock[i][1])
            Block.Draw()
            // console.log(i);
        }
    }
    //生产运动的图形
    produceImageModel() {
        var imageType = parseInt(Math.random() * 4) 
        var squ =  square
        var cro =  crossback
        var ort =  orthogon
        var bac = backcross

        var imageAll = [squ, cro, ort, bac]
        imageModel = new imageAll[imageType]()  
        speed = 25
        n += 1
    }
    //按键事件
    actionKey() {
        if(leftKey == true) {
            imageModel.Left(canvas_width)
            leftKey = false
        }
        if(rightKey == true) {
            imageModel.Right()
            rightKey = false
        }
    }
    //判断移动图形是否到达底部
    judgeButtom() {
        for(var i = 0; i < 4; i++) {
            if(imageModel['xy'][i][1] >= canvas_height - 25) {
                //确认道道底部
                toLine = true
                this.arrButtom = true
                speed = 0
                imageModel == null
            }
        }
        for(var i = 0; i < 4; i++) {
            for (let j = 0; j < allBlock.length; j++) {
                // console.log(imageModel['xy'][i][1]);
                if(imageModel['xy'][i][1] >= allBlock[j][1]-25 && imageModel['xy'][i][0] == allBlock[j][0]) {
                    toLine = true
                    this.arrButtom = true
                    imageModel == null
                }
            }
        }
    }
    //将到达底部的图形打散
    addBlock() {
        if(toLine == true) {
            for (let i = 0; i < 4; i++) {
                allBlock.push(imageModel['xy'][i])
            }
            //临时变量max
            var max = []
            for (var i = 0; i < allBlock.length-1; i++) {
                for (var j = i+1; j < allBlock.length; j++) {
                    if (allBlock[i][1] > allBlock[j][1] && allBlock[i][0] == allBlock[j][0] ) {
                        max = allBlock[j]
                        allBlock[j] = allBlock[i]
                        allBlock[i] = max
                    }
                }
            }
            for (var i = 0; i < allBlock.length-1; i++) {
                for (var j = i+1; j < allBlock.length; j++) {
                    if (allBlock[i][1] > allBlock[j][1]) {
                        max = allBlock[j]
                        allBlock[j] = allBlock[i]
                        allBlock[i] = max
                    }
                }
            }
            imageModel = null
            speed = null
            toLine = false  
            // arrButtom = false
        }
    }

    run() {
        ctx.clearRect(0, 0, 500, 800)
        this.drawLine()
        if (imageModel == null && !arrTop) {
            this.produceImageModel()
        }  
        if(!arrTop) {
            // isImage = true
            // console.log(image    Model);
            // 判断图形是否到达最低点
            // console.log(leftKey);
            this.actionKey()
            //调用判断是否有整行的图形
            this.judgeButtom()
            if(!this.arrButtom && ModeRun) {
                imageModeRun(imageModel)
                // this.arrButtom = false
            }
            if(this.arrButtom) {
                this.arrButtom = false
            }
            //判断是否到达底部并将图形打散
            subtract(imageModel, allBlock)
            //判断是否封顶
            imageModel.Draw()
            this.addBlock()
            toTop(allBlock)
        }
    }

}


// var Game = function() {
//     var g = {
//         'name' : 'tetris',
//         // 'arrTop' : false,
//         'arrButtom' : false,
//     }

//     this.drawLine = function() {
//         //划线
//         // var canvas_width = document.getElementById("id-canvas").clientWidth
//         // var canvas_height = document.getElementById("id-canvas").clientHeight
//         ctx.beginPath();
//         var x_number = canvas_width / 25
//         var y_number = canvas_height / 25
//         for (let i = 1; i < y_number; i++) {
//             ctx.moveTo(0, 25*i);
//             ctx.lineTo(500, 25*i);
//         }
//         for (let i = 1; i < x_number; i++) {
//             ctx.moveTo(25*i,0);
//             ctx.lineTo(25*i, 800);
//         }
//         ctx.closePath();
//         ctx.stroke();
//         //画所有格子
//         for (let i = 0; i < allBlock.length; i++) {
//             var Block = new backDraw(allBlock[i][0], allBlock[i][1])
//             Block.Draw()
//             // console.log(i);
//         }
//     }
//     //生产运动的图形
//     this.produceImageModel = function() {
//         var imageType = parseInt(Math.random() * 4) 
//         var squ =  square
//         var cro =  crossback
//         var ort =  orthogon
//         var bac = backcross

//         var imageAll = [squ, cro, ort, bac]
//         imageModel = new imageAll[imageType]()  
//         speed = 25
//         n += 1
//     }
//     //按键事件
//     this.actionKey = function() {
//         if(leftKey == true) {
//             imageModel.Left(canvas_width)
//             leftKey = false
//         }
//         if(rightKey == true) {
//             imageModel.Right()
//             rightKey = false
//         }
//     }
//     //判断移动图形是否到达底部
//     this.judgeButtom = function() {
//         for(var i = 0; i < 4; i++) {
//             if(imageModel['xy'][i][1] >= canvas_height - 25) {
//                 //确认道道底部
//                 toLine = true
//                 this.arrButtom = true
//                 speed = 0
//                 imageModel == null
//             }
//         }
//         for(var i = 0; i < 4; i++) {
//             for (let j = 0; j < allBlock.length; j++) {
//                 // console.log(imageModel['xy'][i][1]);
//                 if(imageModel['xy'][i][1] >= allBlock[j][1]-25 && imageModel['xy'][i][0] == allBlock[j][0]) {
//                     toLine = true
//                     this.arrButtom = true
//                     imageModel == null
//                 }
//             }
//         }
//     }
//     //将到达底部的图形打散
//     this.addBlock = function() {
//         if(toLine == true) {
//             for (let i = 0; i < 4; i++) {
//                 allBlock.push(imageModel['xy'][i])
//             }
//             //临时变量max
//             var max = []
//             for (var i = 0; i < allBlock.length-1; i++) {
//                 for (var j = i+1; j < allBlock.length; j++) {
//                     if (allBlock[i][1] > allBlock[j][1] && allBlock[i][0] == allBlock[j][0] ) {
//                         max = allBlock[j]
//                         allBlock[j] = allBlock[i]
//                         allBlock[i] = max
//                     }
//                 }
//             }
//             for (var i = 0; i < allBlock.length-1; i++) {
//                 for (var j = i+1; j < allBlock.length; j++) {
//                     if (allBlock[i][1] > allBlock[j][1]) {
//                         max = allBlock[j]
//                         allBlock[j] = allBlock[i]
//                         allBlock[i] = max
//                     }
//                 }
//             }
//             imageModel = null
//             speed = null
//             toLine = false  
//             // arrButtom = false
//         }
//     }

//     this.run = function() {
//         ctx.clearRect(0, 0, 500, 800)
//         this.drawLine()
//         if (imageModel == null && !arrTop) {
//             this.produceImageModel()
//         }  
//         if(!arrTop) {
//             // isImage = true
//             // console.log(image    Model);
//             // 判断图形是否到达最低点
//             // console.log(leftKey);
//             this.actionKey()
//             //调用判断是否有整行的图形
//             this.judgeButtom()
//             if(!this.arrButtom && ModeRun) {
//                 imageModeRun(imageModel)
//                 // this.arrButtom = false
//             }
//             if(this.arrButtom) {
//                 this.arrButtom = false
//             }
//             //判断是否到达底部并将图形打散
//             subtract(imageModel, allBlock)
//             //判断是否封顶
//             imageModel.Draw()
//             this.addBlock()
//             toTop(allBlock)
//         }
//     }

//     return g
// }

