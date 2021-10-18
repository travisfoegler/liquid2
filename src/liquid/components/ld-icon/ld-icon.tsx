import { Build, Component, Host, h, Prop, Watch, Element } from '@stencil/core'
import { getClassNames } from 'src/liquid/utils/getClassNames'
import { fetchIcon } from './fetchIcon'

/**
 * @slot - (optional) Custom SVG icon (only valid without name prop).
 * @virtualProp ref - reference to component
 * @virtualProp {string | number} key - for tracking the node's identity when working with lists
 */
@Component({
  assetsDirs: ['assets'],
  tag: 'ld-icon',
  styleUrl: 'ld-icon.css',
  shadow: true,
})
export class LdIcon {
  @Element() element: HTMLElement

  /** The icon name. */
  @Prop() name: string = null

  /** Size of the icon. */
  @Prop() size?: 'sm' | 'lg'

  @Watch('name')
  private async loadIconPathData(): Promise<void> {
    if ((!Build.isBrowser && !Build.isTesting) || !this.name) {
      return
    }

    const div = document.createElement('div')

    div.innerHTML = await fetchIcon(this.name)
    this.element.shadowRoot.appendChild(div.firstChild)
  }

  async componentWillLoad(): Promise<void> {
    this.loadIconPathData()
  }

  render() {
    return (
      <Host
        class={getClassNames(['ld-icon', this.size && `ld-icon--${this.size}`])}
        role="presentation"
      >
        {!this.name && <slot></slot>}
      </Host>
    )
  }
}
