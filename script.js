let dobElement = document.getElementById("dob");
let yearSpanEle = document.getElementById("noYears");
let monthSpanEle = document.getElementById("noMonths");
let daySpanEle = document.getElementById("noDays");

function getDateDifference(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);

    // Calculate years
    const years = end.getFullYear() - start.getFullYear();

    // Calculate months
    const months = end.getMonth() - start.getMonth();

    // Calculate days
    const days = end.getDate() - start.getDate();

    return {
        years,
        months,
        days
    };
}

function calculateAge() {
    let birthDate = dobElement.value;
    let presentDate = new Date();

    let duration = getDateDifference(birthDate, presentDate);
    console.log(`yohoho${duration.months}`);
    if (duration.months < 0) {
        duration.years -= 1;
        duration.months = 12 - duration.months;
        console.log("NEN VUNNA");
    }
    if (duration.days < 0) {
        if (duration.months !== 0)
            duration.months -= 1;
        else {
            duration.years -= 1;
            duration.months = 11;
        }
        let dm = duration.months;
        if (dm === 1 || dm === 3 || dm === 5 || dm === 7 || dm === 8 || dm === 10 || dm === 12) {
            duration.days = 31 + duration.days + 1;
        } else if (dm === 4 || dm === 6 || dm === 9 || dm === 11) {
            duration.days = 30 + duration.days + 1;
        } else if (dm === 2) {
            duration.days = 28 + duration.days + 1;
        }
    }
    console.log(duration.months);
    yearSpanEle.textContent = duration.years;
    monthSpanEle.textContent = duration.months;
    daySpanEle.textContent = duration.days;
}
