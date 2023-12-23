class Switch extends Button {

  static onclick(instance) {
    let link = $(instance).attr('data-link');

    if ($(instance).find('> input').prop('checked')) {
      $(link).removeAttr('disabled')
    } else {
      $(link).attr('disabled',"disabled")
    }

  }

}


$('switch').each(function() {
  Switch.constructor(this)
  $(this).attr('onclick', "Switch.onclick(this)")
})
