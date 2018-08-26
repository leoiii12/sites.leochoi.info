class MovableObject {
    private position: Coordinate;

    element: HTMLElement;
    speed: Coordinate;
    size: Size;

    isRubbish: boolean;

    constructor(size: Size, speed: Coordinate) {
        this.element = document.createElement('div');
        this.element.style.height = size.height + "px";
        this.element.style.width = size.width + "px";

        this.position = {
            x: window.innerWidth / 2, y: 0
        };

        this.size = size;

        this.speed = speed;
    }

    changeSpeed(speed: Coordinate) {
        this.speed = {
            x: speed.x, y: speed.y
        };
    }

    moveLeft() {
        this.position.x -= this.speed.x;
        if (this.position.x < -this.size.width)
            this.position.x = window.innerWidth;
    }

    moveRight() {
        this.position.x += this.speed.x;
        if (this.position.x > window.innerWidth)
            this.position.x = -this.size.width;
    }

    moveTop() {
        this.position.y -= this.speed.y;
        if (this.position.y < -this.size.height)
            this.position.y = window.innerHeight;
    }

    moveBottom() {
        this.position.y += this.speed.y;
        if (this.position.y > window.innerHeight)
            this.position.y = -this.size.height;
    }

    update() {
        this.element.style.top = this.position.y + "px";
        this.element.style.left = this.position.x + "px";
    }
}