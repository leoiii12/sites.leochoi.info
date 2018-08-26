class Main {
    enemies: MovableObject[] = [];
    stage: HTMLElement = document.getElementById("stage");

    constructor(numberOfEnemies: number) {
        for (var i = 0; i < numberOfEnemies; i++) {
            var ufo = new UFO({ width: 128, height: 94.5 }, { x: 20, y: 5 }, true);
            this.enemies.push(ufo);
            this.stage.appendChild(ufo.element);
        }

        setInterval(() => {
            this.render();
        }, 1000 / 30);
    }

    render() {
        for (var i = 0; i < this.enemies.length; i++) {
            var enemy = this.enemies[i];
            if (enemy.isRubbish) {
                enemy.element.parentNode.removeChild(enemy.element);
                this.enemies.splice(i, 1);
            } else {
                enemy.update();
            }

            
        }
    }
}

window.onload = function () {
    // var thread = new Main(20);
    var startButton = document.getElementById("start-game");
    startButton.onclick = function () {
        var numberOfEnemiesList = <HTMLInputElement> document.getElementById("number-of-enemies");
        var numberOfEnemiesValue = parseInt(numberOfEnemiesList.value);

        var uiElements = document.getElementsByTagName("ui");
        for (var i = 0; i < uiElements.length; i++) {
            (<HTMLElement> uiElements[i]).style.display = "none";
        }

        var mainThread = new Main(numberOfEnemiesValue);
    };
};
