class Tabbable {

  static constructor(instance) {
    // $(instance).append($('#tabbable').find('> *'))

    $(instance).append('<div class="tabs"></div>')

    $(instance).find('> div:not(.tabs)').each(function() {
      $(instance).find('> .tabs').append(`<span>${prettifyString($(this).attr('id'))}</span>`)

      $(instance).find('> .tabs > *').append(`<input type="radio" name="${$(instance)}" tabindex="0">`)
    })

  }




}

$('tabbable').each(function() {
  Tabbable.constructor(this)
})
