import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-p',
  shadow: true,
})
export class MyP {

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
   * Get the default styles for the p component
   * @returns Default styles for the p component
   */
  private getDefaultStyle(){
    const defaultStyles = "xl:text-sm text-white font-bold";
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
   * Get the CSS class map for the p component
   * @returns CSS class map for the p component
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
