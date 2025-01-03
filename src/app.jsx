import { Route, Routes } from 'react-router';
import { SearchMovie } from './pages/search-movies';
import { SearchResult } from './pages/search-result';

export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SearchMovie />} />
        <Route path="/movies/:keyword" element={<SearchResult />} />
      </Routes>
    </div>
  );
}
