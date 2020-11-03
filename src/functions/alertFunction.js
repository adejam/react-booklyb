const alertFunction = (msg, alertType) => {
  const alert = document.querySelector('#alert');
  alert.classList.add(alertType);
  alert.classList.remove('d_none');

  alert.innerText = msg;

  setTimeout(() => {
    alert.classList.add('d_none');
  }, 2000);
};

export default alertFunction;
