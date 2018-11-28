const View = require ('./ttt-view.js'); // require appropriate file
const Game =  require ('./game.js');

  $(() => {
    // Your code here
    let game = new Game();
    let $el = $('h1');
    let v = new View(game, $el);
  });
