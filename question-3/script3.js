Promise.all([d3.html("./question.html"), d3.html("./720.svg")]).then(function([html, svgDocument]){
const questionContent = d3.select(html).selectAll('body > *');
questionContent.each(function(d){
d3.select("#question-container").node().appendChild(this);
});
let svgNode = svgDocument.querySelector("svg");
// console.log(svgNode);
let container = document.querySelector("#visualization");
// console.log(container);
container.appendChild(svgNode);

  
});
