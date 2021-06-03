function startTime() {
    var today = new Date();
    var h = today.getHours();
    h = h % 12;
    h = h ? h : 12;
    var ampm = h >= 12 ? 'PM' : 'AM ';
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML = h + ": " ;
    document.getElementById('min').innerHTML = m + ": " ;
    document.getElementById('sec').innerHTML = s + "&nbsp;"  ;
    document.getElementById('amp').innerHTML = ' ' + ampm ;
    var t = setTimeout(startTime,1000);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i };  // add zero in front of numbers < 10
    return i;
  } 