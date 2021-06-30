export default class CustomElementWrapper extends HTMLElement {
  constructor(template, options = {}) {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    const globalStyle = document.createElement('link');
    globalStyle.setAttribute('href', 'static/css/core.css');
    globalStyle.setAttribute('rel', 'stylesheet');
    this.shadowRoot.prepend(globalStyle);
  }
  renderList(list = []) {
    list.forEach((element) => {
      console.log(element);
      this.shadowRoot.appendChild(
        document.createElement(element[0], element[1] || {})
      );

      this.shadowRoot.appendChild(globalStyle);
    });
  }
}
