module.exports = function (birth_date, current_date = Date.now()) {
    let today = new Date(current_date).getTime();
    let date = new Date(birth_date).getTime();
    if (today <= date) {
        return 0;
    }
    let ms = (today - date) + (5 * 3600000);
    let mins = parseInt(new Date(ms).getMinutes() - new Date(0 + 1800000).getMinutes());
    let hrs = parseInt(new Date(ms).getHours() - new Date(0).getHours());
    let days = parseInt(new Date(ms).getDate() - new Date(0).getDate());
    let months = parseInt(new Date(ms).getMonth() - new Date(0).getMonth());
    let years = parseInt(new Date(ms).getFullYear() - new Date(0).getFullYear());    

    return {
        age: { years: years, months: months, days: days, hrs:hrs, mins:mins },
        ageINMins : Math.ceil(ms / 60000),
        ageINHrs: Math.ceil(ms / 3600000),
        ageINDays: parseInt(ms / 86400000),
        ageINWeeks: parseInt(ms / 604800000),
        ageINMonths: parseInt((years * 12) + months)
    }
}