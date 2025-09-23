import { Component, Host, Prop, h } from '@stencil/core';
import { register } from 'swiper/element/bundle';

register();

export interface ICarouselItems{
  imageUrl: string;
  title: string;
  alt: string;
  width: string;
  height: string;
  titleItem: string;
}

@Component({
  tag: 'my-carousel',
  styleUrl: 'my-carousel.css',
  shadow: true,
})
export class MyCarousel {
  /**
   * Number of slides to show per view
   * @default 5
   */
  @Prop() slidesPerView: number = 5;

  /**
   * Transition speed for the slides
   * @default 100
   */
  @Prop() speed: number = 100;

  /**
   * Whether to loop the slides
   * @default true
   */
  @Prop() loop: boolean = true;

  /**
   * Whether to show navigation buttons
   * @default true
   */
  @Prop() navigation: boolean = true;

  /**
   * Itens to display in the carousel
   * @default ''
   */
  @Prop() readonly listItems: string = '';

  /**
   * Get the default styles for the carousel
   * @returns The default styles for the carousel
   */
  private getDefaultContainerStyle(){
    const defaultStyles = "grayscale hover:grayscale-0"
    return defaultStyles;
  }

  /**
   * Get the CSS class map for the carousel
   * @returns The CSS class map for the carousel
   */
  private getCssClassContainerMap(){
    const defaultStyles = this.getDefaultContainerStyle();
    return `${defaultStyles}`;
  }

  /**
   * Get the default styles for the carousel item
   * @returns The default styles for the carousel item
   */
    private getDefaultSlideStyle(){
      const defaultStyles = "flex items-center gap-4 opacity-45 hover:opacity-100 transition-opacity"
      return defaultStyles;
    }

  /**
   * Get the list of items parsed from the listItems prop
   * @returns The list of items parsed from the listItems prop
   */
  private getItems(){
    if (!this.listItems) {
      return [];
    }
    return JSON.parse(this.listItems) as ICarouselItems[];
  }
  
  /**
   * Get the class string based on the variant prop
   * @returns The class string based on the variant prop
   */
    private getCssClassSlideMap(){
      const defaultStyles = this.getDefaultSlideStyle();
      return `${defaultStyles}`;
    }

  /**
   * Get the rendered component
   * @returns The carousel component
   */
  render() {
    return (
      <Host>
        <swiper-container
            slides-per-view={this.slidesPerView}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              1024:{
                slidesPerView: 4
              }
            }}
            speed={this.speed}
            loop={this.loop}
            navigation={this.navigation}
            class={this.getCssClassContainerMap()}
          >
              {this.getItems().map(item => (
                  <swiper-slide>                  
                    <div class={this.getCssClassSlideMap()}>
                      <img 
                        src={item.imageUrl}
                        alt={item.alt} 
                        width={item.width}
                        height={item.height}
                      />
                      <my-text-carousel> {item.title} </my-text-carousel>
                    </div>
                  </swiper-slide>
                ))
              }
            <slot/>
        </swiper-container>      
      </Host>
    );
  }
}