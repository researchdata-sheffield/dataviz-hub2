/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

dataURL = "https://raw.githubusercontent.com/yld-weng/datasets/master/CC0-PublicDomain/world_population2020.csv"

var margin = {top: 10, right: 10, bottom: 10, left: 10};
var width = 960 - margin.left - margin.right;
var height = 600 - margin.top - margin.bottom;
var projection = d3.geoNaturalEarth1()
										.center([0, 15]) 
										.rotate([-9,0])
										.scale([1300/(2*Math.PI)]) 
										.translate([450,300]);
var path = d3.geoPath()
							.projection(projection);
var svg = d3.select("#d3")
							.attr("width", width)
							.attr("height", height)
								.append("g")
								.attr("position", "center")
								.attr("background-color", "#2B65EC");
var tooltip = d3.select("div.tooltip");

Promise.all([
	d3.json("https://gist.github.com/d3noob/5193723/raw/world-110m2.json"),
	d3.csv("https://gist.githubusercontent.com/lkopacz/dfd9cc04a4d5a5f0fe87c89a79524479/raw/39100d4f6b7c784bd5d838a4e357873ef6877579/world-country-names.csv"),
]).then(function(files) {
		ready(files[0], files[1])
}).catch(function(err) {
		// handle error here
		throw err;
})


function ready(world, names) {
	var countries1 = topojson.feature(world, world.objects.countries).features;
		countries = countries1.filter(function(d) {
		return names.some(function(n) {
			if (d.id == n.id) return d.name = n.name;
		})});
	svg.selectAll("path")
			.data(countries)
			.enter()
			.append("path")
			.attr("stroke","black")
			.attr("stroke-width",1)
						.attr("fill", "grey")
			.attr("d", path )
			.on("mouseover",function(d,i){
								d3.select(this).attr("fill","#00378f").attr("stroke-width",2);
								return tooltip.style("hidden", false).html(d.name);
						})
						.on("mousemove",function(d){
								tooltip.classed("hiddenTt", false)
												.style("top", (d3.event.pageY + 300) + "px")
												.style("left", (d3.event.pageX + 100) + "px")
												.html(d.name);
						})
						.on("mouseout",function(d,i){
								d3.select(this).attr("fill","grey").attr("stroke-width",1);
								tooltip.classed("hiddenTt", true);
						});
}