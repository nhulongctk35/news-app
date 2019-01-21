import './../css/main.css';

import React from 'react';

import NewList from '../components/news';
import Sidebar from '../components/Sidebar';

import newService from '../services/new.service';
import * as serviceWorker from '../serviceWorker';
import Spinner from '../components/Spinner';

class App extends React.Component {
  state = {
    source: 'google-news',
    news: null,
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
    serviceWorker.register();
  }

  fetchNews = () => {
    newService
      .getAlls(this.state.source)
      .then(data => this.setState({ news: data }));
  };

  render() {
    return (
      <div id="content-wrapper">
        <div className="layout">
          <div id="sidebar">
            <Sidebar onSelect={this.handleSourceChange} />
          </div>
          <div id="main-content">
            {this.state.news ? (
              <NewList news={this.state.news} />
            ) : (
              <Spinner size={20} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
