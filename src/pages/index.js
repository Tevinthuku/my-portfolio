import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Footer from '../components/Footer';
import Externallink from '../components/Externallink';
import pic1 from '../images/pic01.jpg';
import pic2 from '../images/pic02.jpg';
import Sidebar from '../components/Sidebar';
import Scroll from '../components/Scroll';

const IndexPage = () => (
  <Layout>
    <Sidebar />

    <div id="wrapper">
      <section id="intro" className="wrapper style1 fullscreen fade-up">
        <div className="inner">
          <h1>Tevin Thuku</h1>
          <p>
            Im a Software engineer
            <br />
            {' '}Previously working for <br />
            <Externallink text="Andela" link="https://andela.com/" />
            <br />
            {' '}Checkout <br />
            <Externallink
              link="https://github.com/Tevinthuku"
              text="My Github Profile"
            />
          </p>
          <ul className="actions">
            <li>
              <Scroll type="id" element="one">
                <a href="#one" className="button">
                  Learn more about me
                </a>
              </Scroll>
            </li>
          </ul>
        </div>
      </section>

      <section id="one" className="wrapper style2 spotlights">
        <section>
          <a href="/react/" className="image" alt="image">
            <img src={pic1} alt="" data-position="center center" />
          </a>
          <div className="content">
            <div className="inner">
              <h2>I am Passionate about front-end development</h2>
              <p>
                I love Reactjs and modern Js tooling that enable developers to
                create wonderful user experiences for clients and also
                contributing to creating and contributing to open source tools
                that work with these technologies
              </p>
              <ul className="actions">
                <li>
                  <Link className="button" to="/react/">
                    Learn more
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <a href="/backend/" className="image">
            <img src={pic2} alt="" data-position="top center" />
          </a>
          <div className="content">
            <div className="inner">
              <h2>I'm good at Backend API development</h2>
              <p>
                I love building backend services and I have experience working
                on building API's with Python, Node and Elixir
              </p>
              <ul className="actions">
                <li>
                  <Link className="button" to="/backend">
                    Learn more
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>

      <section id="two" className="wrapper style3 fade-up">
        <div className="inner">
          <h2>My best Work</h2>
          <p>
            I love building things, both big and small and here is a small list
            of my best work to date.
          </p>
          <div className="features">
            <section>
              <span className="icon major fa-code" />
              <h3>Artispace platform</h3>
              <p>
                Its a wix clone, and it empowers users to create powerful a
                unique space for themselves that is highly customizeable and
                that can reflect what their brand stands for. Built in
                <br />
                1. React <br />
                2. NextJs <br />
                3. Firebase <br />
                4. Websockets <br /> <br />
                <br /> <br />
                <Externallink
                  link="https://artispaceweb.now.sh/"
                  text="Artispace"
                />
              </p>
              <br />
            </section>
            <section>
              <span className="icon major fa-code" />
              <h3>Politico</h3>
              <p>
                An online platform that enables users to vote for their desired
                leaders Built in
                <br />
                1. Python <br />
                2. Postgres <br />
                3. Flask <br />
                4. Deployed on Heroku
                <br />
                <br />
                <br />
                <Externallink
                  link="https://github.com/Tevinthuku/Politico"
                  text="Link to Github Repository"
                />
              </p>
            </section>
            <section>
              <span className="icon major fa-code" />
              <h3>Localstorage Redux</h3>
              <p>
                An open source library that enables users to store their redux
                developers state to the browser's Localstorage
                <br />
                Built with:
                <br />
                1. Redux <br />
                2. Javascript
                <br />
                <br />
                <Externallink
                  link="https://www.npmjs.com/package/localstorage-redux"
                  text="Link to project"
                />
              </p>
            </section>
            <section>
              <span className="icon major fa-code" />
              <h3>useForm</h3>
              <p>
                This is a react frontend library built by React Hooks that makes
                forms much more reuseable
                <br />
                Built with:
                <br />
                1. React hooks <br />
                2. Javascript <br />
                <br />
                <Externallink
                  link="https://www.npmjs.com/package/@tevhooks/useform"
                  text="useForm package link"
                />
              </p>
            </section>
            <section>
              <span className="icon major fa-code" />
              <h3>Authors Haven</h3>
              <p>
                A medium clone that enables users to create articles and comment
                on articles. We worked on this as a team of 6 devs written Built
                in
                <br />
                1. Python <br />
                2. Postgres <br />
                3. Django <br />
                4. Deployed on Heroku <br />
                <br />
                <Externallink
                  link="https://github.com/rfpremier/ah-django"
                  text="Authors Haven API"
                />
              </p>
            </section>
            <section>
              <span className="icon major fa-code" />
              <h3>Blog explaining the internals of react.</h3>
              <p>
                An article and package that enables devs to get an understanding
                the internals of React and also understand why some patterns can
                help improve your applications performance an
                <br />
                <br />
                <Externallink
                  link="https://andela.com/insights/building-your-own-version-of-react-from-scratch-part-1/"
                  text="First part of the post"
                />
                <br />
                <br />
                <Externallink
                  link="https://andela.com/insights/building-your-own-react-from-scratch-part-2/"
                  text="Second part of the post"
                />
                <br />
                <br />
                <Externallink
                  link="https://www.npmjs.com/package/tevreact"
                  text="Link to package"
                />
              </p>
            </section>
          </div>
        </div>
      </section>

      <section id="three" className="wrapper style1 fade-up">
        <div className="inner">
          <h2>Get in touch</h2>
          <div className="split style1">
            <section>
              <ul className="contact">
                <li>
                  <h3>Address</h3>
                  <span>
                    Roysambu
                    <br />
                    Nairobi
                    <br />
                    KENYA
                  </span>
                </li>
                <li>
                  <h3>Email</h3>
                  <Externallink
                    link="mailto:tevinthuku@gmail.com"
                    text="tevinthuku@gmail.com"
                  />
                </li>
                <li>
                  <h3>Phone</h3>
                  <span>(254) 742-546892</span>
                </li>
                <li>
                  <h3>Social</h3>
                  <ul className="icons">
                    <li>
                      <a
                        href="https://twitter.com/tevinthuku"
                        className="fa-twitter"
                      >
                        <span className="label">Twitter</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/Tevinthuku"
                        className="fa-github"
                      >
                        <span className="label">GitHub</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/tevin-thuku-a27a05a5/"
                        className="fa-linkedin"
                      >
                        <span className="label">LinkedIn</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </div>

    <Footer />
  </Layout>
);

export default IndexPage;
