import articlesTpl from '../templates/articles.hbs';
import refs from './refs';

function updateArticlesMarkup(hits) {
  const markup = articlesTpl(hits);
  refs.articlesContainer.insertAdjacentHTML('beforeend', markup);
  // console.log(hits.length);
}

export default updateArticlesMarkup;
