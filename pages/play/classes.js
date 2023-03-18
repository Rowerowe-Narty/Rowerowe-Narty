class Player {
    constructor ({
        position,
        imageSrc,
        scale = 1,
        framesMax = 1,
        offset = {x: 0, y: 0}
    }) {
        this.position = position;
        // this.width
        // this.height
        this.image = new Image();
        this.image.src = imageSrc;
        this.scale = scale;
        this.framesMax = framesMax;
        this.framesCurrent = 0;
        this.framesElapsed = 0;
        this.framesHold = 0;
        this.offset = offset;
    }

    draw() {
        c.drawImage(
            this.image,
            this.framesCurrent * (this.image.width / this.framesMax),
            0,
            this.image.width / this.framesMax,
            this.image.height,
            this.position.x - this.offset.x, 
            this.position.y - this.offset.y, 
            (this.image.width / this.framesMax) * this.scale, 
            this.image.height * this.scale
        ) 
    }

    update() {
        this.draw();
    }
}