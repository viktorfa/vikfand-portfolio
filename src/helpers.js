export const imageTags = [
  {
    key: 'image',
    name: 'image',
  },
  {
    key: 'schema:image',
    itemprop: 'image',
  },
  {
    key: 'twitter:image',
    name: 'twitter:image:src',
  },
  {
    key: 'og:image',
    property: 'og:image',
  },
];
export const titleTags = [
  {
    key: 'schema:name',
    itemprop: 'name',
  },
  {
    key: 'twitter:title',
    name: 'twitter:title',
  },
  {
    key: 'og:title',
    property: 'og:title',
  },
];
export const descriptionTags = [
  {
    key: 'description',
    name: 'description',
  },
  {
    key: 'schema:description',
    itemprop: 'description',
  },
  {
    key: 'twitter:description',
    name: 'twitter:card',
  },
  {
    key: 'og:description',
    property: 'og:description',
  },
];
export const urlTags = [
  {
    key: 'og:url',
    property: 'og:url',
  },
];
export const getAllMetaTags = ({ title, description, image_url, site_url }) => {
  let result = [];
  if (title) {
    result = [...result, ...titleTags.map((x) => ({ ...x, content: title }))];
  }
  if (description) {
    result = [
      ...result,
      ...descriptionTags.map((x) => ({ ...x, content: description })),
    ];
  }
  if (image_url) {
    result = [
      ...result,
      ...imageTags.map((x) => ({ ...x, content: image_url })),
    ];
  }
  if (site_url) {
    result = [...result, ...urlTags.map((x) => ({ ...x, content: site_url }))];
  }
  result = [
    ...result,
    {
      key: 'twitter:card',
      name: 'twitter:card',
      content: 'summary',
    },
    {
      key: 'og:locale',
      property: 'og:locale',
      content: 'en_US',
    },
    {
      key: 'og:type',
      property: 'og:type',
      content: 'website',
    },
  ];
  return result;
};
