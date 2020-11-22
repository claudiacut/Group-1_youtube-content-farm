Promise.all([d3.html("./question.html"), d3.html("./viz3.svg")]).then(function([html, svgDocument]) {
  const questionContent = d3.select(html).selectAll('body > *');
  questionContent.each(function(d) {
    d3.select("#question-container").node().appendChild(this);
  });
  let svgNode = svgDocument.querySelector("svg");
  // console.log(svgNode);
  let container = document.querySelector("#visualization");
  // console.log(container);
  container.appendChild(svgNode);


    var vizz=null;
  const anni = d3.selectAll("#anni").selectAll("g");
  const img = d3.selectAll("#anni").selectAll("g").selectAll("image");
  const ombre = d3.selectAll("#anni").selectAll("g").selectAll("rect");
    console.log("Wandaaaaaaa tvb");

    img.style("opacity",1);
      ombre.style("opacity",1);

  anni.each(function(){
      d3.select(this).on("click", function(){


          var active = img.active ? false : true,
           newOpacity = active ? 1 : 0;

           var active2 = ombre.active ? false : true,
            newOpacity = active ? 1 : 0;



        d3.select(this).selectAll("image").transition().duration(80).ease(d3.easeLinear).style("opacity", newOpacity);
           d3.select(this).selectAll("rect").style("opacity", newOpacity);

           img.active = active;
           ombre.active = active;
          });
      });

    d3.select('#sfondo').on('click', function(){
       img.style("opacity",1);
        ombre.style("opacity",1);
    });


     });
