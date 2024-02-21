import React, { lazy, Suspense } from 'react';

const LazyFiltrableCarList = lazy(() => import('./FiltrableCarList'));

const FiltrableCarList = props => (
  <Suspense fallback={null}>
    <LazyFiltrableCarList {...props} />
  </Suspense>
);

export default FiltrableCarList;
