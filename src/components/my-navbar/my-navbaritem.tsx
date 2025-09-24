import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-navbaritem',
  styleUrl: 'my-navbar.css',
  shadow: true
})
export class MyNavbaritem{
  render() {
    return (
      <Host role='listitem'>
          <span class={`text-white font-normal text-lg`}> <slot/> </span>
      </Host>
    );
  }
}