/**
 * Initialize listeners for hidden form elements.
 * Hidden elements should have two properties:
 *  1. data-visible-selector="[input ID]" -> Matches ID of handler input, such as a select 
 *  2. data-visible-value="[input value]" -> the value that will make it reveal
 */
export const initForms = () => {
  const forms = document.querySelectorAll('form');
  
  if (forms) {
    forms.forEach(form => {
      const formItems = form.querySelectorAll('.form-item');

      formItems.forEach(formItem => {
        if (formItem.classList.contains('hidden')) {
          const visibleSelector = formItem.dataset.visibleSelector;
          const visibleValue = formItem.dataset.visibleValue.split(' ');

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
