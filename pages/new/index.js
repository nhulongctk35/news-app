import React from 'react';
import { withRouter } from 'next/router';

const NewDetails = ({ data, ...rest }) => {
  return (
    console.log(rest) || (
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
    )
  );
};

export default withRouter(NewDetails);
