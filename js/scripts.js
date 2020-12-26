// Function
{
  var $_ = function (selector, node = document) {
    return node.querySelector(selector);
  };

  var $$_ = function (selector, node = document) {
    return node.querySelectorAll(selector);
  };

  var createElement = function (element, elementClass, text) {
    var newElement = document.createElement(element);

    if (elementClass) {
      newElement.setAttribute('class', elementClass);
    }

    if (text) {
      newElement.textContent = text;
    }

    return newElement;
  };
}

var arraycha = [];
var relsBox = [];


var elForm = document.querySelector(`.js-contact-form`);
var elInputOfName = document.querySelector('.js-contact-form__name-input');
var elInputOfRelationship = document.querySelector('.js-contact-form__relationship-input');
var elInputOfPhone = document.querySelector('.js-contact-form__phone-input');
var elResultLits = document.querySelector(`.js-contacts`);
var elDataSet = document.getElementById(`relationships-list`);


elForm.addEventListener('submit', function (evt) {
  evt.preventDefault();

  var box = {
    ism: elInputOfName.value,
    rel: elInputOfRelationship.value,
    phone: elInputOfPhone.value
  };

  elDataSet.innerHTML = '';
  if (!relsBox.includes(elInputOfRelationship.value)) {
    relsBox.push(elInputOfRelationship.value);
  }



  relsBox.forEach(function (tur) {
    var option = createElement(`option`, null, tur);
    elDataSet.appendChild(option);
  });

  elInputOfPhone.classList.remove('is-invalid');
  if (isNaN(elInputOfPhone.value)) {
    elInputOfPhone.classList.add('is-invalid');
    return;
  }

  for (var i = 0; i < arraycha.length; i++) {
    if (arraycha[i].phone === elInputOfPhone.value) {
      elInputOfPhone.classList.add('is-invalid');
      return;
    }
  }

  arraycha.push(box);

  elResultLits.innerHTML = ``;
  arraycha.forEach(function (kantakt, index) {
    var listItem = document.createElement('li');
    listItem.setAttribute(`class`, `list-group-item js-contact mb-3 rounded`);

    var headingOfItem = document.createElement('h5');
    headingOfItem.setAttribute(`class`, `text-truncate js-contact__name pb-1`);
    headingOfItem.textContent = kantakt.ism;
    elInputOfName.value = '';

    var textOfItem = document.createElement('p');
    textOfItem.setAttribute(`class`, `small mb-1 js-contact__relationship`);
    textOfItem.textContent = kantakt.rel;
    elInputOfRelationship.value = '';

    var fragmentBox = document.createDocumentFragment();

    var phoneNumber = document.createElement('a');
    phoneNumber.setAttribute(`class`, `js-contact__phone`);
    phoneNumber.setAttribute('href', `tel:${elInputOfPhone.value}`)
    phoneNumber.textContent = kantakt.phone;
    elInputOfPhone.value = '';

    var deleteBtn = createElement('button', 'btn btn-danger btn-sm d-block mt-2 delete', 'Delete')
    deleteBtn.dataset.id = index;

    listItem.appendChild(headingOfItem);
    listItem.appendChild(textOfItem);
    listItem.appendChild(phoneNumber);
    listItem.appendChild(deleteBtn);
    var fragList = fragmentBox.appendChild(listItem)
    elResultLits.appendChild(fragList);
  });
});

elResultLits.addEventListener(`click`, function (evt) {
  if (evt.target.matches(`.btn`)) {
    arraycha.splice(evt.target.dataset.id, 1)
  };
  elResultLits.innerHTML = ``;

  arraycha.forEach(function (kantakt, index) {
    var listItem = document.createElement('li');
    listItem.setAttribute(`class`, `list-group-item js-contact mb-3 rounded`);

    var headingOfItem = document.createElement('h5');
    headingOfItem.setAttribute(`class`, `text-truncate js-contact__name pb-1`);
    headingOfItem.textContent = kantakt.ism;
    elInputOfName.value = '';

    var textOfItem = document.createElement('p');
    textOfItem.setAttribute(`class`, `small mb-1 js-contact__relationship`);
    textOfItem.textContent = kantakt.rel;
    elInputOfRelationship.value = '';

    var fragmentBox = document.createDocumentFragment();

    var phoneNumber = document.createElement('a');
    phoneNumber.setAttribute(`class`, `js-contact__phone`);
    phoneNumber.setAttribute('href', `tel:${elInputOfPhone.value}`)
    phoneNumber.textContent = kantakt.phone;
    elInputOfPhone.value = '';

    var deleteBtn = createElement('button', 'btn btn-danger btn-sm d-block mt-2 delete', 'Delete')
    deleteBtn.dataset.id = index;

    listItem.appendChild(headingOfItem);
    listItem.appendChild(textOfItem);
    listItem.appendChild(phoneNumber);
    listItem.appendChild(deleteBtn);
    var fragList = fragmentBox.appendChild(listItem)
    elResultLits.appendChild(fragList);
  });

});


