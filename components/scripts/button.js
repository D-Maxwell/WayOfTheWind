class Button {
  static constructor(instance) {

    // $(instance).append(...)

    $(instance).children('label').text(prettifyString($(instance).attr('id')))

    $(instance).append(`
      <input type="checkbox" />
    `)

  }
}

$('button').each(function() {
  Button.constructor(this)
})
