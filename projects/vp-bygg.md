---
title: VP Bygg
image: ../static/images/screenshot-from-2019-10-26-13-34-43.png
order: 200
---
[VP Bygg](https://vpbygg.no) is a homepage and ecommerce site for a building materials retailer. VP Bygg needed custom behavior in calculating sizes of orders, to make it user friendly for contractors to order materials. The site was therefore made in Gatsby JS with its own shopping cart and order logic. 

The backend is handler with with AWS Lambda and AWS DynamoDB to allow a flexible and scalable serverless backend.

To allow for quick iteration, only JSON files were used as data sources in the beginning, but it gradually shifted to being JSON files editable through Netlify CMS to make editing possible for non-technical users.

The site performs well, uses rich data for products, automatically creates a feed to Google Shopping.
