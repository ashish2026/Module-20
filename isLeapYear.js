// simple version one

/* function isLeapYear(year) {
          const reminder = year % 4;
          if (reminder === 0) {
                    console.log("Your year is leap year:", year);
          }
          else {
                    console.log("Your year is not a leap year:", year);
          }

}
isLeapYear(1933);
isLeapYear(1996) */


// simple version two

function isLeapYear(year) {
          const reminder = year % 4;
          if (reminder === 0) {
                    return true;
          }
          else {
                    return false;
          }

} 
const isMyYearLeapYear = isLeapYear(1933);
console.log("My year:", isMyYearLeapYear);

const isHerYearLeapYear = isLeapYear(1996);
console.log("Her year:", isHerYearLeapYear);
