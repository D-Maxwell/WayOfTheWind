class Button {
  static constructor(instance) {

    // $(instance).append(...)

    $(instance).children('label').text(prettifyString($(instance).attr('id')))
  }
}

$('button').each(function() {
  Button.constructor(this)
})
