window.onload = function() { init() };

var public_spreadsheet_url = 'https://docs.google.com/spreadsheet/pub?key=0AmhWglGO45rldGM3YjBfX2FzTFhUbW5NR3BlR2FUX0E&output=html';

function init() {
  Tabletop.init({
    key: public_spreadsheet_url,
    callback: showInfo,
    simpleSheet: true })
}

function showInfo(data, tabletop) {
  $('.answer').text(data[0].answer)
  $('.description').text(data[0].description)

  $('.spinner').hide()
}
