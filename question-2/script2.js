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
    const base = d3.selectAll('#base');

    clusters.on('mouseover', function(){
      clusters.style('opacity',0.3);
  	// «this» refers to hovering element
      d3.select(this).style('opacity',1);
    });
    // bind a hover event to the rectangle in the background
    // to reset selection
    // use mouseover for the hover selection
    d3.select('#background').on('mouseover', function(){
      clusters.style('opacity',1);
    });

});
