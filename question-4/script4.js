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
  const fake = d3.selectAll('#fake');
  const related1 = d3.selectAll('#related1');
  const related2 = d3.selectAll('#related2');
  const related3 = d3.selectAll('#related3');
  const online_videos = d3.selectAll('#online_videos');
  const missing_data = d3.selectAll('#missing_data');


  related1.style('opacity', 0.0);
  related2.style('opacity', 0.0);
  related3.style('opacity', 0.0);



  related1.on('click', function() {

    online_videos.style('opacity', 0.5);
    missing_data.style('opacity', 0.5);

    fake.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.5);
    d3.select(this).transition().duration(200).ease(d3.easeLinear).style('opacity', 1);
  });

  d3.select('#sfondo').on('click', function(){
    fake.transition().duration(2).ease(d3.easeLinear).style('opacity',1);
  });

});
