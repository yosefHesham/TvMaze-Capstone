import MovieService from './movie_service';

const topRatedHeader = document.querySelector('.top-rated-header');
const mostPopularHeader = document.querySelector('.most-popular-header');

const showCounts = () => {
  const topRatedCount = document.createElement('tmp');
  topRatedCount.innerHTML = `<p class ="count">(${MovieService.countTopRated()})</p>`;
  topRatedHeader.appendChild(topRatedCount.firstChild);
  topRatedHeader.removeChild(topRatedHeader.children[1]);
  const mostPopularCount = document.createElement('p');
  mostPopularCount.innerHTML = `<p class ="count"> (${MovieService.countMostPopular()})</p>`;
  mostPopularHeader.appendChild(mostPopularCount.firstChild);
  mostPopularCount.removeChild(mostPopularCount.children[1]);
};
export default showCounts;
