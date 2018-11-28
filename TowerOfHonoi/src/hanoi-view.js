class View {
  constructor(game, $el){
    this.game = game;
    this.el = $el;
    this.setupTowers();
    this.bindEvents();
    this.selectedTower = null;
  }

  setupTowers(){
    let $towers = $('<div>').addClass('towers');

    let $pile = $('<ul>');
    $pile.addClass('pile');
    $pile.attr('id', 'pile0');
    $pile.data('index', 0);
    $towers.append($pile);

    for (let i = 1; i < 4; i++){
      let $disk = $('<li>');
      $disk.addClass('disk');
      $disk.attr('id', 'disk' + i);
      $disk.data('index', i);
      $pile.append($disk);
    }

    for (let i = 1; i < 3; i++){
      let $pile = $('<ul>');
      $pile.addClass('pile');
      $pile.attr('id', 'pile' + i);
      $pile.data('index', i);
      $towers.append($pile);
    }

    this.el.append($towers);
  }

  bindEvents() {
    let that = this;

    $('li').on('mouseover', function () {
      $(this).addClass('select');
    });

    $('li').on('mouseout', function () {
      $(this).removeClass('select');
    });

    $('li').on('click', function() {
      $(this).removeClass('select');
      $(this).addClass('clicked');
    });

    $('ul').on('click', function() {
      this.selectedTower = $(this).data('index');
      // $(this).removeClass('select');
      // $(this).addClass('clicked');
    });
  }

}



module.exports = View;
