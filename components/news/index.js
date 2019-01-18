import React from 'react';
import Link from 'next/link';

import { Consumer } from '../../pages/newsContext';

function NextLink({ id, label, data }) {
  return (
    <Link href={`new/${id}`}>
      <div>
        <Consumer>
          {({ onClick }) => <a onClick={() => onClick(data)}>{label}</a>}
        </Consumer>
      </div>
    </Link>
  );
}

function generateTitleLink(title = '') {
  return title
    .toLowerCase()
    .split(' ')
    .filter(Boolean)
    .join('-');
}

export function SingleNew({ data }) {
  return (
    <li className="new-item new-item--bottom">
      <h2 className="new-item__title u-collor-primary">
        <NextLink
          label={data.title}
          id={generateTitleLink(data.title)}
          data={data}
        />
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
