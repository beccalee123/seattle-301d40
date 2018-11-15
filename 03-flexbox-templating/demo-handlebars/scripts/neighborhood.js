'use strict';

let neighborhoods = [];

// REVIEW: This is another way to use a constructor to duplicate an array of raw data objects
function Neighborhood (rawDataObject) {
  for (let key in rawDataObject) {
    console.log('key', key);
    this[key] = rawDataObject[key];
  }
}

Neighborhood.prototype.toHtml = function() {
  // 1. Get the template from the HTML document
  const source = $('#neighborhood-template').html();
<<<<<<< HEAD
  // 2. Use Handlebars to "compile" the HTML
  const template = Handlebars.compile(source);
  console.log(template);
=======
  // console.log(source);
  // 2. Use Handlebars to "compile" the HTML
  const template = Handlebars.compile(source);
  // console.log('template', template);
>>>>>>> 06f76ce7a75a25d153cc9a6a66522e7308103c31
  // 3. Do not forget to return the HTML from this method
  return template(this);
};

neighborhoodDataSet.forEach(neighborhoodObject => {
  neighborhoods.push(new Neighborhood(neighborhoodObject));
});

neighborhoods.forEach(ourNewNeighborhoodObject => {
  $('#neighborhoods').append(ourNewNeighborhoodObject.toHtml());
});
