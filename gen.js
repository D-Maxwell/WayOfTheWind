//document.write(JSON.parse(games));

// data = $.ajax({
//   url:"./data/games.json",
//   type: "GET",
//   dataType: "JSON"
//   // crossDomain: true
// });

// data = $.getJSON("games.json", function(){
//   console.log(data);
// });
//data = fetch("games.json");



let index=0;
for (let platform in games) {

  $('#platform').append(`
    <div id="${platform}" ${index==0 ? "checked":''}></div>
  `)


  $('#games').append(`
    <div id="${platform}"></div>
  `)

  for (let game in games[platform]) {
    $(`#games > #${platform}`).append(`
      <div id="${game}"></div>
    `)
  }

  index++;
}
