var demo = {};
demo.Game0 = function(){};
//var ghost;
//var cursors;
//var liftSpeed = 6;
//var speed = 10;
//var platforms;
//var ladders;
//var bullets;
//var bulletTime = 0;
//var fireButton;
//var enemies;
//var coins;
demo.Game0.prototype = {
	
    preload: function(){
        game.load.image('bullet', 'assets/bullet.png');
        game.load.image('back', 'assets/download.jpeg',0,0);
        game.load.spritesheet('ghost', 'assets/ghost.png',285,210);
        game.load.image('ground', 'assets/platform.png', 320, 32);
        game.load.image('ladder', 'assets/mladder.png');
        game.load.spritesheet('enemy', 'assets/enemy.png', 935, 1204 );
        game.load.spritesheet('coin', 'assets/coin.png', 44, 40);
        
    },
    
    
    create: function(){        
        game.world.setBounds(0,0, 800, 1080);
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        var back = game.add.sprite(0, 0, 'back');
        back.height = game.height;
        back.width = game.width;
        
//        ---------coins------------
        coins = game.add.group();
        coins.enableBody = true;
        for (var i = 0; i < 12; i++)
    {
        //  Create a star inside of the 'stars' group
        var coin = coins.create(Math.random() * 1700, i * Math.random() * 200, 'coin');

        //  Let gravity do its thing
        coin.body.gravity.y = 300;

        //  This just gives each star a slightly random bounce value
        coin.body.bounce.y = 0.7 + Math.random() * 0.2;
    }
        coins.callAll('animations.add', 'animations', 'move', [0,1,2,3,4,5,6,7,8,9], 10, true);
        coins.callAll('animations.play', 'animations', 'move');
////////        <-------------enemies------------>
        enemies = game.add.group();
        enemies.enableBody = true;
//        enemies.animations.add('react', [0, 1, 2]);
//        enemies.animations.play('react', 10, true);
        var enemy = enemies.create(400, 58, 'enemy');
        enemy.height = 120;
        enemy.width = 130;
        enemy.body.immovable = true;
        
        var enemy = enemies.create(83, 230, 'enemy');
        enemy.height = 120;
        enemy.width = 130;
        enemy.body.immovable = true;
        enemies.callAll('animations.add', 'animations', 'behave', [0, 1, 2], 5, true);

    //  And play them
    enemies.callAll('animations.play', 'animations', 'behave');
////        
//////        <-------------ladders------------->
        ladders = game.add.group();
        var ladder = ladders.create(700,175, 'ladder');
        ladder.scale.setTo(0.43,0.3);
        
        var ladder = ladders.create(0,350, 'ladder');
        ladder.scale.setTo(0.38,0.3);
        
        var ladder = ladders.create(700,525, 'ladder');
        ladder.scale.setTo(0.43,0.3);

        var ladder = ladders.create(0,700, 'ladder');
        ladder.scale.setTo(0.38,0.3);
        
        var ladder = ladders.create(700,875, 'ladder');
        ladder.scale.setTo(0.43,0.32);
////     
////        
////        
//////        <--------Ledges-------->
////        
        platforms = game.add.group();
        
        platforms.enableBody = true;
        
        
//        top ledge
        var ledge = platforms.create(0,175, 'ground');
        ledge.scale.setTo(1.75,0.5);
        ledge.body.immovable = true;
//        
//        
//        second top ledge
        var ledge = platforms.create(90,350, 'ground');
        ledge.scale.setTo(2,0.5);
        ledge.body.immovable = true;
        
//        third-top ledge
        ledge = platforms.create(0,525, 'ground');
        ledge.scale.setTo(1.75,0.5);
        ledge.body.immovable = true;
//        
//        fourth-top ledge
         var ledge = platforms.create(90,700, 'ground');
        ledge.scale.setTo(2,0.5);
        ledge.body.immovable = true;
        
        //        fifth-top ledge
         var ledge = platforms.create(0,875, 'ground');
        ledge.scale.setTo(1.75,0.5);
        ledge.body.immovable = true;
        
//        ground ledge
        var ground = platforms.create(0, game.world.height-18, 'ground');
        ground.scale.setTo(2, 0.5);
        ground.body.immovable = true;
//        
        
        
        ghost = game.add.sprite(0,110, 'ghost');
        
        game.physics.arcade.enable(ghost);
         ghost.body.bounce.y = 0.2;
        ghost.body.gravity.y = 600;
        ghost.body.collideWorldBounds = true;
        ghost.scale.setTo(0.3, 0.3);
        ghost.animations.add('walk',[0,1,2]);
//        adam.anchor.setTo(0.5, 0.5);
         
        game.camera.follow(ghost);
//        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;'
         //  The score
    scoreText = game.add.text(650, 16, 'score: 0', { fontSize: '25px', fill: '	#FFFFFF' });
        cursors = game.input.keyboard.createCursorKeys();
//        fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    },

    update: function(){
        game.physics.arcade.collide(coins, platforms);
        game.physics.arcade.collide(enemies, platforms);
//////        game.physics.arcade.collide(ghost, enemies);
        game.physics.arcade.collide(ghost, platforms);
////        
//////        game.physics.arcade.overlap(ghost, coins, collectCoin, null, this);
//////    if(checkOverlap(coins, ghost)){
//////        coins.kill();
//////    }    
////        
         ghost.body.velocity.x = 0;

    if (cursors.left.isDown)
    {
        //  Move to the left
        ghost.body.velocity.x = -150;

        ghost.animations.play('walk', 10, true);
    }
    else if (cursors.right.isDown)
    {
        //  Move to the right
        ghost.body.velocity.x = 150;

        ghost.animations.play('walk', 10 , true);
    }
    else
    {
        //  Stand still
        ghost.animations.stop();

        ghost.frame = 0;
    }
//    //  Firing?
//    if (fireButton.isDown)
//    {
//        
//    }
//
////    if (game.time.now > firingTimer)
////    {
////        enemyFires();
////    }
//
//    //  Run collision
////    game.physics.arcade.overlap(bullets, aliens, collisionHandler, null, this);
////    game.physics.arcade.overlap(enemyBullets, player, enemyHitsPlayer, null, this);
    if(cursors.down.isDown){
        ghost.body.velocity.y = 200;
    }
    //  Allow the player to jump if they are touching the ground.
    if (cursors.up.isDown)
    {
        ghost.body.velocity.y = -200;
    }

},
//
////    
////    collectCoin: function(ghost, coin){
////        coin.kill();
////        
////        score += 10;
////        scoreText.text = 'Score: ' + score;
////    }
////checkOverlap: function(spriteA, spriteB) {
////
////    var boundsA = spriteA.getBounds();
////    var boundsB = spriteB.getBounds();
////
////    return Phaser.Rectangle.intersects(boundsA, boundsB);
////
  
};