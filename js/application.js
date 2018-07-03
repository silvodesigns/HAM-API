// Find all of the objects that are paintings and have the word "rabbit" in the title
var key = "addbb520-7ece-11e8-a3ba-5f59eafb9d74";
var apiEndpointBaseURL = "https://api.harvardartmuseums.org/object";
var queryString = $.param({
    apikey: key,
    title: "rabbit",
    classification: "Paintings"
});

$.getJSON(apiEndpointBaseURL + "?" + queryString, function(data) {
   console.log(data); 


for(i = 0; i < data.records.length; i++){
    var showcase = document.getElementById('showcase');
    var artwork = document.createElement('img');
    var value = data.records[i].images[0].baseimageurl;
    artwork.setAttribute('src', value);
    showcase.appendChild(artwork);
}

});


//https://api.harvardartmuseums.org/object?apikey=addbb520-7ece-11e8-a3ba-5f59eafb9d74