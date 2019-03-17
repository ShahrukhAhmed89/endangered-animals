
d3.json('data.json', function(data){

  if(window.innerWidth<768){
    var margin = {top: 10, right: 0, bottom: 10, left: 60},
    width = window.innerWidth - margin.right,
    height = 550 - margin.top - margin.bottom;
  }else{
    var margin = {left:160, top:20, right:0, bottom:20},
    width = window.innerWidth , 
    height = window.innerHeight * 2 - 150 ;
  }


var svg1 = d3.select('#graph1')
         .attr('width', width)
         .attr('height', height)
         .append('g')
         .attr('class','species')
         .attr("transform","translate(" + margin.left + "," + margin.top + ")");

var div = d3.select('#tooltip1').style('opacity', 0)


var pos = [{"Amur Leopard":{"Population":">60","position":"-0px 0px"},"Black Rhino":{"Population":"<5,000","position":"-80px 0px"},"Bornean Orangutan":{"Population":"45,000 - 69,000","position":"-160px 0px"},"Cross River Gorilla":{"Population":"200 - 300 ","position":"-240px 0px"},"Eastern Lowland Gorilla":{"Population":"<4,000","position":"-320px 0px"},"Hawksbill Turtle":{"Population":"Unknown","position":"-400px 0px"},"Javan Rhino":{"Population":"60","position":"-480px 0px"},"Leatherback Turtle":{"Population":"Unknownn","position":"-560px 0px"},"Mountain Gorilla":{"Population":"880","position":"-640px 0px"},"Orangutan":{"Population":"41,000(Bornean), 7,500(Sumatran)","position":"-720px 0px"},"Pangolin":{"Population":"Unknown","position":"-800px 0px"},"Saola":{"Population":"Unknown","position":"-0px -80px"},"South China Tiger":{"Population":"believed to be extinct in the wild","position":"-80px -80px"},"Sumatran Elephant":{"Population":"2,400 – 2,800","position":"-160px -80px"},"Sumatran Orangutan":{"Population":"~7,300","position":"-240px -80px"},"Sumatran Rhino":{"Population":"220-275","position":"-320px -80px"},"Sumatran Tiger":{"Population":"400-500","position":"-400px -80px"},"Vaquita":{"Population":"<60","position":"-480px -80px"},"Western Lowland Gorilla":{"Population":"Unknown","position":"-560px -80px"},"African Wild Dog":{"Population":"6,600","position":"-640px -80px"},"Amur Tiger":{"Population":"540","position":"-720px -80px"},"Asian Elephant":{"Population":"40,000-50,000","position":"-800px -80px"},"Bengal Tiger":{"Population":"> 2,500","position":"-0px -160px"},"Black-footed Ferret":{"Population":"~300 in the wild","position":"-80px -160px"},"Blue Whale":{"Population":"10,000-25,000 ","position":"-160px -160px"},"Bluefin Tuna":{"Population":"Unknown","position":"-240px -160px"},"Bonobo":{"Population":"10,000 to 50,000","position":"-320px -160px"},"Borneo Pygmy Elephant":{"Population":"~1,500","position":"-400px -160px"},"Chimpanzee":{"Population":"172700 - 299700","position":"-480px -160px"},"Fin Whale":{"Population":"50,000-90,000","position":"-560px -160px"},"Galápagos Penguin":{"Population":"<2,000","position":"-640px -160px"},"Ganges River Dolphin":{"Population":"1,200–1,800","position":"-720px -160px"},"Green Turtle":{"Population":"Unknown","position":"-800px -160px"},"Hector's Dolphin":{"Population":"~7,000","position":"-0px -240px"},"Humphead Wrasse":{"Population":"Unknown","position":"-80px -240px"},"Indian Elephant":{"Population":"20,000 – 25,000","position":"-160px -240px"},"Indochinese Tiger":{"Population":"around 350 (2010 estimate)","position":"-240px -240px"},"Indus River Dolphin":{"Population":"~1100","position":"-320px -240px"},"Malayan Tiger":{"Population":"250-340","position":"-400px -240px"},"North Atlantic Right Whale":{"Population":"300-350 ","position":"-480px -240px"},"Red Panda":{"Population":"~ 10000 ","position":"-560px -240px"},"Sea Lions":{"Population":"Unknown","position":"-640px -240px"},"Sei Whale":{"Population":"Unknown","position":"-720px -240px"},"Snow Leopard":{"Population":"4080-6590","position":"-800px -240px"},"Sri Lankan Elephant":{"Population":"2500–4000","position":"-0px -320px"},"Tiger":{"Population":"~Around 3,890","position":"-80px -320px"},"Right whale":{"Population":"<300","position":"-160px -320px"},"African Elephant":{"Population":"~415,000 in the wild","position":"-240px -320px"},"Bigeye Tuna":{"Population":"Unknown","position":"-320px -320px"},"Black Spider Monkey":{"Population":"Unknown","position":"-400px -320px"},"Dugong":{"Population":"Unknown","position":"-480px -320px"},"Forest Elephant":{"Population":"Unknown","position":"-560px -320px"},"Giant Panda":{"Population":"~1864 in the wild","position":"-640px -320px"},"Giant Tortoise":{"Population":"Unknown","position":"-720px -320px"},"Great White Shark":{"Population":"Unknown","position":"-800px -320px"},"Greater One-Horned Rhino":{"Population":"3555","position":"-0px -400px"},"Hippopotamus":{"Population":"Unknown","position":"-80px -400px"},"Irrawaddy Dolphin":{"Population":"Unknown","position":"-160px -400px"},"Loggerhead Turtle":{"Population":"Unknown","position":"-240px -400px"},"Marine Iguana":{"Population":"Unknown","position":"-320px -400px"},"Olive Ridley Turtle":{"Population":"Unknown","position":"-400px -400px"},"Polar Bear":{"Population":"22000-31000","position":"-480px -400px"},"Savanna Elephant":{"Population":"Unknown","position":"-560px -400px"},"Sea Turtle":{"Population":"Unknown","position":"-640px -400px"},"Southern rockhopper penguin":{"Population":"Unknown","position":"-720px -400px"},"Whale Shark":{"Population":"Unknown","position":"-800px -400px"},"Yangtze Finless Porpoise":{"Population":"1000-1800","position":"-0px -480px"},"Albacore Tuna":{"Population":"Unknown","position":"-80px -480px"},"Beluga":{"Population":"~150,000","position":"-160px -480px"},"Greater Sage-Grouse":{"Population":"100000 to 500000","position":"-240px -480px"},"Jaguar":{"Population":"Unknown","position":"-320px -480px"},"Monarch Butterfly":{"Population":"Unknown","position":"-400px -480px"},"Mountain Plover":{"Population":"~20,000","position":"-480px -480px"},"Narwhal":{"Population":">80,000","position":"-560px -480px"},"Plains Bison":{"Population":"20504","position":"-640px -480px"},"White Rhino":{"Population":"20170","position":"-720px -480px"},"Yellowfin Tuna":{"Population":"Unknown","position":"-800px -480px"},"Arctic Fox":{"Population":"Several hundred thousand","position":"-0px -560px"},"Arctic Wolf":{"Population":"Unknown","position":"-80px -560px"},"Bowhead Whale":{"Population":"~10,000","position":"-160px -560px"},"Brown Bear":{"Population":"Over 200,000","position":"-240px -560px"},"Common Bottlenose Dolphin":{"Population":"600,000","position":"-320px -560px"},"Gray Whale":{"Population":"~150","position":"-400px -560px"},"Macaw":{"Population":"Unknown","position":"-480px -560px"},"Pronghorn":{"Population":"700,000","position":"-560px -560px"},"Skipjack Tuna":{"Population":"Unknown","position":"-640px -560px"},"Swift Fox":{"Population":"Unknown","position":"-720px -560px"},"Tree Kangaroo":{"Population":"Unknown","position":"-800px -560px"}}]

var treemap = d3.tree()
    .size([width/1.3, height/1.5]);


	var nodes = d3.hierarchy(data);

	nodes = treemap(nodes);

  var link = svg1.selectAll("link")
    .data( nodes.descendants().slice(1))
    .enter().append("path")
    .attr("class", "link1")
    .attr("d", function(d) {
       return "M" + d.y + "," + d.x
       + "C" + (d.y + d.parent.y) / 2 + "," + d.x
       + " " + (d.y + d.parent.y) / 2 + "," + d.parent.x
       + " " + d.parent.y + "," + d.parent.x;
       });


  var node = svg1.selectAll(".node")
    .data(nodes.descendants())
    .enter().append("g")
    .attr("class", function(d) { 
      return "node" + 
      (d.children ? " node--internal" : " node--leaf"); })
    .attr("transform", function(d) { 
      return "translate(" + d.y + "," + d.x + ")"; })
    .attr('id', function(d){
       	return d.data.name
    })
    .on('mousemove', function(d){
    			classes = d3.select(this).attr('class').split(" ");
    			id  = d3.select(this).attr('id');
    			if(classes[1]==='node--leaf'){
    					div.transition().duration(100).style("opacity", 1);
    			
    					div.html(
    							"<div class='animalImage' style='background-position:" + pos[0][id]['position'] +"'></div>"
    							+"<div class='animalInfo'>"
    							+"<p class='animalName'>" + id + "</p>"
    							+"<hr class='tooltopHr'>"
    							+"<p class='animalPop'>Numbers: " + pos[0][id]['Population']  + "</p></div>"
    					).style("left", (d3.event.pageX - 310) + "px")		
               .style("top", (d3.event.pageY - 28) + "px");	;
    			};
    	}).on('mouseout', function(d){
    				div.transition().duration(100).style("opacity", 0);
    	  });


  node.append("circle")
    .attr("r", 3);

  node.append("text")
  	.attr('class', 'text1')
    .attr("dy", ".35em")
    .attr("x", function(d) { return d.children ? -13 : 13; })
    .style("text-anchor", function(d) { 
    return d.children ? "end" : "start"; })
    .text(function(d) { return d.data.name; });

});



//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////Chart /////////////////////////////////////////////////
d3.csv("sankey.csv", function(error, data) {

  var units = "Widgets";

  if(window.innerWidth<768){
    var margin = {top: 10, right: 20, bottom: 10, left: 10},
      width = window.innerWidth - margin.left - margin.right,
      height = 550 - margin.top - margin.bottom;

  }else{
      var margin = {top: 10, right: 100, bottom: 10, left: 10},
      width = 1200 - margin.left - margin.right,
      height = 550 - margin.top - margin.bottom;
  }
  


  var formatNumber = d3.format(",.0f"),    // zero decimal places
      format = function(d) { return formatNumber(d) + " " + units; },
      color = d3.scaleOrdinal(d3.schemeCategory2);


  var svg = d3.select('#graph2')
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", 
            "translate(" + margin.left + "," + margin.top + ")");

  var div = d3.select('#tooltip2').style('opacity', 0)

  function update(button){

    var root = data.filter(function(d){
      return d['status'] === button

    })




    var sankey = d3.sankey()
        .nodeWidth(10)
        .nodePadding(10)
        .size([width, height]);

    var path = sankey.link();


    graph = {"nodes" : [], "links" : []};

      root.forEach(function (d) {
        graph.nodes.push({ "name": d.source });
        graph.nodes.push({ "name": d.target });
        graph.links.push({ "source": d.source,
                           "target": d.target,
                           "value": +d.value });

       });

     var filefilter = {"Critically Endangered":["Amur Leopard","Bornean Orangutan","Cross River Gorilla","Black Rhino","Eastern Lowland Gorilla","Hawksbill Turtle","Javan Rhino","Leatherback Turtle","Mountain Gorilla","Orangutan","Pangolin","Saola","South China Tiger","Sumatran Elephant","Sumatran Orangutan","Sumatran Rhino","Sumatran Tiger","Vaquita","Western Lowland Gorilla","African Wild Dog","Habitat Loss","Illegal Wildlife Trade","Conflict With Humans","Genetic Loss","Hunting Or Over-Fishing","Civil Unrest","Fisheries Bycatch","Natural Disasters","Invasive Species","Disease"],"Endangered":["Amur Tiger","Asian Elephant","Bengal Tiger","Black-footed Ferret","Blue Whale","Bluefin Tuna","Bonobo","Borneo Pygmy Elephant","Chimpanzee","Fin Whale","Galapagos Penguin","Ganges River Dolphin","Green Turtle","Hectors Dolphin","Humphead Wrasse","Indian Elephant","Indochinese Tiger","Indus River Dolphin","Malayan Tiger","North Atlantic Right Whale","Red Panda","Sea Lions","Sei Whale","Snow Leopard","Sri Lankan Elephant","Tiger","Gray Whale","Habitat Loss","Illegal Wildlife Trade","Conflict With Humans","Genetic Loss","Hunting Or Over-Fishing","Civil Unrest","Fisheries Bycatch","Disease","Domestication","Prey Loss","Climate Change","Pollution", "Invasive Species"],"Vulnerable":["African Elephant","Bigeye Tuna","Black Spider Monkey","Dugong","Forest Elephant","Giant Panda","Giant Tortoise","Great White Shark","Greater One-Horned Rhino","Irrawaddy Dolphin","Loggerhead Turtle","Marine Iguana","Olive Ridley Turtle","Southern rockhopper penguin","Whale Shark","Habitat Loss","Illegal Wildlife Trade","Conflict With Humans","Hunting Or Over-Fishing","Fisheries Bycatch","Invasive Species","Climate Change","Pollution",],"Near Threatened":["Albacore Tuna","Beluga","Greater Sage-Grouse","Jaguar","Monarch Butterfly","Mountain Plover","Narwhal","Plains Bison","White Rhino","Yellowfin Tuna","Habitat Loss","Illegal Wildlife Trade","Genetic Loss","Hunting Or Over-Fishing","Fisheries Bycatch","Climate Change","Pollution","Over-Fishing"],"Least Concern":["Arctic Fox","Bowhead Whale","Brown Bear","Common Bottlenose Dolphin","Macaw","Tree Kangaroo","Amazon River Dolphin","Habitat Loss","Illegal Wildlife Trade","Conflict With Humans","Hunting Or Over-Fishing","Fisheries Bycatch","Climate Change","Pollution"]}


     var pos = {"sanAmurLeopard":{"position":"-0px 0px"},"sanBlackRhino":{"position":"-80px 0px"},"sanBorneanOrangutan":{"position":"-160px 0px"},"sanCrossRiverGorilla":{"position":"-240px 0px"},"sanEasternLowlandGorilla":{"position":"-320px 0px"},"sanHawksbillTurtle":{"position":"-400px 0px"},"sanJavanRhino":{"position":"-480px 0px"},"sanLeatherbackTurtle":{"position":"-560px 0px"},"sanMountainGorilla":{"position":"-640px 0px"},"sanOrangutan":{"position":"-720px 0px"},"sanPangolin":{"position":"-800px 0px"},"sanSaola":{"position":"-0px -80px"},"sanSouthChinaTiger":{"position":"-80px -80px"},"sanSumatranElephant":{"position":"-160px -80px"},"sanSumatranOrangutan":{"position":"-240px -80px"},"sanSumatranRhino":{"position":"-320px -80px"},"sanSumatranTiger":{"position":"-400px -80px"},"sanVaquita":{"position":"-480px -80px"},"sanWesternLowlandGorilla":{"position":"-560px -80px"},"sanAfricanWildDog":{"position":"-640px -80px"},"sanAmurTiger":{"position":"-720px -80px"},"sanAsianElephant":{"position":"-800px -80px"},"sanBengalTiger":{"position":"-0px -160px"},"sanBlack-footedFerret":{"position":"-80px -160px"},"sanBlueWhale":{"position":"-160px -160px"},"sanBluefinTuna":{"position":"-240px -160px"},"sanBonobo":{"position":"-320px -160px"},"sanBorneoPygmyElephant":{"position":"-400px -160px"},"sanChimpanzee":{"position":"-480px -160px"},"sanFinWhale":{"position":"-560px -160px"},"sanGalapagosPenguin":{"position":"-640px -160px"},"sanGangesRiverDolphin":{"position":"-720px -160px"},"sanGreenTurtle":{"position":"-800px -160px"},"sanHectorsDolphin":{"position":"-0px -240px"},"sanHumpheadWrasse":{"position":"-80px -240px"},"sanIndianElephant":{"position":"-160px -240px"},"sanIndochineseTiger":{"position":"-240px -240px"},"sanIndusRiverDolphin":{"position":"-320px -240px"},"sanMalayanTiger":{"position":"-400px -240px"},"sanNorthAtlanticRightWhale":{"position":"-480px -240px"},"sanRedPanda":{"position":"-560px -240px"},"sanSeaLions":{"position":"-640px -240px"},"sanSeiWhale":{"position":"-720px -240px"},"sanSnowLeopard":{"position":"-800px -240px"},"sanSriLankanElephant":{"position":"-0px -320px"},"sanTiger":{"position":"-80px -320px"},"sanRightwhale":{"position":"-160px -320px"},"sanAfricanElephant":{"position":"-240px -320px"},"sanBigeyeTuna":{"position":"-320px -320px"},"sanBlackSpiderMonkey":{"position":"-400px -320px"},"sanDugong":{"position":"-480px -320px"},"sanForestElephant":{"position":"-560px -320px"},"sanGiantPanda":{"position":"-640px -320px"},"sanGiantTortoise":{"position":"-720px -320px"},"sanGreatWhiteShark":{"position":"-800px -320px"},"sanGreaterOne-HornedRhino":{"position":"-0px -400px"},"sanHippopotamus":{"position":"-80px -400px"},"sanIrrawaddyDolphin":{"position":"-160px -400px"},"sanLoggerheadTurtle":{"position":"-240px -400px"},"sanMarineIguana":{"position":"-320px -400px"},"sanOliveRidleyTurtle":{"position":"-400px -400px"},"sanPolarBear":{"position":"-480px -400px"},"sanSavannaElephant":{"position":"-560px -400px"},"sanSeaTurtle":{"position":"-640px -400px"},"sanSouthernrockhopperpenguin":{"position":"-720px -400px"},"sanWhaleShark":{"position":"-800px -400px"},"sanYangtzeFinlessPorpoise":{"position":"-0px -480px"},"sanAlbacoreTuna":{"position":"-80px -480px"},"sanBeluga":{"position":"-160px -480px"},"sanGreaterSage-Grouse":{"position":"-240px -480px"},"sanJaguar":{"position":"-320px -480px"},"sanMonarchButterfly":{"position":"-400px -480px"},"sanMountainPlover":{"position":"-480px -480px"},"sanNarwhal":{"position":"-560px -480px"},"sanPlainsBison":{"position":"-640px -480px"},"sanWhiteRhino":{"position":"-720px -480px"},"sanYellowfinTuna":{"position":"-800px -480px"},"sanArcticFox":{"position":"-0px -560px"},"sanArcticWolf":{"position":"-80px -560px"},"sanBowheadWhale":{"position":"-160px -560px"},"sanBrownBear":{"position":"-240px -560px"},"sanCommonBottlenoseDolphin":{"position":"-320px -560px"},"sanGrayWhale":{"position":"-400px -560px"},"sanMacaw":{"position":"-480px -560px"},"sanPronghorn":{"position":"-560px -560px"},"sanSkipjackTuna":{"position":"-640px -560px"},"sanSwiftFox":{"position":"-720px -560px"},"sanTreeKangaroo":{"position":"-800px -560px"}}
     



    graph.nodes = filefilter[button]
    d3.selectAll('.link2').remove()
    d3.selectAll('.node2').remove()

      d3.selection.prototype.moveToFront = function() {
             return this.each(function(){
                  this.parentNode.appendChild(this);
         });
       };



      graph.links.forEach(function (d, i){
        graph.links[i].source = graph.nodes.indexOf(graph.links[i].source);
        graph.links[i].target = graph.nodes.indexOf(graph.links[i].target);
      });
    
      graph.nodes.forEach(function (d, i) {
         graph.nodes[i] = { "name": d };
       });

      sankey
        .nodes(graph.nodes)
        .links(graph.links)
        .layout(32);

      var link = svg.append("g").selectAll(".link")
          .data(graph.links)
        .enter().append("path")
          .attr("d", path)
          .style("stroke-width", function(d) { return Math.max(1, d.dy); })
          .sort(function(a, b) { return b.dy - a.dy; })
          .attr('stroke', "#a2bfc7")
          .attr('stroke-opacity', .2)
          .attr('class', function(d){

             return "link2 san"+ d.source.name.replace(/ /g, "")+" san"+ d.target.name.replace(/ /g, "")
          });


      link.append("title")
            .text(function(d) {
             return d.source.name + " faces threat from " + 
                    d.target.name +"." });

      var node = svg.append("g").selectAll(".node")
          .data(graph.nodes)
          .enter().append("g")
          .attr('class', "node2")
          .attr('id', function(d){return "san"+ d.name.replace(/ /g, "")})
          .attr("transform", function(d) { 
            return "translate(" + d.x + "," + d.y + ")"; })
          .on("mousemove  ",function(d){
             d.color = color(d.name.replace(/ .*/, ""));
            
             $('.link2').each(function () {
                      $(this).attr('stroke',"#a2bfc7").attr('stroke-opacity', .2) ;
              });
            
            getClass = $(this).attr("id").split(' ')[0];//d3.select(this).attr("class")
            classed = "."+getClass
            

            $(classed).each(function () {
            $(this).attr('stroke','#5a91a6').attr('stroke-opacity', 1) ;
              var sel = d3.select(this);
              sel.moveToFront();
            });   

           //////////////////////////////////////////////////////

          classes = d3.select(this).attr('class').split(" ");
          id  = d3.select(this).attr('id');
      
           if(pos[id]===undefined){
              div.transition().duration(100).style("opacity", 0);
            }else{
              div.transition().duration(100).style("opacity", 1);
            div.style('background-position', pos[id]['position']
            )
            .style("left", (d3.event.pageX -40) + "px" )    
            .style("top", (d3.event.pageY - 90) + "px"); ;

            };
          }).on("mouseout",function(d){
            d.color = color(d.name.replace(/ .*/, ""));
            div.transition().duration(100).style("opacity", 0);
            $('.link2').each(function () {
                      $(this).attr('stroke',"#a2bfc7").attr('stroke-opacity', .2) ;
                  
            });

        });

          

      node.append("rect")
          .attr("height", function(d) { return d.dy; })
          .attr("width", sankey.nodeWidth())
          //.attr("width", (x.range()[1] - x.range()[0]) / data.length - 2)
          .style("fill", function(d) { 
            return '#5a91a6'//d.color = color(d.name.replace(/ .*/, "")); 
          })
          .style("stroke", 'white'            )

      node.append("text")
          .attr('class','text2')
          .attr("x", -6)
          .attr("y", function(d) { return d.dy/1.7 ; })
          .attr("dy", ".1em")
          .attr("text-anchor", "end")
          .attr("transform", null)
          .text(function(d) { return d.name; })
          .filter(function(d) { return d.x < width / 2; })
          .attr("x",  6 + sankey.nodeWidth())
          .attr("text-anchor", "start")
          .style("font-size", function(d){
            if(button==='Endangered'){
              return 12
            }else{
              return 15
            }
          });

  };

var buttonText = "Critically Endangered"
update(buttonText);


d3.selectAll('.myButton').on('click', function(){
    var buttonText = d3.select(this).text();
    update(buttonText);

}); 




});