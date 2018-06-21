// Caneva SVG
var width = 850;
var height = 500;

var canevas = d3.select("body")
  .append("svg")
    .attr("width", width)
    .attr("height", height);

// Données
const data = [
  {"appareil": "Radio_TV", "premiere_tranche": 88.7, "deuxieme_tranche": 92.9, "troisieme_tranche": 91.4, "quatrieme_tranche": 92.1, "cinquieme_tranche": 88.7},
  {"appareil": "CD_DVD", "premiere_tranche": 71.2, "deuxieme_tranche": 77.8, "troisieme_tranche": 80.3, "quatrieme_tranche": 73.9, "cinquieme_tranche": 52.5},
  {"appareil": "Internet", "premiere_tranche": 90.8, "deuxieme_tranche": 75.2, "troisieme_tranche": 49.1, "quatrieme_tranche": 24.1, "cinquieme_tranche": 6.7},
  {"appareil": "Ordinateur", "premiere_tranche": 86.5, "deuxieme_tranche": 69.7, "troisieme_tranche": 46.5, "quatrieme_tranche": 25.2, "cinquieme_tranche": 8.2},
  {"appareil": "Tel_portable", "premiere_tranche": 85.4, "deuxieme_tranche": 60.1, "troisieme_tranche": 35.0, "quatrieme_tranche": 13.8, "cinquieme_tranche": 4.8},
  {"appareil": "MP3", "premiere_tranche": 68.8, "deuxieme_tranche": 54.0, "troisieme_tranche": 36.5, "quatrieme_tranche": 16.4, "cinquieme_tranche": 5.5},
  {"appareil": "Vinyl_cassette", "premiere_tranche": 16.5, "deuxieme_tranche": 19.3, "troisieme_tranche": 23.1, "quatrieme_tranche": 32.2, "cinquieme_tranche": 38.2}
]

const data2 = [
  {"media": "Radio_TV",
    "valeurs": [88.7, 92.9, 91.4, 92.1, 88.7]},
  {"media": "CD_DVD",
    "valeurs": [71.2, 77.8, 80.3, 73.9, 52.5]},
  {"media": "Internet",
    "valeurs": [90.8, 75.2, 49.1, 24.1, 6.7]},
  {"media": "Ordinateur",
    "valeurs": [86.5, 69.7, 46.5, 25.2, 8.2]},
  {"media": "Tel_portable",
    "valeurs": [85.4, 60.1, 35.0, 13.8, 4.8]},
  {"media": "MP3",
    "valeurs": [68.8, 54.0, 36.5, 16.4, 5.5]},
  {"media": "Vinyl_cassette",
    "valeurs": [16.5, 19.3, 23.1, 32.2, 38.2]},
]
// Label des ticks du slider d3
const tickLabels = ['15-29', '30-44', '45-59', '60-74', '+75']

// importations des images
var Radio = canevas.append('image')
  .attr('xlink:href', "./logos/radio.png")
  .attr('x', '60')
  .attr('y', '100')
  .attr('width', '100')
  .attr('height', '100');

var CD_DVD = canevas.append('image')
  .attr('xlink:href', "./logos/compact-disc.png")
  .attr('x', '180')
  .attr('y', '100')
  .attr('width', '100')
  .attr('height', '100');

var Internet = canevas.append('image')
  .attr('xlink:href', "./logos/internet.png")
  .attr('x', '290')
  .attr('y', '100')
  .attr('width', '100')
  .attr('height', '100');

var Ordinateur = canevas.append('image')
  .attr('xlink:href', "./logos/computer.png")
  .attr('x', '400')
  .attr('y', '100')
  .attr('width', '100')
  .attr('height', '100');

var Tel_portable = canevas.append('image')
  .attr('xlink:href', "./logos/smartphone.png")
  .attr('x', '500')
  .attr('y', '100')
  .attr('width', '100')
  .attr('height', '100');

var MP3 = canevas.append('image')
  .attr('xlink:href', "./logos/ipod.png")
  .attr('x', '610')
  .attr('y', '100')
  .attr('width', '100')
  .attr('height', '100');

var Vinyl_cassette = canevas.append('image')
  .attr('xlink:href', "./logos/cassette.jpg")
  .attr('x', '730')
  .attr('y', '100')
  .attr('width', '100')
  .attr('height', '100');

// 1er SLIDER:
// Modification de la taille des images (1er slider)
d3.select("#nSize").on("input", function() {
  update(+this.value);
});
// Taille initiale des images :
// update(120);
// update des elements
function update(nSize) {
  // ajuste le text à côté du slider
  d3.select("#nSize-value").text(nSize);
  d3.select("#nSize").property("value", nSize);
  // modif de la taille
  canevas.selectAll("image")
    .attr("width", nSize);
}

// 2ème SLIDER:
var slider2 = d3.sliderHorizontal()
    .min(0)
    .max(4)
    .step(1)
    .ticks(5)
    .tickFormat(function(d, i){ return tickLabels[i]})
    .width(300)
    // etape1: selection de la catégorie de la coche du slider correspondant à une catégorie
    .on('onchange', val => {
      d3.select("#value2").text(tickLabels[val]);
      // pour chaque catégorie, récupère la valeur de la tranche actuelle et applique le modificateur
      d3.entries(data2).forEach(function(d,i){
        console.log(val);
        d3.selectAll('image')
          .attr('width', function(){
            data2.forEach(function(d,i){
              for (let p in d.valeurs){
                console.log(d.valeurs[p]);
              if(p !== 'media'){
                d.valeurs[p] = slider2[val];
                // document.write(d[p]);
                }
              }
            })
          });
      });
    });
var g = d3.select("div#slider2").append("svg")
    .data(data)
    .attr("width", 850)
    .attr("height", 80)
    .append("g")
    .attr("transform", "translate(200,30)")
    // .enter().append('image');
    .on('onchange', val => {
      console.log(val);//   data.sort(function(a){return (a.premiere_tranche) = val})
    });

g.call(slider2);

var modif_taille = canevas.selectAll('image')
  .data(data)
  .enter().append('image')
  .on('onchange', val => {
    console.log(val)//data.sort(function(a){return (a.premiere_tranche) = val})
  });

// const total = data.filter(d => d.premiere_tranche>50).length;
// console.log(total);

// TODO:
// Il faut qu'au premier tick du slider, les valeurs des images = première tranche et soient grande en fonction; etc selon les ticks
// modifier la width pour qu'elle soit une fonction de des ticks du slider
// Article utile slider: http://www.d3noob.org/2014/04/using-html-inputs-with-d3js.html
