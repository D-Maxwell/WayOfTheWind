class Games {

  static constructor(instance) {
    // $(instance).find('> div').css('display','none');
    // $(instance).find('input:checked').parent()
  }


  static onmouseover(instance) {
    $(instance).find('> div:not(:disabled) > div:is(:hover)').each(function(){
      let path = `assets/backdrops/${$(this).attr('id')}.png`;
      let img = new Image();
      img.src = path;

      if (img.height == 0){
        $('body').css('--backdrop-opacity',`0`);
        return;
      };

      $('body').css('--backdrop-opacity',`1`);
      $('body').css('--backdrop', `url('${path}')`);
    });
  }


  static onclick(instance) {
    $(instance).find('> div:not(:disabled) > div:has(input:checked)').each(function(){
      console.log(this);
      $('#preview').attr('data-game', $(this).attr('id'));

      $('#preview > .info > .chips > span').remove();

      let game = ""

      try{
        game = games[$(`input[name='platform']:checked`).parent().attr('id')][$(this).attr('id')];

        for (let genre of game.genres){
          $('#preview > .info > .chips').append(`
            <span>${genre}</span>
          `);
        }
      }
      catch{
        return;
      }

      let asset = `${$(this).attr('id')}.png`;
      $('#preview > .info > :is(icon, .icon)').css('background-image', `url('assets/titles/${asset}')`);

      // console.log(games[$(this).attr('id')]);
      asset = `${ game.series }.png`;
      console.log(`game : ${game}`);
      // rename /games/ to /logos/
      // move *.png in /titles/ to /titles/games/
      $('#preview > .series > :is(icon, .icon)').css('background-image', `url('assets/games/series/${asset}')`);
    });
  }


  static onmouseout(instance) {
    let path = `assets/backdrops/${$('#preview').attr('data-game')}.png`;

    let img = new Image();
    img.src = path;

    if (img.height == 0){
      $('body').css('--backdrop-opacity',`0`);
      return;
    };

    $('body').css('--backdrop-opacity',`1`);
    $('body').css('--backdrop', `url('${path}')`);
  }

}


$('games').each(function() {
  Games.constructor(this)
  $(this).attr('onmouseover', "Games.onmouseover(this)")
  $(this).attr('onclick', "Games.onclick(this)")
  $(this).attr('onmouseout', "Games.onmouseout(this)")
})
