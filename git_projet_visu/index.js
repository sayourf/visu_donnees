// Caneva SVG
var width = 930;
var height = 300;

var canevas = d3.select("body")
  .append("svg")
    .attr("width", width)
    .attr("height", height);

// Données
const data3 = [
  [88.7, 92.9, 91.4, 92.1, 88.7],
  [71.2, 77.8, 80.3, 73.9, 52.5],
  [90.8, 75.2, 49.1, 24.1, 6.7],
  [86.5, 69.7, 46.5, 25.2, 8.2],
  [85.4, 60.1, 35.0, 13.8, 4.8],
  [68.8, 54.0, 36.5, 16.4, 5.5],
  [16.5, 19.3, 23.1, 32.2, 38.2]
];
// Label des ticks du slider d3
const tickLabels = ['15-29', '30-44', '45-59', '60-74', '+75']

// importations des images et ajout des labels
var Radio = canevas.append('image')
  .attr('xlink:href', "./logos/radio.png")
  .attr('x', '70')
  .attr('y', '50');

var Radio_label = canevas.append('text')
  .text("Radio / Television")
  .attr("x", '70')
  .attr('y', '30');

var CD_DVD = canevas.append('image')
  .attr('xlink:href', "./logos/compact-disc.png")
  .attr('x', '200')
  .attr('y', '50')

var CD_DVD_label = canevas.append('text')
  .text("CD-ROM / DVD")
  .attr("x", '200')
  .attr('y', '30');

var Internet = canevas.append('image')
  .attr('xlink:href', "./logos/internet.png")
  .attr('x', '315')
  .attr('y', '50')

var Internet_label = canevas.append('text')
  .text("Internet")
  .attr("x", '330')
  .attr('y', '30');

var Ordinateur = canevas.append('image')
  .attr('xlink:href', "./logos/computer.png")
  .attr('x', '435')
  .attr('y', '50')

var Ordinateur_label = canevas.append('text')
  .text("Ordi / Tablette")
  .attr("x", '435')
  .attr('y', '30');

var Tel_portable = canevas.append('image')
  .attr('xlink:href', "./logos/smartphone.png")
  .attr('x', '555')
  .attr('y', '50')

var Tel_portable_label = canevas.append('text')
  .text("Téléphone")
  .attr("x", '560')
  .attr('y', '30');

var MP3 = canevas.append('image')
  .attr('xlink:href', "./logos/ipod.png")
  .attr('x', '680')
  .attr('y', '50')

var MP3_label = canevas.append('text')
  .text("Baladeur MP3")
  .attr("x", '670')
  .attr('y', '30');

var Vinyl_cassette = canevas.append('image')
  .attr('xlink:href', "./logos/cassette.jpg")
  .attr('x', '805')
  .attr('y', '50')

var Vinyl_cassette_label = canevas.append('text')
  .text("Vinyles / Cassettes")
  .attr("x", '790')
  .attr('y', '30');

// SLIDER et modification taille icones
var slider = d3.sliderHorizontal()
    .min(0)
    .max(4)
    .step(1)
    .ticks(5)
    .tickFormat(function(d, i){ return tickLabels[i]})
    .width(500)
    // etape1: selection de la catégorie de la coche du slider correspondant à une catégorie
    .on('onchange', val => {
      d3.select("#value").text(tickLabels[val]);

      radValue = data3[0][val]
      if (radValue < 10)
        radValue = 10;
      if (radValue > 11 && radValue <19)
        radValue = 20;
      if (radValue > 21 && radValue <29)
        radValue = 30;
      if (radValue > 31 && radValue <39)
        radValue = 40;
      if (radValue > 41 && radValue <49)
        radValue = 50;
      if (radValue > 51 && radValue <59)
        radValue = 60;
      if (radValue > 61 && radValue <69)
        radValue = 70;
      if (radValue > 71 && radValue <79)
        radValue = 80;
      if (radValue > 81 && radValue <89)
        radValue = 90;
      if (radValue > 91)
        radValue = 100;

      cdValue = data3[1][val]
      if (cdValue < 10)
        cdValue = 10;
      if (cdValue > 11 && cdValue <19)
        cdValue = 20;
      if (cdValue > 21 && cdValue <29)
        cdValue = 30;
      if (cdValue > 31 && cdValue <39)
        cdValue = 40;
      if (cdValue > 41 && cdValue <49)
        cdValue = 50;
      if (cdValue > 51 && cdValue <59)
        cdValue = 60;
      if (cdValue > 61 && cdValue <69)
        cdValue = 70;
      if (cdValue > 71 && cdValue <79)
        cdValue = 80;
      if (cdValue > 81 && cdValue <89)
        cdValue = 90;
      if (cdValue > 91)
        cdValue = 100;

      internetValue = data3[2][val]
      if (internetValue < 10)
        internetValue = 10;
      if (internetValue > 11 && internetValue <19)
        internetValue = 20;
      if (internetValue > 21 && internetValue <29)
        internetValue = 30;
      if (internetValue > 31 && internetValue <39)
        internetValue = 40;
      if (internetValue > 41 && internetValue <49)
        internetValue = 50;
      if (internetValue > 51 && internetValue <59)
        internetValue = 60;
      if (internetValue > 61 && internetValue <69)
        internetValue = 70;
      if (internetValue > 71 && internetValue <79)
        internetValue = 80;
      if (internetValue > 81 && internetValue <89)
        internetValue = 90;
      if (internetValue > 91)
        internetValue = 100;

      ordiValue = data3[3][val]
      if (ordiValue < 10)
        ordiValue = 10;
      if (ordiValue > 11 && ordiValue <19)
        ordiValue = 20;
      if (ordiValue > 21 && ordiValue <29)
        ordiValue = 30;
      if (ordiValue > 31 && ordiValue <39)
        ordiValue = 40;
      if (ordiValue > 41 && ordiValue <49)
        ordiValue = 50;
      if (ordiValue > 51 && ordiValue <59)
        ordiValue = 60;
      if (ordiValue > 61 && ordiValue <69)
        ordiValue = 70;
      if (ordiValue > 71 && ordiValue <79)
        ordiValue = 80;
      if (ordiValue > 81 && ordiValue <89)
        ordiValue = 90;
      if (ordiValue > 91)
        ordiValue = 100;

      telValue = data3[4][val]
      if (telValue < 10)
        telValue = 10;
      if (telValue > 11 && telValue <19)
        telValue = 20;
      if (telValue > 21 && telValue <29)
        telValue = 30;
      if (telValue > 31 && telValue <39)
        telValue = 40;
      if (telValue > 41 && telValue <49)
        telValue = 50;
      if (telValue > 51 && telValue <59)
        telValue = 60;
      if (telValue > 61 && telValue <69)
        telValue = 70;
      if (telValue > 71 && telValue <79)
        telValue = 80;
      if (telValue > 81 && telValue <89)
        telValue = 90;
      if (telValue > 91)
        telValue = 100;

      mp3Value = data3[5][val]
      if (mp3Value < 10)
        mp3Value = 10;
      if (mp3Value > 11 && mp3Value <19)
        mp3Value = 20;
      if (mp3Value > 21 && mp3Value <29)
        mp3Value = 30;
      if (mp3Value > 31 && mp3Value <39)
        mp3Value = 40;
      if (mp3Value > 41 && mp3Value <49)
        mp3Value = 50;
      if (mp3Value > 51 && mp3Value <59)
        mp3Value = 60;
      if (mp3Value > 61 && mp3Value <69)
        mp3Value = 70;
      if (mp3Value > 71 && mp3Value <79)
        mp3Value = 80;
      if (mp3Value > 81 && mp3Value <89)
        mp3Value = 90;
      if (mp3Value > 91)
        mp3Value = 100;

      vinylValue = data3[6][val]
      if (vinylValue < 10)
        vinylValue = 10;
      if (vinylValue > 11 && vinylValue <19)
        vinylValue = 20;
      if (vinylValue > 21 && vinylValue <29)
        vinylValue = 30;
      if (vinylValue > 31 && vinylValue <39)
        vinylValue = 40;
      if (vinylValue > 41 && vinylValue <49)
        vinylValue = 50;
      if (vinylValue > 51 && vinylValue <59)
        vinylValue = 60;
      if (vinylValue > 61 && vinylValue <69)
        vinylValue = 70;
      if (vinylValue > 71 && vinylValue <79)
        vinylValue = 80;
      if (vinylValue > 81 && vinylValue <89)
        vinylValue = 90;
      if (vinylValue > 91)
        vinylValue = 100;

      Radio.attr('width', radValue);
      CD_DVD.attr('width', data3[1][val]);
      Internet.attr('width', data3[2][val]);
      Ordinateur.attr('width', data3[3][val]);
      Tel_portable.attr('width', data3[4][val]);
      MP3.attr('width', data3[5][val]);
      Vinyl_cassette.attr('width', data3[6][val]);

    });

var g = d3.select("div#slider").append("svg")
    .data(data3)
    .attr("width", 850)
    .attr("height", 80)
    .append("g")
    .attr("transform", "translate(200,30)")
    .on('onchange', val => {
      console.log(val);//   data.sort(function(a){return (a.premiere_tranche) = val})
    });

g.call(slider);
