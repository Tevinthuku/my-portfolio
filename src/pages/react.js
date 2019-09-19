import React from 'react';
// import { Link } from 'gatsby'

import Layout from '../components/layout';
import Footer from '../components/Footer';

import reactimage from '../images/react.png';
import Header from '../components/Header';
import Externallink from '../components/Externallink';

const SecondPage = () => (
  <Layout>
    <Header />

    <div id="wrapper">
      <section id="main" className="wrapper">
        <div className="inner">
          <h1 className="major">My Front-End developement experiences.</h1>
          <span className="image fit">
            <img src={reactimage} alt="" />
          </span>
          <p>
            I am skilled at React JS and have even created a tutorial published
            in the Andela Website on Building your own version of React.
            <br />
            <br />
            <Externallink
              text="First part"
              href="https://andela.com/insights/building-your-own-version-of-react-from-scratch-part-1/"
            />
            <br />
            <br />
            <Externallink
              text="Second part"
              href="https://andela.com/insights/building-your-own-react-from-scratch-part-2/"
            />
            <br />
            <br />
            I also have built two React Libraries
            <br />
            <br />
            <Externallink
              text="useForm"
              href="https://www.npmjs.com/package/@tevhooks/useform"
            />
            <br />
            This library makes it easy to work with ReactJS forms in a reusable
            way.
            <br />
            Built with: <br />
            1. ReactJS <br />
            2. Javascript
            <br />
            <br />
            <Externallink
              text="localstorage-redux"
              href="https://www.npmjs.com/package/localstorage-redux"
            />
            <br />
            This library helps store redux state to local storage
            <br /> Built with: <br />
            1. Redux
            <br />
            2. Javascript <br />
          </p>
        </div>
      </section>
    </div>

    <Footer />
  </Layout>
);

export default SecondPage;
