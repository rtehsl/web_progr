function showTime() {
    let today = new Date();
    let currentTime = today.toLocaleTimeString('ru-RU');
    document.getElementById('time').innerHTML = currentTime;

    const seconds = today.getSeconds();
    const secondsDisplay = document.getElementById('seconds');
    const secondHand = document.getElementById('arrow');

    // Обновление отображения секунд
    secondsDisplay.innerHTML = seconds.toString().padStart(2, '0');

    // Расчёт вращения стрелки
    const secondsDegree = ((seconds / 60) * 360) + 90; 
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;
}
setInterval(showTime, 1000);