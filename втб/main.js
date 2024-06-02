function newsOpen(id){
    document.getElementById('openNews' + id).style.display = 'block';
    document.getElementById('btno' + id).style.display = 'none';
    document.getElementById('btnc' + id).style.display = 'inline';
    document.getElementById('news' + id).style.height = 'auto';

}

function newsClose(id){
    document.getElementById('openNews' + id).style.display = 'none';
    document.getElementById('btnc' + id).style.display = 'none';
    document.getElementById('btno' + id).style.display = 'inline';
    document.getElementById('news' + id).style.height = 'auto';

}

function getAUDToRUBRate() {
    return fetch('https://www.cbr-xml-daily.ru/daily_json.js')
      .then(response => response.json())
      .then(data => data.Valute.AUD.Value)
      .catch(error => {
        console.error('Ошибка при получении курса валют:', error);
        return null;
      });
  }
  

  function initializeCurrencyCalculator() {
    const convertButton = document.getElementById('convertButton');
    const resultElement = document.getElementById('result');
    const audToRubRateElement = document.getElementById('audToRubRate');
  

    getAUDToRUBRate().then(rate => {
      if (rate) {
        audToRubRateElement.textContent = `1 AUD = ${rate.toFixed(2)} RUB`;
      }
    });
  

    convertButton.addEventListener('click', () => {
      const amountInput = document.getElementById('amount');
      const directionSelect = document.getElementById('direction');
      const amount = parseFloat(amountInput.value);
      const direction = directionSelect.value;
  

      if (isNaN(amount) || amount <= 0) {
        resultElement.textContent = 'Введите корректное значение суммы.';
        return;
      }
  

      getAUDToRUBRate().then(rate => {
        if (rate) {
          let result;
          if (direction === 'audToRub') {
            result = amount * rate;
            resultElement.textContent = `${amount.toFixed(2)} AUD = ${result.toFixed(2)} RUB`;
          } else if (direction === 'rubToAud') {
            result = amount / rate;
            resultElement.textContent = `${amount.toFixed(2)} RUB = ${result.toFixed(2)} AUD`;
          }
        }
      });
    });
  }
  
  window.onload = initializeCurrencyCalculator;