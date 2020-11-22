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
//
//   $(document).ready(function() {
//
// });
//       $("#palle g").hover(function(){
//         console.log(ciao);
//          $("#palle g").css("opacity", 0.1);
//          $(this).css("opacity", 1);
//
//       },  function() {
//           $("#palLOmaE1pnGcuBn3z g").css("opacity", 1);
//        });

//const palline = d3.selectAll("#palle > g");
////    POTREBBE ESSERE COSì // const img = d3.selectAll("image");
//palline.each(function(){
//  palline.on('mouseover', function(){
//    palline.style("opacity",0.05);
//    d3.select(this).style("opacity",1);
//      d3.select("#img").style("opacity",0);
//  }); // DAI CAZZOOOOOOOOOOO
//});
    var ciao=null;
    const cerchi = d3.select("#palle").selectAll("g").selectAll("circle");
    const img = d3.select("#palle").selectAll("g").selectAll("g").selectAll("image");
    
//    img.each(function(){
//        console.log("image");
//    }); stampa le immagini
    
    cerchi.each(function(){
        img.style("opacity",0);
        
        d3.select(this).on("mouseover", function(){
//            
            if(ciao!=null){ ciao.style("opacity",0);}
            ciao=d3.select(this.parentNode).select("image");
            
            if(d3.select(this).attr("fill")=="#ff00b1"){
               d3.select("#online").style("opacity",0);
                d3.select("#wrong").style("opacity",0);
                
            }else if(d3.select(this).attr("fill")=="#8b4bff"){
               d3.select("#deleted").style("opacity",0);
                d3.select("#online").style("opacity",0);
                
            }else {
               d3.select("#deleted").style("opacity",0);
                d3.select("#wrong").style("opacity",0);
                
            }
            
            d3.select(this.parentNode).select("image").style("opacity",1);
            var circleUnderMouse = this;
            cerchi.style("fill",function(){
                
                return (this === circleUnderMouse) ? null : "#caccce";
            });
            
//          
        });
         
    });

      // background reset
   d3.select('#sfondo').on('mouseover', function(){
     cerchi.transition().duration(2).ease(d3.easeLinear).style('fill', null);
       img.style("opacity",0);
       d3.select("#online").style("opacity",1);
        d3.select("#wrong").style("opacity",1);
       d3.select("#deleted").style("opacity",1);
       });

});