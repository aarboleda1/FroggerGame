// var imported = document.createElement('script');
// imported.src = 'js/engine.js';
// document.head.appendChild(imported);
console.log(Resources)
// Enemies our player must avoid
var Enemy = function( x, y ) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    //this.pos = pos || [x,y];
    //ctx.fillRect
    //this.speed = speed;
    //This line gives us access to the Engine object;
    //Engine.call(this);
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    
    this.sprite = 'images/enemy-bug.png';
};
console.log(ctx)
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    //handleInput(dt)
    
    // which willd ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function ( dir, pos ) {
    //this.dir = dir ||  which way does this move
    this.pos = pos || [0,0];
    this.sprite = 'images/char-boy.png';
 
}

//update players position 
Player.prototype.update = function () {
    this.loc++
}
//render method
Player.prototype.render = function () {
    //ctxDraw image to get player sprite
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y)
}
//handleInput method
Player.prototype.handleInput = function () {
      /*left key move left, right key move right, up and down*/
      /*player cannot move off the screen*/ 
      
}
// Now instantiate your objects.
var player = new Player();
var enemy = new Enemy(10,10);
enemy.render();
console.log(enemy)
// Place all enemy objects in an array called allEnemies
var allEnemies = [];
allEnemies.push(enemy);
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
