// function diagonalFontSize(CascadeEntryPoint) {
//   CascadeEntryPoint.css('font-size', (visualViewport.width**2 + visualViewport.height**2)**(1/2) / 100);
// }
// $('body').css('font-size', (visualViewport.width**2 + visualViewport.height**2)**(1/2) / 100);


$('#games > div').css('display','none');

$('.selector > div').each(function(){
  $(this).append(`<input type="radio" name="${$(this).parent().attr('id')}" ${$(this).attr('checked') ? "checked" : ""} />`);

  if ($(this).attr('checked')) {
    $(`#games > div:nth-child(${$(this).index()+1})`).css('display','');
  }
})


$('.platform-selector > div').append('<div class="icon"></div>');

$('.platform-selector > div > .icon').each(function(){
  $(this).css('background-image', `url("assets/platforms/${$(this).parent().attr('id')}.png")`);
})

$('#games > div > div').append('<div class="icon"></div>');
$('#games > div > div').each(function(){
  $(this).find('.icon').css('background-image', `url("assets/games/${$(this).attr('id')}.png")`);
})

// $('#games > div').addClass('tabbable');

// dirty, bad dobby, bad
$('#games > div > div').each(function(idx){
  if (idx == 0 && $(this).parent().index() == 0) {
    $('body').css('--backdrop',`url("assets/backdrops/${$(this).attr('id')}.png")`);
  };

  $(this).append(`<input type="radio" name="${$(this).parent().attr('id')}" tabindex="0" />`);
})


// $('.tabbable > *').attr('tabindex',"0");


// $('#games > div > div').append(`
//   <div class="info">
//     <h2 class="icon"></h2>
//     <div id="chips">
//       <div>Release Date</div>
//       <div>Genres</div>
//       <div>...</div>
//     </div>
//     <!-- row of buttons TBI -->
//   </div>
//   <div class="content">
//     <button id="yuzu" type="button"><div class="icon"></div><span>Yuzu</span></button>
//     <button id="ryujinx" type="button"><div class="icon"></div><span>Ryujinx</span></button>
//   </div>
// `);

// $('#games > div > div').each(function(){
//   $(this).find('.info > h2.icon').css('background-image',`url("assets/titles/${$(this).attr('id')}.png")`);
// })
//
//
// $('#games > div > div > .content > button').each(function(idx){
//   $(this).css('--color',['0,0,255','255,0,0'][idx%2]);
// })
//
// $('#games > div > div > .content > button > .icon').each(function(){
//   // console.log($(this).parent().attr('id'));
//   $(this).css('background-image', `url("assets/emulators/${$(this).parent().attr('id')}.png")`);
// })

// dynamic path attempt
// $('.icon').each(function(){
//   $(this).css('background-image', `assets/${}`)
// })



// function preload(path){
//   let cached = new Image();
//   cached.src = path;
//   return cached;
// }


// function flow(e){
//   return;
//   platform = $('input[name="platform"][type="radio"]:checked').parent();
//   val = platform.index();
//
//   $(e).css('--pos',
//     parseInt($(e).css('padding-left')) + ($(platform).width() + parseInt($(e).css('gap'))) * val + "px"
//   );
//
//   $('#games>div').css('display','none');
//
//   $('#games>#' + platform.attr('id')).css('display','');
//
//   // $(`#games > #${platform.attr('id')} > div`).each(function(){
//   //   preload(`assets/backdrops/${$(this).attr('id')}.png`);
//   // })
//
// }
// $('.selector').each(function(){
//   flow($(this));
// })



// $('#games > div > div').each(function(){
//   $(this).attr('onmouseover','fond(this)')
//   $(this).find('input').attr('onfocus','fond($(this).parent())');
// })

// function fond(e){
//   return;
//   game = $(e).attr('id');
//
//
//   img = preload(`assets/backdrops/${game}.png`);
//   if (img.height == 0) {
//     $('body').css('--backdrop-opacity', `0`);
//     return;
//   }
//   $('body').css('--backdrop-opacity', `1`);
//   $('body').css('--backdrop', `url("assets/backdrops/${game}.png")`);
//
// }


// not mine, wish I had come up with that, didn't know about eval
$('[data-onload]').each(function(){
    eval($(this).data('onload'));
});
