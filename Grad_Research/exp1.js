$(document).ready(function(){
  drawBar();
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

/*----------------------------------------------------------
 *        _                          _                   _
 *       | |__    __ _  _ __    ___ | |__    __ _  _ __ | |_
 *       | '_ \  / _` || '__|  / __|| '_ \  / _` || '__|| __|
 *       | |_) || (_| || |    | (__ | | | || (_| || |   | |_
 *       |_.__/  \__,_||_|     \___||_| |_| \__,_||_|    \__|
 *
 -----------------------------------------------------------*/

// Draw bar chart
function drawBar(){
  // Hide svg2 due to no legend
  $('#svg2').hide();

  // Sample Data
  const sample = [
    {
      year: '1998',
      amount: 29480
    },
    {
      year: '1999',
      amount: 32098
    },
    {
      year: '2000',
      amount: 32259
    },
    {
      year: '2001',
      amount: 32760
    },
    {
      year: '2002',
      amount: 34366
    },
    {
      year: '2003',
      amount: 35220
    },
    {
      year: '2004',
      amount: 37065
    },
    {
      year: '2005',
      amount: 37876
    },
    {
      year: '2006',
      amount: 39930
    },
    {
      year: '2007',
      amount: 41774
    },
    {
      year: '2008',
      amount: 44474
    },
    {
      year: '2009',
      amount: 44728
    },
    {
      year: '2010',
      amount: 44115
    },
    {
      year: '2011',
      amount: 43639
    },
    {
      year: '2012',
      amount: 45632
    },
    {
      year: '2013',
      amount: 45926
    },
    {
      year: '2014',
      amount: 45543
    },
    {
      year: '2015',
      amount: 46481
    },
  ];

  // Click on radio button to draw icon bar chart
  $('input:radio').click(function(){
   // TODO Upload option to DB
    showTransition();
   // Show next stimuli
    setTimeout(function(){
      drawIconBar();
    },1500);
  });


        const margin = 80;
        const width = 1000 - 2 * margin;
        const height = 600 - 2 * margin;
        const svg = d3.select('#svg1')
                      .attr('width',width+200)
                      .attr('height',height+100);
      const svgContainer = d3.select('#container');


      const chart = svg.append('g')
                       .attr('transform', `translate(${margin}, ${margin})`);

      const xScale = d3.scaleBand()
                       .range([0, width])
                       .domain(sample.map((s) => s.year))
                       .padding(0.4)

      const yScale = d3.scaleLinear()
                       .range([height, 0])
                       .domain([0, 50000]);

      chart.append('g')
           .attr('transform', `translate(0, ${height})`)
           .call(d3.axisBottom(xScale));

      chart.append('g')
           .call(d3.axisLeft(yScale));


      const barGroups = chart.selectAll()
                             .data(sample)
                             .enter()
                             .append('g')

      barGroups.append('rect')
        .attr('class', 'bar')
        .attr('x', (g) => xScale(g.year))
        .attr('y', (g) => yScale(g.amount))
        .attr('height', (g) => height - yScale(g.amount))
        .attr('width', xScale.bandwidth())


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

// Change the label on top
    $('h1').text('Spending on Home & Community-Based Services from 1998 - 2015');
  };


/* -------------------------------------------------------------------------- */
// Draw bar chart with icon
   function drawIconBar(){
     // Hide svg2 due to no legend
     d3.selectAll("svg > *").remove();
     // Click on radio buttons to draw chart junk bar
     $('input:radio').click(function(){
      // TODO Upload option to DB
       showTransition();
      // Show next stimuli
       setTimeout(function(){
         drawCJBar();
       },1500);
     });
     // Sample Data
     const sample = [
       {
         year: '1998',
         amount: 29480
       },
       {
         year: '1999',
         amount: 32098
       },
       {
         year: '2000',
         amount: 32259
       },
       {
         year: '2001',
         amount: 32760
       },
       {
         year: '2002',
         amount: 34366
       },
       {
         year: '2003',
         amount: 35220
       },
       {
         year: '2004',
         amount: 37065
       },
       {
         year: '2005',
         amount: 37876
       },
       {
         year: '2006',
         amount: 39930
       },
       {
         year: '2007',
         amount: 41774
       },
       {
         year: '2008',
         amount: 44474
       },
       {
         year: '2009',
         amount: 44728
       },
       {
         year: '2010',
         amount: 44115
       },
       {
         year: '2011',
         amount: 43639
       },
       {
         year: '2012',
         amount: 45632
       },
       {
         year: '2013',
         amount: 45926
       },
       {
         year: '2014',
         amount: 45543
       },
       {
         year: '2015',
         amount: 46481
       },
     ];

      $('#container').css('background-image', '');
      // Change the label on top
      $('h1').show().text('Spending on Home & Community-Based Services from 1998 - 2015');
      $('svg').show();
      $('#questions').show();
      $('input:radio').prop("checked",false);
      // Change the question
      $('#ques').text('2.This picture shows the spending on Home & Community-Based Services from 1998 - 2015, which year has the highest amount?');

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
                       .padding(0.4)

      const yScale = d3.scaleLinear()
                       .range([height, 0])
                       .domain([0, 50000]);

      chart.append('g')
           .attr('transform', `translate(0, ${height})`)
           .call(d3.axisBottom(xScale));

      chart.append('g')
           .call(d3.axisLeft(yScale));

      chart.append('g')
           .attr('class','icon')
           .selectAll('image')
           .data(sample)
           .enter()
           .append('image')
           .attr('width',60)
           .attr('height',30)
           .attr('xlink:href',"image/piggy_bank.png")
           .attr('x',function(d) { return xScale(d.year) - 15; })
           .attr('y',function(d) { return yScale(d.amount) - 40; });

      const barGroups = chart.selectAll()
                             .data(sample)
                             .enter()
                             .append('g')

     barGroups.append('rect')
              .attr('class', 'bar')
              .attr('x', (g) => xScale(g.year))
              .attr('y', (g) => yScale(g.amount))
              .attr('height', (g) => height - yScale(g.amount))
              .attr('width', xScale.bandwidth())


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
   // Draw bar chart with Chart Junk
   function drawCJBar(){
      d3.selectAll("svg > *").remove();
      // Click on radio buttons to draw line chart
      $('input:radio').click(function(){
       // TODO Upload option to DB
        showTransition();
       // Show next stimuli
        setTimeout(function(){
          drawLineChart();
        },1500);
      });

      // Sample Data
      const sample = [
        {
          year: '1998',
          amount: 29480
        },
        {
          year: '1999',
          amount: 32098
        },
        {
          year: '2000',
          amount: 32259
        },
        {
          year: '2001',
          amount: 32760
        },
        {
          year: '2002',
          amount: 34366
        },
        {
          year: '2003',
          amount: 35220
        },
        {
          year: '2004',
          amount: 37065
        },
        {
          year: '2005',
          amount: 37876
        },
        {
          year: '2006',
          amount: 39930
        },
        {
          year: '2007',
          amount: 41774
        },
        {
          year: '2008',
          amount: 44474
        },
        {
          year: '2009',
          amount: 44728
        },
        {
          year: '2010',
          amount: 44115
        },
        {
          year: '2011',
          amount: 43639
        },
        {
          year: '2012',
          amount: 45632
        },
        {
          year: '2013',
          amount: 45926
        },
        {
          year: '2014',
          amount: 45543
        },
        {
          year: '2015',
          amount: 46481
        },
      ];

      $('#container').css('background-image', '');
      // Change the label on top
      $('h1').text('Spending on Home & Community-Based Services from 1998 - 2015');
      $('svg').show();
      $('#questions').show();
      $('input:radio').prop("checked",false);
      // Change the question
      $('#ques').text('3.This picture shows the spending on Home & Community-Based Services from 1998 - 2015, which year has the highest amount?');
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
                       .padding(0.4)

      const yScale = d3.scaleLinear()
                       .range([height, 0])
                       .domain([0, 50000]);

      const barGroups = chart.selectAll()
                             .data(sample)
                             .enter()
                             .append('g')

      barGroups.append('rect')
               .attr('class', 'bar')
               .attr('x', (g) => xScale(g.year))
               .attr('y', (g) => yScale(g.amount))
               .attr('height', (g) => height - yScale(g.amount))
               .attr('width', xScale.bandwidth())

      chart.append('g')
           .attr('transform', `translate(0, ${height})`)
           .call(d3.axisBottom(xScale));

      chart.append('g')
           .call(d3.axisLeft(yScale));



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
        .text('Thousands ($)')

      svg.append('text')
          .attr('class', 'label')
          .attr('x', width / 2 + margin)
          .attr('y', height + margin * 1.7)
          .attr('text-anchor', 'middle')
          .text('Fiscal Year')
   };


/* -------------------------------------------------------------------------- */
    // Draw line chart
    function drawLineChart(){
      d3.selectAll("svg > *").remove();
      // Click on radio buttons to draw line chart
      $('input:radio').click(function(){
       // TODO Upload option to DB
        showTransition();
       // Show next stimuli
        setTimeout(function(){
          drawIconScatter();
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
      $('#ques').text('4.This picture shows the spending on Family Supports from 1996 - 2015, what is the overall trend shown in this graph?');
      // Change the radio button text
      $('label[for=op1]').html('Increase');
      $('label[for=op2]').html('Decrease');
      $('label[for=op3]').html('No Change');

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

      chart.append('path')
         .data([sample])
         .attr('class', 'line')
         .attr('d', line);

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
// Draw sactter plot with icon
  function drawIconScatter(){
    d3.selectAll("svg > *").remove();
    // Click on radio buttons to draw line chart
    $('input:radio').click(function(){
     // TODO Upload option to DB
      showTransition();
     // Show next stimuli
      setTimeout(function(){
        drawCJLine();
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
    $('#ques').text('5.This picture shows the spending on Family Supports from 1996 - 2015, what is the overall trend shown in this graph?');

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
  // Draw line chart with chart Junk
  function drawCJLine(){
    d3.selectAll("svg > *").remove();
    // Click on radio buttons to draw line chart
    $('input:radio').click(function(){
      window.alert("Thanks for your participance, the rest of the stimuli will be shown on the iPad!");
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
    $('#ques').text('6.This picture shows the spending on Family Supports from 1996 - 2015, what is the overall trend shown in this graph?');

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

    chart.append('path')
         .data([sample])
         .attr('class', 'line')
         .attr('d', line);

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

    var img = chart.append("svg:image")
                   .attr("xlink:href", "image/piggybank_bg.png")
                   .attr("width", 250)
                   .attr("height", 250)
                   .attr("x", 300)
                   .attr("y",200);
  };
