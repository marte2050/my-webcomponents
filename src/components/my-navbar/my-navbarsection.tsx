import { Component, Element, Host, Prop, State, h } from '@stencil/core';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  tag: 'my-navbarsection',
  styleUrl: 'my-navbar.css',
  shadow: false
})
export class MyNavbarSection{
  
  @Element() host!: HTMLElement;
  
  /**
   * If true, the navbar section will be hidden on mobile devices.
   */
  @Prop() hiddenMobile: boolean = false;

  /**
   * If true, the menu will be toggled (for mobile view).
   */
  @State() toggleMenu: boolean = false;

  /**
 * Get the default style for the navbar.
 * @returns The default style for the navbar
 */
  private getDefaultStyle(){
    const defaultStyles = "flex gap-4";
    return defaultStyles
  }

  /**
   * Toggle the menu visibility.
   */
  private setVisibilityMenuMobile(){
    this.toggleMenu = !this.toggleMenu;
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
   * The slotted elements inside the navbar.
   */
  @State() private slottedElements: HTMLElement[] = [];

  /**
   * Lifecycle method that runs before the component loads. It captures and removes slotted elements from the host.
   */
  componentWillLoad() {
    this.slottedElements = Array.from(this.host.children).map(el => {
      const clone = el.cloneNode(true) as HTMLElement;
      el.remove();
      return clone;
    });
  }

  /**
   * Get the mobile container for the navbar section.
   * @returns The mobile container for the navbar section.
   */
  private containerMobile(){
    return(
      <div>
        <ul class={`hidden md:flex gap-4`}> 
          {this.slottedElements.map(el => <li innerHTML={el.outerHTML}></li>)}
        </ul>

        <div class={`flex md:hidden`}>
            <my-button onClick={() => this.setVisibilityMenuMobile()}>
              <my-icon icon={faBars} color="white" width="24" height="24" aria-label="Open menu"></my-icon>
            </my-button>
        </div>
        
        <div class={`${this.toggleMenu ? 'fixed top-0 bottom-0 left-0 w-[90%] z-10 bg-gray-800 md:hidden px-8 py-6 gap-16 flex flex-col' : 'hidden'}`}>
            <div class="text-white w-full flex flex-col justify-center bg-transparent">
              <div class="absolute top-6 right-6">
                <my-button onClick={() => this.setVisibilityMenuMobile()}>
                    <my-icon icon={faClose} color="white" width="24" height="24" aria-label="Close menu"></my-icon>
                </my-button>
              </div>
              <span class="text-center block text-2xl"> Menu </span>
            </div>
            
            <ul class="flex flex-col gap-4">
              {this.slottedElements.map(el => <li innerHTML={el.outerHTML}></li>)}
            </ul>
        </div>
      </div>
    )
  }

  /**
   * Get the navbar component.
   * @returns The navbar component
   */
  render() {
    return (
      <Host>
          { this.hiddenMobile ? this.containerMobile() : <ul class={`${this.getCssClassMap()}`}> <slot/> </ul> }
      </Host>
    );
  }
}