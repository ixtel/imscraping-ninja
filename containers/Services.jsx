import React from 'react';

class Services extends React.Component {
  render() {
    return (
      <div id="wrapper-content">
        <div id="welcome" className="container">
          <div className="title">
            <h2>My skills</h2>
          </div>

          <div className="content">
            <div className="content-container">

              <p>Web Scraping and RESTful services</p>

              <ul>
                <li><b>Languages</b> - Python, JavaScript</li>
                <li><b>Version Control:</b> - git, mercurial</li>
                <li>
                  <b>Backend Frameworks:</b> - Django, Flask, Tornado,
                  ExpressJS, Loopback.io
                </li>
                <li><b>Frontend Frameworks</b> - AngularJS, ReactJS</li>
                <li><b>RDBMS</b> - Postgres, MySQL</li>
                <li><b>NoSQL</b> - MongoDB, Redis, RethinkDB, FireBase</li>
                <li><b>Web Scraping</b> - Grab, Scrapy</li>
                <li><b>Cloud Platforms</b> - AWS, Heroku</li>
              </ul>

              <p>Project management</p>

              <ul>
                <li>Agile, Scrum</li>
                <li>Code review</li>
              </ul>

              <p>
                Full-stack deveoper with deep knowledge of Python
                and JavaScript programming languages.
              </p>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Services;
