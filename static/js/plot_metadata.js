// The Following Function that Builds the Metadata Panel
function buildMetadata(metadata) {

    // Use d3 to Select the Panel with id of `#sample-metadata`
    var PANEL = d3.select("#sample-metadata");

    // Use `.html("") to Clear any Existing Metadata
    PANEL.html("");
   // console.log(Object.entries(metadata));

    // Use `Object.entries` to Add Each Key & Value Pair to the Panel
    // Inside the Loop, Use d3 to Append New Tags for Each Key-Value in the Metadata
    Object.entries(metadata).forEach(([key, value]) => {
        console.log([key, value]);
        PANEL.append("h6").text(`${key}: ${value}`);
    })?.catch(function(error) {
        console.log(error);
    });
    // BONUS: Build the Gauge Chart
    //buildGauge(data.WFREQ);
}