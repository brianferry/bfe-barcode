import { html, css, LitElement } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import * as jsbarcode from "https://cdn.skypack.dev/jsbarcode@3.11.5";
import { BarcodeFormat } from './types/JsBarcode.js'
@customElement('bfe-barcode')
export class BfeBarcode extends LitElement {
  static styles = css`
  `;

  @property()
  format: BarcodeFormat = BarcodeFormat.CODE128;

  @property()
  code: string = "123456789012";

  @query('#barcode')
  barcodeSvg?: HTMLElement;

  constructor() {
    super();
  }

  updated() {
    jsbarcode.default(this.barcodeSvg, this.code, {
      format: this.format
    });
  }

  firstUpdated() {
    console.log(this.barcodeSvg);
    jsbarcode.default(this.barcodeSvg, this.code, {
      format: this.format
    });
  }

  render() {
    return html`
      <svg id="barcode"></svg>
    `;
  }
}
