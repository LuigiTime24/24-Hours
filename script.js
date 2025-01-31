function updateTime() {
    const timezone = document.getElementById("timezone").value;
    const timeFormat = document.getElementById("timeformat").value;

    const options = {
        timeZone: timezone,
        hour12: timeFormat === "12",
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    };

    const date = new Date();
    const time = new Intl.DateTimeFormat('en-US', options).format(date);

    document.getElementById("time").innerText = time;
}

document.getElementById("timezone").addEventListener("change", updateTime);
document.getElementById("timeformat").addEventListener("change", updateTime);

// Initial call to set the time when page loads
updateTime();
