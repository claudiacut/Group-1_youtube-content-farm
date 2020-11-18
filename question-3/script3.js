Promise.all([d3.html("./question.html"), d3.html("./viz3.svg")]).then(function([html, svgDocument]){
const questionContent = d3.select(html).selectAll('body > *');
questionContent.each(function(d){
d3.select("#question-container").node().appendChild(this);
});
let svgNode = svgDocument.querySelector("svg");
// console.log(svgNode);
let container = document.querySelector("#visualization");
// console.log(container);
container.appendChild(svgNode);



const _2016 = d3.selectAll('#_2016 > g');
const t31 = d3.selectAll("#t31 > g");

console.log(ciano);


t31.on('mouseover', function(){
_2016.style('opacity',0.0);
// «this» refers to hovering element
  d3.select(this).transition().duration(200).ease(d3.easeLinear).style('opacity',1);
});




// bind a hover event to the rectangle in the background
// to reset selection
// use mouseover for the hover selection
d3.select('#sfondo').on('mouseover', function(){
  _2016.transition().duration(2).ease(d3.easeLinear).style('opacity',1);
});


});
