const dropdownEl = document.querySelector('[dropdown]');
if (dropdownEl) {
  let isOpen = false;

  const dropdownButton = dropdownEl.querySelector('button');
  const dropdownOptions = dropdownEl.querySelector('ul');
  document.addEventListener('click', function (event) {

    // If the clicked element doesn't have the right selector, bail
    if (event.target.matches('button')) {
      if (isOpen) {
        dropdownOptions.style.display = 'none';
      } else {
        dropdownOptions.style.display = 'block';
      }
      isOpen = !isOpen;
      event.preventDefault();
      return;
    } else if (event.target.matches('li')) {
      dropdownButton.innerHTML = event.target.innerHTML;
    }
    isOpen = false;
    dropdownOptions.style.display = 'none';
    event.preventDefault();
  }, false);
}