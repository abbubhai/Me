import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="http://www.fromgaming.com/portfolio2/static/media/myAvatar.8a92f0a9.svg"
              alt="avatar"
              className="avatar-img"
            />
            <div class-Name="banner-text">
              <h1>Full Stack Web Developer</h1>
              <hr />
              <p>
                {" "}
                HTML/CSS | Bootstrap | Angular | React | Django | NodeJS |
                Python | C#
              </p>
              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Github */}
                <a
                  href="https://github.com/abbubhai"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                {/* Youtube */}
                <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-youtube-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
