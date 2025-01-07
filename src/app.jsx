import { Route, Routes } from 'react-router';
import { SearchMovie } from './pages/search-movies';
import { SearchResult } from './pages/search-result';
import { MovieDetails } from './pages/movie-details';

export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SearchMovie />} />
        <Route path="/movies/:keyword" element={<SearchResult />} />
        {/* id is called params in url */}
        <Route path="/movie-details/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  );
}
