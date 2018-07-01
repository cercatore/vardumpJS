
chrome.tabs.onUpdated.addListener(function (tab) {
	// for the current tab, inject the "inject.js" file & execute it
  chrome.tabs.executeScript(tab.ib, {
		file: 'libs/jquery-3.2.1.js'
	});
  var flag = 0
  if (!flag ){
    chrome.tabs.executeScript(tab.ib, {
  		file: 'inject.js'
  	});
    flag = 1;
    console.log('executed')
    }
});

(function(){
  function persistentBackground(){
      console.log("ick")
  }
  setInterval(persistentBackground, 1000)
  var settingEnabled;

  chrome.storage.onChanged.addListener(function(changes, area) {
    if (area == "sync" && "someSetting" in changes) {
        settingEnabled = changes.someSetting.newValue;
        console.log("something changed")

    }
});

}).call(this);
