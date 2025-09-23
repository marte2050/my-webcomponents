import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-h2',
  shadow: true,
})
export class MyH2 {

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
   * Get the default styles for the h2 component
   * @returns Default styles for the h2 component
   */
  private getDefaultStyle(){
    const defaultStyles = "md:text-3xl xl:text-4xl text-2xl text-white font-bold";
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
   * Get the CSS class map for the h2 component
   * @returns CSS class map for the h2 component
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
        <h2 class={this.getCssClassMap()}>
          <slot></slot>
        </h2>
      </Host>
    );
  }
}
