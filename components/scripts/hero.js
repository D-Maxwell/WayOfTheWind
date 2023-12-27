class Hero {
  static constructor(instance) {
    return `assets/${$(instance).attr('data-type')}/${$(instance).parent().attr('id')}.png`
  }
}

$('hero').each(function() {
  $(this).css('background-image', `url(${Hero.constructor(this)})`)
})
