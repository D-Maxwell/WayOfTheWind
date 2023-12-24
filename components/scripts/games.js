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
        // $('body').css('--backdrop-opacity',`0`);
        return;
      };

      $('body').css('--backdrop-opacity',`1`);
      $('body').css('--backdrop', `url('${path}')`);
    });
  }


  static onclick(instance) {
    $(instance).find('> div:not(:disabled) > div:has(input:checked)').each(function(){

      let link = $(instance).attr('data-link');

      $(link).attr('data-game', $(this).attr('id'));

      $(link).find('> #preview > .info > .chips > span').remove();


      let game = ""

      try{
        game = games[$(`input[name='platform']:checked`).parent().attr('id')][$(this).attr('id')];

        for (let genre of game.genres){
          $(link).find('> #preview > .info > .chips').append(`
            <span>${genre}</span>
          `);
        }
      }
      catch{
        return;
      }

      let asset = `${$(this).attr('id')}.png`;
      $(link).find('> #preview > .info > :is(icon, .icon)').css('background-image', `url('assets/titles/${asset}')`);

      // console.log(games[$(this).attr('id')]);
      asset = `${ game.series }.png`;
      console.log(`game : ${game}`);
      // rename /games/ to /logos/
      // move *.png in /titles/ to /titles/games/
      $(link).find('> #preview > .series > :is(icon, .icon)').each(function(){
        $(this).css('background-image', `url('assets/games/series/${asset}')`);
        $(this).attr('title', series[game.series]);
      })


      function prettyFormat(text) {
        text = text.split(".")
        for (let [s,sentence] of text.entries()) {
          text[s] = sentence.trim()
          if (sentence == "") {
            text.pop()
          }
        }
        return text
      }

      $(link).find('> #preview .description > *').remove();

      for (const sentence of prettyFormat(game.description)) {
        $(link).find('> #preview .description').append(`
          <p>${sentence}.</p>
        `)
      }


      // $(link).find('> #preview > .description').text(
      //   prettyFormat(game.description)
      // )


    });
  }


  static onmouseout(instance) {
    let path = `assets/backdrops/${$('#game').attr('data-game')}.png`;

    let img = new Image();
    img.src = path;

    if (img.height == 0){
      // $('body').css('--backdrop-opacity',`0`);
      return;
    };

    $('body').css('--backdrop-opacity',`1`);
    $('body').css('--backdrop', `url('${path}')`);
  }

}


$('games').each(function() {
  Games.constructor(this)
  // Games.onclick(this)
  $(this).attr('onmouseover', "Games.onmouseover(this)")
  $(this).attr('onclick', "Games.onclick(this)")
  $(this).attr('onmouseout', "Games.onmouseout(this)")
})
