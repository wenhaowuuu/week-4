/* =====================
  Lab 2, part3: a full application (stretch goal)

  We're going to use the skills we've just been practicing to write a full application
  which is responsive to user input.
  At your disposal are a set of variables which we use to track user input (see
  part3-main.js and part3-setup.js for more details on how this is done — we'll
  cover this topic at a later date). Their values will be logged to console to
  aid in debugging.

  In this lab, which is very much open-ended, your task is to use the value of
  these variables to define the functions below. Try to come up with interesting
  uses of the provided user input.

  Some ideas:
    There are two numeric fields: can you write this application to filter
    using both minimum and maximum?
    There is a boolean (true/false) field: can you write your code to filter according
    to this boolean? (Try to think about how you could chop up this data to make this meaningful.)
    There is a string field: can you write your code to filter/search based on user
    input?

  Remember, this is open-ended. Try to see what you can produce.
===================== */

/* =====================
  Define a resetMap function to remove markers from the map and clear the array of markers
===================== */
var resetMap = function(m) {
  map.removeLayer(m);

  /* =====================
    Fill out this function definition
  ===================== */
};

/* =====================
  Define a getAndParseData function to grab our dataset through a jQuery.ajax call ($.ajax). It
  will be called as soon as the application starts. Be sure to parse your data once you've pulled
  it down!
===================== */
var phillyBikeCrashesDataUrl = "https://raw.githubusercontent.com/CPLN692-MUSA611/datasets/master/json/philadelphia-bike-crashes-snippet.json";

var url = "https://raw.githubusercontent.com/CPLN692-MUSA611/datasets/master/json/philadelphia-bike-crashes-snippet.json";
var getAndParseData = function(d) {
  $.ajax(url).done(function(d){
    var parseddata = JSON.parse(d);
    console.log(parseddata);
    return parseddata;
  });


  /* =====================
    Fill out this function definition
  ===================== */
};

/* =====================
  Call our plotData function. It should plot all the markers that meet our criteria (whatever that
  criteria happens to be — that's entirely up to you)
===================== */
var plotData = function(p) {
  _.each(p,function(pt){
    var lat = pt.LAT;
    var lon = pt.LNG;
    var veh = pt.VEHICLE_CO;
    var style = {'radius':veh*5, 'fillColor':'#cc5400'};
    L.circleMarker([lat,lon],style).addTo(map);
  });

  /* =====================
    Fill out this function definition
  ===================== */
};

var filtered_data = [];
var filtered_out = [];
_.each(getAndParseData(),function(item1){
  greaterthanmin = item1.VEHICLE_CO > numericField1;
  filter_condition = greaterthanmin;
  if (filter_condition) {
    filtered_data.push(item1);
  } else {filtered_out.push(item1);
  }
});

console.log('Included:', filtered_data.length);
console.log('Excluded:', filtered_out.length);
