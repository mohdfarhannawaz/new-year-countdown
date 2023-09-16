const days_el = document.getElementById("days");
const hours_el = document.getElementById("hours");
const minutes_el = document.getElementById("minutes");
const seconds_el = document.getElementById("seconds");

const new_year_time = new Date("January 1, 2024 00:00:00").getTime();

update_count_down();

function update_count_down (){
    const now = new Date().getTime();
    const gap = new_year_time - now;
    
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const day_var = Math.floor(gap / day);
    const hour_var = Math.floor((gap % day) / hour);
    const minute_var = Math.floor((gap % hour) / minute);
    const second_var = Math.floor((gap % minute) / second);

    days_el.innerText = day_var;
    hours_el.innerText = hour_var;
    minutes_el.innerText = minute_var;
    seconds_el.innerText = second_var;                                               

    setTimeout(update_count_down, 1000);
}
