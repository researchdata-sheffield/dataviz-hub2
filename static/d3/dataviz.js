/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */


let countryCoor = "https://unpkg.com/world-atlas@1/world/110m.json"
let countryNames = "https://gist.githubusercontent.com/lkopacz/dfd9cc04a4d5a5f0fe87c89a79524479/raw/39100d4f6b7c784bd5d838a4e357873ef6877579/world-country-names.csv"
let populationData = "https://raw.githubusercontent.com/yld-weng/datasets/master/CC0-PublicDomain/world_population2020.csv"

let margin = {top: 10, right: 10, bottom: 10, left: 10};
let width = 960 - margin.left - margin.right;
let height = 600 - margin.top - margin.bottom;
let projection = d3.geoNaturalEarth1();
										// .center([0, 15]) 
										// .rotate([20,0])
										// .scale([1300/(2*Math.PI)]) 
										// .translate([450,300]);
let path = d3.geoPath()
							.projection(projection);
let svg = d3.select("#d3")
						// .attr("width", width)
						// .attr("height", height)
								.append("g")
								.attr("position", "center")
								.attr("background-color", "#2B65EC");
let tooltip = d3.select("div.tooltip");

Promise.all([
	d3.json(countryCoor),
	d3.csv(countryNames),
	d3.csv(populationData)
]).then(data => {
		createMap(data[0], data[1], data[2])
}).catch(err => {
		throw err;
})


function createMap(world, names, population) {
	let countries1 = topojson.feature(world, world.objects.countries).features;
	let countries = countries1.filter(d => {
		return names.some(n => {
			if (d.id == n.id) return d.name = n.name;
		})
	});
	countries = countries.filter(d => {
		return population.some(function(p) {
			let countryName = d.name;
			let regionName = p.Region;
			if(countryName.includes(regionName)) {
				d.population = p.Population;
				return d.Yearly_Change = p.Yearly_Change
			}
		})
	})

	svg.selectAll("path")
			.data(countries)
			.enter()
			.append("path")
			.attr("stroke","#313131")
			.attr("stroke-width",1)
			.attr("fill", "#535353")
			.attr("d", path )
			.on("mouseover",function(d,i){
				d3.select(this).attr("fill","#00b2ec").attr("stroke-width",2);
				return tooltip.style("hidden", false).html(d.name + "<br/>" + d.population);
			})
			.on("mousemove",function(d){
				tooltip.classed("hiddenTt", false)
								.html(d.name + "<br/>" + "<p style='font-size: 13px'>Population: " + d.population + "</p><p style='font-size: 13px; margin-top: -10px'>Yearly change: " + d.Yearly_Change + "</p>")
								.style("left", (d3.event.pageX - 290) + "px")
								.style("top", (d3.event.pageY - 550) + "px");
			})
			.on("mouseout",function(d,i){
				d3.select(this).attr("fill","#535353").attr("stroke-width", 1);
				tooltip.classed("hiddenTt", true);
			});
	
	svg.call(d3.drag()
		.on("drag", function() {
			let xy = d3.mouse(this);
			projection.rotate(xy).translate([xy[0], xy[1]])
			svg.selectAll("path")
				.attr("d", path);
		}));
}
