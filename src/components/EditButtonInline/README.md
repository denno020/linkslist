# Edit Button Inline

This component provides a button that is displayed inline, at the top right position of whatever element it is attached to.

## Usage

As the button is position absolutely, the parent container will need to have `position: relative` set.

```html
<div class="some-text-element">
  This is a bunch of text that will be editable
  <EditButtonInline />
</div>
```

```scss
.some-text-element {
  position: relative;
}
```
