import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-text-carousel',
  styleUrl: 'my-text-carousel.css',
  shadow: true,
})
export class MyTextCarousel {

    /**
   * Get the default styles for the carousel item
   * @returns The default styles for the carousel item
   */
    private getDefaultStyle(){
      const defaultStyles = "text-white text-lg md:text-xl lg:text-2xl"
      return defaultStyles;
    }
  
  /**
   * Get the class string based on the variant prop
   * @returns The class string based on the variant prop
   */
    private getCssClassMap(){
      const defaultStyles = this.getDefaultStyle();
      return `${defaultStyles}`;
    }

  /**
   * Get the rendered component
   * @returns The rendered component
   */
  render() {
    return (
      <Host>
        <p class={`${this.getCssClassMap()}`}> 
          <slot> </slot> 
        </p>
      </Host>
    );
  }
}
