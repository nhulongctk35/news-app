import React from 'react';
const NEW_RESOURCE = [
  {
    value: 'google-news',
    label: 'Google News',
  },
  {
    value: 'abc-news-au',
    label: 'ABC News (AU)',
  },
  {
    value: 'al-jazeera-english',
    label: 'Al Jazeera English',
  },
  {
    value: 'ars-technica',
    label: 'Ars Technica',
  },
  {
    value: 'bbc-news',
    label: 'BBC News',
  },
  {
    value: 'bbc-sportu',
    label: 'BBC Sport',
  },
  {
    value: 'bloomberg',
    label: 'Bloomberg',
  },
  {
    value: 'breitbart-news',
    label: 'Breitbart News',
  },
  {
    value: 'business-insider',
    label: 'Business Insider',
  },
  {
    value: 'business-insider-uk',
    label: 'Business Insider (UK)',
  },
];

function Nav() {
  return (
    <div id="nav-link">
      <h3 className="u-collor-primary">Long's Link</h3>
      <ul className="u-non-list-style u-no-margin d-flex">
        <li>
          <a
            className="u-collor-white"
            href="https://github.com/nhulongctk35"
            target="_blank"
          >
            Github
          </a>
        </li>
        <li>
          <a
            className="u-collor-white"
            href="https://www.upwork.com/o/profiles/users/_~01d9ec4cd0552ef4c9/"
            target="_blank"
          >
            Upwork
          </a>
        </li>
        <li>
          <a
            className="u-collor-white"
            href="https://nhulongctk35.github.io/github.io/"
            target="_blank"
          >
            Blog
          </a>
        </li>
      </ul>
    </div>
  );
}

function NewSource({ onSelect }) {
  return (
    <div id="new-source">
      <h3 className="u-collor-primary">Select News Source</h3>
      <div className="d-inline">
        <select
          name="new category"
          id="new-category"
          onChange={event => event.target.value && onSelect(event.target.value)}
        >
          <option value="" disabled>
            Please select news source ...
          </option>
          {NEW_RESOURCE.map(resource => (
            <option key={resource.value} value={resource.value}>
              {resource.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

const Sidebar = ({ onSelect }) => {
  return (
    <aside id="left-side">
      <NewSource onSelect={onSelect} />
      <Nav />
    </aside>
  );
};

Sidebar.defaultProps = {
  onSelect: () => {},
};

export default Sidebar;
