Promise.all([d3.html("./question.html"), d3.html("./viz2.svg")]).then(function([html, svgDocument]){
const questionContent = d3.select(html).selectAll('body > *');
questionContent.each(function(d){
d3.select("#question-container").node().appendChild(this);
});
let svgNode = svgDocument.querySelector("svg");
// console.log(svgNode);
let container = document.querySelector("#visualization");
// console.log(container);
container.appendChild(svgNode);


    const clusters = d3.selectAll('#nodes > g');
    const fake = d3.selectAll('#fake');
    // console.log(fake);
    const base = d3.selectAll('#base');


    clusters.on('click', function(){
clusters.style('opacity',0.0);
      fake.transition().duration(1).ease(d3.easeLinear).style('opacity',0.08);
  	// «this» refers to hovering element
      d3.select(this).transition().delay(1).ease(d3.easeLinear).style('opacity',1);
    });
    // bind a hover event to the rectangle in the background
    // to reset selection
    // use mouseover for the hover selection
    d3.select('#background').on('click', function(){
      clusters.transition().duration(1).ease(d3.easeLinear).style('opacity',1);
    });



});
