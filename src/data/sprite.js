export const STREET_SPRITE = {
    src: '../assets/street.png',
    width: 749,
    height: 500
}

export const GIRL_SPRITE = {
    src: '../assets/girl-sprite.png',
    tileWidth: 96,
    tileHeight: 96,

    idleSequence: [
        {x: 0, y: 0},
        {x: 1, y: 0},
        {x: 2, y: 0},
        {x: 3, y: 0},
        {x: 4, y: 0}
       ],

    walkSequence:[
        {x: 0, y: 2},
        {x: 1, y: 2},
        {x: 2, y: 2},
        {x: 3, y: 2},
        {x: 4, y: 2},
        {x: 5, y: 2},
        {x: 6, y: 2},
        {x: 7, y: 2}
    ],

    commande: {
        left: 'ArrowLeft',
        right: 'ArrowRight',
        shoot: '',
    },

    speed : 7,
    initialPosition: {x: 125, y: 220}
}