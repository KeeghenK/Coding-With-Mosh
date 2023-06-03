
function HtmlElement() { 
    this.click = function() {
        console.log('clicked');
    }
}

HtmlElement.prototype.focus = function() {
    console.log('focused');
}

function HtmlSelectElement(items = []) {
    this.items = items; 

    this.addItems = function(item) {
        this.items.push(item);
    }

    this.removeItems = function(item) {
        this.items.splice(this.items.indexOf(item), 1);
    }

    this.render = function() {
        console.log( `
        <select>${this.items.map(item => `
            <option>${item}</option>`).join('')}
        </select>`);
    }
}
HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

function HtmlImagesElement(src) {
    this.src = src;

    this.render = function() {
        return `<img src="${this.src}" />`
    }
}
HtmlImagesElement.prototype = new HtmlElement();
HtmlImagesElement.prototype.constructor = HtmlImagesElement;