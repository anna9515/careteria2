document.addEventListener('DOMContentLoaded', function() {
    // 獲取 URL 中的參數
    const urlParams = new URLSearchParams(window.location.search);
    const height = parseFloat(urlParams.get('height'));
    const weight = parseFloat(urlParams.get('weight'));
    const age = parseFloat(urlParams.get('age'));
    const gender = urlParams.get('gender');
    const intensity = urlParams.get('intensity');

    // 計算基礎代謝率（BMR）
    let bmr;
    if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    // 根據活動程度進行熱量修正
    let calorie;
    if (intensity === '輕度') {
        calorie = bmr * 1.375;
    } else if (intensity === '中度') {
        calorie = bmr * 1.55;
    } else if (intensity === '重度') {
        calorie = bmr * 1.725;
    }

    // 將計算結果四捨五入到兩位小數
    calorie = calorie.toFixed(2);

    // 將計算結果顯示在頁面上
    const resultElement = document.getElementById('caloriesResult');
    resultElement.innerHTML = '<p>您每天所需的熱量為：' + calorie + ' 卡路里</p>';
});

