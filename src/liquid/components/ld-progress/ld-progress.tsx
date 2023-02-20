import { Component, h, Host, Prop } from '@stencil/core'
import { getClassNames } from '../../utils/getClassNames'

/**
 * @virtualProp ref - reference to component
 * @virtualProp {string | number} key - for tracking the node's identity when working with lists
 */
@Component({
  tag: 'ld-progress',
  styleUrl: 'ld-progress.css',
  shadow: true,
})
export class LdProgress {
  /**
   * Defines the string value or identifies the element (or elements)
   * that label the progressbar element providing an accessible name.
   */
  @Prop({ reflect: true }) ariaLabeledby?: string

  /**
   * Set to a decimal value representing the maximum value, and greater
   * than aria-valuemin. If not present, the default value is 100.
   */
  @Prop({ reflect: true }) ariaValuemax?: number = 100

  /**
   * Set to a decimal value representing the minimum value, and less
   * than aria-valuemax. If not present, the default value is 0.
   */
  @Prop({ reflect: true }) ariaValuemin?: number = 0

  /**
   * Only present and required if the value is not indeterminate.
   * Set to a decimal value between 0, or valuemin if present,
   * and aria-valuemax indicating the current value of the progress bar.
   */
  @Prop({ reflect: true }) ariaValuenow?: number

  /**
   * Assistive technologies often present the value of aria-valuenow
   * as a percentage. If this would not be accurate use this property
   * to make the progress bar value understandable.
   */
  @Prop({ reflect: true }) ariaValuetext?: string

  // `onBrandColor` is not possible: Stencil expects `on*` props to be event handlers.
  /**
   * Styles the progress bar in a way that it looks good on the
   * primary color of the current theme.
   */
  @Prop() brandColor?: boolean

  /** Used to show indeterminate or pending progress state. */
  @Prop() pending?: boolean

  /** Devides progress bar in multiple progress steps. */
  @Prop() steps?: boolean

  render() {
    const cl = getClassNames([
      'ld-progress',
      this.ariaValuenow === undefined && 'ld-progress--indeterminate',
      this.brandColor && 'ld-progress--brand-color',
      this.pending && 'ld-progress--pending',
      this.steps && 'ld-progress--steps',
    ])

    return (
      <Host
        class={cl}
        role="progressbar"
        style={{
          ...(this.ariaValuemax !== undefined && {
            '--ld-progress-valuemax': this.ariaValuemax + '',
          }),
          ...(this.ariaValuemin !== undefined && {
            '--ld-progress-valuemin': this.ariaValuemin + '',
          }),
          ...(this.ariaValuenow !== undefined && {
            '--ld-progress-valuenow': this.ariaValuenow + '',
          }),
        }}
      ></Host>
    )
  }
}
