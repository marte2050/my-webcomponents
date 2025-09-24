import { Component, Element, Event, EventEmitter, h, Prop } from "@stencil/core";

@Component({
    tag: 'my-button',
    styleUrl: 'my-button.css',
    shadow: true,
    formAssociated: true
})

export class Button {

    /**
     * The host element.
     * @internal
     */
    @Element() el: HTMLButtonElement;

    /**
     * The button type (button, submit, reset)
     * @default "button"
     */
    @Prop() readonly type: "button" | "submit" | "reset" = "button";

    /**
     * Disable the button
     * @default false
     */
    @Prop() readonly disabled: boolean = false;

    /**
     * The button variant (primary, secondary, tertiary)
     * @default "primary"
     */
    @Prop() readonly variant: "primary" | "secondary" | "tertiary" = "primary";

    @Event({
        eventName: 'handleClick',
        composed: false,
        cancelable: true,
        bubbles: true
    }) handleClick: EventEmitter<void>;

    /**
     * Emits when the button is clicked
     */
    handleButtonClick() {
        console.log('Button clicked');
        this.handleClick.emit();
    }

    /**
     * Get the default style for the button
     * @returns The default style for the button
     */
    private getDefaultStyle(){
      const defaultStyles = "cursor-pointer"
      return defaultStyles;
    }

    /**
     * Get the CSS class for the button variant
     * @returns The CSS class for the button variant
     */
    private getVariantClass(){
        const optionsVariantStyles = {
            "primary": "bg-transparent text-white",
            "secondary": "bg-gray-500",
            "tertiary": "bg-white border border-gray-500 text-black",
        }

        return optionsVariantStyles[this.variant] || optionsVariantStyles["primary"];
    }

    /**
     * Get the CSS class map for the button
     * @returns The CSS class map for the button
     */
    private getCssClassMap(){
        const defaultStyle = this.getDefaultStyle();
        const colorVariant = this.getVariantClass();
        return `${defaultStyle} ${colorVariant}`;
    }

    /**
     * Get a map of all attributes except class, type, disabled, variant and onClick
     * @returns A map of all attributes except class, type, disabled, variant and onClick
     */
    private getAtributesMap(){
        const attrs = {}
        const notMapped = ["class", "type", "disabled", "onClick", "variant"];
        this.el.getAttributeNames().forEach((name) => {
            if(!notMapped.includes(name)){
                attrs[name] = this.el.getAttribute(name);
            }
        })
        return attrs;
    }

    /**
     * Renders the button element with the appropriate attributes and classes.
     * @returns The button element
     */
    render() {
        const attrs = this.getAtributesMap();
        return (
            <button
                class={`${this.getCssClassMap()}`} 
                type={this.type} 
                disabled={this.disabled}
                onClick={() => this.handleButtonClick()}
                {...attrs}
            > <slot/> </button>
        );
    }
}