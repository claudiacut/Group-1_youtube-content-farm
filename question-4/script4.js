Promise.all([d3.html("./question.html"), d3.html("./viz4.svg")]).then(function([html, svgDocument]) {
  const questionContent = d3.select(html).selectAll('body > *');
  questionContent.each(function(d) {
    d3.select("#question-container").node().appendChild(this);
  });
  let svgNode = svgDocument.querySelector("svg");
  // console.log(svgNode);
  let container = document.querySelector("#visualization");
  // console.log(container);
  container.appendChild(svgNode);


  // const clusters = d3.selectAll('#nodes > g');
  //non metto > g perchè non ci sono sottolovelli
  const palline = d3.selectAll('#palle > g');

  const liv1 = d3.select('#liv1');
  const img1 = d3.select('#img1');


  img1.style('opacity', 0);

    liv1.on('mouseover', function() {
    palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
    d3.select(this).transition().duration(200).ease(d3.easeLinear).style('opacity', 1);
    img1.transition().duration(200).ease(d3.easeLinear).style('opacity', 1);
  });

  d3.select('#sfondo').on('mouseover', function(){
    palline.transition().duration(2).ease(d3.easeLinear).style('opacity',1);
    img1.transition().duration(200).ease(d3.easeLinear).style('opacity', 0);
  });

});
