class View {
  constructor(game, $el) {
    this.el = $el;
    this.game = game;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    let that = this;

    $('li').on('mouseover', function () {
      $(this).removeClass('cell');
      $(this).addClass('hover');

      if (that.game.winner()) {
        $(this).removeClass('hover');
        $(this).removeClass('cell');
      }
    });

    $('li').on('mouseout', function () {
      $(this).removeClass('hover');
      $(this).addClass('cell');

      if (that.game.winner()) {
        $(this).removeClass('hover');
        $(this).removeClass('cell');
      }
    });

    $('li').on('click', e => {
      let $square = $(e.target);

      if (this.game.winner() === null){
        this.makeMove($square);
      }
    });
  }

  makeMove($square) {
    this.game.playMove($square.data('pos'));
    $square.removeClass('cell').removeClass('hover');
    $square.addClass('click');
    $square.data('player', this.game.currentPlayer);
    $square.text(this.game.currentPlayer);
    let that = this;

    if (this.game.winner()){
      $('li').each(function () {
        let $sq = $(this);
        if ($sq.data('player') === that.game.currentPlayer){
          $sq.removeClass('click');
          $sq.addClass('winner');
        } else {
          $sq.removeClass('click');
          $sq.removeClass('cell');
          $sq.addClass('loser');
        }
      });

      this.el.append(`<h3> All Win: ${this.game.currentPlayer.toUpperCase()} </h3>`);
    }
  }

  setupBoard() {
    let $board = $('<ul>');
    $board.addClass('board');

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++){
        let $cell = $('<li>');
        $cell.addClass('cell').addClass('default-cell');
        $cell.data('pos', [i, j]);
        $board.append($cell);
      }
    }
    this.el.append($board);
  }
}

module.exports = View;
