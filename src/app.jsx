import { Route, Routes, useNavigate } from 'react-router';
import { SearchMovie } from './pages/search-movies';
import { SearchResult } from './pages/search-result';
import { MovieDetails } from './pages/movie-details';
import { useEffect } from 'react';

export function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirectPath = params.get('redirect');
    if (redirectPath) {
      navigate(redirectPath);
    }
  }, [navigate]);
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
