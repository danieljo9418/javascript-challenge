
// from data.js
var tableData = data;
var filterbutton = d3.select("#filter-btn");
var ufotable = d3.select("#ufo-table");
var tbody = d3.select("tbody");

filterbutton.on("click", function(){
    

    tbody.text("");

    var date = d3.select("#datetime").property("value");
    var filtered = tableData.filter(sighting => sighting.datetime === date);
    console.log(filtered);

    

    filtered.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });

console.log(tbody);

});


console.log(tbody);

