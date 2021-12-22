import * as React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import About from '../../views/examples/About'
import Home from '../../views/examples/Home'
import './Content.scss'

export function Content(props) {
  return (
    <main className='Content'>
      <Routes>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </main>
  );
};