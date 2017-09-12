import React from 'react'
import Link from 'gatsby-link'

import Hero from '../components/Hero'

const Issues = () => (
  <main className="h5 bg-white mt5 mb5">
    <div className="w-50-l w-70-m w-90 center">
      <h2 className="black f3 pb4">Issues</h2>
      <ol className="list">
        <li className="black-60 pt4 pb4 bt b--black-20 f4">
          Issue 02 — coming soon
        </li>
        <li className="black-60 pt4 pb4 bb bt b--black-20 f4">
          <Link to="/issue/01" className="link dim blue fw5">
            Issue 01
          </Link>
          <span className="fr">12 September '17</span>
        </li>
        {/* <li className="black-60 pt4">
            <a className="link dim blue fw5" href="#" target="_blank">
          Issue 01
            </a>
        </li> */}
      </ol>
    </div>
  </main>
)

const IndexPage = () => (
  <div>
    <Hero message="A curated selection of articles and tools on all things design systems, styleguides and front-end architecture. Get the latest on how to build, scale and prevent entropy in your system delivered to your inbox." />
    <Issues />
  </div>
)

export default IndexPage