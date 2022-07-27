import {
  Component,
  Host,
  h,
  Prop,
  Element,
  Event,
  EventEmitter,
  Method,
} from '@stencil/core'
import { getClassNames } from 'src/liquid/utils/getClassNames'

export type SelectedDetail = { index: number; label: string }

/**
 * @virtualProp ref - reference to component
 * @virtualProp {string | number} key - for tracking the node's identity when working with lists
 * @part a - actual `a` element
 * @part button - actual `button` element
 * @part description - `span` element wrapping the description text
 * @part focusable - focusable `a` or `button` element, depending on `href` prop
 * @part li - actual `li` element
 */
@Component({
  tag: 'ld-step',
  styleUrl: 'ld-step.css',
  shadow: true,
})
export class LdStep implements InnerFocusable {
  @Element() el: HTMLLdStepElement
  private focusableElement: HTMLButtonElement | HTMLAnchorElement

  /** Switch colors for brand background */
  @Prop() brandColor = false
  /** Step is the current step */
  @Prop() current = false
  /** Description text to display below the step name (vertical mode only) */
  @Prop() description: string
  /** Step is not clickable */
  @Prop() disabled = false
  /** Step is done */
  @Prop() done = false
  /** Link to the step (makes the step an anchor instead of a button) */
  @Prop() href?: string
  /** Permanently show a custom icon inside the dot */
  @Prop() icon?: HTMLLdIconElement['name']
  /** Label for current step (scree-reader only) */
  @Prop() labelCurrent = 'Current'
  /** Label for step that is done (scree-reader only) */
  @Prop() labelDone = 'Done'
  /** Label for step that is optional (scree-reader only) */
  @Prop() labelOptional = 'Optional'
  /** Label for step that was skipped (scree-reader only) */
  @Prop() labelSkipped = 'Skipped'
  /** Additional hint in label for step that is done and was optional (scree-reader only) */
  @Prop() labelWasOptional = 'was optional'
  /** Indicates that the next step is not active */
  @Prop() lastActive = false
  /** Tab index of the step */
  @Prop() ldTabindex: number | undefined
  /** Step can be processed next */
  @Prop() next = false
  /** Step may be skipped */
  @Prop() optional = false
  /** Step size */
  @Prop() size?: 'sm' | 'lg'
  /** Step was skipped */
  @Prop() skipped = false
  /** Vertical layout */
  @Prop() vertical = false

  /** Emitted when the focusable element is clicked and step is neither current nor disabled */
  @Event() ldstepselected: EventEmitter<SelectedDetail>

  /** Sets focus on the step */
  @Method()
  async focusInner() {
    this.focusableElement?.focus()
  }

  handleClick = () => {
    this.ldstepselected.emit({
      index: Array.from(this.el.parentElement.children).findIndex(
        (child) => child === this.el
      ),
      label: this.el.textContent,
    })
  }

  componentDidLoad() {
    if (this.current) {
      this.handleClick()
    }
  }

  render() {
    const FocusableElement = this.href ? 'a' : 'button'

    return (
      <Host>
        <li
          class={getClassNames([
            'ld-step',
            this.brandColor && 'ld-step--brand-color',
            this.current && 'ld-step--current',
            this.done && 'ld-step--done',
            this.icon && 'ld-step--custom-icon',
            (this.done || this.icon) && 'ld-step--with-icon',
            this.lastActive && 'ld-step--last-active',
            this.next && 'ld-step--next',
            this.optional && 'ld-step--optional',
            this.size && `ld-step--${this.size}`,
            this.skipped && 'ld-step--skipped',
            this.vertical && 'ld-step--vertical',
          ])}
          part="li"
          role="listitem"
        >
          {!this.current && this.done && (
            <ld-sr-only>
              {this.labelDone}
              {this.optional ? ` (${this.labelWasOptional})` : ''}:{' '}
            </ld-sr-only>
          )}
          {!this.current && this.optional && !this.done && !this.skipped && (
            <ld-sr-only>{this.labelOptional}: </ld-sr-only>
          )}
          {!this.current && this.skipped && (
            <ld-sr-only>{this.labelSkipped}: </ld-sr-only>
          )}
          {this.current && (
            <ld-sr-only>
              {this.labelCurrent}
              {this.optional ? ` (${this.labelOptional})` : ''}:{' '}
            </ld-sr-only>
          )}
          <FocusableElement
            aria-current={this.current ? 'step' : undefined}
            aria-disabled={this.disabled ? 'true' : undefined}
            class="ld-step__focusable-element"
            href={!this.disabled && !this.current ? this.href : undefined}
            onClick={
              !this.disabled && !this.current ? this.handleClick : undefined
            }
            part={`${FocusableElement} focusable`}
            ref={(ref: HTMLButtonElement | HTMLAnchorElement) =>
              (this.focusableElement = ref)
            }
            tabIndex={this.ldTabindex}
            type={FocusableElement === 'button' ? 'button' : undefined}
          >
            <slot></slot>
          </FocusableElement>
          {(this.done || this.icon) && (
            <ld-icon name={this.icon || 'checkmark'} />
          )}
          {this.description && this.vertical && (
            <span class="ld-step__description" part="description">
              {this.description}
            </span>
          )}
        </li>
      </Host>
    )
  }
}