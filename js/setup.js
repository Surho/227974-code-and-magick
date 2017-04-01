'use strict';
var setupElement = document.querySelector('.setup'),
    similarWizardTemplate = document.querySelector('#similar-wizard-template').content,
    similarListElement=setupElement.querySelector('.setup-similar-list');
setupElement.classList.remove('hidden');

function genereteNumber(min,max) {
  var randomNumber=min+Math.random()*((max+1)-min);
  return Math.floor(randomNumber);
};

var WIZARD_NAMES=['Иван','Хуан Себастьян','Мария','Кристоф','Виктор','Юлия','Люпита','Вашингтон'],
    WIZARD_SURNAMES=['да Марья','Верон','Мирабелла','Вальц','Онопко','Топольницкая','Нионго','Ирвинг'],
    COAT_COLORS=['rgb(101, 137, 164)','rgb(241, 43, 107)','rgb(146, 100, 161)','rgb(56, 159, 117)','rgb(215, 210, 55)','rgb(0, 0, 0)'],
    EYES_COLORS=['black','red','blue','yellow','green'];

var wizards=[];
for (var i=0; i<4; i++) {
  wizards[i] = {
    name:(Math.random() <= 0.5) ? WIZARD_NAMES[genereteNumber(0, WIZARD_NAMES.length-1)] + ' ' + WIZARD_SURNAMES[genereteNumber(0, WIZARD_SURNAMES.length-1)] :
                                WIZARD_SURNAMES[genereteNumber(0, WIZARD_SURNAMES.length-1)] + ' ' + WIZARD_NAMES[genereteNumber(0, WIZARD_NAMES.length-1)],
    coatColor: COAT_COLORS[genereteNumber(0, COAT_COLORS.length-1)],
    eyesColor: EYES_COLORS[genereteNumber(0, EYES_COLORS.length-1)]
  }
};

function genereteWizard(wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent=wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill=wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill=wizard.eyesColor;
  return wizardElement;
}

var fragment=document.createDocumentFragment();
for (var i=0; i < wizards.length; i++) {
  fragment.appendChild(genereteWizard(wizards[i]));
}
similarListElement.appendChild(fragment);
setupElement.querySelector('.setup-similar').classList.remove('hidden');
