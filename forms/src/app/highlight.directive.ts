import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {



  constructor(private el: ElementRef, private renderer: Renderer2) { }

  //MANIPULATE ELEMENT WITH THIS DIRECTIVE IN TAG

  ngOnInit() {
    this.el.nativeElement.style.backgroundColor = 'red';

    this.renderer.setStyle(
      this.el.nativeElement,
      'background-color',
      'red',
    );
  }

  //HOST LISTENER TO PARENT COMPONENT

  @HostListener('mouseenter', ['$event']) //attach host event
  onMouseEnter(even) { //callback function
    this.highlightBind('yellow');
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(event) {
    this.highlightBind('blue'); // or highlight <--- doing the same job.
  }


  highlight(color: string) { // use renderer to change value
    this.renderer.setStyle(
      this.el.nativeElement,
      'background-color',
      color,
    );
  }

  //HOST BINDING TO DOM ELEMENT

  @HostBinding('style.backgroundColor')
  backgroundColor: string;

  highlightBind(color: string) { // use attribute binding to change value
    this.backgroundColor = color;
  }
}
