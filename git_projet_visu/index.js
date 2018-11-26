// Caneva SVG
var width = 850;
var height = 500;

var canevas = d3.select("body")
  .append("svg")
    .attr("width", width)
    .attr("height", height);

// Données
// const data = [
//   {"appareil": "Radio_TV", "premiere_tranche": 88.7, "deuxieme_tranche": 92.9, "troisieme_tranche": 91.4, "quatrieme_tranche": 92.1, "cinquieme_tranche": 88.7},
//   {"appareil": "CD_DVD", "premiere_tranche": 71.2, "deuxieme_tranche": 77.8, "troisieme_tranche": 80.3, "quatrieme_tranche": 73.9, "cinquieme_tranche": 52.5},
//   {"appareil": "Internet", "premiere_tranche": 90.8, "deuxieme_tranche": 75.2, "troisieme_tranche": 49.1, "quatrieme_tranche": 24.1, "cinquieme_tranche": 6.7},
//   {"appareil": "Ordinateur", "premiere_tranche": 86.5, "deuxieme_tranche": 69.7, "troisieme_tranche": 46.5, "quatrieme_tranche": 25.2, "cinquieme_tranche": 8.2},
//   {"appareil": "Tel_portable", "premiere_tranche": 85.4, "deuxieme_tranche": 60.1, "troisieme_tranche": 35.0, "quatrieme_tranche": 13.8, "cinquieme_tranche": 4.8},
//   {"appareil": "MP3", "premiere_tranche": 68.8, "deuxieme_tranche": 54.0, "troisieme_tranche": 36.5, "quatrieme_tranche": 16.4, "cinquieme_tranche": 5.5},
//   {"appareil": "Vinyl_cassette", "premiere_tranche": 16.5, "deuxieme_tranche": 19.3, "troisieme_tranche": 23.1, "quatrieme_tranche": 32.2, "cinquieme_tranche": 38.2}
// ]
//
// const data2 = [
//   {"media": "Radio_TV",
//     "valeurs": [88.7, 92.9, 91.4, 92.1, 88.7]},
//   {"media": "CD_DVD",
//     "valeurs": [71.2, 77.8, 80.3, 73.9, 52.5]},
//   {"media": "Internet",
//     "valeurs": [90.8, 75.2, 49.1, 24.1, 6.7]},
//   {"media": "Ordinateur",
//     "valeurs": [86.5, 69.7, 46.5, 25.2, 8.2]},
//   {"media": "Tel_portable",
//     "valeurs": [85.4, 60.1, 35.0, 13.8, 4.8]},
//   {"media": "MP3",
//     "valeurs": [68.8, 54.0, 36.5, 16.4, 5.5]},
//   {"media": "Vinyl_cassette",
//     "valeurs": [16.5, 19.3, 23.1, 32.2, 38.2]},
// ];

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

// Tooltips sur les images
// var div = canevas.append("div")
//     .attr("class", "tooltip")
//     .style("opacity", 0);

var tooltip = canevas.append('div')
  .style("position", "absolute")
  .style("z-index", "10")
  .style("visibility", "hidden")
  .text("Radio");

// importations des images
var Radio = canevas.append('image')
  .attr('xlink:href', "./logos/radio.png")
  .attr('x', '60')
  .attr('y', '100')
  .on("mouseover", function(){return tooltip.style("visibility", "visible");})
  // .on("mousemove", function(){return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px");})
  .on("mouseout", function(){return tooltip.style("visibility", "hidden");});

  // .on("mouseover", function(d) {
  //   div.transition()
  //       // .duration(200)
  //       .style("opacity", .9)
  //       .text("Radio");
  //     })
  // .on("mouseout", function(d) {
  //   div.transition()
  //       .duration(500)
  //       .style("opacity", 0);
  // });

var CD_DVD = canevas.append('image')
  .attr('xlink:href', "./logos/compact-disc.png")
  .attr('x', '180')
  .attr('y', '100')

var Internet = canevas.append('image')
  .attr('xlink:href', "./logos/internet.png")
  .attr('x', '290')
  .attr('y', '100')

var Ordinateur = canevas.append('image')
  .attr('xlink:href', "./logos/computer.png")
  .attr('x', '400')
  .attr('y', '100')

var Tel_portable = canevas.append('image')
  .attr('xlink:href', "./logos/smartphone.png")
  .attr('x', '500')
  .attr('y', '100')

var MP3 = canevas.append('image')
  .attr('xlink:href', "./logos/ipod.png")
  .attr('x', '610')
  .attr('y', '100')

var Vinyl_cassette = canevas.append('image')
  .attr('xlink:href', "./logos/cassette.jpg")
  .attr('x', '730')
  .attr('y', '100')

// SLIDER:
var slider = d3.sliderHorizontal()
    .min(0)
    .max(4)
    .step(1)
    .ticks(5)
    .tickFormat(function(d, i){ return tickLabels[i]})
    .width(500)
    // etape1: selection de la catégorie de la coche du slider correspondant à une catégorie
    .on('onchange', val => {
      d3.select("#value2").text(tickLabels[val]);

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

      // pour chaque catégorie, récupère la valeur de la tranche actuelle et applique le modificateur
      /*data2.forEach(function(d,i){
        console.log(d);
        // console.log(val);
        canevas.selectAll('image')
          .attr('width', function(){
            data2.forEach(function(d,i){
              for (let p in d){
              if(p !== 'media'){
                document.write(d[p]);
                }
              }
            })
          });
      });*/
    });

var g = d3.select("div#slider").append("svg")
    .data(data3)
    .attr("width", 850)
    .attr("height", 80)
    .append("g")
    .attr("transform", "translate(200,30)")
    // .enter().append('image');
    .on('onchange', val => {
      console.log(val);//   data.sort(function(a){return (a.premiere_tranche) = val})
    });

g.call(slider);

// var modif_taille = canevas.selectAll('image')
//   .data(data)
//   .enter().append('image')
//   .on('onchange', val => {
//     console.log(val)//data.sort(function(a){return (a.premiere_tranche) = val})
//   });

// const total = data.filter(d => d.premiere_tranche>50).length;
// console.log(total);
