Promise.all([d3.html("./question.html"), d3.html("./viz4.svg")]).then(function([html, svgDocument]){
const questionContent = d3.select(html).selectAll('body > *');
questionContent.each(function(d){
d3.select("#question-container").node().appendChild(this);
});
let svgNode = svgDocument.querySelector("svg");
// console.log(svgNode);
let container = document.querySelector("#visualization");
// console.log(container);
container.appendChild(svgNode);

   const clusters = d3.selectAll("#interazione > g");
   const node = d3.selectAll("#node > g");
    const img = d3.selectAll("#img > g");

  clusters.on("mouseover", function(){
    // console.log(this);
    node.style("opacity","0.1");
    img.style("opacity","0");

   d3.select(this).style("opacity","1");
 });

  d3.select("#sfondo").on("mouseover",function(){
    clusters.style("opacity","1");
  });

});
