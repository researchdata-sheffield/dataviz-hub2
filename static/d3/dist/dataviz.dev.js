"use strict";

/* eslint-disable no-unused-vars */

/* eslint-disable no-undef */
countryCoor = "https://unpkg.com/world-atlas@1/world/110m.json";
countryNames = "https://gist.githubusercontent.com/lkopacz/dfd9cc04a4d5a5f0fe87c89a79524479/raw/39100d4f6b7c784bd5d838a4e357873ef6877579/world-country-names.csv";
populationData = "https://raw.githubusercontent.com/yld-weng/datasets/master/CC0-PublicDomain/world_population2020.csv";
var margin = {
  top: 10,
  right: 10,
  bottom: 10,
  left: 10
};
var width = 960 - margin.left - margin.right;
var height = 600 - margin.top - margin.bottom;
var projection = d3.geoNaturalEarth1(); // .center([0, 15]) 
// .rotate([20,0])
// .scale([1300/(2*Math.PI)]) 
// .translate([450,300]);

var path = d3.geoPath().projection(projection);
var svg = d3.select("#d3") // .attr("width", width)
// .attr("height", height)
.append("g").attr("position", "center").attr("background-color", "#2B65EC");
var tooltip = d3.select("div.tooltip");
Promise.all([d3.json(countryCoor), d3.csv(countryNames), d3.csv(populationData)]).then(function (data) {
  createMap(data[0], data[1], data[2]);
})["catch"](function (err) {
  throw err;
});

function createMap(world, names, population) {
  var countries1 = topojson.feature(world, world.objects.countries).features;
  countries = countries1.filter(function (d) {
    return names.some(function (n) {
      if (d.id == n.id) return d.name = n.name;
    });
  });
  countries = countries.filter(function (d) {
    return population.some(function (p) {
      name1 = d.name;
      name2 = p.Region;

      if (name1.includes(name2)) {
        d.population = p.Population;
        return d.Yearly_Change = p.Yearly_Change;
      }
    });
  });
  svg.selectAll("path").data(countries).enter().append("path").attr("stroke", "#313131").attr("stroke-width", 1).attr("fill", "#535353").attr("d", path).on("mouseover", function (d, i) {
    d3.select(this).attr("fill", "#00b2ec").attr("stroke-width", 2);
    return tooltip.style("hidden", false).html(d.name + "<br/>" + d.population);
  }).on("mousemove", function (d) {
    tooltip.classed("hiddenTt", false).style("top", d3.event.pageY + -490 + "px").style("left", d3.event.pageX + -50 + "px").html(d.name + "<br/>" + "<p style='font-size: 13px'>Population: " + d.population + "</p><p style='font-size: 13px; margin-top: -10px'>Yearly change: " + d.Yearly_Change + "</p>");
  }).on("mouseout", function (d, i) {
    d3.select(this).attr("fill", "#535353").attr("stroke-width", 1);
    tooltip.classed("hiddenTt", true);
  });
  svg.call(d3.drag().on("drag", function () {
    var xy = d3.mouse(this);
    projection.rotate(xy).translate([xy[0], xy[1]]);
    svg.selectAll("path").attr("d", path);
  }));
}