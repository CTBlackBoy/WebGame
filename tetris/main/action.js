var toButtom = function() {
    var t = 1
    while(t != 0 && imageModel != null) {
        imageModel.Move(speed)
        for(var i = 0; i < 4; i++) {
            if(imageModel['xy'][i][1] >= canvas_height - 25) {
                //确认道道底部
                toLine = true
                speed = 0
                t = 0
                // imageModel = null
            }
        }
        for(var i = 0; i < 4; i++) {
            for (let j = 0; j < allBlock.length; j++) {
                // console.log(imageModel['xy'][i][1]);
                if(imageModel['xy'][i][1] >= allBlock[j][1]-25 && imageModel['xy'][i][0] == allBlock[j][0]) {
                    toLine = true
                    // imageModel   = null
                    t = 0
                }
            }
        }

        // if(imageModel['xy'][i][0] <= 0) {
        //     Game.arrTop = true
        //     ModeRun = !ModeRun
        // }
        Game.arrButtom = true
    }
    
}
//删除方块，重组数组
var remove = function(arr, start, end) {
    // log(arr,start, end)

    var arrBack = []
    var removeY = arr[end][1]
    for (let i = arr.length - 1; i >= 0; i--) {
        if(i > start && i <= end) {
            // arrBack.push(allBlock[i])
        }else {
            arrBack.push(arr[i])
        }
    }

    for (let i = 0; i <= arrBack.length - 1; i++) {
        if(arrBack[i][1] < removeY) {
            arrBack[i][1] += 25
        }              
    }
    // if(start != 0) {
    //     for (let index = end + 1; index < arr.length; index++) {
    //         arrBack.push(arr[index])                                
    //     }
    //     for (let index = 0; index < start; index++) {
    //         arrBack.push(arr[index])                
    //     }
    //     log(arrBack)
    // }else if(start == 0) {
    //     for (let index = end + 1; index < arr.length; index++) {
    //         arrBack.push(arr[index])                                
    //     }
    // }
    allBlock = arrBack
}

//横向判断
var  a = true
var subtract = function() {
    if (allBlock.length >= 12) {
        var lineNum = []
        lineNum.push(0)
        for(var i = 0; i < allBlock.length-1; i++) {
            if(allBlock[i][1] != allBlock[i + 1][1]) {
                // log('判断是否在同一y轴上',allBlock[i][1])
                lineNum.push(i)
                // log(i)
            }
        }
        lineNum.push(allBlock.length -1)
        
        for (let i = lineNum.length; i >= 0; i--) {
            if(lineNum[i] - lineNum[i -1 ] == canvas_width / 25) {
                remove(allBlock, lineNum[i -1], lineNum[i])
                score += 10
            }
        }
    }
}

var imageModeRun = function() {
    imageModel.Move(speed)
}
var toTop = function(allBlock) {
    for (let i = 0; i < allBlock.length; i++) {
        // const element = array[i];
        if(allBlock[i][1] <= 1) {
            ModeRun = false
            arrTop = true
            sceneGame = new overScene()
        }
    }
}