---
eleventyNavigation:
  key: Slider
  parent: Components
layout: layout.njk
title: Slider
permalink: components/ld-slider/
---

<!-- <link rel="stylesheet" href="css_components/ld-slider.css"> -->

# ld-slider

The `ld-slider` component can be used to select a single numeric value or a range of numeric values.

---

## Default

{% example %}
<ld-slider></ld-slider>
{% endexample %}

## Custom steps

{% example %}
<ld-slider step="5"></ld-slider>
{% endexample %}

## Predefined value

{% example %}
<ld-slider value="40"></ld-slider>
{% endexample %}

## Disabled

{% example %}
<ld-slider disabled value="40"></ld-slider>
<ld-slider aria-disabled="true" value="40"></ld-slider>
{% endexample %}

## Multiple values

You can add 2 or more comma-separated values to the slider. This results in additional thumbs being added.

{% example %}
<ld-slider value="40,90"></ld-slider>
<ld-slider value="30,60,90"></ld-slider>
<ld-slider value="20,50,70,90"></ld-slider>
{% endexample %}

## Strict mode

The strict mode prevents swapping the thumbs.

{% example %}
<ld-slider strict value="40,90"></ld-slider>
{% endexample %}

## Values always visible

{% example %}
<ld-slider always-show-values value="40,90"></ld-slider>
{% endexample %}

## Negative

The negative mode highlights deselected ranges as selected and vice versa.

{% example %}
<ld-slider negative value="50"></ld-slider>
<ld-slider negative value="40,90"></ld-slider>
{% endexample %}

## Integration

{% example %}
<div class="flex">
  <ld-input id="from" type="number" value="40"></ld-input>
  <ld-slider id="slider" value="40,90" width="20rem"></ld-slider>
  <ld-input id="to" type="number" value="90"></ld-input>
</div>

<style>
  .flex {
    align-items: end;
    display: flex;
    gap: var(--ld-sp-16);
  }

  #from, #to {
    margin-bottom: var(--ld-sp-4);
    width: 3rem;
  }

  #from::part(input), #to::part(input) {
    text-align: center;
  }
</style>

<script>
  const slider = document.getElementById('slider')
  const from = document.getElementById('from')
  const to = document.getElementById('to')
  const handleInput = (event) => {
    if (!from.value || !to.value) {
      return
    }
    slider.value = [from.value, to.value].join(',')
  }

  slider.addEventListener('ldchange', (event) => {
    const [newFrom, newTo] = event.detail

    from.value = newFrom
    to.value = newTo
  })
  from.addEventListener('input', handleInput)
  to.addEventListener('input', handleInput)
</script>
{% endexample %}

<!-- Auto Generated Below -->


## Properties

| Property           | Attribute            | Description                                                  | Type      | Default     |
| ------------------ | -------------------- | ------------------------------------------------------------ | --------- | ----------- |
| `alwaysShowValues` | `always-show-values` | Makes the current values always visible above the thumbs     | `boolean` | `false`     |
| `ariaDisabled`     | `aria-disabled`      | Alternative disabled state that keeps element focusable      | `string`  | `undefined` |
| `disabled`         | `disabled`           | Disabled state of the slider                                 | `boolean` | `false`     |
| `labelFrom`        | `label-from`         | "From" value label (when exactly 2 values are given)         | `string`  | `'From'`    |
| `labelTo`          | `label-to`           | "To" value label (when exactly 2 values are given)           | `string`  | `'To'`      |
| `labelValue`       | `label-value`        | "Value" label (when exactly 2 values are given)              | `string`  | `'Value'`   |
| `max`              | `max`                | Specifies the maximum value allowed                          | `number`  | `100`       |
| `min`              | `min`                | Specifies the minimum value allowed                          | `number`  | `0`         |
| `negative`         | `negative`           | Swap which areas are being marked as selected and deselected | `boolean` | `false`     |
| `radix`            | `radix`              | Radix to parse the value(s) with                             | `number`  | `10`        |
| `step`             | `step`               | Specifies the legal number intervals                         | `number`  | `undefined` |
| `stops`            | `stops`              | Adds custom stop points to the slider (instead of steps)     | `string`  | `undefined` |
| `strict`           | `strict`             | Prevents swapping of thumbs                                  | `boolean` | `false`     |
| `value`            | `value`              | Specifies the default value                                  | `string`  | `'0'`       |
| `width`            | `width`              | Width of the slider                                          | `string`  | `'100%'`    |


## Events

| Event      | Description | Type                    |
| ---------- | ----------- | ----------------------- |
| `ldchange` |             | `CustomEvent<number[]>` |


----------------------------------------------

 