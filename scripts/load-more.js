function toggle_menu(id, tag) {
   
   document.getElementById('bar1').classList.toggle('change');
   document.getElementById('bar2').classList.toggle('change');
   document.getElementById('bar3').classList.toggle('change');
    
    var e = document.getElementById(id);
    if(e.style.display == 'block')
       e.style.display = 'none';
    else
       e.style.display = 'block';
       // document.getElementById('clicker').style.display = 'none';
 }

 function toggle_visibility(id, tag) {
   var e = document.getElementById(id);
   if(e.style.display == 'block')
      e.style.display = 'none';
   else
      e.style.display = 'block';
      document.getElementById('clicker').style.display = 'none';
      document.getElementById('referrer').style.display = 'block';
}