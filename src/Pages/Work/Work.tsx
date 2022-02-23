import React from 'react';
import { Route, Routes } from 'react-router';
import Detail from './Detail';
import Viewer from './Viewer';

const Work = () => {
  return (
    <Routes>
      <Route path="/:id" element={<Detail />} />
      <Route path="/viewer/:id/*" element={<Viewer />} />
    </Routes>
  );
};

export default Work;
