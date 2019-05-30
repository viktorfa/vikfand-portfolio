---
title: 'Dataportabilitet'
image: '../static/images/dataportabilitet.png'
---

[Dataportabilitet.no](https://dataportabilitet.no) is a crowdsourced site for information about the data portability of Norwegian websites. See more about the reason for creating this and what EU's GDPR regulation can mean for data and the web on my [blog post](https://blog.vikfand.com/posts/using-your-own-data-for-value/).

Main challange with this is app is finding a good way to handle crowdsourced material. I'm not really that happy with the result, and it may be that just using MediaWiki is better for this kind of stuff. I did, however, wish to make it easier to contribute than doing the entire MediaWiki thing. So I ended up using a form and handling contributions manually.

|                |                                                           |
| -------------- | --------------------------------------------------------- |
| Status         | Shipped.                                                  |
| Problems       | Needs promotion and better way of handling contrinutions. |
| Frontend stack | Hyperapp, Parcel                                          |
| Backend stack  | QuintaDB, Google Sheets                                   |
