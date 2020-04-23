# cacheman-redis-promise

Basically an extension of [cacheman-redis](https://github.com/cayasso/cacheman-redis) module that uses promises.

## Instalation

``` bash
$ npm install cacheman-redis-promised
```

## Usage

```javascript
const cache = require('cacheman-redis-promised')({host: '127.0.0.1', port: 6379})
```
or
```javascript
const cache = require('cacheman-redis-promised')('redis://.....')
```
```javascript
cache.set('some key', 'hello there').then(function(data) {
	console.log(data); // -> 'hello there'
	return cache.get('some key');
}).then(function(data) {
	console.log(data); // -> 'hello there' from cache.get
	return cache.del('some key');
}).then(function() {
	console.log('value deleted');
});
