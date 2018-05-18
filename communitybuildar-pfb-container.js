import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-flex-layout/iron-flex-layout-classes.js';


/**
 `communitybuildar-pfb-container`
 Area for persistent footer buttons.

 <communitybuildar-pfb-container>
 <paper-button>Button A</paper-button>
 <paper-button>Button B</paper-button>
 </communitybuildar-pfb-container>

 @demo demo/index.html
 */
class CommunitybuildarPersistentFooterButtonContainer extends PolymerElement {
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
      return 'communitybuildar-pfb-container';
  }
}

window.customElements.define(CommunitybuildarPersistentFooterButtonContainer.is, CommunitybuildarPersistentFooterButtonContainer);
