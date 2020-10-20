//DOM elements
const DOMstrings = {
  stepsBtnClass: 'multisteps-form__progress-btn',
  stepsBtns: document.querySelectorAll(`.multisteps-form__progress-btn`),
  stepsBar: document.querySelector('.multisteps-form__progress'),
  stepsForm: document.querySelector('.multisteps-form__form'),
  stepsFormTextareas: document.querySelectorAll('.multisteps-form__textarea'),
  stepFormPanelClass: 'multisteps-form__panel',
  stepFormPanels: document.querySelectorAll('.multisteps-form__panel'),
  stepPrevBtnClass: 'js-btn-prev',
  stepNextBtnClass: 'js-btn-next' };


//remove class from a set of items
const removeClasses = (elemSet, className) => {

  elemSet.forEach(elem => {

    elem.classList.remove(className);

  });

};

//return exect parent node of the element
const findParent = (elem, parentClass) => {

  let currentNode = elem;

  while (!currentNode.classList.contains(parentClass)) {
    currentNode = currentNode.parentNode;
  }

  return currentNode;

};

//get active button step number
const getActiveStep = elem => {
  return Array.from(DOMstrings.stepsBtns).indexOf(elem);
};

//set all steps before clicked (and clicked too) to active
const setActiveStep = activeStepNum => {

  //remove active state from all the state
  removeClasses(DOMstrings.stepsBtns, 'js-active');

  //set picked items to active
  DOMstrings.stepsBtns.forEach((elem, index) => {

    if (index <= activeStepNum) {
      elem.classList.add('js-active');
    }

  });
};

//get active panel
const getActivePanel = () => {

  let activePanel;

  DOMstrings.stepFormPanels.forEach(elem => {

    if (elem.classList.contains('js-active')) {

      activePanel = elem;

    }

  });

  return activePanel;

};

//open active panel (and close unactive panels)
const setActivePanel = activePanelNum => {

  //remove active class from all the panels
  removeClasses(DOMstrings.stepFormPanels, 'js-active');

  //show active panel
  DOMstrings.stepFormPanels.forEach((elem, index) => {
    if (index === activePanelNum) {

      elem.classList.add('js-active');

      setFormHeight(elem);

    }
  });

};

//set form height equal to current panel height
const formHeight = activePanel => {

  const activePanelHeight = activePanel.offsetHeight;

  DOMstrings.stepsForm.style.height = `${activePanelHeight}px`;

};

const setFormHeight = () => {
  const activePanel = getActivePanel();

  formHeight(activePanel);
};

//STEPS BAR CLICK FUNCTION

var activeStep=0;
//PREV/NEXT BTNS CLICK
DOMstrings.stepsForm.addEventListener('click', e => {

  const eventTarget = e.target;
  var ok = true;

  //check if we clicked on `PREV` or NEXT` buttons
  if (!(eventTarget.classList.contains(`${DOMstrings.stepPrevBtnClass}`) || eventTarget.classList.contains(`${DOMstrings.stepNextBtnClass}`)))
  {
    return;
  }

  //find active panel
  const activePanel = findParent(eventTarget, `${DOMstrings.stepFormPanelClass}`);

  let activePanelNum = Array.from(DOMstrings.stepFormPanels).indexOf(activePanel);

  let nextPanel = 0;

  if (activePanelNum == 0) {
    nextPanel = parseInt(document.getElementById('prod').value, 10);
  }else if (activePanelNum == 1) {
    nextPanel = 2;
    var radios = document.getElementsByName('cnh');
    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
        document.getElementById('cnh_title').innerHTML = "CNH tipo " + radios[i].value;
        if (radios[i].value == "A") {
          document.getElementById('cnh_total_price').innerHTML = "R$1.050,00";
          document.getElementById('cnh_cartao').innerHTML = "R$131,25";
          document.getElementById('cnh_balcao').innerHTML = "6x de R$175,00";
          document.getElementById('cnh_a_show').classList.remove("d-none");
          document.getElementById('cnh_b_show').classList.add("d-none");
          document.getElementById('cnh_link').href = "https://api.whatsapp.com/send?phone=5586988773483&text=Ol%C3%A1%2C%20gostaria%20de%20um%20desconto%20para%20habilita%C3%A7%C3%A3o%20na%20categoria%20-%20A%20(Moto)";
        }
        if (radios[i].value == "B") {
          document.getElementById('cnh_total_price').innerHTML = "R$1.690,00";
          document.getElementById('cnh_cartao').innerHTML = "R$173,75";
          document.getElementById('cnh_balcao').innerHTML = "6x de R$231,66";
          document.getElementById('cnh_a_show').classList.add("d-none");
          document.getElementById('cnh_b_show').classList.remove("d-none");
          document.getElementById('cnh_link').href = "https://api.whatsapp.com/send?phone=5586988773483&text=Ol%C3%A1%2C%20gostaria%20de%20um%20desconto%20para%20habilita%C3%A7%C3%A3o%20na%20categoria%20-%20B%20(Carro)";

        }
        if (radios[i].value == "AB") {
          document.getElementById('cnh_total_price').innerHTML = "R$1.690,00";
          document.getElementById('cnh_cartao').innerHTML = "R$211,25";
          document.getElementById('cnh_balcao').innerHTML = "6x de R$281,66";
          document.getElementById('cnh_a_show').classList.remove("d-none");
          document.getElementById('cnh_b_show').classList.remove("d-none");
          document.getElementById('cnh_link').href = "https://api.whatsapp.com/send?phone=5586988773483&text=Ol%C3%A1%2C%20gostaria%20de%20um%20desconto%20para%20habilita%C3%A7%C3%A3o%20na%20categoria%20-%20AB%20(Moto%20e%20Carro)";
        }
        break;
      }
    }
  } else if (activePanelNum == 3) {
    nextPanel = 4;
    var radios = document.getElementsByName('add');
    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
        document.getElementById('inc_title').innerHTML = "CNH tipo " + radios[i].value;
        if (radios[i].value == "A") {
          document.getElementById('inc_price').innerHTML = "R$850,00";
          document.getElementById('inc_cartao').innerHTML = "R$141,66";
          document.getElementById('inc_balcao').innerHTML = "R$212,50";
          document.getElementById('inc_a_show').classList.remove("d-none");
          document.getElementById('inc_b_show').classList.add("d-none");
          document.getElementById('inc_link').href = "https://api.whatsapp.com/send?phone=5586988773483&text=.Ol%C3%A1%2C%20gostaria%20de%20um%20desconto%20para%20inclus%C3%A3o%20da%20habilita%C3%A7%C3%A3o%20A%20(Moto)";
        }
        if (radios[i].value == "B") {
          document.getElementById('inc_price').innerHTML = "R$1.200,00";
          document.getElementById('inc_cartao').innerHTML = "R$150,00";
          document.getElementById('inc_balcao').innerHTML = "R$300,00";
          document.getElementById('inc_a_show').classList.add("d-none");
          document.getElementById('inc_b_show').classList.remove("d-none");
          document.getElementById('inc_link').href = "https://api.whatsapp.com/send?phone=5586988773483&text=Ol%C3%A1%2C%20gostaria%20de%20um%20desconto%20para%20inclus%C3%A3o%20da%20Categoria%20-%20B(Carro)%20%20";

        }
        break;
      }
    }
  }

  if (ok) {

    //set active step and active panel onclick
    if (eventTarget.classList.contains(`${DOMstrings.stepPrevBtnClass}`)) {
      if(activeStep == 1){
        activePanelNum = 0;
      }else {
        activePanelNum--;
      }
      activeStep--;
    } else {

      activeStep++;
      activePanelNum = nextPanel;

    }

    setActiveStep(activeStep);
    setActivePanel(activePanelNum);

  }

});

//SETTING PROPER FORM HEIGHT ONLOAD
window.addEventListener('load', setFormHeight, false);

//SETTING PROPER FORM HEIGHT ONRESIZE
window.addEventListener('resize', setFormHeight, false);

//changing animation via animation select !!!YOU DON'T NEED THIS CODE (if you want to change animation type, just change form panels data-attr)

const setAnimationType = newType => {
  DOMstrings.stepFormPanels.forEach(elem => {
    elem.dataset.animation = newType;
  });
};

//selector onchange - changing animation
const animationSelect = document.querySelector('.pick-animation__select');

animationSelect.addEventListener('change', () => {
  const newAnimationType = animationSelect.value;

  setAnimationType(newAnimationType);
});
