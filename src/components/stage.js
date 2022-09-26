import { GIRL_SPRITE, STREET_SPRITE } from "../data/sprite.js";
import Background from "../models/background.js";
import Character from "../models/character.js";

const main = {}

export default function stage(){
    const stage = document.createElement('div');

    const backgroundLayer = document.createElement('canvas');
    setBackgroundLayer(backgroundLayer);

    const gameLayer = document.createElement('canvas');
    setGameLayer(gameLayer);

    stage.appendChild(backgroundLayer);
    stage.appendChild(gameLayer);

    return stage;
}

function setCanvasSize(canvas) {
    canvas.width = main.width;
    canvas.height = main.height;
}

function setGameLayer(canvas){
    setCanvasSize(canvas);
    main.girl = new Character(GIRL_SPRITE);
    loop(canvas.getContext('2d'));
}

function loop(ctx){
    ctx.clearRect(0,0, main.width, main.height);

    main.girl.render(ctx);

    setTimeout(() =>
    window.requestAnimationFrame(() => loop(ctx))
    , 33);
}

function setBackgroundLayer(canvas){
    main.width = STREET_SPRITE.width;
    main.height = STREET_SPRITE.height;

    setCanvasSize(canvas);

    main.street = new Background();
    main.street.setBackgroundImage(
        STREET_SPRITE.src,
        () => main.street.render(canvas.getContext('2d'))
    );
}