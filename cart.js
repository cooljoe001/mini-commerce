
document.addEventListener('DOMContentLoaded', function () {
    const creditCardRadio = document.getElementById('credit-card');
    const mobileMoneyRadio = document.getElementById('mobile-money');
    const creditCardDetails = document.getElementById('credit-card-details');
    const mobileMoneyDetails = document.getElementById('mobile-money-details');

    creditCardRadio.addEventListener('change', function () {
      creditCardDetails.style.display = 'block';
      mobileMoneyDetails.style.display = 'none';
    });

    mobileMoneyRadio.addEventListener('change', function () {
      creditCardDetails.style.display = 'none';
      mobileMoneyDetails.style.display = 'block';
    });

    const creditCardForm = document.getElementById('credit-card-form');
    const mobileMoneyForm = document.getElementById('mobile-money-form');

    creditCardForm.addEventListener('submit', function (event) {
      event.preventDefault();
      // Perform credit card payment processing
      alert('Credit card payment processed successfully!');
    });

    mobileMoneyForm.addEventListener('submit', function (event) {
      event.preventDefault();
      // Perform mobile money payment processing
      alert('Mobile money payment processed successfully!');
    });
  });

