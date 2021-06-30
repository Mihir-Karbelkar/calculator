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
    <div class="cell-element"><span ><slot></slot></span></div>
                    `;
    super(template);
  }
}

window.customElements.define('cell-element', Cell);
