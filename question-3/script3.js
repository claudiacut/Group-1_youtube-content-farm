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

  const _2006 = d3.selectAll('#_2006 > g');
  const t23 = d3.selectAll("#t23 > g");

  const _2007 = d3.selectAll('#_2007 > g');
  const t24 = d3.selectAll("#t24 > g");

  const _2010 = d3.selectAll('#_2010 > g');
  const t25 = d3.selectAll("#t25 > g");

  const _2011 = d3.selectAll('#_2011 > g');
  const t26 = d3.selectAll("#t26 > g");

  const _2012 = d3.selectAll('#_2012 > g');
  const t27 = d3.selectAll("#t27 > g");

  const _2013 = d3.selectAll('#_2013 > g');
  const t28 = d3.selectAll("#t28 > g");

  const _2014 = d3.selectAll('#_2014 > g');
  const t29 = d3.selectAll("#t29 > g");

  const _2015 = d3.selectAll('#_2015 > g');
  const t30 = d3.selectAll("#t30 > g");

  const _2016 = d3.selectAll('#_2016 > g');
  const t31 = d3.selectAll("#t31 > g");

  const _2017 = d3.selectAll('#_2017 > g');
  const t32 = d3.selectAll("#t32 > g");

  const _2018 = d3.selectAll('#_2018 > g');
  const t33 = d3.selectAll("#t33 > g");

  const _2019 = d3.selectAll('#_2019 > g');
  const t34 = d3.selectAll("#t34 > g");

  const _2020 = d3.selectAll('#_2020 > g');
  const t35 = d3.selectAll("#t35 > g");

  //clusters
  const verde = d3.selectAll("#verde");
  const viola = d3.selectAll("#viola");
  const giallo = d3.selectAll("#giallo");
  const blu = d3.selectAll("#blu");
  const fucsia = d3.selectAll("#fucsia");
  const ciano = d3.selectAll("#ciano");


  console.log(ciano);


  //show/hidden function

  //2006
  t23.on("click", function() {
    // Determine if current line is visible
    var active = _2006.active ? false : true,
      newOpacity = active ? 0 : 1;
    // Hide or show the elements
    _2006.transition().duration(100).ease(d3.easeLinear).style("opacity", newOpacity);
    // Update whether or not the elements are active
    _2006.active = active;
  });

  //2007
  t24.on("click", function() {
    // Determine if current line is visible
    var active = _2007.active ? false : true,
      newOpacity = active ? 0 : 1;
    // Hide or show the elements
    _2007.transition().duration(100).ease(d3.easeLinear).style("opacity", newOpacity);
    // Update whether or not the elements are active
    _2007.active = active;
  });


  //2010
  t25.on("click", function() {
    // Determine if current line is visible
    var active = _2010.active ? false : true,
      newOpacity = active ? 0 : 1;
    // Hide or show the elements
    _2010.transition().duration(100).ease(d3.easeLinear).style("opacity", newOpacity);
    // Update whether or not the elements are active
    _2010.active = active;
  });

  //2011
  t26.on("click", function() {
    // Determine if current line is visible
    var active = _2011.active ? false : true,
      newOpacity = active ? 0 : 1;
    // Hide or show the elements
    _2011.transition().duration(100).ease(d3.easeLinear).style("opacity", newOpacity);
    // Update whether or not the elements are active
    _2011.active = active;
  });

  //2012
  t27.on("click", function() {
    // Determine if current line is visible
    var active = _2012.active ? false : true,
      newOpacity = active ? 0 : 1;
    // Hide or show the elements
    _2012.transition().duration(100).ease(d3.easeLinear).style("opacity", newOpacity);
    // Update whether or not the elements are active
    _2012.active = active;
  });

  //2013
  t28.on("click", function() {
    // Determine if current line is visible
    var active = _2013.active ? false : true,
      newOpacity = active ? 0 : 1;
    // Hide or show the elements
    _2013.transition().duration(100).ease(d3.easeLinear).style("opacity", newOpacity);
    // Update whether or not the elements are active
    _2013.active = active;
  });

  //2014
  t29.on("click", function() {
    // Determine if current line is visible
    var active = _2014.active ? false : true,
      newOpacity = active ? 0 : 1;
    // Hide or show the elements
    _2014.transition().duration(100).ease(d3.easeLinear).style("opacity", newOpacity);
    // Update whether or not the elements are active
    _2014.active = active;
  });

  //2015
  t30.on("click", function() {
    // Determine if current line is visible
    var active = _2015.active ? false : true,
      newOpacity = active ? 0 : 1;
    // Hide or show the elements
    _2015.transition().duration(100).ease(d3.easeLinear).style("opacity", newOpacity);
    // Update whether or not the elements are active
    _2015.active = active;
  });

  //2016
  t31.on("click", function() {
    // Determine if current line is visible
    var active = _2016.active ? false : true,
      newOpacity = active ? 0 : 1;
    // Hide or show the elements
    _2016.transition().duration(100).ease(d3.easeLinear).style("opacity", newOpacity);
    // Update whether or not the elements are active
    _2016.active = active;
  });

  //2017
  t32.on("click", function() {
    // Determine if current line is visible
    var active = _2017.active ? false : true,
      newOpacity = active ? 0 : 1;
    // Hide or show the elements
    _2017.transition().duration(100).ease(d3.easeLinear).style("opacity", newOpacity);
    // Update whether or not the elements are active
    _2017.active = active;
  });

  //2018
  t33.on("click", function() {
    // Determine if current line is visible
    var active = _2018.active ? false : true,
      newOpacity = active ? 0 : 1;
    // Hide or show the elements
    _2018.transition().duration(100).ease(d3.easeLinear).style("opacity", newOpacity);
    // Update whether or not the elements are active
    _2018.active = active;
  });

  //2018
  t34.on("click", function() {
    // Determine if current line is visible
    var active = _2019.active ? false : true,
      newOpacity = active ? 0 : 1;
    // Hide or show the elements
    _2019.transition().duration(100).ease(d3.easeLinear).style("opacity", newOpacity);
    // Update whether or not the elements are active
    _2019.active = active;
  });

  //2018
  t35.on("click", function() {
    // Determine if current line is visible
    var active = _2020.active ? false : true,
      newOpacity = active ? 0 : 1;
    // Hide or show the elements
    _2020.transition().duration(100).ease(d3.easeLinear).style("opacity", newOpacity);
    // Update whether or not the elements are active
    _2020.active = active;
  });









});
