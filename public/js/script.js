import * as component from './utils/component.js';
import getData from './utils/request.js';

const form = document.getElementsByTagName('form')[0];

form.addEventListener('submit', async function(ev) {
  ev.preventDefault();
  download(this);
});

const indicateLoad = () => {
  let text = '.';
  return setInterval(() => {
    const dots = document.getElementsByClassName('dots')[0];
    dots.innerText = text;
    text += ' .';
    if (text.split(' ').join('') === '....') text = '';
  }, 600);
}

const download = async (form) => {
  const url = form.querySelector('#url').value;

  if (form.hasAttribute('hidden')) {
    form.parentElement.getElementsByClassName('success')[0].replaceWith(component.load);
  } else {
    form.setAttribute('hidden', '');
    form.parentElement.append(component.load);
  }

  const intervalId = indicateLoad();

  const { statusCode, json } = await getData({url});
  console.log(json);
  
  if (statusCode === 200) {
    clearInterval(intervalId);
    success(form);
    const { data } = json;
    location.href = data.downloadUrl;
  } else {
    clearInterval(intervalId);
    document.getElementsByClassName('load')[0]?.replaceWith(component.failEl);
  }
}

const success = (form) => {
  document.getElementsByClassName('load')[0]?.replaceWith(component.successEl);
  document.getElementsByClassName('ulang-btn')[0].addEventListener('click', (e) => {
    e.preventDefault();
    download(form);
  });
}