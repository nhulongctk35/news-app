import './../css/main.css';
import React from 'react';
import { connect } from 'react-redux';
import NewList from '../components/news';
import Sidebar from '../components/Sidebar';
import newService from '../services/new.service';
import { loadData, loadDataSuccess, setActive } from '../actions';
import { Provider } from './newsContext';

function Loading() {
  return (
    <div id="loading">
      <p>Loading ...</p>
    </div>
  );
}

class App extends React.Component {
  state = {
    source: 'google-news',
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

  fetchNews = () => {
    this.props.dispatch(loadData());
    newService
      .getAlls(this.state.source)
      .then(data => this.props.dispatch(loadDataSuccess(data)));
  };

  handleClicking = data => {
    this.props.dispatch(setActive(data));
  };

  render() {
    return (
      <div id="content-wrapper">
        <div className="layout">
          <div id="sidebar">
            <Sidebar onSelect={this.handleSourceChange} />
          </div>
          <div id="main-content">
            {this.props.loading ? (
              <Loading />
            ) : (
              <Provider value={{ onClick: this.handleClicking }}>
                <NewList news={this.props.news} />
              </Provider>
            )}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ news, loading }) {
  return {
    news,
    loading,
  };
}

export default connect(mapStateToProps)(App);
