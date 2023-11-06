import { Directive,Input,ElementRef,Renderer2,HostListener} from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective {
   @Input() isCorrect:Boolean=false;
  constructor(private el :ElementRef , private render : Renderer2) { }
  @HostListener('click') answer(){
    if(this.isCorrect){
      this.render.setStyle(this.el.nativeElement,'background','green')
      this.render.setStyle(this.el.nativeElement,'color','white')
      this.render.setStyle(this.el.nativeElement,'border','2px solid gray')
    }
    else{
      this.render.setStyle(this.el.nativeElement,'background','red')
      this.render.setStyle(this.el.nativeElement,'color','white')
      this.render.setStyle(this.el.nativeElement,'border','2px solid gray ')
    }
  }
}
