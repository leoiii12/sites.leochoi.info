var MovableObject = (function () {
    function MovableObject(size, speed) {
        this.element = document.createElement('div');
        this.element.style.height = size.height + "px";
        this.element.style.width = size.width + "px";
        this.position = {
            x: window.innerWidth / 2, y: 0
        };
        this.size = size;
        this.speed = speed;
    }
    MovableObject.prototype.changeSpeed = function (speed) {
        this.speed = {
            x: speed.x, y: speed.y
        };
    };
    MovableObject.prototype.moveLeft = function () {
        this.position.x -= this.speed.x;
        if (this.position.x < -this.size.width)
            this.position.x = window.innerWidth;
    };
    MovableObject.prototype.moveRight = function () {
        this.position.x += this.speed.x;
        if (this.position.x > window.innerWidth)
            this.position.x = -this.size.width;
    };
    MovableObject.prototype.moveTop = function () {
        this.position.y -= this.speed.y;
        if (this.position.y < -this.size.height)
            this.position.y = window.innerHeight;
    };
    MovableObject.prototype.moveBottom = function () {
        this.position.y += this.speed.y;
        if (this.position.y > window.innerHeight)
            this.position.y = -this.size.height;
    };
    MovableObject.prototype.update = function () {
        this.element.style.top = this.position.y + "px";
        this.element.style.left = this.position.x + "px";
    };
    return MovableObject;
})();
var Utility = (function () {
    function Utility() {
    }
    Utility.hide = function (element) {
        element.style.display = "none";
    };
    Utility.show = function (element) {
        element.style.display = "";
    };
    return Utility;
})();
var Main = (function () {
    function Main(numberOfEnemies) {
        var _this = this;
        this.enemies = [];
        this.stage = document.getElementById("stage");
        for (var i = 0; i < numberOfEnemies; i++) {
            var ufo = new UFO({ width: 128, height: 94.5 }, { x: 20, y: 5 }, true);
            this.enemies.push(ufo);
            this.stage.appendChild(ufo.element);
        }
        setInterval(function () {
            _this.render();
        }, 1000 / 30);
    }
    Main.prototype.render = function () {
        for (var i = 0; i < this.enemies.length; i++) {
            var enemy = this.enemies[i];
            if (enemy.isRubbish) {
                enemy.element.parentNode.removeChild(enemy.element);
                this.enemies.splice(i, 1);
            }
            else {
                enemy.update();
            }
        }
    };
    return Main;
})();
window.onload = function () {
    var startButton = document.getElementById("start-game");
    startButton.onclick = function () {
        var numberOfEnemiesList = document.getElementById("number-of-enemies");
        var numberOfEnemiesValue = parseInt(numberOfEnemiesList.value);
        var uiElements = document.getElementsByTagName("ui");
        for (var i = 0; i < uiElements.length; i++) {
            uiElements[i].style.display = "none";
        }
        var mainThread = new Main(numberOfEnemiesValue);
    };
};
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var UFO = (function (_super) {
    __extends(UFO, _super);
    function UFO(size, speed, isRandomMovement) {
        var _this = this;
        _super.call(this, size, speed);
        this.life = 1;
        this.element.setAttribute("class", "ufo");
        this.element.onclick = function () {
            _this.life -= 1;
        };
        this.isRandomMovement = isRandomMovement;
    }
    UFO.prototype.update = function () {
        if (this.isRandomMovement) {
            switch (Math.floor(Math.random() * 5)) {
                case 0:
                    this.moveLeft();
                    break;
                case 1:
                    this.moveTop();
                    break;
                case 3:
                    this.moveRight();
                    break;
                default:
                    this.moveBottom();
                    break;
            }
        }
        if (this.life <= 0) {
            if (this.life < 0 && this.life >= -100)
                this.element.style.opacity = this.convertToOpacityValue(this.life);
            else if (this.life == 0) {
                this.element.style.backgroundImage = "url('images/fire.png')";
                this.element.style.pointerEvents = "none";
            }
            else if (this.life < -50) {
                this.element.style.display = "none";
                this.isRubbish = true;
            }
            this.life -= 1;
        }
        else
            _super.prototype.update.call(this);
    };
    UFO.prototype.convertToOpacityValue = function (life) {
        return (1 - Math.abs(this.life) / 50).toString();
    };
    return UFO;
})(MovableObject);
//# sourceMappingURL=script.js.map