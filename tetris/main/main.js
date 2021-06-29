var log = console.log.bind(console)
        var y = 0
        var canvas = document.getElementById('id-canvas');
        var ctx = canvas.getContext('2d');
        var canvas_width = document.getElementById("id-canvas").clientWidth
        var canvas_height = document.getElementById("id-canvas").clientHeight
        var speed = 25
        // 定义运动图像的模型
        var imageModel = null
        //定义所有的图形
        var n = 0
        var allBlock = []
        //是否达到底部
        var toLine = false
        //判断键盘是否按下
        var rightKey = false
        var leftKey = false
        //速度
        fps = 1000/10
        //判断是否运行
        // var toRun = false
        //判断是否运行
        var ModeRun = false
        //判断图形是自由下降还是直接通过按键到达底部
        var arrButtom = false
        // 定义当前运行的场景，将有需要的场景加入
        var main_scene = null
        //判断方块是否到达顶部
        var arrTop = false
        // 设置三个场景切换的局限性
        var starting = true
        var gameing = false
        //分数
        var score = 0
        //
        window.addEventListener("keyup", function(event) {
            if(event.key == "Enter") {
                if(starting) {
                    sceneGame = new Game()
                    gameing = true
                    starting = false
                }
            }
            if(event.key == 'k') {
                ModeRun = !ModeRun
            }
            if(event.key == "s") {
                toButtom()
            }
            if(event.key == "q") {
                if(gameing) {
                    arrTop = true
                    sceneGame = new overScene()
                    gameing = true
                }
            }
        })
        window.addEventListener('keypress', function(event) {
            if(event.key == "d") {
                leftKey = true
            }
            if(event.key == "a") {
                rightKey = true
            }
            if(event.key == "w") {
                if(imageModel.name == 'cro' || imageModel.name == 'ort' || imageModel.name == 'bac') {
                    imageModel.Change()
                }
            }
        })
        sceneGame = new startScene()
        var runloop = function () {
            setTimeout(() => {
                sceneGame.run() 
                setTimeout(function() {
                    runloop()
                }, fps)
            }, fps);
        }

        setTimeout(function() {
            runloop()
        }, fps)