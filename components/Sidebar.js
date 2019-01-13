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

const Sidebar = ({ onSelect }) => {
  return (
    <div>
      <h3 className="u-collor-primary">Select News Source</h3>
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
  );
};

Sidebar.defaultProps = {
  onSelect: () => {},
};

export default Sidebar;
