import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-section',
  styleUrl: 'my-section.css',
  shadow: true,
})
export class MySection {

  /**
   * The section variant (primary, secondary, tertiary)
   * @default "primary"
   */
  @Prop() readonly variant: "primary" | "secondary" = "primary";

  /**
   * The URL of the background image
   * @default undefined
   */
  @Prop() readonly imageUrl: string|undefined;

  /**
   * Get the default style for the my-section.
   * @returns The default style for the my-section
  */
  private getDefaultStyle(){
    const defaultStyles = "h-screen";
    return defaultStyles
  }

  /**
   * Get the CSS class for the section variant
   * @returns The CSS class for the section variant
   */
  private getVariantClass(){
      const optionsVariantStyles = {
          "primary": 'bg-gray-800',
          "secondary": "bg-white",
      }

      return optionsVariantStyles[this.variant]
  }

  /**
   * Get the CSS class map for the my-section.
   * @returns The CSS class map for the my-section
   */
  private getCssClassMap(){
    const defaultStyles = this.getDefaultStyle();
    const variantStyles = this.getVariantClass();
    return `${defaultStyles} ${variantStyles}`;
  }

  /**
   * Get the background image styles if imageUrl is provided, otherwise an empty object
   * @returns The background image styles if imageUrl is provided, otherwise an empty object
   */
  private getImageBackground(){
    if(!this.imageUrl) return {};

    return {
      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 60%, #1a191d), url('${this.imageUrl}')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '100vh',
      width: '100%',
    }
  }

  /**
   * Render the my-section component
   * @returns The rendered my-section component
   */
  render() {
    return (
      <Host>
        <section 
          class={`${this.getCssClassMap()}`} 
          style={this.getImageBackground()}
        >
          <slot/>
        </section>
      </Host>
    );
  }
}
