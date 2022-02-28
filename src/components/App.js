import React, { Component } from 'react'

import Banner from '../components/Banner';
import Layout from './Layout';
import './App.css';
import About from '../pages/About';
import Whitepaper from '../pages/Whitepaper';
import Gau from '../pages/Gau';

import {
      BrowserRouter as Router,
      Routes,
      Route,
} from "react-router-dom";


class App extends Component {

  render() {

    return (
      <Router>
                <Routes>
                    <Route exact caseSensitive={false} path="/about" element={<About />}/>
                    <Route exact caseSensitive={false} path="/" element={<Layout>
                  <Banner />
                  <Gau />
                </Layout>}/>
                <Route exact caseSensitive={false} path="/whitepaper" element={<Whitepaper />}/>
                </Routes>
      </Router>
       
    );
  }
}

export default App;
