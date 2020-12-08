// The following function builds the Horizontal Bar graph
function buildHorizontalBar(sample) {
    //console.log("buildPlot");
    //console.log(sample);
    var sample_values = sample?.sample_values;
    var lables = sample?.otu_ids;
    var hovertext = sample?.otu_labels;
    //var hovertext = hovertext.split(';');
    var topTenLables = lables?.slice(0, 10)?.reverse();
    var topTenLablesList = [
                            `OTU ${topTenLables[0]}`,
                            `OTU ${topTenLables[1]}`,
                            `OTU ${topTenLables[2]}`,
                            `OTU ${topTenLables[3]}`,
                            `OTU ${topTenLables[4]}`,
                            `OTU ${topTenLables[5]}`,
                            `OTU ${topTenLables[6]}`,
                            `OTU ${topTenLables[7]}`,
                            `OTU ${topTenLables[8]}`,
                            `OTU ${topTenLables[9]}`
                            ]
    console.log(topTenLablesList);
    // Use slice() to Grab the Top 10 sample_values,
    // otu_ids, and otu_labels (10 Each)
    var hbarData = [
        {
            //x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            //y: sample_values.slice(0, 10).reverse(),
            //values: sample_values.slice(0, 10).reverse(),
            //xtickvals: lables.slice(0, 10).reverse(),
            //y: sample_values.slice(0, 10),
            x: sample_values.slice(0, 10).reverse(),
            hovertext: hovertext.slice(0, 10).reverse(),
            hoverinfo: "hovertext",
            type: "bar",
            orientation: "h",
            marker: {
                  bar: {
                    color: '#1f77b4',
                    width: 10
                }
            },
            responsive: true,
            maintainAspectRatio: false,
            textposition: 'auto'
        }
    ];
      
    var hbarLayout = {
        type: "bar",
        barmode: "",
        showlegend: false,
        //margin: { t: 1, l: 120 },
        dataValues: true,
        yaxis: {
            title: "",
            //type: "linear",
            //tickmode: "array",
            //showticklabels: true,
            //ticks: outside,
            ticktext: topTenLablesList,
            tickvals: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
            automargin: true,
            autorange: true
            //autorange: true
          },        
      };

    // Use d3 to Select the Panel with id of `#bubble`
    var BAR = document.getElementById("bar")

    // Plot the horizontal bar chart
    Plotly.newPlot(BAR, hbarData, hbarLayout);
}