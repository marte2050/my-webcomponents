import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-h3',
  shadow: true,
})
export class MyH3 {

  /**
   * Position of the text: left, center, right
   * @default left
   */
  @Prop() position: "left" | "center" | "right" = "left";

  /**
   * Casing of the text: uppercase, lowercase, capitalize
   * @default lowercase
   */
  @Prop() casing: "uppercase" | "lowercase" | "capitalize" = "lowercase";
  
  /**
   * Get the default styles for the h3 component
   * @returns Default styles for the h3 component
   */
  private getDefaultStyle(){
    const defaultStyles = "xl:text-2xl text-xl text-white font-bold text-center uppercase";
    return defaultStyles
  }

  private getPositionStyle(){
    const positionStyles = {
      left: "text-left",
      center: "text-center",
      right: "text-right"
    };
    return positionStyles[this.position];
  }

  private getCasingStyle(){
    const casingStyles = {
      uppercase: "uppercase",
      lowercase: "lowercase",
      capitalize: "capitalize"
    };
    return casingStyles[this.casing];
  }
  
  /**
   * Get the CSS class map for the h3 component
   * @returns CSS class map for the h3 component
   */
  private getCssClassMap(){
    const defaultStyles = this.getDefaultStyle();
    const casingStyles = this.getCasingStyle();
    const positionStyles = this.getPositionStyle();
    return `${defaultStyles} ${casingStyles} ${positionStyles}`;
  }

  render() {
    return (
      <Host>
        <h3 class={this.getCssClassMap()}>
          <slot></slot>
        </h3>
      </Host>
    );
  }
}
