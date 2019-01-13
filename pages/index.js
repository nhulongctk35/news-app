import React from 'react';
import NewList from './news';
import './../css/main.css';
import Sidebar from '../components/Sidebar';
import newService from '../services/new.service';

class App extends React.Component {
  state = {
    source: 'google-news',
    news: [],
  };

  handleSourceChange = newSource => {
    if (newSource === this.state.source) return;

    this.setState(
      {
        source: newSource,
      },
      this.fetchNews
    );
  };

  componentDidMount() {
    this.fetchNews();
  }

  fetchNews = () =>
    newService
      .getAlls(this.state.source)
      .then(data => this.setState({ news: data }));

  render() {
    return (
      <div id="content-wrapper">
        <div className="layout">
          <div id="sidebar">
            <Sidebar onSelect={this.handleSourceChange} />
          </div>
          <div id="main-content">
            <NewList news={this.state.news} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
