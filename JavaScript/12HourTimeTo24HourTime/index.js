timeConversion('07:05:45PM');

function timeConversion(s){
    const minAndSec = s.slice(3,8);
    let hour = s.slice(0,2).replace('12', '00');

    if (s.includes('PM')) hour = Number(hour) + 12;
    hour = String(hour).padStart(2, '0');
    console.log(`${hour}:${minAndSec}`);
}
