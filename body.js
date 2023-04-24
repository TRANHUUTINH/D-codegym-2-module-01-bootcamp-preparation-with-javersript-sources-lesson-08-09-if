function kiemtra() {
    let cannang = document.getElementById("cannang").value;
    let chieucao = document.getElementById("chieucao").value / 100;
    let bmi = cannang / (Math.pow(chieucao, 2))
    let result = "";
    if (bmi < 18.5) {

        result = "UNDERWEIGHT (Thiếu cân bạn nhé!!)" + "<img src = 'https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2022/01/tai-hinh-anh-dong-chu-gau-dang-an-de-thuong.gif?ssl=1'width='100' height= '100'"
    }
    if (bmi > 18.5) {
        result = "Normal (Thân hình hoàn hảo!!!)" + "<img src = 'https://tansonnhatairport.vn/wp-content/uploads/2017/11/anh-dong.gif'width='100' height= '100'"
    }
    if (bmi >= 25) {
        result = "OVERWEIGHT (Thừa căn rồi bạn nha!!)" + "<img src = 'https://lazi.vn/images/large/5de51704ce40515'width='100' height= '100'"
    }
    if (bmi > 30) {
        result = "OBESE (Béoooo quá!!)" + "<img src = 'https://i.pinimg.com/originals/88/4c/d3/884cd3f096c80be1d6af83cb8498b1bd.gif'width='100' height= '100'"
    }
    document.getElementById("result").innerHTML = "Chỉ số BMI là: " + bmi + ". Bạn " + "<b>" + result + "</b>";
}