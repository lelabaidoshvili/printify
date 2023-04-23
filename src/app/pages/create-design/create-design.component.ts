import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';



@Component({
  selector: 'app-create-design',
  templateUrl: './create-design.component.html',
  styleUrls: ['./create-design.component.scss']
})
export class CreateDesignComponent implements OnInit{
  private selectedImage: HTMLElement | null = null;
  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }
  ngOnInit() {
    const images = this.elRef.nativeElement.querySelectorAll('img');
    images.forEach((img: HTMLImageElement) => {
      this.renderer.listen(img, 'click', () => {
        if (this.selectedImage) {
          this.renderer.removeClass(this.selectedImage, 'selected-image');
        }
        this.selectedImage = img;
        this.renderer.addClass(this.selectedImage, 'selected-image');
        const imgWrapper = this.renderer.createElement('div');
        this.renderer.addClass(imgWrapper, 'center-image');
        const imgClone = img.cloneNode(true) as HTMLImageElement;
        this.renderer.removeClass(imgClone, 'selected-image');
        this.renderer.appendChild(imgWrapper, imgClone);
        this.renderer.appendChild(document.body, imgWrapper);
      });
    });
  }

}
