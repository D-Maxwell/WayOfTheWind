class Platform {

  static constructor(instance) {

    $(instance).find('> div').each(function() {
      $(this).append(`<input type="radio" name="${$(this).parent().attr('id')}" ${$(this).attr('checked') ? "checked" : ""} />`);
    })


    $($(instance).attr('data-link')).find('> div').css('display','none');

    $(
      $(instance).attr('data-link')
    ).children(`#${
      $(instance).find('> * > :checked').parent().attr('id')
    }`).css('display','').removeAttr('disabled')
  }


  static onclick(instance) {
    instance.platform = $(`input[name='platform'][type='radio']:checked`).parent();
    instance.val = instance.platform.index();

    $(instance).css('--pos',
      $(instance.platform).position().left + 'px'
    );

    $(`${$(instance).attr('data-link')}`).find('> div').css('display','none').attr('disabled','true');

    $(`${$(instance).attr('data-link')}`).find(`> #${instance.platform.attr('id')}`).css('display','').removeAttr('disabled');



    // $('#preview > .tabs > div').remove();
    //
    // for (let emulator of emulators[instance.platform.attr('id')]){
    //   let path = `assets/emulators/${emulator}.png`;
    //
    //   $('#preview > .tabs').append(`
    //     <div id='${emulator}'>
    //       <input type='radio' name='emulators' />
    //       <div class='icon' style='background-image:url("${path}")'></div>
    //     </div>
    //   `)
    //
    //   // <span>${emulator[0].toUpperCase()+emulator.slice(1)}</span>
    // }

  }

}


// $('#platform').attr('data-instance', new Platform());
$('platform').each(function(){
  Platform.constructor(this)
  $(this).attr('onclick','Platform.onclick(this)')
})
