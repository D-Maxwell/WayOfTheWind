class Icon {
  static constructor(instance) {
    // console.log(instance);
    return `assets/${$(instance).attr('data-type')}/${$(instance).parent().attr('id')}.png`
  }
}

// function Icon(instance){
//   return `assets/${$(instance).attr('data-type')}/${$(instance).parent().attr('id')}.png`
// }


$('icon').each(function() {
  // console.log(this,$(this),Icon.constructor(this));
  $(this).css('background-image', `url(${Icon.constructor(this)})`)
})
