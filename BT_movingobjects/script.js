/**
 * Created by nhatnk on 4/26/17.
 */

class Hero {

    image
    top
    left
    size

    constructor(image, top, left, size) {
        this.image = image;
        this.top = top;
        this.left = left;
        this.size = size;
    }


    getHeroElement() {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    }

    moveRight() {
        this.left += 20;
        console.log('ok: ' + this.left);

    }
    moveDown() {
        this.top += 20;
        console.log('ok: ' + this.top);

    }
    moveLeft() {
        this.left -= 20;
        console.log('ok: ' + this.left);

    }
    moveUp(){
        this.top -= 20;
        console.log('ok: ' + this.top);
    }

}

let hero = new Hero('pikachu.png', 20, 30, 200);

function goRight() {
    if (hero.left < window.innerWidth - hero.size) {
        hero.moveRight();
        setTimeout(goRight, 50)
        document.getElementById('game').innerHTML = hero.getHeroElement();
    }else{
        goDown()
    }


}
function goDown(){
    if(hero.top<window.innerHeight-hero.size){
        hero.moveDown()
        document.getElementById('game').innerHTML = hero.getHeroElement();
        setTimeout(goDown, 50)
    }else{
        goLeft()
    }


}
function goLeft(){
    if (hero.left > 0) {
        hero.moveLeft();
        document.getElementById('game').innerHTML = hero.getHeroElement();
        setTimeout(goLeft, 50)
    }else{
        goUp()
    }

}
function goUp(){
    if(hero.top>0){
        hero.moveUp()
        document.getElementById('game').innerHTML = hero.getHeroElement();
        setTimeout(goUp, 50)
    }else{
        goRight()
    }

}

goRight();