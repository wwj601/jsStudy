let url = require('url')

let str = 'http://www.baidu.com:80/stu/index.html?lx=wx&name=wwj#hao';
console.log(url.parse(str, true))
/* 
{
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'www.baidu.com:80',
  port: '80',
  hostname: 'www.baidu.com',
  hash: '#hao',
  search: '?lx=wx&name=wwj',
  query: [Object: null prototype] { lx: 'wx', name: 'wwj' },
  pathname: '/stu/index.html',
  path: '/stu/index.html?lx=wx&name=wwj',
  href: 'http://www.baidu.com:80/stu/index.html?lx=wx&name=wwj#hao' }
*/