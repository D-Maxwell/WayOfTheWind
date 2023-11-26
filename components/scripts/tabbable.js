class Tabbable {

  static constructor(instance) {
    // $(instance).append($('#tabbable').find('> *'))

    $(instance).append('<div class="tabs"></div>')
    $(instance).find('> div:not(.tabs)').each(function() {
      console.log($(this));
      $(instance).find('> .tabs').append(`<div>${prettifyString($(this).attr('id'))}</div>`)
    })
  }




}

$('tabbable').each(function() {
  Tabbable.constructor(this)
})
