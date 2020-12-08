// The following function builds the Horizontal Bar graph

function buildBubblePlot(sample) {
    //console.log("buildPlot");
    //console.log(sample);
    var sampleValues = sample?.sample_values;
    var otuIds = sample?.otu_ids;
    var otuLables = sample?.otu_labels;

    // Use slice() to Grab the Top 10 sample_values,
    // otu_ids, and otu_labels (10 Each)
    var bubleData = [
        {
            x: otuIds,
            y: sampleValues,
            text: otuLables,
            mode: "markers",
            responsive: true,
            maintainAspectRatio: false,
            textposition: 'auto',
            marker: {
                size: sampleValues,
                color: otuIds
            }         
        }
    ];
      
    var bubbleLayout = {
        type: "bubble",
        showlegend: false,
        margin: { t: 0 },
        hovermode: "closests",
        dataValues: true,
        xaxis: {
            title: "OTU ID",
            automargin: true,
            autorange: true
            //autorange: true
          }
      };

    // Use d3 to Select the Panel with id of `#bubble`
    var BUBBLE = document.getElementById("bubble")

    // Plot the Bubble chart
    Plotly.newPlot(BUBBLE, bubleData, bubbleLayout);
}