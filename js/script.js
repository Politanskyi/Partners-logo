const imageWrapper = document.querySelector('.logo-wrapper'),
  imageBody = document.querySelector('.logo-body'),
  imageArr = document.querySelectorAll('.logo-body__item'),
  imageQty = imageArr.length;

if (imageBody) {
  createBtn();
}

function createBtn() {
  let bodyShowMore = document.createElement('div');
  let showMoreBtn = document.createElement('a');

  bodyShowMore.classList.add('body-show-more-partners');
  showMoreBtn.classList.add('show-more-partners');
  showMoreBtn.textContent = 'Показать Больше';

  showHideBtn(bodyShowMore, showMoreBtn);
}

function showHideBtn(bodyShowMore, showMoreBtn) {
  if (imageQty > 8) {
    hideImages();
    imageWrapper.append(bodyShowMore);
    bodyShowMore.append(showMoreBtn);
    showMoreBtn.addEventListener('click', function () {
      showImages(showMoreBtn);
    });
  } else {
    hideImages();
    showMoreBtn.remove();
  }
}

function hideImages() {
  for (let i = imageQty - 1; i >= 8; i--) {
    imageArr[i].classList.add('hide');
  }
}

function showImages(showMoreBtn) {
  for (let i = imageQty - 1; i >= 8; i--) {
    imageArr[i].classList.toggle('hide');
  }
  if (showMoreBtn.textContent == 'Показать Больше') {
    showMoreBtn.textContent = 'Показать Меньше';
  } else {
    showMoreBtn.textContent = 'Показать Больше';
  }
}
