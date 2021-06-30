import CustomElementWrapper from '../CustomElementWrapper.js';
const template = document.createElement('template');

class Calculator extends CustomElementWrapper {
  operators = ['+', '-', '/', '*'];

  constructor() {
    template.innerHTML = `
        <link rel="stylesheet" href="static/js/components/Calculator/style.css"/>
       
        <div class="calculator">
        
        <div class="display">
        
        <div class="d-flex justify-content-end" style="position:relative;">
        <div class="top-dots-container">
        <div class="top-left-dots">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
        </div>
        
        <span id="operations">
        </span>
        </div>
        <div class="d-flex justify-content-end">
        <span
        class="calc-input"
        id="calc-output"
        />
        </div>
        </div>
        <div class="nums">
        <cell-element class=" clear" value="" action="clear"><slot name="cell-label">C</slot></cell-element>
        <cell-element class="" value=""  action="plusmin" ><slot name="cell-label">+/-</slot></cell-element>
        <cell-element class=" percen" value="%"  action=""><slot name="cell-label">%</slot></cell-element>

        <cell-element class=" " value="7" action="number"><slot name="cell-label">7</slot></cell-element>
        <cell-element class="" value="8" action="number"><slot name="cell-label">8</slot></cell-element>
        <cell-element class="" value="9" action="number"><slot name="cell-label">9</slot></cell-element>

        <cell-element class="" value="4" action="number"><slot name="cell-label">4</slot></cell-element>
        <cell-element class="" value="5" action="number"><slot name="cell-label">5</slot></cell-element>
        <cell-element class="" value="6" action="number"><slot name="cell-label">6</slot></cell-element>

        <cell-element class="" value="1" action="number"><slot name="cell-label">1</slot></cell-element>
        <cell-element class="" value="2" action="number"><slot name="cell-label">2</slot></cell-element>
        <cell-element class="" value="3" action="number"><slot name="cell-label">3</slot></cell-element>

        <cell-element class="num-0" value="0" action="number"><slot name="cell-label"><div class="zero-col">0</div></slot></cell-element>
        <cell-element class="" value="." action="decimal"><slot name="cell-label">.</slot></cell-element>
        </div>
        <div class="ops">
        <cell-element class=" divide" value="/"  action="operator"><slot name="cell-label">/</slot></cell-element>
        <cell-element class="" value="*" action="operator"><slot name="cell-label">X</slot></cell-element>
        <cell-element class="" value="-" action="operator"><slot name="cell-label">-</slot></cell-element>
        <cell-element class="" value="+" action="operator"><slot name="cell-label">+</slot></cell-element>
        <cell-element class="equal" value="" action="equal"><slot name="cell-label">=</slot></cell-element>
        </div>
        </div>
        
                        `;
    super(template);
    this.shadowRoot.querySelectorAll('cell-element').forEach((elem) => {
      elem.addEventListener('click', (event) => this.calculate(event));
    });
    this.equationTracker = '';
  }
  calculate(event) {
    const element = event.target;
    // Track all actions on the top bar
    const tracker = document
      .querySelector('calculator-element')
      .shadowRoot.querySelector('#operations');
    // Ref to output span
    const output = document
      .querySelector('calculator-element')
      .shadowRoot.querySelector('#calc-output');

    const type = element.getAttribute('action');
    if (type === 'plusmin') {
      output.textContent;
    }
    if (type === 'clear') {
      output.textContent = '';
      this.equationTracker = '';
    }
    if (type === 'decimal') {
      if (tracker.textContent.slice(-1) !== '.') {
        this.equationTracker += '.';
      }
    }
    if (type === 'operator') {
      if (
        this.equationTracker.slice(-1) !== element.getAttribute('value') &&
        !this.operators.includes(this.equationTracker.slice(-1))
      )
        this.equationTracker += ' ' + element.getAttribute('value') + ' ';
    }
    if (type === 'number') {
      this.equationTracker += element.getAttribute('value');
    }

    tracker.textContent = this.equationTracker
      .replaceAll('*', 'X')
      .replaceAll('/', '');
    if (tracker.textContent) tracker.setAttribute('title', tracker.textContent);
    if (type === 'equal') {
      output.textContent = eval(this.equationTracker);
      output.setAttribute('title', output.textContent);
    }
  }
}
window.customElements.define('calculator-element', Calculator);
