function init() {
    // Grab a Reference to the Dropdown Select Element
    var selector = d3.select("#selDataset");
    
    d3.json("samples.json").then(function(data) {
        // console log the data to see output
        // console.log(data);

        // create variables for each data subset
        var names = data?.names;
        var metadata = data?.metadata;
        var samples = data?.samples;

        // console log the names to see outpu
        console.log(names);

        // console log the samples to see output
        console.log(samples);

        // console log metadata
        console.log(metadata);

        // For each sampe append the value to the dropdown option
        data.samples.forEach((sample) => {
            selector
            .append("option")
            .text(sample?.id)
            .property("value", sample?.id);
        })?.catch(function(error) {
            console.log(error);
        });

        var firstMetadata = metadata?.[0];
        var firstSample = samples?.[0];

        console.log(firstMetadata);

        // Use the First Metadata from the List to Build Metadata table
        buildMetadata(firstMetadata);

        // Use the First Sample from the List to Build horizontal bar chart
        buildHorizontalBar(firstSample);

        // Use the First Sample from the List to Build Bubble chart
        buildBubblePlot(firstSample);

        // Use the First Meta Data from the List to Build Gauge chart
        buildGaugePlot((firstMetadata?.wfreq) ?? 0);

    })?.catch(function(error) {
        console.log(error);
    });
}

function optionChanged(newSample) {

    console.log(newSample);

    d3.json("samples.json").then(function(data) {
        // console log the data to see output

        // create variables for each data subset
        var names = data?.names;
        var metadata = data?.metadata;
        var samples = data?.samples;

        // console log the names to see output
        // console.log(names);

        // console log the samples to see output
        // console.log(samples);

        // console log metadata
        // console.log(metadata);
    
        Object.entries(metadata).forEach(([key, value]) => {

            if (value.id === parseInt(newSample)) {
                console.log(metadata?.[key]);
                // Plot metadata using select sample
                buildMetadata(metadata?.[key]);
                
                // Plot Gauge char using select sample
                buildGaugePlot((metadata?.[key]?.wfreq) ?? 0);
            }
        })?.catch(function(error) {
            console.log(error);
        });

        Object.entries(samples).forEach(([key, value]) => {

            if (value.id === newSample) {
                console.log(samples?.[key]);
                // Plot horizontal bar chart using select sample
                buildHorizontalBar(samples?.[key]);
                // Plot Bubble plot using the select sample
                buildBubblePlot(samples?.[key]);                
            }
        })?.catch(function(error) {
            console.log(error);
        });

    })?.catch(function(error) {
        console.log(error);
    });
}

// Initialize the Dashboard
init();