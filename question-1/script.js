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

  clusters.on("click", function(){
    // console.log(this);
    clusters.style("opacity","0");
    fake.transition().duration(1).ease(d3.easeLinear).style("opacity","0.7");
    d3.select(this).transition().delay(1).ease(d3.easeLinear).style("opacity","1");
  });

  d3.select("#sfondo").on("click",function(){
    clusters.transition().duration(2).ease(d3.easeLinear).style("opacity","1");
  });
//
//    const prova = d3.selectAll("#songs1 > g");
//    const pro = d3.selectAll("#kids > g");
//    const songs = d3.selectAll("#song > g");
//    prova.on("click", function(){
//        pro.style("opacity","0");
//        songs.style("opacity","1");
//        d3.select(this).style("opacity","1");
//        
//    });
   
});
