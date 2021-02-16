function toggle_visibility(id, tag) {
    var e = document.getElementById(id);
    if(e.style.display == 'block')
       e.style.display = 'none';
    else
       e.style.display = 'block';
       document.getElementById('clicker').style.display = 'none';
 }