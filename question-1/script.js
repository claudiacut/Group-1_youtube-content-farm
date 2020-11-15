

d3.html("./viz1.svg").then(function(svgDocument){
  console.log(svgDocument);
  let svgNode = svgDocument.querySelector("svg");
  console.log(svgNode);
  let vizContainer = document.querySelector("#viz-container");

  console.log(vizContainer);
  vizContainer.appendChild(svgNode);

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
