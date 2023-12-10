class Tabbable {

  static constructor(instance) {
    // $(instance).append($('#tabbable').find('> *'))

    $(instance).append('<div class="tabs"></div>')

    $(instance).find('> div:not(.tabs)').each(function(idx, item) {
      $(instance).find('> .tabs').append(`
        <div>
          <span> ${prettifyString($(this).attr('id'))} </span>
          <input type="radio" value="${$(item).attr('id')}" name="${$(instance).attr('id')}" tabindex="0" ${idx==0 ? 'checked' : ''} >
        </div>
      `)

      if (idx != 0) {
        $(this).css('display','none')
      }

      // $(instance).find('> .tabs > *').append(`<input type="radio" name="${$(instance).attr('id')}" tabindex="0">`)
    })

  }


  static onclick(instance) {

    $(instance).find('> *:not(.tabs)').css('display','none')

    console.log($(instance).find('> .tabs :checked'));
    $(instance).find('> .tabs :checked').each(function(idx, item) {
      $(instance).find(`> #${$(item).attr('value')}`).css('display','')
    })

  }




}

$('tabbable').each(function() {
  Tabbable.constructor(this)
  $(this).attr('onclick','Tabbable.onclick(this)')
})
