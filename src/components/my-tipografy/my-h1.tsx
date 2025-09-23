import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-h1',
  shadow: true,
})
export class MyH1 {

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
   * Get the default styles for the h1 component
   * @returns Default styles for the h1 component
   */
  private getDefaultStyle(){
    const defaultStyles = "md:text-7xl xl:text-9xl text-5xl text-white font-extrabold";
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
   * Get the CSS class map for the h1 component
   * @returns CSS class map for the h1 component
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
        <h1 class={this.getCssClassMap()}>
          <slot></slot>
        </h1>
      </Host>
    );
  }
}
