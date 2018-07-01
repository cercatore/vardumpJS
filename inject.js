
var elem = $('body')

var result = document.createElement("div");
  result.style="display:block;";
  result.style+="position:absolute;background-color:#cecece;opacity:0.7;box-shadow:8px 8px 8px 0px #999;padding:8px";
  result.value="propcoofrocodod\n...loading";
  result.id="result";
  result = document.createElement("textarea");result.cols=80;
  result.type="text";result.style="width:700px";
  result.value="mela-c;password \n  ganjafmela-coc\n fefefeqfemela-coca";
  result.id="campo";
  document.body.appendChild(result);
  result = document.createElement("div");
  result.style="position:absolute;top:60px;right:0;width:100px;height:60px;background-color:black";
  result.id = "count";
  result.innerHTML='<a href="google.it" style="font-size:28px;color:blue">AH </a>';
  document.body.appendChild(result);
  result = document.createElement("div");
  result.innerHTML='<input type="button" id="reset" value="reset">&nbsp<input type="button" id="load" value="load">';
  document.body.appendChild(result);
  $('#count').html('');
  $('#load').on('click', carica )

var dragging = 0;var index = 0;
function reset (){index = 0;}
$('#reset').on('click', reset )
var cursore = {};
var stream = {};
function carica(){
  let item = stream[index++];let piece = item.split(";");
  console.log("user " + piece[0] + " ,p = " + piece[1])
}

document.onmouseup =  function(e) {
	var tet = window.getSelection().toString();

	console.log(tet + " " + e.x + ". campoo " + $('#campo').val() )
  stream = $('#campo').val().split(/\n/);
  console.log("pieces: " + stream.length)
}
document.onmousedown = function(e){
  dragging = 1;
  cursore.x= e.x;
  cursore.y = e.y;
}
// document.onmouseup = function(){
//   dragging = 0;
// }
document.onmousemove = function(e) {
  // if ( dragging ){
  //    lun = Math.sqrt( (e.x - cursore.x)*(e.x - cursore.x) + (e.y - cursore.y)*(e.y - cursore.y)) + 100;
  //    console.log("l " + Math.round(lun))
  //    document.body.style.zoom = lun + "%";
  // }
}



function pooDocu(){
	$.get("https://api.randomuser.me/0.7/?results=5" , function(data){
      $('#result').text(data);
	})

}
chrome.storage.onChanged.addListener(function (changes,namespace){
   for( key in changes){
     var storageChange = changes[key];
          console.log('Storage key "%s" in namespace "%s" changed. ' +
                      'Old value was "%s", new value is "%s".',
                      key,
                      namespace,
                      storageChange.oldValue,
                      storageChange.newValue);
    }

})
document.addEventListener('keyup', function(e){
	var key = e.which || e.keyCode;
	if (key === 13) {
		pooDocu()
    console.log('0ciiaio942')
	}
})
