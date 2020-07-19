
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
    constructor(selector, height, width, bg, fontSize, position) {
        super();
        this.selector = selector;
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.position = position;
        this.left = 0;
        this.top = 0;
    }

    changeStyle() {
        this.style.cssText = `
        height: ${this.height};
        width: ${this.width};
        background: ${this.bg};
        font-size: ${this.fontSize};
        position: ${this.position};
        left: ${this.left}px;
        top: ${this.top}px;
      `;
        console.log('ddddd');
    }

    move(side) {
        if (side === 'left') {
            this.left -= 10;
            this.changeStyle.apply(this);
        }
    }
}

const div = new DomElement('.block', '50px', '100px', '#D7307C', '1.5em');
const p = new DomElement('#best', '70px', '100px', '#A7E251', '1.5em');
const divSqare = new SqareElement('.block', '100px', '100px', '#3461EB', '1.5em', 'absolute');

//to check target
setTimeout(() => {
    div.setElement();
    p.setElement();
}, 0);

document.addEventListener('DOMContentLoaded', () => {
    divSqare.setElement();
});

document.addEventListener('keydown', event => {

    const key = event.code;

    if (key === 'ArrowLeft') {
        divSqare.move('left');
        console.log('ArrowLeft');
    }
    if (key === 'ArrowRight') {
        console.log('ArrowRight');
    }
    if (key === 'ArrowUp') {
        console.log('ArrowUp');
    }
    if (key === 'ArrowDown') {
        console.log('ArrowDown');
    }
});
