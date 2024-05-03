document.addEventListener('DOMContentLoaded', function() {
    // 獲取 URL 中的參數
    const urlParams = new URLSearchParams(window.location.search);
    const caloriesNeeded = urlParams.get('caloriesNeeded');

    // 將結果顯示在頁面上
    const resultElement = document.getElementById('caloriesResult');
    resultElement.innerHTML = '<p>您每天所需的熱量為：' + caloriesNeeded + ' 卡路里</p>';
});

