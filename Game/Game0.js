var demo = {};
demo.Game0 = function(){};
var ghost;
var speed = 6;
demo.Game0.prototype = {
	
    preload: function(){
		game.load.image('back', 'assets/citybackground.jpg');
    game.load.spritesheet('ghost', 'assets/ghost.png',278,225);
        
	},

	create: function(){        
//        game.world.setBounds(0,0, 2813, 1000);
//        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        var back = game.add.sprite(0, 0, 'back');
        
        back.height = game.height;
        back.width = game.width;
        ghost = game.add.sprite(0,0, 'ghost');
//        ghost.animations.add('walk',[0,1,2]);
//        adam.anchor.setTo(0.5, 0.5);
        ghost.scale.setTo(0.3, 0.3);
//        game.physics.enable(adam);
//        adam.body.collideWorldBounds = true;
//        game.camera.follow(adam);
//        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    },

	update: function(){
//      if (game.input.keyboard.isDown (Phaser.Keyboard.RIGHT)){
//        ghost.x = ghost.x +speed;
//        ghost.animations.play('walk', 20, true); 
//          ghost.scale.setTo(0.3, 0.3);
//     }
//        
//    else  if (game.input.keyboard.isDown (Phaser.Keyboard.LEFT)){adam.x =adam.x - speed;
//                   adam.animations.play('walk', 20, true); 
//                   adam.scale.setTo(-0.7, 0.7);                                              
//                                                                 
//     }
//         
//    else{
//    adam.animations.stop('walk');
//}    
//     if (game.input.keyboard.isDown (Phaser.Keyboard.UP)){adam.y =adam.y - speed}
//        
//        if (adam.y < 100){
//            adam.y =100;
//        }
//        
//     if (game.input.keyboard.isDown (Phaser.Keyboard.DOWN)){adam.y =adam.y + speed}
	}

};