console.log("ci sono")

$('#button_up').click(
  function(evt){
    chrome.storage.sync.set({"someSetting" : 50}, function (data){
        console.log("done")
    })
  }
)
$('#button_down').click(
  function(evt){
    chrome.storage.sync.set({"someSetting" : Math.random() * 10 }, function (data){
        console.log("donek")
    })
  }
)
