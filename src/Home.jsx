import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <main className="home" id="main-content">
      <div className=" usa-grid-full">
        <header className="usa-width-one-whole">
          <h1>The Home Mortgage Disclosure Act</h1>
          <p className="font-lead">
            HMDA requires many financial institutions to maintain, report, and
            publicly disclose information about mortgages.
          </p>
        </header>

        <div className="alert alert-error usa-width-one-whole">
          <div className="alert-body">
            <h3 className="alert-heading">
              Sorry, all HMDA applications and content are currently
              unavailable.
            </h3>
            <p className="alert-text">
              We are perfroming scheduled maintenance.We should be back online shortly
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
