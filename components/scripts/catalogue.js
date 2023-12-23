class Catalogue {


  static constructor(instance) {

    for (let platform in games) {
      for (let game in games[platform]) {
        $(instance).append(`
          <div id="${game}" style="background-image: url('assets/covers/${game}.png')">

          </div>
        `)
      }
    }

  }


}


$('catalogue').each(function() {
  Catalogue.constructor(this)
})
