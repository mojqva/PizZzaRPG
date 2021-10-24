class Overworld {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");
    }

    init() {
        const image = new Image();
        image.onload = () => {
            this.ctx.drawImage(image, 0, 0);
        };
        image.src = "/images/maps/DemoLower.png";

        const x = 5;
        const y = 6;

        const shadow = new Image();
        shadow.onload = () => {
            this.ctx.drawImage(
                shadow, 
                0, // начало отрезка слева
                0, // начало отрезка сверху
                32, // конец отрезка слева
                32, // конец отрезка сверху
                x * 16 - 8, // координата на холсте по иксу
                y * 16 - 18, // координата на холсте по игрику
                32, // ширина отрезка
                32, // высота отрезка
            );
        }
        shadow.src = "/images/characters/shadow.png";

        const hero = new Image();
        hero.onload = () => {
            this.ctx.drawImage(
                hero, 
                0, // начало отрезка слева
                0, // начало отрезка сверху
                32, // конец отрезка слева
                32, // конец отрезка сверху
                x * 16 - 8, // координата на холсте по иксу
                y * 16 - 18, // координата на холсте по игрику
                32, // ширина отрезка
                32, // высота отрезка
            );
        }
        hero.src = "/images/characters/people/hero.png";
    }

}