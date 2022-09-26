export default class Background{
    img = new Image();

    setBackgroundImage(src, callback){
        this.img.addEventListener('load', callback)
        this.img.src = src;
    }

    render(ctx){
        ctx.drawImage(this.img, 0, 0);
    }
}