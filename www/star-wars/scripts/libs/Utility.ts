interface Size {
    width: number;
    height: number;
}

interface Coordinate {
    x: number;
    y: number;
}

interface Dying {
    remainingTime: number;
    isHidden: boolean;
}

class Utility {
    static hide(element: HTMLElement) {
        element.style.display = "none";
    }

    static show(element: HTMLElement) {
        element.style.display = "";
    }
}