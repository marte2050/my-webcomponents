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
   * Get the default styles for the wrapper
   * @returns A string containing the default styles
   */
  private getDefaultStyle(){
    const defaultStyles = "w-full flex flex-col items-center justify-between gap-8 py-32"
    return defaultStyles;
  }

  /**
   * Get the height calculation for the wrapper
   * @returns A string containing the height calculation
   */
  private getSubtractionHeight(){
    if(!this.subtractionHeight) 
      return ""
    return `h-[calc(100%_-_${this.subtractionHeight})]`
  }

  /**
   * Get the variant class for the wrapper
   * @returns A string containing all the classes for the wrapper
   */
  private getVariantClass(){
    const defaultStyles = this.getDefaultStyle();
    const subtractionHeight = this.getSubtractionHeight();
    return `${defaultStyles} ${subtractionHeight}`;
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
