if(location.href.includes("bolum")){
elem = document
if($('[rel="prev"]')[0]){
  $('[rel="prev"]')[0].style = "display:none";  
}
$(document).ready(function(){
  setTimeout(function() {
    if (document.getElementsByClassName("jw-stretch-uniform")[0] == null || document.getElementsByClassName('jw-video jw-reset')[0] == null){
    location.reload();
    }else{
      document.getElementsByClassName("jw-icon jw-icon-display jw-button-color jw-reset")[0].click()
  }
  }, 2000);
});
$('[rel="next"]')[0].style = "display:none";
$('[title="Sonra İzle"]')[0].style = "display:none";
let btn = document.createElement("button");   
btn.innerHTML = "Yeni bölüm";
document.getElementById('nexpre').appendChild(btn);

btn.setAttribute(
   "style", "color: #fff; font-weight: 400; background-color: rgba(0,0,0,.5); padding: 3px 5px; border-radius: 3px; text-transform: none; font-size: 13px;");


btn.onclick = function(event){
  document.querySelector('[data-ilanid]').click();
  $('[rel="next"]')[0].click();
}


}
$(document).keyup(function(event) {
    if (event.which === 78) {
        document.querySelector('[data-ilanid]').click();
        $('[rel="next"]')[0].click();
    }
});


