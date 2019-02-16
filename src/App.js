import React, { Component } from 'react';
import './App.css';
import Projects from "./components/Projects";
import AddProject from "./components/AddProject";

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    }
  }

  componentWillMount() {
    this.setState({projects: [
        {
          title: 'Business Website',
          category: 'Web Design'
        },
        {
          title: 'Social App',
          category: 'Mobile Development'
        },
        {
          title: 'E-commerce',
          category: 'Web Design'
        }
      ]});
  }

  render() {
    return (
      <div className="App">
        <AddProject/>
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
