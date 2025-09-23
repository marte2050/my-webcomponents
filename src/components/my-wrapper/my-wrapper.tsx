import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-wrapper',
  styleUrl: 'my-wrapper.css',
  shadow: true,
})
export class MyWrapper {
  /**
   * Height to subtract from 100% (e.g. "100px", "50vh")
   * @default undefined
   */
  @Prop() readonly subtractionHeight: string|undefined;

  /**
   * Vertical position of the content
   * @default 'center'
   */
  @Prop() readonly positionVertical: 'top' | 'center' | 'bottom' | 'between' | 'around' = 'center';

  /**
   * Gap between elements
   * @default 'small'
   */
  @Prop() readonly gap: 'none' | 'small' | 'medium' | 'large' = 'small';

  /**
   * Get the default styles for the wrapper
   * @returns A string containing the default styles
   */
  private getDefaultStyle(){
    const defaultStyles = "w-full flex flex-col items-center"
    return defaultStyles;
  }

  /**
   * Get the justify content class for the wrapper
   * @returns A string containing the justify content class
   */
  private getJustifyContent(){
    const positionVerticalStyles = {
      top: "justify-start",
      center: "justify-center",
      around: "justify-around",
      between: "justify-between",
      bottom: "justify-end"
    }

    return positionVerticalStyles[this.positionVertical];
  }

  /**
   * Get the gap class for the wrapper
   * @returns A string containing the gap class
   */
  private getGapClass(){
    const gapStyles = {
      none: "gap-0",
      small: "gap-4",
      medium: "gap-8",
      large: "gap-16"
    }

    return gapStyles[this.gap];
  }

  /**
   * Get the height calculation for the wrapper
   * @returns A string containing the height calculation
   */
  private getSubtractionHeight(){
    if(!this.subtractionHeight) 
      return "h-full"
    return `h-[calc(100%_-_6rem)]`
  }

  /**
   * Get the variant class for the wrapper
   * @returns A string containing all the classes for the wrapper
   */
  private getVariantClass(){
    const defaultStyles = this.getDefaultStyle();
    const subtractionHeight = this.getSubtractionHeight();
    const postionVertical = this.getJustifyContent();
    const gap = this.getGapClass();
    return `${defaultStyles} ${subtractionHeight} ${postionVertical} ${gap}`;
  }

  /**
   * Get the JSX to render the wrapper
   * @returns The JSX to render the wrapper
   */
  render() {
    return (
      <Host>
        <div class={`${this.getVariantClass()}`}>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
