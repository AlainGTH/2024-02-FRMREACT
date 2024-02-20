import React, { lazy, Suspense } from 'react';

const LazyCarViewer = lazy(() => import('./CarViewer'));

const CarViewer = props => (
  <Suspense fallback={null}>
    <LazyCarViewer {...props} />
  </Suspense>
);

export default CarViewer;
