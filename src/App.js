import { Route, Routes } from 'react-router-dom';

import { Career } from './pages/Career';
import { About } from './pages/About/index.js';
import { PageNotFound } from './pages/Error/index.js';
import { Resume } from './pages/Resume/index.js';

import { Layout } from './containers/Layout/index.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<About />} />
        <Route path="career" element={<Career />} />
        <Route path="resume" element={<Resume />} />

        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
