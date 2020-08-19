/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
var dataArray = [5, 11, 18];
var svg = d3.select('#d3').append('svg').attr("width", "100%").attr("height", "100%")
svg.selectAll("rect")
    .data(dataArray)
    .enter().append("rect")
              .attr("height", function(d,i){ return d*15 })
              .attr("width", "50")
              .attr("x", function(d,i){ return 60*i })
              .attr("y", "100");