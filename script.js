function submitForm() {
    // 獲取表單中的值
    var height = parseFloat(document.getElementById('height').value);
    var weight = parseFloat(document.getElementById('weight').value);
    var age = parseFloat(document.getElementById('age').value);
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var intensityButtons = document.querySelectorAll('.select2');
    var intensity;

    // 找到被選中的工作程度按鈕
    intensityButtons.forEach(function(button) {
        if (button.classList.contains('active')) {
            intensity = button.getAttribute('data-intensity');
        }
    });

    // 計算基礎代謝率（BMR）
    var bmr;
    if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    // 根據活動程度進行熱量修正
    var calorie;
    if (intensity === '輕度') {
        calorie = bmr * 1.375;
    } else if (intensity === '中度') {
        calorie = bmr * 1.55;
    } else if (intensity === '重度') {
        calorie = bmr * 1.725;
    }

    // 將計算結果四捨五入到兩位小數
    calorie = calorie.toFixed(2);

    // 將計算結果傳遞到 result.html 頁面
    window.location.href = 'result.html?caloriesNeeded=' + calorie;
}

document.addEventListener('DOMContentLoaded', function() {
    var intensityButtons = document.querySelectorAll('.select2');
    
    intensityButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // 將之前選中的按鈕取消選中狀態並隱藏介紹文本
            intensityButtons.forEach(function(btn) {
                if (btn !== button) {
                    btn.classList.remove('active');
                    btn.nextElementSibling.style.display = 'none';
                }
            });
            
            // 將當前按鈕設置為選中狀態並顯示介紹文本
            this.classList.add('active');
            this.nextElementSibling.style.display = 'block';

            // 顯示工作程度介紹
            var intensityDescription = this.nextElementSibling;
            var intensity = this.getAttribute('data-intensity');
            intensityDescription.textContent = getIntensityDescription(intensity);
        });
    });
});

function getIntensityDescription(intensity) {
    // 根據選中的工作程度返回對應的介紹文本
    if (intensity === '輕度') {
        return '輕度工作介紹：大部分從事靜態或坐著的工作，例如辦公室內的上班族、銷售員。';
    } else if (intensity === '中度') {
        return '中度工作介紹：從事機械操作、接待等站立較多的工作，例如護士、服務生。';
    } else if (intensity === '重度') {
        return '重度工作介紹：從事農耕、漁業、建築等重度使用體力的工作，例如護士、服務生。';
    }
}
