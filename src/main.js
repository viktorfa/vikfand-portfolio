// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue';
import '@/assets/styles/main.css';
import { getAllMetaTags } from './helpers';

import { siteDescription, siteName, siteUrl } from '../gridsome.config';

export default function(Vue, { head }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  const metaTags = getAllMetaTags({
    title: siteName,
    description: siteDescription,
    site_url: siteUrl,
    image_url: `${siteUrl}/va-logo_256x256.png`,
  });

  for (const tag of metaTags) {
    head.meta.push(tag);
  }
}
