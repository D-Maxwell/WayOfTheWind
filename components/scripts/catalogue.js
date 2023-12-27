class Catalogue {


  static constructor(instance) {

    for (let platform in games) {
      for (let game in games[platform]) {
        $(instance).append(`
          <div id="${game}">
            <hero data-type="covers"></hero>
          </div>
        `)
      }
    }

  }


}


$('catalogue').each(function() {
  Catalogue.constructor(this)
})
