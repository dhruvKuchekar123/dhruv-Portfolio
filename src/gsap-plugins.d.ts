declare module 'gsap/SplitText' {
  export class SplitText {
    constructor(target: string | string[] | Element | Element[] | NodeList | null, vars?: any);
    revert(): void;
    split(vars: any): void;
    chars: HTMLElement[];
    words: HTMLElement[];
    lines: HTMLElement[];
    elements: HTMLElement[];
  }
}

declare module 'gsap/ScrollSmoother' {
  export class ScrollSmoother {
    static create(vars: any): ScrollSmoother;
    static get(): ScrollSmoother;
    static refresh(soft?: boolean): ScrollSmoother;
    paused(value?: boolean): boolean | ScrollSmoother;
    scrollTop(value?: number): number | ScrollSmoother;
    scrollTo(target: any, jump?: boolean, position?: string): void;
    offset(target: any, position?: string): number;
    kill(): void;
    refresh(soft?: boolean): ScrollSmoother;
    getVelocity(): number;
    progress(): number;
    smooth: number;
    enabled(): boolean;
    wrapper(): HTMLElement;
    content(): HTMLElement;
  }
}
