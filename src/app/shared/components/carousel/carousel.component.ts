import { Component, Input, OnInit } from '@angular/core';

interface carousel {
  name: string,
  link: string,
  language: string,
  repository: string,
  imageAlt: string;
  imageSrc: string;
  imageTitle: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass'],
})
export class CarouselComponent implements OnInit {
  @Input() autoSlide: Boolean = false;
  @Input() indicators: Boolean = false;
  @Input() controls: Boolean = false;
  @Input() projects: carousel[] = [];
  @Input() slideInterval: number = 5000;

  public selectedIndex: number = 0;
  public blank: string = `_blank`;
  public built: string = `Built with`;
  public github: string =`view sourcecode`;

  autoSlideProjects(): void {
    setInterval(() => {
      this.onNextClick();
    }, this.slideInterval);
  }

  selectProject(index: number): void {
    this.selectedIndex = index;
  }

  onPreviousClick(): void {
    if (this.selectedIndex === 0) {
      this.selectedIndex === this.projects.length - 1;
    } else {
      this.selectedIndex--;
    }
  }

  onNextClick(): void {
    if (this.selectedIndex === this.projects.length - 1) {
      this.selectedIndex === 0;
    } else {
      this.selectedIndex++;
    }
  }

  ngOnInit(): void {
    if (this.autoSlide) {
      this.autoSlideProjects();
    }
  }
}