---
title: 'Receipt scanning'
image: './receipt-scanning-1.png'
---

[Receipt scanning](https://receipt-scanning-web-client.glitch.me/) is a proof-of-concept of using the Google Cloud machine learning web services for something useful. Google is on their way to [give world-class AI to the masses](https://blog.vikfand.com/posts/ai-to-the-masses-with-google-apis/) with their various AI-as-a-service products. I believe there is a huge market potential here, as speech recognition, OCR, and image recognition, and probably more to come, is available as a cheap web service. I tried to automatically read paper receipts, and it actually works quite well. Most of the work is making use of Google's output, but Google does all the heavy lifting.

This could be the basis of an app for businesses or consumers that need to do OCR on paper documents like receipts, but maybe the power of Google's ML could be leveraged in better ways. The current tech I used in this project is kinda roughly patched together, but it's a pre-MVP thing.

|                |                                                |
| -------------- | ---------------------------------------------- |
| Status         | Proof-of-concept shipped.                      |
| Problems       | Needs a product market fit                     |
| Frontend stack | Hyperapp                                       |
| Backend stack  | Google Cloud Storage, AWS Lambda, AWS DynamoDB |
| Other tech     | Google Cloud Vision API                        |
