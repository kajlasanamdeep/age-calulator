module.exports = function (birth_date,current_date) {
    let today = new Date(current_date).getTime();
    date = new Date(birth_date).getTime();

    if (today > date) {
        let ms = (today - date);
        let secs = Math.abs(new Date(ms).getSeconds() - new Date(0).getSeconds());
        let mins = Math.abs(new Date(ms).getMinutes() - new Date(1800000).getMinutes());
        let hrs = Math.abs(new Date(ms).getHours() - new Date(21600000).getHours());
        let days = Math.abs(new Date(ms).getDate() - new Date(0).getDate());
        let month = Math.abs(new Date(ms).getMonth() - new Date(0).getMonth());
        let year = Math.abs(new Date(ms).getFullYear() - new Date(0).getFullYear());

        return {
            year:year,
            month:month,
            days: days,
            hrs: hrs,
            mins: mins,
            secs: secs
        }
    }
    else {
        let ms = (date - today);
        let secs = Math.abs(new Date(0).getSeconds() - new Date(ms).getSeconds());
        let mins = Math.abs(new Date(0).getMinutes() - new Date(ms + 1800000).getMinutes());
        let hrs = Math.abs(new Date(0).getHours() - new Date(ms + 18000000).getHours());
        let days = Math.abs(new Date(0).getDate() - new Date(ms).getDate());
        let month = Math.abs(new Date(0).getMonth() - new Date(ms).getMonth());
        let year = Math.abs(new Date(0).getFullYear() - new Date(ms).getFullYear());

        return {
            year: -year,
            month: -month,
            days: -days,
            hrs: -hrs,
            mins: -mins,
            secs: -secs
        }
    }
}