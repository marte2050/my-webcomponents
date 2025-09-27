import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-header',
  styleUrl: 'my-header.css',
  shadow: true,
})
export class MyHeader {
  render() {
    return (
      <Host>
        <header class={`fixed top-0 left-0 right-0`}>
          <slot/>
        </header>
      </Host>
    );
  }
}
