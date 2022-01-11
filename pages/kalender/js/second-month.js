const date2 = new Date();

const renderCalendar2 = () => {
    date2.setDate(1)
    const monthDays = document.querySelector('.calendar__days-2')
    
    const lastDay = new Date(date2.getFullYear(), date2.getMonth() + 1, 0).getDate();
    const prevLastDay = new Date(date2.getFullYear(), date2.getMonth(), 0).getDate();
    const firstDayIndex = date2.getDay();
    const lastDayIndex = new Date(date2.getFullYear(), date2.getMonth() + 1, 0).getDay();
    const nextDays = 7 - lastDayIndex - 1;
    
    const month = [
        'Februari',
        'Maart',
        'April',
        'Mei',
        'Juni',
        'Juli',
        'Augustus',
        'September',
        'October',
        'November',
        'December',
        'Januari',
    ]
    
    document.querySelector('.calendar__month-title-2').innerHTML = month[date2.getMonth()];
    
    let days = '';
    
    for(let x = firstDayIndex; x > 0; x--) {
        days += `<div class="prev__date">${prevLastDay - x + 1}</div>`
    }
    
    for(let i = 1; i <= lastDay; i++) {
        days += `<div class="day-2">${i}</div>`
    }
    
    for(let j = 1; j <= nextDays; j++) {
        days += `<div class="day__next">${j}</div>`
        monthDays.innerHTML = days;
    }

    const dayArr = document.querySelectorAll('.day-2')
    dayArr.forEach((elem) => {
        elem.addEventListener('click', () => {
            let datePar = document.querySelector('.date__par')
            let title = document.querySelector('.calendar__month-title-2')
            datePar.innerHTML = title.innerHTML + ', ' + elem.innerHTML + ', ' + '2022';
        })
    })
}

document.querySelector('.left__arrow').addEventListener('click', () => {
    date2.setMonth(date2.getMonth() - 1)
    renderCalendar2()
})

document.querySelector('.left__control').addEventListener('click', () => {
    date2.setMonth(date2.getMonth() - 1)
    renderCalendar2()
})

document.querySelector('.right__arrow').addEventListener('click', () => {
    date2.setMonth(date2.getMonth() + 1)
    renderCalendar2()
})

document.querySelector('.right__control').addEventListener('click', () => {
    date2.setMonth(date2.getMonth() + 1)
    renderCalendar2()
})

renderCalendar2()

