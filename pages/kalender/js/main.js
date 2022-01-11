const date = new Date();

const renderCalendar = () => {
    date.setDate(1)
    const monthDays = document.querySelector('.calendar__days')
    
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    const firstDayIndex = date.getDay();
    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
    const nextDays = 7 - lastDayIndex - 1;
    
    const month = [
        'Januari',
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
    ]
    
    document.querySelector('.calendar__month-title').innerHTML = month[date.getMonth()];
    
    let days = '';
    
    for(let x = firstDayIndex; x > 0; x--) {
        days += `<div class="prev__date">${prevLastDay - x + 1}</div>`
    }
    
    for(let i = 1; i <= lastDay; i++) {
        days += `<div class="day">${i}</div>`
    }
    
    for(let j = 1; j <= nextDays; j++) {
        days += `<div class="day__next">${j}</div>`
        monthDays.innerHTML = days;
    }

    //styles for days
    const dayArr = document.querySelectorAll('.day')

    dayArr.forEach((elem) => {
        elem.addEventListener('click', () => {
            let datePar = document.querySelector('.date__par')
            let title = document.querySelector('.calendar__month-title')
            datePar.innerHTML = title.innerHTML + ', ' + elem.innerHTML + ', ' + date.getFullYear();
        })
    })
}

document.querySelector('.left__arrow').addEventListener('click', () => {
    date.setMonth(date.getMonth() - 1)
    renderCalendar()
})

document.querySelector('.left__control').addEventListener('click', () => {
    date.setMonth(date.getMonth() - 1)
    renderCalendar()
})

document.querySelector('.right__arrow').addEventListener('click', () => {
    date.setMonth(date.getMonth() + 1)
    renderCalendar()
})

document.querySelector('.right__control').addEventListener('click', () => {
    date.setMonth(date.getMonth() + 1)
    renderCalendar()
})
renderCalendar()
