'use strict';
;(function() {

function genereteNumber(min, max) {
  var randomNumber = min + Math.random() * ((max + 1) - min);
  return Math.floor(randomNumber);
}

function genereteWizardName () {
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
      WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  return (Math.random() <= 0.5) ? WIZARD_NAMES[genereteNumber(0, WIZARD_NAMES.length-1)] + ' ' + WIZARD_SURNAMES[genereteNumber(0, WIZARD_SURNAMES.length-1)] :
                                 WIZARD_SURNAMES[genereteNumber(0, WIZARD_SURNAMES.length-1)] + ' ' + WIZARD_NAMES[genereteNumber(0, WIZARD_NAMES.length-1)];
}

function genereteCoatColor () {
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 
                   'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  return COAT_COLORS[genereteNumber(0, COAT_COLORS.length-1)];
}

function genereteEyeColor () {
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  return EYES_COLORS[genereteNumber(0, EYES_COLORS.length-1)];
}

function genereteWizardTemplate (wizard) {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content,
      wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
}

function genereteWizardsObject () {
  var wizardsObject = [];
  for (var i=0; i<4; i++) {
    wizardsObject[i] = {
      name: genereteWizardName(),
      coatColor: genereteCoatColor(), 
      eyesColor: genereteEyeColor()
    };
  };
  return wizardsObject;
};

function genereteWizardElement () {
  var wizardsObject = genereteWizardsObject(),
      fragment = document.createDocumentFragment();
  for (var i = 0; i < wizardsObject.length; i++) {
  fragment.appendChild(genereteWizardTemplate(wizardsObject[i]));
  }
  return fragment;
}

var setupElement = document.querySelector('.setup');

function createWizards () {
  var similarListElement=setupElement.querySelector('.setup-similar-list');
  similarListElement.appendChild(genereteWizardElement());
}

function showSetup () {
  var setupElement = document.querySelector('.setup');
  setupElement.classList.remove('hidden');
  setupElement.querySelector('.setup-similar').classList.remove('hidden'); 
}

createWizards();
showSetup();

})();
