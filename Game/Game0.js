var demo = {};
demo.Game0 = function(){};
var ghost;
//var brick;
var speed = 2;
demo.Game0.prototype = {
	
    preload: function(){
		game.load.image('back', 'assets/Background.png');
        game.load.spritesheet('ghost', 'assets/ghost.png',287,229);
        game.load.image('platform1', 'assets/Brick.png' )
	},

	create: function(){        
//        game.world.setBounds(0,0, 2813, 1000);
//        game.physics.startSystem(Phaser.Physics.ARCADE);
        this.brick = this.add.physicsGroup();
        var back = game.add.sprite(0, 0, 'back');
        var platform1 = game.add.image(0,0, 'platform1')
        platform1.scale.setTo(0.2,0.2)
        back.height = game.height;
        back.width = game.width;
        ghost = game.add.sprite(0,0, 'ghost');
        ghost.animations.add('walk',[0,1,2]);
//        adam.anchor.setTo(0.5, 0.5);
        ghost.scale.setTo(0.2, 0.2);
//        game.physics.enable(adam);
//        adam.body.collideWorldBounds = true;
//        game.camera.follow(adam);
//        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    },

	update: function(){
      if (game.input.keyboard.isDown (Phaser.Keyboard.RIGHT)){
        ghost.x = ghost.x +speed;
        ghost.animations.play('walk', 20, true); 
          ghost.scale.setTo(0.2, 0.2);
     }
        
    else  if (game.input.keyboard.isDown (Phaser.Keyboard.LEFT)){ghost.x =ghost.x - speed;
                   ghost.animations.play('walk', 20, true); 
                   ghost.scale.setTo(-0.2, 0.2);                                              
                                                                 
     }
         
    else{
    ghost.animations.stop('walk');
}    
     if (game.input.keyboard.isDown (Phaser.Keyboard.UP)){ghost.y =ghost.y - speed}
        
        if (ghost.y < 0){
            ghost.y =0;
        }
        
     if (game.input.keyboard.isDown (Phaser.Keyboard.DOWN)){ghost.y =ghost.y + speed}
        
	}

};