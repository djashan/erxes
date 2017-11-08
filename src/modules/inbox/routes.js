import React from 'react';
import { Route } from 'react-router-dom';
import queryString from 'query-string';
import { MainLayout } from '../layout/containers';
import Inbox from '../inbox/containers/Inbox';

const routes = () => [
  <Route
    exact
    key="index"
    path="/"
    component={({ location }) => {
      const queryParams = queryString.parse(location.search);
      return <MainLayout content={<Inbox queryParams={queryParams} />} />;
    }}
  />,

  <Route
    exact
    key="inbox"
    path="/inbox"
    component={({ location }) => {
      const queryParams = queryString.parse(location.search);
      return <MainLayout content={<Inbox queryParams={queryParams} />} />;
    }}
  />
];

export default routes;
