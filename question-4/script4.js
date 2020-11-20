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
       });

});
  // document.querySelectorAll('#palle').forEach(function(item){
  //     item.onmouseover = function () {
  //         var thisImage = this.dataset.img
  //         document.getElementById(thisImage).classList.add('visible');
  //     }
  //     item.onmouseout = function () {
  //         var thisImage = this.dataset.img
  //         document.getElementById(thisImage).classList.remove('visible');
  //     }
  //
  // })



//
// //
//   // const clusters = d3.selectAll('#nodes > g');
//   //non metto > g perchè non ci sono sottolovelli
//   const palline = d3.selectAll('#palle > g');
//
//
//   //a mano
//   const liv144 = d3.select('#liv144');
//   const img144 = d3.select('#img144');
//   img144.style('opacity', 0);
//
//     liv144.on('mouseover', function() {
//     palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
//     d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
//     img144.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
//   });
//
//   const liv125 = d3.select('#liv125');
//   const img125 = d3.select('#img125');
//   img125.style('opacity', 0);
//
//     liv125.on('mouseover', function() {
//     palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
//     d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
//     img125.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
//   });
//
// //script
// const liv1 = d3.select('#liv1');
// const img1 = d3.select('#img1');
// img1.style('opacity', 0);
// liv1.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img1.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv2 = d3.select('#liv2');
// const img2 = d3.select('#img2');
// img2.style('opacity', 0);
// liv2.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img2.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv3 = d3.select('#liv3');
// const img3 = d3.select('#img3');
// img3.style('opacity', 0);
// liv3.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img3.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv4 = d3.select('#liv4');
// const img4 = d3.select('#img4');
// img4.style('opacity', 0);
// liv4.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img4.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv5 = d3.select('#liv5');
// const img5 = d3.select('#img5');
// img5.style('opacity', 0);
// liv5.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img5.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv6 = d3.select('#liv6');
// const img6 = d3.select('#img6');
// img6.style('opacity', 0);
// liv6.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img6.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv7 = d3.select('#liv7');
// const img7 = d3.select('#img7');
// img7.style('opacity', 0);
// liv7.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img7.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv8 = d3.select('#liv8');
// const img8 = d3.select('#img8');
// img8.style('opacity', 0);
// liv8.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img8.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv9 = d3.select('#liv9');
// const img9 = d3.select('#img9');
// img9.style('opacity', 0);
// liv9.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img9.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv10 = d3.select('#liv10');
// const img10 = d3.select('#img10');
// img10.style('opacity', 0);
// liv10.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img10.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv11 = d3.select('#liv11');
// const img11 = d3.select('#img11');
// img11.style('opacity', 0);
// liv11.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img11.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
// d3.select('#sfondo').on('mouseover', function(){
// palline.transition().duration(2).ease(d3.easeLinear).style('opacity',1);
// img11.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
// });
//
// const liv12 = d3.select('#liv12');
// const img12 = d3.select('#img12');
// img12.style('opacity', 0);
// liv12.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img12.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv13 = d3.select('#liv13');
// const img13 = d3.select('#img13');
// img13.style('opacity', 0);
// liv13.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img13.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv14 = d3.select('#liv14');
// const img14 = d3.select('#img14');
// img14.style('opacity', 0);
// liv14.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img14.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv15 = d3.select('#liv15');
// const img15 = d3.select('#img15');
// img15.style('opacity', 0);
// liv15.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img15.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv16 = d3.select('#liv16');
// const img16 = d3.select('#img16');
// img16.style('opacity', 0);
// liv16.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img16.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv17 = d3.select('#liv17');
// const img17 = d3.select('#img17');
// img17.style('opacity', 0);
// liv17.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img17.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv18 = d3.select('#liv18');
// const img18 = d3.select('#img18');
// img18.style('opacity', 0);
// liv18.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img18.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv19 = d3.select('#liv19');
// const img19 = d3.select('#img19');
// img19.style('opacity', 0);
// liv19.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img19.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv20 = d3.select('#liv20');
// const img20 = d3.select('#img20');
// img20.style('opacity', 0);
// liv20.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img20.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv21 = d3.select('#liv21');
// const img21 = d3.select('#img21');
// img21.style('opacity', 0);
// liv21.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img21.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv22 = d3.select('#liv22');
// const img22 = d3.select('#img22');
// img22.style('opacity', 0);
// liv22.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img22.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv23 = d3.select('#liv23');
// const img23 = d3.select('#img23');
// img23.style('opacity', 0);
// liv23.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img23.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv24 = d3.select('#liv24');
// const img24 = d3.select('#img24');
// img24.style('opacity', 0);
// liv24.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img24.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv25 = d3.select('#liv25');
// const img25 = d3.select('#img25');
// img25.style('opacity', 0);
// liv25.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img25.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv26 = d3.select('#liv26');
// const img26 = d3.select('#img26');
// img26.style('opacity', 0);
// liv26.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img26.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv27 = d3.select('#liv27');
// const img27 = d3.select('#img27');
// img27.style('opacity', 0);
// liv27.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img27.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv28 = d3.select('#liv28');
// const img28 = d3.select('#img28');
// img28.style('opacity', 0);
// liv28.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img28.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv29 = d3.select('#liv29');
// const img29 = d3.select('#img29');
// img29.style('opacity', 0);
// liv29.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img29.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv30 = d3.select('#liv30');
// const img30 = d3.select('#img30');
// img30.style('opacity', 0);
// liv30.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img30.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv31 = d3.select('#liv31');
// const img31 = d3.select('#img31');
// img31.style('opacity', 0);
// liv31.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img31.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv32 = d3.select('#liv32');
// const img32 = d3.select('#img32');
// img32.style('opacity', 0);
// liv32.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img32.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv33 = d3.select('#liv33');
// const img33 = d3.select('#img33');
// img33.style('opacity', 0);
// liv33.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img33.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv34 = d3.select('#liv34');
// const img34 = d3.select('#img34');
// img34.style('opacity', 0);
// liv34.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img34.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv35 = d3.select('#liv35');
// const img35 = d3.select('#img35');
// img35.style('opacity', 0);
// liv35.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img35.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv36 = d3.select('#liv36');
// const img36 = d3.select('#img36');
// img36.style('opacity', 0);
// liv36.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img36.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv37 = d3.select('#liv37');
// const img37 = d3.select('#img37');
// img37.style('opacity', 0);
// liv37.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img37.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv38 = d3.select('#liv38');
// const img38 = d3.select('#img38');
// img38.style('opacity', 0);
// liv38.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img38.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv39 = d3.select('#liv39');
// const img39 = d3.select('#img39');
// img39.style('opacity', 0);
// liv39.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img39.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv40 = d3.select('#liv40');
// const img40 = d3.select('#img40');
// img40.style('opacity', 0);
// liv40.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img40.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv41 = d3.select('#liv41');
// const img41 = d3.select('#img41');
// img41.style('opacity', 0);
// liv41.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img41.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv42 = d3.select('#liv42');
// const img42 = d3.select('#img42');
// img42.style('opacity', 0);
// liv42.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img42.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv43 = d3.select('#liv43');
// const img43 = d3.select('#img43');
// img43.style('opacity', 0);
// liv43.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img43.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv44 = d3.select('#liv44');
// const img44 = d3.select('#img44');
// img44.style('opacity', 0);
// liv44.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img44.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv45 = d3.select('#liv45');
// const img45 = d3.select('#img45');
// img45.style('opacity', 0);
// liv45.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img45.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv46 = d3.select('#liv46');
// const img46 = d3.select('#img46');
// img46.style('opacity', 0);
// liv46.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img46.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv47 = d3.select('#liv47');
// const img47 = d3.select('#img47');
// img47.style('opacity', 0);
// liv47.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img47.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv48 = d3.select('#liv48');
// const img48 = d3.select('#img48');
// img48.style('opacity', 0);
// liv48.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img48.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv49 = d3.select('#liv49');
// const img49 = d3.select('#img49');
// img49.style('opacity', 0);
// liv49.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img49.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv50 = d3.select('#liv50');
// const img50 = d3.select('#img50');
// img50.style('opacity', 0);
// liv50.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img50.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv51 = d3.select('#liv51');
// const img51 = d3.select('#img51');
// img51.style('opacity', 0);
// liv51.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img51.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv52 = d3.select('#liv52');
// const img52 = d3.select('#img52');
// img52.style('opacity', 0);
// liv52.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img52.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv53 = d3.select('#liv53');
// const img53 = d3.select('#img53');
// img53.style('opacity', 0);
// liv53.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img53.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv54 = d3.select('#liv54');
// const img54 = d3.select('#img54');
// img54.style('opacity', 0);
// liv54.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img54.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv55 = d3.select('#liv55');
// const img55 = d3.select('#img55');
// img55.style('opacity', 0);
// liv55.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img55.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv56 = d3.select('#liv56');
// const img56 = d3.select('#img56');
// img56.style('opacity', 0);
// liv56.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img56.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv57 = d3.select('#liv57');
// const img57 = d3.select('#img57');
// img57.style('opacity', 0);
// liv57.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img57.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv58 = d3.select('#liv58');
// const img58 = d3.select('#img58');
// img58.style('opacity', 0);
// liv58.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img58.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv59 = d3.select('#liv59');
// const img59 = d3.select('#img59');
// img59.style('opacity', 0);
// liv59.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img59.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv60 = d3.select('#liv60');
// const img60 = d3.select('#img60');
// img60.style('opacity', 0);
// liv60.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img60.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv61 = d3.select('#liv61');
// const img61 = d3.select('#img61');
// img61.style('opacity', 0);
// liv61.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img61.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv62 = d3.select('#liv62');
// const img62 = d3.select('#img62');
// img62.style('opacity', 0);
// liv62.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img62.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv63 = d3.select('#liv63');
// const img63 = d3.select('#img63');
// img63.style('opacity', 0);
// liv63.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img63.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv64 = d3.select('#liv64');
// const img64 = d3.select('#img64');
// img64.style('opacity', 0);
// liv64.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img64.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv65 = d3.select('#liv65');
// const img65 = d3.select('#img65');
// img65.style('opacity', 0);
// liv65.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img65.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv66 = d3.select('#liv66');
// const img66 = d3.select('#img66');
// img66.style('opacity', 0);
// liv66.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img66.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv67 = d3.select('#liv67');
// const img67 = d3.select('#img67');
// img67.style('opacity', 0);
// liv67.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img67.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv68 = d3.select('#liv68');
// const img68 = d3.select('#img68');
// img68.style('opacity', 0);
// liv68.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img68.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv69 = d3.select('#liv69');
// const img69 = d3.select('#img69');
// img69.style('opacity', 0);
// liv69.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img69.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv70 = d3.select('#liv70');
// const img70 = d3.select('#img70');
// img70.style('opacity', 0);
// liv70.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img70.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv71 = d3.select('#liv71');
// const img71 = d3.select('#img71');
// img71.style('opacity', 0);
// liv71.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img71.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv72 = d3.select('#liv72');
// const img72 = d3.select('#img72');
// img72.style('opacity', 0);
// liv72.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img72.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv73 = d3.select('#liv73');
// const img73 = d3.select('#img73');
// img73.style('opacity', 0);
// liv73.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img73.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv74 = d3.select('#liv74');
// const img74 = d3.select('#img74');
// img74.style('opacity', 0);
// liv74.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img74.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv75 = d3.select('#liv75');
// const img75 = d3.select('#img75');
// img75.style('opacity', 0);
// liv75.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img75.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv76 = d3.select('#liv76');
// const img76 = d3.select('#img76');
// img76.style('opacity', 0);
// liv76.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img76.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv77 = d3.select('#liv77');
// const img77 = d3.select('#img77');
// img77.style('opacity', 0);
// liv77.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img77.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv78 = d3.select('#liv78');
// const img78 = d3.select('#img78');
// img78.style('opacity', 0);
// liv78.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img78.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv79 = d3.select('#liv79');
// const img79 = d3.select('#img79');
// img79.style('opacity', 0);
// liv79.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img79.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv80 = d3.select('#liv80');
// const img80 = d3.select('#img80');
// img80.style('opacity', 0);
// liv80.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img80.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv81 = d3.select('#liv81');
// const img81 = d3.select('#img81');
// img81.style('opacity', 0);
// liv81.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img81.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv82 = d3.select('#liv82');
// const img82 = d3.select('#img82');
// img82.style('opacity', 0);
// liv82.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img82.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv83 = d3.select('#liv83');
// const img83 = d3.select('#img83');
// img83.style('opacity', 0);
// liv83.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img83.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv84 = d3.select('#liv84');
// const img84 = d3.select('#img84');
// img84.style('opacity', 0);
// liv84.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img84.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv85 = d3.select('#liv85');
// const img85 = d3.select('#img85');
// img85.style('opacity', 0);
// liv85.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img85.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv86 = d3.select('#liv86');
// const img86 = d3.select('#img86');
// img86.style('opacity', 0);
// liv86.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img86.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv87 = d3.select('#liv87');
// const img87 = d3.select('#img87');
// img87.style('opacity', 0);
// liv87.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img87.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv88 = d3.select('#liv88');
// const img88 = d3.select('#img88');
// img88.style('opacity', 0);
// liv88.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img88.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv89 = d3.select('#liv89');
// const img89 = d3.select('#img89');
// img89.style('opacity', 0);
// liv89.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img89.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv90 = d3.select('#liv90');
// const img90 = d3.select('#img90');
// img90.style('opacity', 0);
// liv90.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img90.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv91 = d3.select('#liv91');
// const img91 = d3.select('#img91');
// img91.style('opacity', 0);
// liv91.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img91.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv92 = d3.select('#liv92');
// const img92 = d3.select('#img92');
// img92.style('opacity', 0);
// liv92.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img92.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv93 = d3.select('#liv93');
// const img93 = d3.select('#img93');
// img93.style('opacity', 0);
// liv93.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img93.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv94 = d3.select('#liv94');
// const img94 = d3.select('#img94');
// img94.style('opacity', 0);
// liv94.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img94.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv95 = d3.select('#liv95');
// const img95 = d3.select('#img95');
// img95.style('opacity', 0);
// liv95.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img95.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv96 = d3.select('#liv96');
// const img96 = d3.select('#img96');
// img96.style('opacity', 0);
// liv96.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img96.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv97 = d3.select('#liv97');
// const img97 = d3.select('#img97');
// img97.style('opacity', 0);
// liv97.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img97.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv98 = d3.select('#liv98');
// const img98 = d3.select('#img98');
// img98.style('opacity', 0);
// liv98.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img98.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv99 = d3.select('#liv99');
// const img99 = d3.select('#img99');
// img99.style('opacity', 0);
// liv99.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img99.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv100 = d3.select('#liv100');
// const img100 = d3.select('#img100');
// img100.style('opacity', 0);
// liv100.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img100.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv101 = d3.select('#liv101');
// const img101 = d3.select('#img101');
// img101.style('opacity', 0);
// liv101.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img101.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv102 = d3.select('#liv102');
// const img102 = d3.select('#img102');
// img102.style('opacity', 0);
// liv102.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img102.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv103 = d3.select('#liv103');
// const img103 = d3.select('#img103');
// img103.style('opacity', 0);
// liv103.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img103.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv104 = d3.select('#liv104');
// const img104 = d3.select('#img104');
// img104.style('opacity', 0);
// liv104.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img104.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv105 = d3.select('#liv105');
// const img105 = d3.select('#img105');
// img105.style('opacity', 0);
// liv105.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img105.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv106 = d3.select('#liv106');
// const img106 = d3.select('#img106');
// img106.style('opacity', 0);
// liv106.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img106.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv107 = d3.select('#liv107');
// const img107 = d3.select('#img107');
// img107.style('opacity', 0);
// liv107.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img107.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv108 = d3.select('#liv108');
// const img108 = d3.select('#img108');
// img108.style('opacity', 0);
// liv108.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img108.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv109 = d3.select('#liv109');
// const img109 = d3.select('#img109');
// img109.style('opacity', 0);
// liv109.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img109.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv110 = d3.select('#liv110');
// const img110 = d3.select('#img110');
// img110.style('opacity', 0);
// liv110.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img110.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv111 = d3.select('#liv111');
// const img111 = d3.select('#img111');
// img111.style('opacity', 0);
// liv111.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img111.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv112 = d3.select('#liv112');
// const img112 = d3.select('#img112');
// img112.style('opacity', 0);
// liv112.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img112.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv113 = d3.select('#liv113');
// const img113 = d3.select('#img113');
// img113.style('opacity', 0);
// liv113.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img113.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv114 = d3.select('#liv114');
// const img114 = d3.select('#img114');
// img114.style('opacity', 0);
// liv114.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img114.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv115 = d3.select('#liv115');
// const img115 = d3.select('#img115');
// img115.style('opacity', 0);
// liv115.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img115.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv116 = d3.select('#liv116');
// const img116 = d3.select('#img116');
// img116.style('opacity', 0);
// liv116.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img116.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv117 = d3.select('#liv117');
// const img117 = d3.select('#img117');
// img117.style('opacity', 0);
// liv117.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img117.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv118 = d3.select('#liv118');
// const img118 = d3.select('#img118');
// img118.style('opacity', 0);
// liv118.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img118.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv119 = d3.select('#liv119');
// const img119 = d3.select('#img119');
// img119.style('opacity', 0);
// liv119.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img119.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv120 = d3.select('#liv120');
// const img120 = d3.select('#img120');
// img120.style('opacity', 0);
// liv120.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img120.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv121 = d3.select('#liv121');
// const img121 = d3.select('#img121');
// img121.style('opacity', 0);
// liv121.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img121.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv122 = d3.select('#liv122');
// const img122 = d3.select('#img122');
// img122.style('opacity', 0);
// liv122.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img122.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv123 = d3.select('#liv123');
// const img123 = d3.select('#img123');
// img123.style('opacity', 0);
// liv123.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img123.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv124 = d3.select('#liv124');
// const img124 = d3.select('#img124');
// img124.style('opacity', 0);
// liv124.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img124.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
//
//
// const liv126 = d3.select('#liv126');
// const img126 = d3.select('#img126');
// img126.style('opacity', 0);
// liv126.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img126.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv127 = d3.select('#liv127');
// const img127 = d3.select('#img127');
// img127.style('opacity', 0);
// liv127.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img127.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv128 = d3.select('#liv128');
// const img128 = d3.select('#img128');
// img128.style('opacity', 0);
// liv128.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img128.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv129 = d3.select('#liv129');
// const img129 = d3.select('#img129');
// img129.style('opacity', 0);
// liv129.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img129.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
//
// const liv130 = d3.select('#liv130');
// const img130 = d3.select('#img130');
// img130.style('opacity', 0);
// liv130.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img130.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv131 = d3.select('#liv131');
// const img131 = d3.select('#img131');
// img131.style('opacity', 0);
// liv131.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img131.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv132 = d3.select('#liv132');
// const img132 = d3.select('#img132');
// img132.style('opacity', 0);
// liv132.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img132.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv133 = d3.select('#liv133');
// const img133 = d3.select('#img133');
// img133.style('opacity', 0);
// liv133.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img133.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv134 = d3.select('#liv134');
// const img134 = d3.select('#img134');
// img134.style('opacity', 0);
// liv134.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img134.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv135 = d3.select('#liv135');
// const img135 = d3.select('#img135');
// img135.style('opacity', 0);
// liv135.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img135.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv136 = d3.select('#liv136');
// const img136 = d3.select('#img136');
// img136.style('opacity', 0);
// liv136.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img136.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv137 = d3.select('#liv137');
// const img137 = d3.select('#img137');
// img137.style('opacity', 0);
// liv137.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img137.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv138 = d3.select('#liv138');
// const img138 = d3.select('#img138');
// img138.style('opacity', 0);
// liv138.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img138.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv139 = d3.select('#liv139');
// const img139 = d3.select('#img139');
// img139.style('opacity', 0);
// liv139.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img139.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv140 = d3.select('#liv140');
// const img140 = d3.select('#img140');
// img140.style('opacity', 0);
// liv140.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img140.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// //inizio a mano
// const liv141 = d3.select('#liv141');
// const img141 = d3.select('#img141');
// img141.style('opacity', 0);
// liv141.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img141.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv142 = d3.select('#liv142');
// const img142 = d3.select('#img142');
// img142.style('opacity', 0);
// liv142.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img142.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
//
// const liv143 = d3.select('#liv143');
// const img143 = d3.select('#img143');
// img143.style('opacity', 0);
// liv143.on('mouseover', function() {
// palline.transition().duration(1).ease(d3.easeLinear).style('opacity', 0.05);
// d3.select(this).transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// img143.transition().duration(100).ease(d3.easeLinear).style('opacity', 1);
// });
// //fine a mano
//
//
//
//
// //background reset
//   d3.select('#sfondo').on('mouseover', function(){
//     palline.transition().duration(2).ease(d3.easeLinear).style('opacity',1);
//     //script
//     img1.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img2.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img3.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img4.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img5.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img6.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img7.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img8.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img9.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img10.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//
//     img11.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img12.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img13.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img14.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img15.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img16.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img17.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img18.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img19.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img20.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//
//     img21.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img22.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img23.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img24.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img25.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img26.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img27.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img28.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img29.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img30.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//
//     img31.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img32.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img33.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img34.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img35.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img36.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img37.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img38.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img39.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img40.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//
//     img41.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img42.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img43.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img44.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img45.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img46.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img47.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img48.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img49.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img50.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//
//     img51.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img52.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img53.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img54.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img55.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img56.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img57.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img58.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img59.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img60.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//
//     img61.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img62.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img63.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img64.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img65.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img66.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img67.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img68.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img69.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img70.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//
//     img71.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img72.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img73.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img74.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img75.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img76.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img77.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img78.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img79.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img80.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//
//     img81.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img82.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img83.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img84.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img85.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img86.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img87.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img88.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img89.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img90.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//
//     img91.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img92.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img93.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img94.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img95.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img96.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img97.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img98.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img99.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img100.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//
//     img101.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img102.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img103.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img104.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img105.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img106.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img107.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img108.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img109.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img110.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//
//     img111.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img112.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img113.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img114.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img115.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img116.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img117.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img118.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img119.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img120.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//
//     img121.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img122.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img123.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img124.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img125.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img126.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img127.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img128.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img129.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img130.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//
//     img131.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img132.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img133.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img134.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img135.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img136.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img137.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img138.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img139.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img140.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     //a mano
//     img141.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img142.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img143.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//     img144.transition().duration(100).ease(d3.easeLinear).style('opacity', 0);
//
//     //fine a mano
//
//
//
//
//
//   });
//
//
//});
//
