import React from 'react';
import Link from 'next/link';

function NextLink({ id, href, label }) {
  return (
    <Link as={id} href={href}>
      <a>{label}</a>
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
          href="/new"
        />
      </h2>
      <p className="new-item__content">{data.description}</p>
    </li>
  );
}

export default function NewsList({ news = [] }) {
  return (
    <ul className="u-non-list-style">
      {news.map((singleNew, index) => (
        <SingleNew key={`${index}_${singleNew.source.id}`} data={singleNew} />
      ))}
    </ul>
  );
}
