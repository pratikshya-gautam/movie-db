import fallBackPoster from '../assets/image.png';

export function getPosterUrl(posterPath, size = 'w500') {
  if (posterPath === null) {
    return fallBackPoster;
  }
  const baseUrl = 'https://image.tmdb.org/t/p/';
  return `${baseUrl}${size}${posterPath}`;
}
