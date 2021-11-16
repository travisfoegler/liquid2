import { newSpecPage } from '@stencil/core/testing'
import { LdCheckbox } from '../ld-checkbox'

describe('ld-checkbox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LdCheckbox],
      html: `<ld-checkbox></ld-checkbox>`,
    })
    expect(page.root).toMatchSnapshot()
  })

  it('disabled', async () => {
    const page = await newSpecPage({
      components: [LdCheckbox],
      html: `<ld-checkbox disabled></ld-checkbox>`,
    })
    expect(page.root).toMatchSnapshot()
  })

  it('heighlight', async () => {
    const page = await newSpecPage({
      components: [LdCheckbox],
      html: `<ld-checkbox mode="highlight"></ld-checkbox>`,
    })
    expect(page.root).toMatchSnapshot()
  })

  it('danger', async () => {
    const page = await newSpecPage({
      components: [LdCheckbox],
      html: `<ld-checkbox mode="danger"></ld-checkbox>`,
    })
    expect(page.root).toMatchSnapshot()
  })

  it('tone', async () => {
    const page = await newSpecPage({
      components: [LdCheckbox],
      html: `<ld-checkbox tone="dark"></ld-checkbox>`,
    })
    expect(page.root).toMatchSnapshot()
  })

  it('updates checked prop on checked value change', async () => {
    const page = await newSpecPage({
      components: [LdCheckbox],
      html: `<ld-checkbox></ld-checkbox>`,
    })
    const ldCheckbox = page.root
    expect(ldCheckbox.checked).toBe(undefined)

    const input = ldCheckbox.shadowRoot.querySelector('input')
    expect(input.checked).toBe(false)

    ldCheckbox.click()
    await page.waitForChanges()

    expect(ldCheckbox.checked).toBe(true)
    expect(input.checked).toBe(true)
  })

  it('emits focus and blur event', async () => {
    const page = await newSpecPage({
      components: [LdCheckbox],
      html: `<ld-checkbox></ld-checkbox>`,
    })
    const ldCheckbox = page.root
    const input = ldCheckbox.shadowRoot.querySelector('input')

    const handlers = {
      onFocus() {
        return
      },
      onBlur() {
        return
      },
    }

    const spyFocus = jest.spyOn(handlers, 'onFocus')
    ldCheckbox.addEventListener('focus', handlers.onFocus)
    input.dispatchEvent(new Event('focus'))
    jest.advanceTimersByTime(0)
    expect(spyFocus).toHaveBeenCalled()

    const spyBlur = jest.spyOn(handlers, 'onBlur')
    ldCheckbox.addEventListener('blur', handlers.onBlur)
    input.dispatchEvent(new Event('blur'))
    jest.advanceTimersByTime(0)
    expect(spyBlur).toHaveBeenCalled()
  })

  it('allows to set inner focus', async () => {
    const page = await newSpecPage({
      components: [LdCheckbox],
      html: `<ld-checkbox />`,
    })
    const ldCheckbox = page.root
    const input = ldCheckbox.shadowRoot.querySelector('input')

    input.focus = jest.fn()
    await ldCheckbox.focusInner()

    expect(input.focus).toHaveBeenCalled()
  })

  it('creates hidden input field, if inside a form', async () => {
    const { root } = await newSpecPage({
      components: [LdCheckbox],
      html: `<form><ld-checkbox /></form>`,
    })
    expect(root).toMatchSnapshot()
  })

  it('sets initial state on hidden input', async () => {
    const page = await newSpecPage({
      components: [LdCheckbox],
      html: `<form><ld-checkbox name="example" checked required /></form>`,
    })
    const ldCheckbox = page.root
    expect(ldCheckbox.querySelector('input')).toHaveProperty('name', 'example')
    expect(ldCheckbox.querySelector('input')).toHaveProperty('required', true)
  })

  it('updates hidden input field', async () => {
    const { root, waitForChanges } = await newSpecPage({
      components: [LdCheckbox],
      html: `<form><ld-checkbox name="example" /></form>`,
    })
    const ldCheckbox = root
    await waitForChanges()

    expect(ldCheckbox.querySelector('input')).toHaveProperty('name', 'example')
    expect(ldCheckbox.querySelector('input')).toHaveProperty('checked', false)
    expect(ldCheckbox.querySelector('input')).toHaveProperty('required', false)

    ldCheckbox.setAttribute('name', 'test')
    await waitForChanges()

    expect(ldCheckbox.querySelector('input')).toHaveProperty('name', 'test')

    ldCheckbox.removeAttribute('name')
    await waitForChanges()

    expect(ldCheckbox.querySelector('input').getAttribute('name')).toEqual(null)

    ldCheckbox.dispatchEvent(new Event('click'))
    await waitForChanges()

    expect(ldCheckbox.querySelector('input')).toHaveProperty('checked', true)

    ldCheckbox.setAttribute('required', '')
    await waitForChanges()

    expect(ldCheckbox.querySelector('input')).toHaveProperty('required', true)

    ldCheckbox.setAttribute('value', 'test')
    await waitForChanges()

    expect(ldCheckbox.querySelector('input')).toHaveProperty('value', 'test')

    ldCheckbox.removeAttribute('value')
    await waitForChanges()

    expect(ldCheckbox.querySelector('input').getAttribute('value')).toEqual(
      null
    )
  })
})
