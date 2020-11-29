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

    function timeFomat(time) {
        return time < 10 ? `0${time}` : time;
    }
    document.getElementById("hour1").innerHTML = timeFomat(htime);
    document.getElementById("minuter1").innerHTML = timeFomat(mtime);
    document.getElementById("seconds2").innerHTML = timeFomat(stime);
    document.getElementById("millisecond2").innerHTML = milli;
    document.getElementById("pm-am").innerHTML = en;
}, 100);