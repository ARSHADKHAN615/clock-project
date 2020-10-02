setInterval(() => {
    let d = new Date();

    let htime = d.getHours();
    let mtime = d.getMinutes();
    let stime = d.getSeconds();
    let millitime = d.getMilliseconds();

    hRotation = 30 * htime + mtime / 2;
    mRotation = 6 * mtime;
    sRotation = 6 * stime;
    miRotation = 0.36 * millitime;

    hour.style.transform = `rotate(${hRotation}deg)`;
    minuter.style.transform = `rotate(${mRotation}deg)`;
    seconds.style.transform = `rotate(${sRotation}deg)`;
    // millisecond.style.transform = `rotate(${miRotation}deg)`;    
}, 1000);


setInterval(() => {
    let d = new Date();

    let htime = d.getHours();
    let mtime = d.getMinutes();
    let stime = d.getSeconds();
    let milli = d.getMilliseconds();

    let en = "AM"

    if (htime > 12) {
        htime = htime - 12;
        en = "PM"
    }
    if (htime == 0) {
        htime = 12;
    }

    if (htime < 10) {
        htime = "0" + htime;
    }
    if (mtime < 10) {
        mtime = "0" + mtime;
    }
    if (stime < 10) {
        stime = "0" + stime;
    }
    document.getElementById("hour1").innerHTML = htime;
    document.getElementById("minuter1").innerHTML = mtime;
    document.getElementById("seconds2").innerHTML = stime;
    document.getElementById("millisecond2").innerHTML = milli;
    document.getElementById("pm-am").innerHTML = en;




}, 100);





window.addEventListener("scroll", function() {
    let cunt = 0;
    setInterval(() => {
        if (cunt < 1000) {
            cunt++;
            document.getElementById("cunt").innerHTML = cunt;
        }
    },1000);

});