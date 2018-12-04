module.exports = {
    // Generate a timestamp of the form HH:MM AM/PM and return it as a string
    timestamp: function() {
        var date = new Date();
        var hour = date.getHours();
        
        if (hour <= 12) {
            var period = "AM";
        } else {
            var period = "PM";
            hour -= 12;
        }

        var min = date.getMinutes().toString();
        if (min < 10) {
            min = "0" + min;
        }

        return hour.toString() + ":" + min + " " + period;
    }

    // Need function to send a dividing line with the change in date to differentiate
    // between what days messages were sent.
};