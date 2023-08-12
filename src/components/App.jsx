import { Route, Routes } from 'react-router-dom';
import { fetchGetTrending } from 'service/Api';
import { Layout } from './Layout/Layout';

export const App = () => {
  console.log(fetchGetTrending());

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

//
///const API_KEY = 220201c66368926dc418ca9983b1c088;
