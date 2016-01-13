console.log("         _     ")
console.log("        <')_,/ ")
console.log("        (_==/  ")
console.log("birder  ='-    ")
console.log("we're hiring!  ")

$updateButton.on('click', function(e) {
  // Grab values from current card and save to an object
  var hiveUpdate = {};
  
  hiveUpdate.location = $rendered.find('.location').text();
  hiveUpdate.notes = $rendered.find('.notes').text();
  hiveUpdate.num_bees = $rendered.find('.num-bees').text();
  // make update call
  $.ajax({
    method: "PUT",
    url: "/hives/" + hive.id,
    data: hiveUpdate
  }).done(function(data) {
    // let user know you've saved
    alert("I DID IT")
  });
});