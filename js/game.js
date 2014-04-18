var game = new Phaser.Game(600, 200, Phaser.AUTO, 'phaser');

game.state.add('Load', Game.Load);
game.state.add('Play', Game.Play);
game.state.add('End', Game.End);

game.state.start('Load');

