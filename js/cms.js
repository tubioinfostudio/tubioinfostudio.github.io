$(document).ready(function() {
  d3.text('content/events.tsv')
    .then(raw_data => {
      const data = d3.tsvParseRows(raw_data).slice(1);
      d3.select('#events-body')
        .selectAll('tr')
          .data(data)
          .enter()
          .append('tr') 
            .selectAll('td')
            .data(function(d) { return d; })
            .enter()
            .append('td')
            .text(function(d) { return d; });
    })
});
