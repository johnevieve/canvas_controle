export default class Character{
    currentFrame = 0;
    constructor(sprite){
        this.sprite = sprite;
        this.img =new Image();
        this.img.src = sprite.src;
        this.position = sprite.initialPosition;
        this.sequence = sprite.idleSequence;

        setInterval(() => this.changeFrame(), 100);
    }

    changeFrame(){
        this.currentFrame = (this.currentFrame + 1) % this.sequence.length ;
    }

    getSourceX(){
        const frame = this.currentFrame >= this.sequence.length ? 0 : this. currentFrame;
        return this.sequence[frame].x * this.sprite.tileWidth;
    }

    getSourceY(){
        const frame = this.currentFrame >= this.sequence.length ? 0 : this. currentFrame;
        return this.sequence[frame].y * this.sprite.tileHeight;
    }

    render(ctx){

        ctx.drawImage(
            this.img,// src
            this.getSourceX(),// sx
            this.getSourceY(),// sy
            this.sprite.tileWidth,// sw
            this.sprite.tileHeight,// sh
            this.position.x,// dx
            this.position.y,// dy
            this.sprite.tileWidth,// dw
            this.sprite.tileHeight,// dh
        );
    }
}