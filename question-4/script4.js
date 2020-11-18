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
  const fake = d3.selectAll('#fake > g');
  const liv114 = d3.select('#liv114');
  const img114 = d3.select('#img114');

  img114.style('opacity', 0);









  // palline.on('mouseover', function() {
  //   palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
  //   d3.select(this).transition().duration(200).ease(d3.easeLinear).style('opacity', 1);
  //   liv114.transition().duration(200).ease(d3.easeLinear).style('opacity', 1);
  // });


  liv114.on('mouseover', function() {
    palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
    d3.select(this).transition().duration(200).ease(d3.easeLinear).style('opacity', 1);
    img114.transition().duration(200).ease(d3.easeLinear).style('opacity', 1);


  });
//creare classe per i related
//quando c'è over per uno, far scomparire gli altri related


  d3.select('#sfondo').on('mouseover', function(){
    palline.transition().duration(2).ease(d3.easeLinear).style('opacity',1);
    img114.transition().duration(200).ease(d3.easeLinear).style('opacity', 0);
  });

});
