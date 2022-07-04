import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {

  constructor(private el:ElementRef) {
    this.setHeight(180);
    this.setBorder('#ff450');
   }



   @HostListener('mouseenter') onMouseEnter(){
    this.setBorder('#00698'); 
   }

   @HostListener('mouseleave') onMouseLeave(){
    this.setBorder('#007798');
   }
  
  private setBorder(color :string){
    let border = 'solid 4px ' + color;
    this.el.nativeElement.style.broder = border;
  }

 private setHeight(height :number){
    this.el.nativeElement.style.height = height + 'px';
     
 }

}
