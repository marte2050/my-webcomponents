import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-navbar',
  styleUrl: 'my-navbar.css',
  shadow: true,
})
export class MyNavbar {

  /**
   * Get the default style for the navbar.
   * @returns The default style for the navbar
   */
  private getDefaultStyle(){
    const defaultStyles = "h-24 flex flex-row-reverse md:flex-row justify-between items-center px-8 md:px-20";
    return defaultStyles
  }

  /**
   * Get the CSS class map for the navbar.
   * @returns The CSS class map for the navbar
   */
  private getCssClassMap(){
    const defaultStyles = this.getDefaultStyle();
    return `${defaultStyles}`;
  }

  /**
   * Get the navbar component.
   * @returns The navbar component
   */
  render() {
    return (
      <Host>
        <nav class={`${this.getCssClassMap()}`}>
          <slot></slot>
        </nav>
      </Host>
    );
  }
}