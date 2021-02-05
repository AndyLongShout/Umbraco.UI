import { LitElement, html, css, property } from 'lit-element';
import {
  UUIHorizontalShakeAnimationValue,
  UUIHorizontalShakeKeyframes,
} from '../../../animations/uui-shake';
import { UUIButtonClickEvent } from './UUIButtonClickEvent';
import {
  SymbolicColorType,
  SymbolicColorDefaultValue,
  SymbolicColorCSSCreator,
} from '../../../type/SymbolicColor';

/**
 *  @element uui-button
 *  @fires {UUIButtonClickEvent} click - fires when the element is clicked
 *  @slot - for button contents
 */
export class UUIButtonElement extends LitElement {
  static styles = [
    UUIHorizontalShakeKeyframes,
    css`
      button {
        display: inline-block;
        /* example of using the base-unit prop for sizing, it can be useful to hardcode a minor adjustment for the right look, notice + 2px in this example: */
        padding: var(--uui-size-base-unit)
          calc((var(--uui-size-base-unit) * 2) + 2px);
        text-align: center;
        vertical-align: middle;
        border: none;
        box-shadow: none;
        border-radius: var(
          --uui-button-border-radius,
          var(--uui-size-border-radius)
        );
        cursor: pointer;
        font-weight: 500;
        font-size: inherit;
        font-family: inherit;

        background-color: var(
          --uui-button-background,
          var(--uui-interface-background)
        );
        color: var(--uui-button-contrast, var(--uui-interface-contrast));

        transition: background-color 80ms;
      }
      button:hover {
        background-color: var(
          --uui-button-background-hover,
          var(--uui-interface-background-hover)
        );
        color: var(
          --uui-button-contrast-hover,
          var(--uui-interface-contrast-hover)
        );
      }

      button[disabled] {
        background-color: var(
          --uui-button-background-disabled,
          var(--uui-interface-background-disabled)
        );
        color: var(
          --uui-button-contrast-disabled,
          var(--uui-interface-contrast-disabled)
        );
        cursor: default;
      }
      button[disabled]:active {
        animation: ${UUIHorizontalShakeAnimationValue};
      }

      :host([loading]) button:before {
        content: '⏳';
      }

      /** Styling for button with button-style value. */
      :host([button-style]:not([button-style=''])) button {
        font-weight: 700;
      }
    `,
    SymbolicColorCSSCreator(
      symbolicColorName =>
        css`
          :host([button-style='${symbolicColorName}']) button {
            background-color: var(--uui-color-${symbolicColorName}-background);
            color: var(--uui-color-${symbolicColorName}-contrast);
          }
          :host([button-style='${symbolicColorName}']) button:hover {
            background-color: var(
              --uui-color-${symbolicColorName}-background-hover
            );
            color: var(--uui-color-${symbolicColorName}-contrast-hover);
          }
          :host([button-style='${symbolicColorName}']) button[disabled] {
            background-color: var(
              --uui-color-${symbolicColorName}-background-disabled
            );
            color: var(--uui-color-${symbolicColorName}-contrast-disabled);
          }
        `
    ),
  ];

  // TODO: This need to be tested and implemented correctly. We need it not to be focusable, clickable and the styling should be fitted as well.
  @property({ type: Boolean, attribute: true })
  disabled = false;

  // TODO: I'm not sure we will need a loading state, but lets consider having a loading state, as waiting for a request to complete like Save.
  @property({ type: Boolean, attribute: true })
  loading = false;

  // Note: We should not adapt the failed or good state from current backoffice, its bad UX and no need to enable that ongoing.

  @property({ attribute: 'button-style' })
  buttonStyle: SymbolicColorType = SymbolicColorDefaultValue;

  private onClick(e: Event) {
    e.preventDefault();
    e.stopPropagation();

    this.dispatchEvent(new UUIButtonClickEvent());
  }
  render() {
    return html`
      <button @click=${this.onClick} ?disabled=${this.disabled}>
        <slot></slot>
      </button>
    `;
  }
}
