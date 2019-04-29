$(document).ready(function(){
  drawIconCJLine();
});

// Show transition image
   function showTransition(){
     $('h1').hide();
     $('svg').hide();
     $('#questions').hide();
     $('#container').css('background-image', 'url("image/transition.jpg")');
   };


// Helper function for Isotype
function range(start, stop, step) {
    if (typeof stop == 'undefined') {
        // one param defined
        stop = start;
        start = 0;
    }

    if (typeof step == 'undefined') {
        step = 1;
    }

    if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
        return [];
    }

    var result = [];
    for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
        result.push(i);
    }

    return result;
};

/* -------------------------------------------------------------------------- */
// Draw line chart with icon & chart Junk
function drawIconCJLine(){
  d3.selectAll("svg > *").remove();
  // Click on radio buttons to draw line chart
  $('input:radio').click(function(){
   // TODO Upload option to DB
    showTransition();
   // Show next stimuli
    setTimeout(function(){
      drawIconLine();
    },1500);
  });
  // Sample Data
  const sample = [
    {
      year: '1996',
      amount: 252991
    },
    {
      year: '1997',
      amount: 273982
    },
    {
      year: '1998',
      amount: 285753
    },
    {
      year: '1999',
      amount: 302493
    },
    {
      year: '2000',
      amount: 320727
    },
    {
      year: '2001',
      amount: 348881
    },
    {
      year: '2002',
      amount: 373279
    },
    {
      year: '2003',
      amount: 384208
    },
    {
      year: '2004',
      amount: 393374
    },
    {
      year: '2005',
      amount: 407436
    },
    {
      year: '2006',
      amount: 421713
    },
    {
      year: '2007',
      amount: 438701
    },
    {
      year: '2008',
      amount: 462752
    },
    {
      year: '2009',
      amount: 475955
    },
    {
      year: '2010',
      amount: 461588
    },
    {
      year: '2011',
      amount: 464522
    },
    {
      year: '2012',
      amount: 466800
    },
    {
      year: '2013',
      amount: 471419
    },
    {
      year: '2014',
      amount: 501932
    },
    {
      year: '2015',
      amount: 523501
    },
  ];

  $('#container').css('background-image', '');
  // Change the label on top
  $('h1').text('Spending on Family Supports from 1996 - 2015');
  $('svg').show();
  $('#questions').show();
  $('input:radio').prop("checked",false);
  // Change the question
  $('#ques').text('7.This picture shows the spending on Family Supports from 1996 - 2015, what is the overall trend shown in this graph?');

  // Draw Chart
  $('#svg2').hide();
  const margin = 80;
  const width = 1000 - 2 * margin;
  const height = 600 - 2 * margin;
  const svg = d3.select('#svg1')
                .attr('width',width + 200)
                .attr('height', height + 100);

  const chart = svg.append('g')
                   .attr('transform', `translate(${margin}, ${margin})`);

  const xScale = d3.scaleBand()
                   .range([0, width])
                   .domain(sample.map((s) => s.year))

  const yScale = d3.scaleLinear()
                   .range([height, 0])
                   .domain([0, 600000]);

  chart.append('g')
       .attr('transform', `translate(0, ${height})`)
       .call(d3.axisBottom(xScale));

  chart.append('g')
       .call(d3.axisLeft(yScale));

  chart.selectAll(".dot")
       .data(sample)
       .enter().append("image") // Uses the enter().append() method
       .attr("x", function(d) { return xScale(d.year) })
       .attr("y", function(d) { return yScale(d.amount) })
       .attr("width", 40)
       .attr("height", 40)
       .attr("xlink:href", "image/dollar.png");


  var img = chart.append("svg:image")
                 .attr("xlink:href", "image/piggybank_bg.png")
                 .attr("width", 250)
                 .attr("height", 250)
                 .attr("x", 300)
                 .attr("y",200);

  svg.append('text')
     .attr('class', 'label')
     .attr('x', -(height / 2) - margin)
     .attr('y', margin / 4.5)
     .attr('transform', 'rotate(-90)')
     .attr('text-anchor', 'middle')
     .text('Thousands ($)');

  svg.append('text')
     .attr('class', 'label')
     .attr('x', width / 2 + margin)
     .attr('y', height + margin * 1.7)
     .attr('text-anchor', 'middle')
     .text('Fiscal Year');
};

/* -------------------------------------------------------------------------- */
// Draw line chart with icon
function drawIconLine(){
  d3.selectAll("svg > *").remove();
  // Click on radio buttons to draw line chart
  $('input:radio').click(function(){
   // TODO Upload option to DB
    showTransition();
   // Show next stimuli
    setTimeout(function(){
      drawScatter();
    },1500);
  });
  // Sample Data
  const sample = [
    {
      year: '1996',
      amount: 252991
    },
    {
      year: '1997',
      amount: 273982
    },
    {
      year: '1998',
      amount: 285753
    },
    {
      year: '1999',
      amount: 302493
    },
    {
      year: '2000',
      amount: 320727
    },
    {
      year: '2001',
      amount: 348881
    },
    {
      year: '2002',
      amount: 373279
    },
    {
      year: '2003',
      amount: 384208
    },
    {
      year: '2004',
      amount: 393374
    },
    {
      year: '2005',
      amount: 407436
    },
    {
      year: '2006',
      amount: 421713
    },
    {
      year: '2007',
      amount: 438701
    },
    {
      year: '2008',
      amount: 462752
    },
    {
      year: '2009',
      amount: 475955
    },
    {
      year: '2010',
      amount: 461588
    },
    {
      year: '2011',
      amount: 464522
    },
    {
      year: '2012',
      amount: 466800
    },
    {
      year: '2013',
      amount: 471419
    },
    {
      year: '2014',
      amount: 501932
    },
    {
      year: '2015',
      amount: 523501
    },
  ];

  $('#container').css('background-image', '');
  // Change the label on top
  $('h1').text('Spending on Family Supports from 1996 - 2015');
  $('svg').show();
  $('#questions').show();
  $('input:radio').prop("checked",false);
  // Change the question
  $('#ques').text('8.This picture shows the spending on Family Supports from 1996 - 2015, what is the overall trend shown in this graph?');
  // Change the radio button text
  $('label[for=op1]').html('Increase');
  $('label[for=op2]').html('Decrease');
  $('label[for=op3]').html('No Change');

  // Draw Chart
  $('h1').show();
  $('#svg2').hide();
  const margin = 80;
  const width = 1000 - 2 * margin;
  const height = 600 - 2 * margin;
  const svg = d3.select('#svg1')
                .attr('width',width + 200)
                .attr('height', height + 100);

  const chart = svg.append('g')
                   .attr('transform', `translate(${margin}, ${margin})`);

  const xScale = d3.scaleBand()
                   .range([0, width])
                   .domain(sample.map((s) => s.year))

  const yScale = d3.scaleLinear()
                   .range([height, 0])
                   .domain([0, 600000]);

  chart.append('g')
       .attr('transform', `translate(0, ${height})`)
       .call(d3.axisBottom(xScale));

  chart.append('g')
       .call(d3.axisLeft(yScale));

  var line = d3.line()
               .x(function(d) {return xScale(d.year); })
               .y(function(d) {return yScale(d.amount); })
               .curve(d3.curveMonotoneX);

  chart.append('path')
       .data([sample])
       .attr('class', 'line')
       .attr('d', line);


  chart.selectAll(".dot")
       .data(sample)
       .enter().append("image")
       .attr("width", 30)
       .attr("height", 30)
       .attr('x', function(d) {return xScale(d.year) - 10;})
       .attr('y', function(d) {return yScale(d.amount) -  15;})
       .attr("xlink:href", "image/dollar.png");

  svg.append('text')
          .attr('class', 'label')
          .attr('x', -(height / 2) - margin)
          .attr('y', margin / 4.5)
          .attr('transform', 'rotate(-90)')
          .attr('text-anchor', 'middle')
          .text('Thousands ($)')

  svg.append('text')
          .attr('class', 'label')
          .attr('x', width / 2 + margin)
          .attr('y', height + margin * 1.7)
          .attr('text-anchor', 'middle')
          .text('Fiscal Year')

};

/* -------------------------------------------------------------------------- */
// Draw scatter plot
function drawScatter(){
  d3.selectAll("svg > *").remove();
  // Click on radio buttons to draw line chart
  $('input:radio').click(function(){
   // TODO Upload option to DB
    showTransition();
   // Show next stimuli
    setTimeout(function(){
      drawIsotypeBar();
    },1500);
  });

  // Sample Data
  const sample = [
    {
      year: '1996',
      amount: 252991
    },
    {
      year: '1997',
      amount: 273982
    },
    {
      year: '1998',
      amount: 285753
    },
    {
      year: '1999',
      amount: 302493
    },
    {
      year: '2000',
      amount: 320727
    },
    {
      year: '2001',
      amount: 348881
    },
    {
      year: '2002',
      amount: 373279
    },
    {
      year: '2003',
      amount: 384208
    },
    {
      year: '2004',
      amount: 393374
    },
    {
      year: '2005',
      amount: 407436
    },
    {
      year: '2006',
      amount: 421713
    },
    {
      year: '2007',
      amount: 438701
    },
    {
      year: '2008',
      amount: 462752
    },
    {
      year: '2009',
      amount: 475955
    },
    {
      year: '2010',
      amount: 461588
    },
    {
      year: '2011',
      amount: 464522
    },
    {
      year: '2012',
      amount: 466800
    },
    {
      year: '2013',
      amount: 471419
    },
    {
      year: '2014',
      amount: 501932
    },
    {
      year: '2015',
      amount: 523501
    },
  ];

  $('#container').css('background-image', '');
  // Change the label on top
  $('h1').text('Spending on Family Supports from 1996 - 2015');
  $('svg').show();
  $('#questions').show();
  $('input:radio').prop("checked",false);
  // Change the question
  $('#ques').text('9.This picture shows the spending on Family Supports from 1996 - 2015, what is the overall trend shown in this graph?');

  // Draw Chart
  $('#svg2').hide();
  const margin = 80;
  const width = 1000 - 2 * margin;
  const height = 600 - 2 * margin;
  const svg = d3.select('#svg1')
                .attr('width',width + 200)
                .attr('height', height + 100);

  const chart = svg.append('g')
                   .attr('transform', `translate(${margin}, ${margin})`);

  const xScale = d3.scaleBand()
                   .range([0, width])
                   .domain(sample.map((s) => s.year))

  const yScale = d3.scaleLinear()
                   .range([height, 0])
                   .domain([0, 600000]);

  chart.append('g')
       .attr('transform', `translate(0, ${height})`)
       .call(d3.axisBottom(xScale));

  chart.append('g')
       .call(d3.axisLeft(yScale));

  var line = d3.line()
               .x(function(d) {return xScale(d.year); })
               .y(function(d) {return yScale(d.amount); })
               .curve(d3.curveMonotoneX);


  chart.selectAll(".dot")
       .data(sample)
       .enter().append("circle")
       .attr("r", 7)
       .attr('class','dot')
       .attr('cx', function(d) {return xScale(d.year); })
       .attr('cy', function(d) {return yScale(d.amount);})
       .style("fill", "steelblue")
       .style("opacity", .5);

  svg.append('text')
          .attr('class', 'label')
          .attr('x', -(height / 2) - margin)
          .attr('y', margin / 4.5)
          .attr('transform', 'rotate(-90)')
          .attr('text-anchor', 'middle')
          .text('Thousands ($)')

  svg.append('text')
          .attr('class', 'label')
          .attr('x', width / 2 + margin)
          .attr('y', height + margin * 1.7)
          .attr('text-anchor', 'middle')
          .text('Fiscal Year')
};

/* -------------------------------------------------------------------------- */
// Draw Isotype Bar
function drawIsotypeBar(){
  d3.selectAll("svg > *").remove();
  // Click on radio buttons to draw line chart
  $('input:radio').click(function(){
   // TODO Upload option to DB
    showTransition();
   // Show next stimuli
    setTimeout(function(){
      drawCJIsotype();
    },1500);
  });

  // Sample Data
  const sample = [
    {
      name: '16+ State Operated Institution',
      amount: 210110
    },
    {
      name: 'Public ICF/ID',
      amount: 165054
    },
    {
      name: '16+ Private ICF/ID',
      amount: 113744
    },
    {
      name: 'Private ICF/ID(<16)',
      amount: 106553
    },
    {
      name: '16+ Non-ICF/ID',
      amount: 33407
    },
    {
      name: 'Supported Living',
      amount: 27593
    },
  ];

  $('#container').css('background-image', '');
  // Change the label on top
  $('h1').text('Cost of Care by Settings in US');
  $('svg').show();
  $('#questions').show();
  $('input:radio').prop("checked",false);
  // Change the question
  $('#ques').text('10.This picture shows the Cost of Care by Settings in US, what setting has the biggest cost?');
  // Change the radio button text
  $('label[for=op1]').html('16+ State Operated Institution');
  $('label[for=op2]').html('Public ICF/ID');
  $('label[for=op3]').html('16+ Private ICF/ID');

  // Draw Chart
  $('#svg2').hide();
  const margin = 80;
  const width = 1000 - 2 * margin;
  const height = 600 - 2 * margin;
  const svg = d3.select('#svg1')
                .attr('width',width + 200)
                .attr('height', height + 100);

  const chart = svg.append('g')
                   .attr('transform', `translate(${margin}, ${margin})`);

  const xScale = d3.scaleBand()
                   .range([0, width])
                   .domain(sample.map((s) => s.name))

  const yScale = d3.scaleLinear()
                   .range([height, 0])
                   .domain([0, 220000]);

  chart.append('g')
       .attr('transform', `translate(0, ${height})`)
       .call(d3.axisBottom(xScale));

  chart.append('g')
       .call(d3.axisLeft(yScale));



  var groups = chart.selectAll('.groups')
                    .data(sample)
                    .enter()
                    .append('g')
                    .attr('transform', function(d) {
                      return "translate(" + xScale(d.name) + ")";});

  var dots = groups.selectAll("circle")
                   .data(function(d){
                     //Loop over the range output and pair them with d.name
                     //Put them in a json object and add that to the data array
                     var data = [];
                     var range_output = range(d.amount,0,-10000);
                     for(var i = 0; i < range_output.length; i++){
                       var temp = {name: d.name, amount: range_output[i]};
                       data.push(temp);
                     }
                     //console.log(range(d.amount,0,-20000));
                     return data;})
                   .enter().append("circle")
                   .attr("class", "dot")
                   .attr("r", 8)
                   .attr("cx", function(d) {
                     return (width/sample.length)/2;})
                   .attr("cy", function(d) {
                     return yScale(d.amount);})
                   .style("fill", "steelblue")
                   .style("opacity", .5);

  svg.append('text')
     .attr('class', 'label')
     .attr('x', -(height / 2) - margin)
     .attr('y', margin / 4.5)
     .attr('transform', 'rotate(-90)')
     .attr('text-anchor', 'middle')
     .text('Thousands ($)')

  svg.append('text')
     .attr('class', 'label')
     .attr('x', width / 2 + margin)
     .attr('y', height + margin * 1.7)
     .attr('text-anchor', 'middle')
     .text('Care by Settings')

}

/* -------------------------------------------------------------------------- */
// Draw Isotype Char Junk
function drawCJIsotype(){
  d3.selectAll("svg > *").remove();
  // Click on radio buttons to draw line chart
  $('input:radio').click(function(){
   // TODO Upload option to DB
    showTransition();
   // Show next stimuli
    setTimeout(function(){
      drawIconIsotype();
    },1500);
  });

  // Sample Data
  const sample = [
    {
      name: '16+ State Operated Institution',
      amount: 210110
    },
    {
      name: 'Public ICF/ID',
      amount: 165054
    },
    {
      name: '16+ Private ICF/ID',
      amount: 113744
    },
    {
      name: 'Private ICF/ID(<16)',
      amount: 106553
    },
    {
      name: '16+ Non-ICF/ID',
      amount: 33407
    },
    {
      name: 'Supported Living',
      amount: 27593
    },
  ];

  $('#container').css('background-image', '');
  // Change the label on top
  $('h1').text('Cost of Care by Settings in US');
  $('svg').show();
  $('#questions').show();
  $('input:radio').prop("checked",false);
  // Change the question
  $('#ques').text('11.This picture shows the Cost of Care by Settings in US, what setting has the biggest cost?');
  // Change the radio button text
  $('label[for=op1]').html('16+ State Operated Institution');
  $('label[for=op2]').html('Public ICF/ID');
  $('label[for=op3]').html('16+ Private ICF/ID');

  // Draw Chart
  $('#svg2').hide();
  const margin = 80;
  const width = 1000 - 2 * margin;
  const height = 600 - 2 * margin;
  const svg = d3.select('#svg1')
                .attr('width',width + 200)
                .attr('height', height + 100);

  const chart = svg.append('g')
                   .attr('transform', `translate(${margin}, ${margin})`);

  const xScale = d3.scaleBand()
                   .range([0, width])
                   .domain(sample.map((s) => s.name))

  const yScale = d3.scaleLinear()
                   .range([height, 0])
                   .domain([0, 220000]);

  chart.append('g')
       .attr('transform', `translate(0, ${height})`)
       .call(d3.axisBottom(xScale));

  chart.append('g')
       .call(d3.axisLeft(yScale));



  var groups = chart.selectAll('.groups')
                     //Connecting to the entire data source
                    .data(sample)
                    .enter()
                    .append('g')
                    .attr('transform', function(d) {
                      return "translate(" + xScale(d.name) + ")";});

  var dots = groups.selectAll("circle")
                    //Connecting each bar with the single point associated with its name,
                    //draw a bunch of circles up to that point
                    //pass in an array of points that exceed in height uniformly up to the point
                    //d3.range() - a uniformly increasing list of integers up to a max
                   .data(function(d){
                     //Loop over the range output and pair them with d.name
                     //Put them in a json object and add that to the data array
                     // -10000 is the difference between each point (padding)
                     var data = [];
                     var range_output = range(d.amount,0,-10000);
                     for(var i = 0; i < range_output.length; i++){
                       var temp = {name: d.name, amount: range_output[i]};
                       data.push(temp);
                     }
                     //console.log(range(d.amount,0,-20000));
                     return data;})
                   .enter().append("circle")
                   .attr("class", "dot")
                   .attr("r", 8)
                   // X position, which is half of each bar-regions's width
                   .attr("cx", function(d) {
                     return (width/sample.length)/2;})
                   .attr("cy", function(d) {
                     return yScale(d.amount);})
                   .style("fill", "steelblue")
                   .style("opacity", .5);

 var img = chart.append("svg:image")
                .attr("xlink:href", "image/piggybank_bg.png")
                .attr("width", 150)
                .attr("height", 150)
                .attr("x", 70)
                .attr("y",305);

  svg.append('text')
     .attr('class', 'label')
     .attr('x', -(height / 2) - margin)
     .attr('y', margin / 4.5)
     .attr('transform', 'rotate(-90)')
     .attr('text-anchor', 'middle')
     .text('Thousands ($)')

  svg.append('text')
     .attr('class', 'label')
     .attr('x', width / 2 + margin)
     .attr('y', height + margin * 1.7)
     .attr('text-anchor', 'middle')
     .text('Care by Settings')

}

/* -------------------------------------------------------------------------- */
// Draw Icon Isotype
function drawIconIsotype(){
  d3.selectAll("svg > *").remove();
  // Click on radio buttons to draw line chart
  $('input:radio').click(function(){
     window.alert("You've finished the study and may close the window now. Thanks for your participance!")
  });

  // Sample Data
  const sample = [
    {
      name: '16+ State Operated Institution',
      amount: 210110
    },
    {
      name: 'Public ICF/ID',
      amount: 165054
    },
    {
      name: '16+ Private ICF/ID',
      amount: 113744
    },
    {
      name: 'Private ICF/ID(<16)',
      amount: 106553
    },
    {
      name: '16+ Non-ICF/ID',
      amount: 33407
    },
    {
      name: 'Supported Living',
      amount: 27593
    },
  ];

  $('#container').css('background-image', '');
  // Change the label on top
  $('h1').text('Cost of Care by Settings in US');
  $('svg').show();
  $('#questions').show();
  $('input:radio').prop("checked",false);
  // Change the question
  $('#ques').text('12.This picture shows the Cost of Care by Settings in US, what setting has the biggest cost?');
  // Change the radio button text
  $('label[for=op1]').html('16+ State Operated Institution');
  $('label[for=op2]').html('Public ICF/ID');
  $('label[for=op3]').html('16+ Private ICF/ID');

  // Draw Chart
  $('#svg2').hide();
  const margin = 80;
  const width = 1000 - 2 * margin;
  const height = 600 - 2 * margin;
  const svg = d3.select('#svg1')
                .attr('width',width + 200)
                .attr('height', height + 100);

  const chart = svg.append('g')
                   .attr('transform', `translate(${margin}, ${margin})`);

  const xScale = d3.scaleBand()
                   .range([0, width])
                   .domain(sample.map((s) => s.name))

  const yScale = d3.scaleLinear()
                   .range([height, 0])
                   .domain([0, 220000]);

  chart.append('g')
       .attr('transform', `translate(0, ${height})`)
       .call(d3.axisBottom(xScale));

  chart.append('g')
       .call(d3.axisLeft(yScale));

  var groups = chart.selectAll('.groups')
                    .data(sample)
                    .enter()
                    .append('g')
                    .attr('transform', function(d) {
                      return "translate(" + xScale(d.name) + ")";});

  var dots = groups.selectAll(".dot")
                   .data(function(d){
                     //Loop over the range output and pair them with d.name
                     //Put them in a json object and add that to the data array
                     var data = [];
                     var range_output = range(d.amount,0,-14000);
                     for(var i = 0; i < range_output.length; i++){
                       var temp = {name: d.name, amount: range_output[i]};
                       data.push(temp);
                     }
                     //console.log(range(d.amount,0,-20000));
                     return data;})
                   .enter().append("image")
                   .attr('width',30)
                   .attr('height',30)
                   .attr("xlink:href", "image/piggy_bank.png")
                   .attr("x", function(d) {
                     return (width/sample.length)/2 - 18;})
                   .attr("y", function(d) {
                     return yScale(d.amount) - 25;});

  svg.append('text')
     .attr('class', 'label')
     .attr('x', -(height / 2) - margin)
     .attr('y', margin / 4.5)
     .attr('transform', 'rotate(-90)')
     .attr('text-anchor', 'middle')
     .text('Thousands ($)')

  svg.append('text')
     .attr('class', 'label')
     .attr('x', width / 2 + margin)
     .attr('y', height + margin * 1.7)
     .attr('text-anchor', 'middle')
     .text('Care by Settings')
}
