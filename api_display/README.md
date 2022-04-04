# Fetch from an API Monday April 4th, 2022

## Vocab
API - APlication Program Interface
JSON - JavaScript Object Notation -- "Key" : "value" pairs in strings
endpoint - A point out request is directed to
fetch - a type of request 
Promise - What a request returns comes in three flavors


As User I can open the the webpage and see a bunch of mars rover photos in a list from top to bottom.

fetch() is a type of Request
```javascript
fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
```

.then() Asynchronous notation built for requests 
```javascript
fetch().then()
```
.catch() for catching any errors or rejected promises 
```javascript
fetch().then().catch()
```

Fetch is always in one of three states
  - Pending: The Request is waiting for a response from the endpoint that it sent a Request too
  - Rejected: The endpoint that we directed the Request too was incorrect or something happened that the requested was rejected
  - Fulfilled: Thr response comes back to us as accepted and it comes with a set of JSON or HTML or other kinds of data