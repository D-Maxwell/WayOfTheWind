$('.games > div').css('display','none');

$('.selector > div').each(function(){
  $(this).append(`<input type="radio" name="${$(this).parent().attr('id')}" ${$(this).attr('checked') ? "checked" : ""} />`);

  if ($(this).attr('checked')) {
    console.log($(this).index());
    $(`.games > div:nth-child(${$(this).index()+1})`).css('display','');
  }
})


$('.platform-selector > div').append('<div class="icon"></div>');

$('.platform-selector > div > .icon').each(function(){
  $(this).css('background-image', `url("assets/platforms/${$(this).parent().attr('id')}.png")`);
})

$('.games > div > div').append('<div class="icon"></div>');
$('.games > div > div').each(function(){
  $(this).find('.icon').css('background-image', `url("assets/games/${$(this).attr('id')}.png")`);
})


function flow(e){
  platform = $('input[name="platform"][type="radio"]:checked').parent();
  val = platform.index();

  $(e).css('--pos',
    parseInt($(e).css('padding-left')) + ($(platform).width() + parseInt($(e).css('gap'))) * val + "px"
  );

  $('.games>div').css('display','none');

  $('.games>#' + platform.attr('id')).css('display','');

}
$('.selector').each(function(){
  flow($(this));
})



$('.games > div > div').attr('onmouseover','fond(this)');

function fond(e){
  game = $(e).attr('id');


  img = new Image();
  img.src = `assets/backdrops/${game}.png`;
  if (img.height == 0) {
    $('body').css('--backdrop-opacity', `0`);
    return;
  }
  $('body').css('--backdrop-opacity', `1`);
  $('body').css('--backdrop', `url("assets/backdrops/${game}.png")`);

}
