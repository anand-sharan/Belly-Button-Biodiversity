/**
 * Helper function to select stock data
 * Returns an array of values
 * @param {array} rows
 * @param {integer} index
 * index 0 - Date
 * index 1 - Open
 * index 2 - High
 * index 3 - Low
 * index 4 - Close
 * index 5 - Volume
 */
function unpack(rows, index) {
  return rows.map(function(row) {
    return row[index];
  });
}

d3.json("data/samples.json").then(function(data) {
    console.log(data)
}).catch(function(error) {
    console.log(error);
});

/*
function buildPlot() {
  d3.json(url).then(function(data) {

    // Grab values from the data json object to build the plots
    var name = data.name;
    console.log(name);
    var otu_id = data.metadata.id;
    var ethnicity = data.metadata.ethnicity;
    var gender = data.metadata.gender;
    var age = unpack(data.dataset.data, 0);
    var closingPrices = unpack(data.dataset.data, 4);

    var trace1 = {
      type: "scatter",
      mode: "lines",
      name: name,
      x: dates,
      y: closingPrices,
      line: {
        color: "#17BECF"
      }
    };

    var data = [trace1];

    var layout = {
      title: `${stock} closing prices`,
      xaxis: {
        range: [startDate, endDate],
        type: "date"
      },
      yaxis: {
        autorange: true,
        type: "linear"
      }
    };

    Plotly.newPlot("plot", data, layout);

  });
}

buildPlot();
*/