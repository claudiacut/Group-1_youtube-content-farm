Promise.all([d3.html("./question.html"), d3.html("./viz1.svg")]).then(function([html, svgDocument]){
const questionContent = d3.select(html).selectAll('body > *');
questionContent.each(function(d){
d3.select("#question-container").node().appendChild(this);
});
let svgNode = svgDocument.querySelector("svg");
// console.log(svgNode);
let container = document.querySelector("#visualization");
// console.log(container);
container.appendChild(svgNode);

  const clusters = d3.selectAll("#nodes > g");
  const fake = d3.selectAll("#fake");
  const white = d3.select("#sq_32_");
  //white clusters
  const compilation = d3.select("#compilation");
  const rain = d3.select("#rain");
  const dad = d3.select("#dad");
  const mysterious = d3.select("#mysterious");
  const adventures = d3.select("#Adventures");
  const dolls = d3.select("#dolls");
  const school = d3.select("#school");
  const learn = d3.select("#learn");
  const house = d3.select("#house");
  const happy = d3.select("#happy");
  const friends = d3.select("#friends");
  const food = d3.select("#food");
  const family = d3.select("#family");
  const classics = d3.select("#classics");
  const challenge = d3.select("#challenge");
  const best = d3.select("#best");
  const away = d3.select("#away");
  const animals = d3.select("#animals");
  const police = d3.select("#police");
  const little = d3.select("#little");
  const monsters = d3.select("#monsters");
  const neww = d3.select("#new");
  const good = d3.select("#good");
  const bus = d3.select("#bus");
  const go = d3.select("#go");


  clusters.on("click", function(){
    // console.log(this);
    clusters.style("opacity","0");
    fake.transition().duration(6).ease(d3.easeLinear).style("opacity","0.7");
    d3.select(this).transition().duration(4).ease(d3.easeLinear).style("opacity","1");
  });

  white.on("click", function(){
    // console.log(this);
    clusters.style("opacity","0");
    fake.transition().duration(6).ease(d3.easeLinear).style("opacity","0.7");

    compilation.transition().duration(4).ease(d3.easeLinear).style("opacity","1");
    rain.transition().duration(4).ease(d3.easeLinear).style("opacity","1");
    dad.transition().duration(4).ease(d3.easeLinear).style("opacity","1");
    mysterious.transition().duration(4).ease(d3.easeLinear).style("opacity","1");
    adventures.transition().duration(4).ease(d3.easeLinear).style("opacity","1");
    dolls.transition().duration(4).ease(d3.easeLinear).style("opacity","1");
    school.transition().duration(4).ease(d3.easeLinear).style("opacity","1");
    house.transition().duration(4).ease(d3.easeLinear).style("opacity","1");
    happy.transition().duration(4).ease(d3.easeLinear).style("opacity","1");
    friends.transition().duration(4).ease(d3.easeLinear).style("opacity","1");
    food.transition().duration(4).ease(d3.easeLinear).style("opacity","1");
    family.transition().duration(4).ease(d3.easeLinear).style("opacity","1");
    classics.transition().duration(4).ease(d3.easeLinear).style("opacity","1");
    challenge.transition().duration(4).ease(d3.easeLinear).style("opacity","1");
    best.transition().duration(4).ease(d3.easeLinear).style("opacity","1");
    away.transition().duration(4).ease(d3.easeLinear).style("opacity","1");
    animals.transition().duration(4).ease(d3.easeLinear).style("opacity","1");
    police.transition().duration(4).ease(d3.easeLinear).style("opacity","1");
    little.transition().duration(4).ease(d3.easeLinear).style("opacity","1");
    monsters.transition().duration(4).ease(d3.easeLinear).style("opacity","1");
    neww.transition().duration(4).ease(d3.easeLinear).style("opacity","1");
    good.transition().duration(4).ease(d3.easeLinear).style("opacity","1");
    bus.transition().duration(4).ease(d3.easeLinear).style("opacity","1");
    go.transition().duration(4).ease(d3.easeLinear).style("opacity","1");
    
  });


  d3.select("#sfondo").on("click",function(){
    clusters.transition().duration(0.5).ease(d3.easeLinear).style("opacity","1");
  });

});
