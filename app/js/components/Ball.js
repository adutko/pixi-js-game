//import PIXI from 'pixi.js';

// const SPEED = 0.2;

// export default class Ball {
//   constructor(scene) {
//     this.scene = scene;
//     this.x = 0.0;
//     this.y = 0.0;

//     this.velocityX = 1.0;
//     this.velocityY = 1.0;

//     this.view = new PIXI.Sprite(PIXI.Texture.fromImage('bunny.png'));
//     this.view.anchor.x = this.view.anchor.y = 0.5;
//   }

//   update(delta) {
//     this.view.rotation += 0.005 * delta;

//     const nextYPosition = this.y + (this.velocityY * SPEED * delta);
//     const nextXPosition = this.x + (this.velocityX * SPEED * delta);

//     this.willCollide(nextXPosition, nextYPosition);

//     this.view.position.x = this.x;
//     this.view.position.y = this.y;
//   }

//   willCollide(nextXPosition, nextYPosition) {
//     const topY = -(window.innerHeight / 2.0);
//     const bottomY = +(window.innerHeight / 2.0);
//     const leftX = -(window.innerWidth / 2.0);
//     const rightX = +(window.innerWidth / 2.0);

//     if (this.collidesWithPaddle(this.scene.leftPaddle, true, nextXPosition, nextYPosition) ||
//         this.collidesWithPaddle(this.scene.rightPaddle, false, nextXPosition, nextYPosition)) {
//       this.velocityX *= -1;
//     } else if ((nextYPosition > bottomY) || (nextYPosition < topY)) {
//       this.velocityY *= -1;
//     } else if (nextXPosition > rightX) {
//       // alert('left player scored');
//       this.x = 0.0;
//       this.y = 0.0;
//     } else if (nextXPosition < leftX) {
//       // alert('right player scored');
//       this.x = 0.0;
//       this.y = 0.0;
//     } else {
//       this.y = nextYPosition;
//       this.x = nextXPosition;
//     }
//   }

//   collidesWithPaddle(paddle, isLeft, nextXPosition, nextYPosition) {
//     if (
//          (isLeft && (nextXPosition < paddle.x)) || (!isLeft && (nextXPosition > paddle.x)) &&
//          (nextYPosition >= paddle.y - (paddle.height / 2.0)) &&
//          (nextYPosition <= paddle.y + (paddle.height / 2.0)) &&
//          (nextXPosition >= paddle.x - (paddle.width / 2.0)) &&
//          (nextXPosition <= paddle.x + (paddle.width / 2.0))
//        ) {
//       return true;
//     }

//     return false;
//   }

//   append(parent) {
//     parent.addChild(this.view);
//   }
// }
