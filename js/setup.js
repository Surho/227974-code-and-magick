'use strict';
;(function (){

  function genereteNumber (min, max){
    var randomNumber = min + Math.random() * ((max + 1) - min);
    return Math.floor(randomNumber);
  }

  function genereteWizardName (){
    var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф',
                'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
        SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц',
                    'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
        fullName=(Math.random() <= 0.5) ? NAMES[genereteNumber(0, NAMES.length - 1)] + ' ' + SURNAMES[genereteNumber(0, SURNAMES.length - 1)] :
                                          SURNAMES[genereteNumber(0, SURNAMES.length - 1)] + ' ' + NAMES[genereteNumber(0, NAMES.length - 1)];
    return fullName;
  }

  function genereteCoatColor (){
    var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)',
                    'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
        generetedColor = COAT_COLORS[genereteNumber(0, COAT_COLORS.length - 1)];
    return generetedColor;
  }

  function genereteEyeColor (){
    var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'],
        generetedColor = EYES_COLORS[genereteNumber(0, EYES_COLORS.length - 1)];
    return generetedColor;
  }

  function genereteWizardTemplate (wizard){
    var similarWizardTemplate = document.querySelector('#similar-wizard-template').content,
        wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElement;
  }

  function genereteWizardsObject (){
    var wizardsObject = [];
    for (var i = 0; i < 4; i++) {
      wizardsObject[i] = {
        name: genereteWizardName (),
        coatColor: genereteCoatColor (),
        eyesColor: genereteEyeColor ()
      }
    }
    return wizardsObject;
  };

  function genereteWizardElement (){
    var wizardsObject = genereteWizardsObject (),
        fragment = document.createDocumentFragment ();
    for (var i = 0; i < wizardsObject.length; i++) {
    fragment.appendChild(genereteWizardTemplate(wizardsObject[i]));
    }
    return fragment;
  }

  function createWizards () {
    var setupElement = document.querySelector('.setup'),
        similarListElement = setupElement.querySelector('.setup-similar-list');
    similarListElement.appendChild(genereteWizardElement());
  }

  function showSetup () {
    var setupElement = document.querySelector('.setup');
    setupElement.classList.remove('hidden');
    setupElement.querySelector('.setup-similar').classList.remove('hidden');
  }

  createWizards ();
  showSetup ();

})();
