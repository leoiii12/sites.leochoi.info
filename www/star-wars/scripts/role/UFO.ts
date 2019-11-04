class UFO extends MovableObject {
    life: number;
    isRandomMovement: boolean;

    constructor(size: Size, speed: Coordinate, isRandomMovement: boolean) {
        super(size, speed);

        this.life = 1;

        this.element.setAttribute("class", "ufo");
        this.element.onclick = () => {
            this.life -= 1;
        };

        this.isRandomMovement = isRandomMovement;
    }

    update() {
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
            } else if (this.life < -50) {
                this.element.style.display = "none";
                this.isRubbish = true;
            }

            this.life -= 1;
        } else
            super.update();
    }

    private convertToOpacityValue(life: number) {
        return (1 - Math.abs(this.life) / 50).toString();
    }
}