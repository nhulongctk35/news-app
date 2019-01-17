import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'next/router';

const NewDetails = ({ data = {} }) => {
  return (
    <div className="new-item new-item--bottom">
      <a className="new-item__thumb" href={data.urlToImage} target="_blank">
        <img src={data.urlToImage} alt="New thumb" />
      </a>
      <div className="new-body">
        <h2 className="new-item__title u-collor-primary">
          <a target="_blank" href={data.url}>
            {data.title}
          </a>
        </h2>
        <p className="new-item__content">{data.description}</p>
      </div>
    </div>
  );
};

function mapStateToProps({ active }) {
  return {
    data: active,
  };
}

export default compose(
  connect(mapStateToProps),
  withRouter
)(NewDetails);
