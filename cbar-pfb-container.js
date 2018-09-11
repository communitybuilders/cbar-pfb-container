import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-flex-layout/iron-flex-layout-classes.js';


/**
 `cbar-pfb-container`
 Area for persistent footer buttons.

 <cbar-pfb-container>
 <paper-button>Button A</paper-button>
 <paper-button>Button B</paper-button>
 </cbar-pfb-container>

 @demo demo/index.html
 */
class CbarPersistentFooterButtonContainer extends PolymerElement {
  static get template() {
    return html`
    <style>
      :host {
        @apply --layout-horizontal;
        @apply --layout-end-justified;

        height: 52px;
        margin-top: 24px;
        margin-bottom: 0;

        background: var(--primary-background-color);
      }

      ::slotted(paper-button) {
        color: var(--accent-color);
        padding: 8px;
        height: 36px;
      }
    </style>
    <slot></slot>
`;
  }

  static get is() {
      return 'cbar-pfb-container';
  }
}

window.customElements.define(CbarPersistentFooterButtonContainer.is, CbarPersistentFooterButtonContainer);
