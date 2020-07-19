
class DomElement {
    constructor(selector, height, width, bg, fontSize) {
        this.selector = selector;
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
    }

    setElement() {
        if (this.selector.startsWith('.')) {
            const div = document.createElement('div');
            document.body.append(div);
            div.textContent = '.block';
            div.classList.add(this.selector.slice(1, this.selector.length));
            div.style.cssText = `
            height : ${this.height};
            width : ${this.width};
            background : ${this.bg};
            font-size : ${this.fontSize};
            position: ${this.position};`;
        }

        if (this.selector.startsWith('#')) {
            const p = document.createElement('p');
            document.body.append(p);
            p.textContent = '#best';
            p.id = this.selector.slice(1, this.selector.length);
            p.style.cssText = `
            height: ${this.height};
            width: ${this.width};
            background: ${this.bg};
            font-size: ${this.fontSize};
            position: ${this.position};`;
        }
    }
}

class SqareElement extends DomElement {
    constructor(selector, height, width, bg, fontSize, position, left = 0, top = 0) {
        super();
        this.selector = selector;
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.position = position;
        this.left = left;
        this.top = top;
    }
}

const p = new DomElement('#best', '70px', '100px', '#A7E251', '1.5em');
const divSqare = new SqareElement('.block', '100px', '100px', '#3461EB', '1.5em', 'absolute');

//to check target

setTimeout(() => {
    p.setElement();
}, 0);

document.addEventListener('DOMContentLoaded', () => {
    divSqare.setElement();
});

document.addEventListener('keydown', event => {
    const div = document.querySelector('.block');
    const key = event.code;

    let left = parseInt(div.style.left);
    let top = parseInt(div.style.top);

    if (!isNaN(div.style.left)) {
        left = 0;
    }

    if (!isNaN(div.style.top)) {
        top = 0;
    }
    if (key === 'ArrowLeft') {
        if (key !== 'keyup') {
            div.style.left = `${left - 10}px`;
            left -= 10;
        }
    }
    if (key === 'ArrowRight') {
        if (key !== 'keyup') {
            div.style.left = `${left + 10}px`;
            left += 10;
        }
    }
    if (key === 'ArrowUp') {
        if (key !== 'keyup') {
            div.style.top = `${top - 10}px`;
            top -= 10;
        }
    }
    if (key === 'ArrowDown') {
        if (key !== 'keyup') {
            div.style.top = `${top + 10}px`;
            top += 10;
        }
    }
});
