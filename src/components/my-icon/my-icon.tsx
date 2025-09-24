import { Component, h, Prop } from "@stencil/core";
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  tag: 'my-icon',
  shadow: true,
})
export class MyIcon {
    @Prop() width: string = '20';
    @Prop() height: string = '20';
    @Prop() icon: IconDefinition;
    @Prop() color: string = '#000';

    private renderPath(){
        const path = this.icon.icon[4] as string;
        const paths = Array.isArray(path) ? path : [path];
        return paths.map((d:string, i: number) => <path d={d} key={i}></path>);
    }

    render(){        
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox={`0 0 ${this.icon.icon[0]} ${this.icon.icon[1]}`}
                width={this.width}
                height={this.height}
                fill={this.color}
            >
                {this.renderPath()}
            </svg>
        )
    }
}