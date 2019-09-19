import React from 'react';
// import { Link } from 'gatsby'

import Layout from '../components/layout';
import Footer from '../components/Footer';
import Externallink from '../components/Externallink';
import pic4 from '../images/backend.jpg';
import Header from '../components/Header';

const SecondPage = () => (
  <Layout>
    <Header />

    <div id="wrapper">
      <section id="main" className="wrapper">
        <div className="inner">
          <h1 className="major">Backend development</h1>
          <span className="image fit">
            <img src={pic4} alt="" />
          </span>
          <p>
            I have experience working with Python-Flask and built a virtual
            voting system where users can vote for their prefered candidates
            Built with <br />
            1. Flask <br />
            2. Postgres <br />
            3. JWT <br />
            <Externallink
              text="Github repo"
              link="https://github.com/Tevinthuku/Politico"
            />
          </p>
          <p>
            I also have created in a team that built a medium clone known as
            Authors Haven
            <br />
            Built with <br />
            1. Django <br />
            2. Postgres <br />
            <Externallink
              text="Github repo"
              link="https://github.com/rfpremier/ah-django"
            />
          </p>

          <p>
            I have also done a rebuild of the Voting system above with ReasonML
            <br />
            Built with <br />
            1. ReasonML <br />
            <Externallink
              text="Github repo"
              link="https://github.com/Tevinthuku/Ocaml-flavored-politico"
            />
          </p>
        </div>
      </section>
    </div>

    <Footer />
  </Layout>
);

export default SecondPage;
