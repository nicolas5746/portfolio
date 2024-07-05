import { Component, Input, OnInit } from '@angular/core';

interface carousel {
  name: string;
  link: string;
  language: string;
  repository: string;
  imageAlt: string;
  imageSrc: string;
  imageTitle: string;
  slowLoading: boolean;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass'],
})
export class CarouselComponent implements OnInit {
  @Input() indicators: Boolean = false;
  @Input() controls: Boolean = false;
  @Input() projects: carousel[] = [];

  public selectedIndex: number = 0;
  public titles: Array<string> = [`built with`, `view sourcecode`];
  private autoSlide: Boolean = true;
  private slideInterval: number = 5000;

  autoSlideProjects(): void {
    if (this.autoSlide) {
      setInterval(() => {
        if (this.selectedIndex === this.projects.length - 1) {
          this.selectedIndex = -1;
        }
        this.onNext();
      }, this.slideInterval);
    }
  }

  selectProject(index: number): void {
    this.selectedIndex = index;
  }

  onPrevious(): void {
    if (this.selectedIndex >= 1) {
      this.selectedIndex--;
    }
  }

  onPreviousClick(): void {
    this.onPrevious();
  }

  onNext(): void {
    if (this.selectedIndex != this.projects.length - 1) {
      this.selectedIndex++;
    }
  }

  onNextClick(): void {
    this.onNext();
  }

  ngOnInit(): void {
    this.autoSlideProjects();
  }
}