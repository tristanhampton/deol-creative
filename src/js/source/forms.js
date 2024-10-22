export const initForms = () => {
  const forms = document.querySelectorAll('form');
  
  if (forms) {
    forms.forEach(form => {
      const formItems = form.querySelectorAll('.form-item');

      formItems.forEach(formItem => {
        if (formItem.classList.contains('hidden')) {
          const visibleSelector = formItem.dataset.visibleSelector;
          const visibleValue = formItem.dataset.visibleValue.split(' ');

          console.log(visibleSelector, visibleValue)

          if (visibleSelector) {
            const visibleHandler = form.querySelector(`#${visibleSelector}`);

            visibleHandler.addEventListener('input', e => {
              if (visibleValue.includes(e.target.value)) {
                formItem.classList.remove('hidden');
              } else {
                formItem.classList.add('hidden');
              }
            });
          }
        }
      });
    });
  }
}
