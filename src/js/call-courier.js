'use strict';
(function () {
  const callCourierBlock = document.querySelector(`.js-call-courier`);
  const documentsCheckbox = callCourierBlock.querySelector(`#isDocuments`);
  const parselBlock = callCourierBlock.querySelector(`.js-parsel`);

  const onDocumentsCheckboxChange = () => {
    if (documentsCheckbox.checked) {
      parselBlock.classList.add(`disabled`);
    } else {
      parselBlock.classList.remove(`disabled`);
    }
  };

  documentsCheckbox.addEventListener(`change`, onDocumentsCheckboxChange);
})();