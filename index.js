var http = require('http');
var express = require('express');

var user1 = {"results":[{"gender":"male","name":{"title":"monsieur","first":"rafael","last":"schmitt"},"location":{"street":"9639 rue des ecrivains","city":"montpreveyres","state":"nidwalden","postcode":4619},"email":"rafael.schmitt@example.com","login":{"username":"bigbear999","password":"females","salt":"ppsHSm9D","md5":"a0ef763d765f233b759c420d8f9726dd","sha1":"6977910c4f056119811372b230d4f78156825129","sha256":"bcfcf31b6d32591f0980965594a098d95920de6c8f9e853a87131d4a47994120"},"dob":"1989-02-21 06:44:03","registered":"2011-11-07 17:51:21","phone":"(002)-513-2717","cell":"(807)-069-9145","id":{"name":"AVS","value":"756.MFYE.MJBJ.15"},"picture":{"large":"https://randomuser.me/api/portraits/men/41.jpg","medium":"https://randomuser.me/api/portraits/med/men/41.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/41.jpg"},"nat":"CH"}],"info":{"seed":"b59c6842f6135ad3","results":1,"page":1,"version":"1.1"}}
var user2 = {"results":[{"gender":"female","name":{"title":"ms","first":"chloe","last":"clarke"},"location":{"street":"4676 anzac drive","city":"upper hutt","state":"nelson","postcode":77448},"email":"chloe.clarke@example.com","login":{"username":"tinyswan751","password":"ashlee","salt":"FnUpb7b6","md5":"cb06c91bc6d7c8a4e10aefaabf651d6d","sha1":"13db5ac40223857015348cfaa7090b540f70914e","sha256":"e5756082d650840428b1496ac755c7c5627bf2513a0da92fba92367a3c3ba564"},"dob":"1964-07-12 16:48:24","registered":"2009-06-15 07:44:00","phone":"(680)-423-9618","cell":"(224)-719-5163","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/women/14.jpg","medium":"https://randomuser.me/api/portraits/med/women/14.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/14.jpg"},"nat":"NZ"}],"info":{"seed":"e7daa6d4e4b9a1c9","results":1,"page":1,"version":"1.1"}}
var user3 = {"results":[{"gender":"female","name":{"title":"miss","first":"sara","last":"ranta"},"location":{"street":"7623 korkeavuorenkatu","city":"multia","state":"central ostrobothnia","postcode":80879},"email":"sara.ranta@example.com","login":{"username":"blackleopard465","password":"tiny","salt":"RGxgaWq5","md5":"5f54fd7bcfd86a2029704d4fea2159c0","sha1":"ce9e2875590f593ec6c61989c6b1bdfe2cb0ba84","sha256":"412d352fb1fe3a1f5f7aef15dde21df54d2c6aa49b56c3298c5eda10e1fadeb1"},"dob":"1960-07-24 01:53:05","registered":"2011-12-23 19:57:49","phone":"04-685-938","cell":"041-846-10-43","id":{"name":"HETU","value":"660-376E"},"picture":{"large":"https://randomuser.me/api/portraits/women/51.jpg","medium":"https://randomuser.me/api/portraits/med/women/51.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/51.jpg"},"nat":"FI"}],"info":{"seed":"8134044fa3f00bec","results":1,"page":1,"version":"1.1"}}

var app = express();

app.get('/api', function(request, response) {
	newInt = getRandomInt(1, 3);
	response.contentType('application/json');
	response.json(user1);
})

// Random (ranged) number generator.
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// Starter message.
var port = process.env.PORT || 3000;
app.listen(port, function() {
	console.log('Server app is listening on port ' + port + '.');
})