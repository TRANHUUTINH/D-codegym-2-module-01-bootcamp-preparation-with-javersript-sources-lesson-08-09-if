let month1 = '1'
let month2 = '2'
let month3 = '3'
let month4 = '4'
let month5 = '5'
let month6 = '6'
let month7 = '7'
let month8 = '8'
let month9 = '9'
let month10 = '10'
let month11 = '11'
let month12 = '12'

function displayDaysMonth1() {
    let month = document.getElementById('month').value;
    if (month == month1 || month == month3 || month == month5 || month == month7 ||
        month == month8 || month == month10 || month == month12) {
        document.getElementById("result").innerHTML = "月 " + month + " は31日あります。"
    } else if (month == month4 || month == month6 || month == month9 || month == month11) {
        document.getElementById("result").innerHTML = "月 " + month + " は30日あります。"
    } else if (month == month2) {
        document.getElementById("result").innerHTML = "月 " + month + " は28日または29日あります。"
    } else {
        document.getElementById("result").innerHTML = "月を再入力してください。"
    }
}
function checkMonth() {
    let month = document.getElementById('month').value;
    switch (month) {
        case month1:
        case month3:
        case month5:
        case month7:
        case month8:
        case month10:
        case month12:
            document.getElementById("result").innerHTML = "月 " + month + " は31日あります。"
            break;
        case month4:
        case month6:
        case month9:
        case month11:
            document.getElementById("result").innerHTML = "月 " + month + " は30日あります。"
            break;
        case month2:
            document.getElementById("result").innerHTML = "月 " + month + " は28日または29日あります。"
            break;
        default:
            document.getElementById("result").innerHTML = "月を再入力してください。"
    }
}