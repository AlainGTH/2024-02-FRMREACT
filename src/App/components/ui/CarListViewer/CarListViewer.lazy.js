import React, { lazy, Suspense } from 'react';

const LazyCarListViewer = lazy(() => import('./CarListViewer'));

const CarListViewer = props => (
  <Suspense fallback={null}>
    <LazyCarListViewer {...props} />
  </Suspense>
);

export default CarListViewer;
