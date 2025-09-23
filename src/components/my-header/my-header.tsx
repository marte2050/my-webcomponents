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
        <header>
          <slot/>
        </header>
      </Host>
    );
  }
}
