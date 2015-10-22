//import PIXI from 'pixi.js';
// import { autobind } from 'core-decorators';

// const UP_KEY = 38;
// const DOWN_KEY = 40;
// const IMPULSE = 0.4;

// export default class Paddle {
//   constructor(scene, x, height, width) {
//     this.scene = scene;
//     this.x = x;
//     this.y = 0.0;
//     this.height = height;
//     this.width = width;

//     this.velocity = 0.0;

//     this.view = new PIXI.Sprite(PIXI.Texture.fromImage('bunny.png'));
//     this.view.height = this.height;
//     this.view.width = this.width;
//     this.view.anchor.x = this.view.anchor.y = 0.5;

//     window.addEventListener('keydown', this.onKeyDown);
//     window.addEventListener('keyup', this.onKeyUp);
//   }

//   @autobind
//   onKeyDown(e) {
//     if (e.keyCode === UP_KEY) {
//       this.velocity = -IMPULSE;
//     } else if (e.keyCode === DOWN_KEY) {
//       this.velocity = IMPULSE;
//     }
//   }

//   @autobind
//   onKeyUp() {
//     this.velocity = 0;
//   }

//   update(delta) {
//     const nextYPosition = this.y + (this.velocity * delta);
//     const topY = -(window.innerHeight / 2.0) + (this.height / 2.0);
//     const bottomY = +(window.innerHeight / 2.0) - (this.height / 2.0);

//     if ((nextYPosition < topY) || (nextYPosition > bottomY)) {
//       this.velocity = 0.0;
//     } else {
//       this.y = nextYPosition;
//     }

//     this.view.position.x = this.x;
//     this.view.position.y = this.y;
//   }

//   append(parent) {
//     parent.addChild(this.view);
//   }
// }
