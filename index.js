// import path from 'path'

let img = document.createElement('img');
let str = 'file:///' + __dirname + '/resources/empty-with-portrait.gif';
str = str.replace('\\', '/');

const searchRegExp = /\\/g;
const replaceWith = '/';
img.src = str.replace(searchRegExp, replaceWith);

//img.style.width = "400%";
//img.style.height = "400%";

document.body.appendChild(img);

alert("hi")