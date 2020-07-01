'use strict';

const DomElement = function (selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
};

DomElement.prototype.createElement = function () {
    if (this.selector.startsWith('.')) {
        let div = document.createElement('div');
        document.body.append(div);
        div.textContent = '.block';
        div.classList.add(this.selector.slice(1, this.selector.length));
        div.style.cssText = `
        height : ${this.height};
        width : ${this.width};
        background : ${this.bg};
        font-size : ${this.fontSize};`;
    }

    if (this.selector.startsWith('#')) {
        let p = document.createElement('p');
        document.body.append(p);
        p.textContent = '#best';
        p.id = this.selector.slice(1, this.selector.length);
        p.style.cssText = `
        height: ${this.height};
        width: ${this.width};
        background: ${this.bg};
        font-size: ${this.fontSize};`;
    }
};

let div = new DomElement('.block', '50px', '100px', '#D7307C', '1.5em');
let p = new DomElement('#best', '70px', '100px', '#A7E251', '1.5em');

div.createElement();
p.createElement();