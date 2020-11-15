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

  clusters.on("click", function(){
    // console.log(this);
    clusters.style("opacity","0.1");

    d3.select(this).style("opacity","1");
  });

  d3.select("#sfondo").on("click",function(){
    clusters.style("opacity","1");
  });

});
