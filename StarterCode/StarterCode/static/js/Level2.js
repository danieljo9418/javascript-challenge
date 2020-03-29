// from data.js
var tableData = data;
var filterbutton = d3.select("#filter-btn");
var ufotable = d3.select("#ufo-table");
var tbody = d3.select("tbody");

// Create function for the filter button
filterbutton.on("click", function(){
    
    // Clear out the data before rendering
    tbody.text("");

    // Take in the data from the input fields
    var date = d3.select("#datetime").property("value");
    var city = d3.select("#city").property("value");
    var state = d3.select("#state").property("value");
    var country = d3.select("#country").property("value");
    var shape = d3.select("#shape").property("value");

    // For each input field, if there is no data present, move on to the next field
    // if there is data present, filter with the input and move on to the next field

    if(date == "")
    {var datefil = tableData}
    else
    {var datefil = tableData.filter(sighting => sighting.datetime === date)};

    if(city == "")
    {var cityfil = datefil}
    else
    {var cityfil = datefil.filter(sighting => sighting.city === city);};

    if(state == "")
    {var statefil = cityfil}
    else
    {var statefil = cityfil.filter(sighting => sighting.state === state);};

    if(country == "")
    {var countryfil = statefil}
    else
    {var countryfil = statefil.filter(sighting => sighting.country === country);};

    if(shape == "")
    {var filtered = countryfil}
    else
    {var filtered = countryfil.filter(sighting => sighting.shape === shape);};
    
    //console.log(filtered);

    // For each object in the filtered array, create a table row and create a td 
    // tag for each value of the object
    filtered.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
});
