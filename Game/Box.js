var game = new Phaser.Game(1000, 700, Phaser.AUTO);
game.state.add('Game0', demo.Game0);
game.state.start('Game0');