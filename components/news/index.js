import React from 'react';

function SingleNew({ data }) {
  return (
    <li className="new-item new-item--bottom">
      <h2 className="new-item__title u-collor-primary">
        <a href={data.url}>{data.title}</a>
      </h2>
      <p className="new-item__content">{data.description}</p>
    </li>
  );
}

export default function NewList({ news = [] }) {
  return (
    <ul className="u-non-list-style">
      {news.map((singleNew, index) => (
        <SingleNew key={`${index}_${singleNew.source.id}`} data={singleNew} />
      ))}
    </ul>
  );
}
