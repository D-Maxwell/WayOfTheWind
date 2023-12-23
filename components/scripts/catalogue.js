class Catalogue {


  static constructor(instance) {

    for (let platform in games) {
      for (let game in games[platform]) {
        $(instance).append(`
          <div></div>
        `)
      }
    }

  }


}


$('catalogue').each(function() {
  Catalogue.constructor(this)
})
