import React, { Component } from "react";
import {
  Tab,
  Tabs,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://assets.alignable.com/services/pictures/medium/621668/1519310660_blob) center / cover"
              }}
            >
              Capstone Project
            </CardTitle>
            <CardText style={{ color: "blue", fontsize: "50px" }}>
              Responsive Web application(Python, Django, SSH, PostgresSQL, UI
              Frameworks, etc;)
            </CardText>
            <CardActions border>
              <div className="project-links">
                <a
                  href="https://github.com/abbubhai/fitgirl-inc"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {/* Github link opens new tab"*/}
                  <Button colored>GitHub</Button>
                </a>
                <a
                  href="https://www.youtube.com/watch?v=Nt9NwIjRzBs"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {/*See Project in new tab*/}
                  <Button colored>See Demo</Button>
                </a>
              </div>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>This is Angular</h1>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>This is React</h1>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <h1>Some of my design works</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Django</Tab>
          <Tab>Angular</Tab>
          <Tab>React</Tab>
          <Tab>Others</Tab>
        </Tabs>

        <section className="projects-grid">
          <Grid className="projects-grid">
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    );
  }
}

export default Projects;
