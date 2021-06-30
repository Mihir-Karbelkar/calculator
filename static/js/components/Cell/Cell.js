import CustomElementWrapper from '../CustomElementWrapper.js';
const template = document.createElement('template');

class Cell extends CustomElementWrapper {
  // Types
  // Operation
  // Input
  constructor() {
    template.innerHTML = `
  
    <style>


    </style>
    <link rel="stylesheet" href="static/js/components/Cell/style.css"/>
    <div class="cell-element"></div>
                    `;
    super(template);
    const value = this.getAttribute('value');
    this.shadowRoot.querySelector('div').setAttribute('value', value);
    this.shadowRoot.querySelector('div').textContent =
      this.getAttribute('label');
  }
}

window.customElements.define('cell-element', Cell);
