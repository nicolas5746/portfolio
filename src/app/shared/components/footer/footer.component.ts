import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass'],
})
export class FooterComponent implements OnInit {
  public copyrightYear: number = 2022;
  public fullName: string = `nicolás batista piñeyro`;

  public blank: string = `_blank`;
  public relNN: string = `noopener noreferrer`;

  public gmail = {
    email: `mailto:nicolas26386@gmail.com`,
    imageAlt: `My Gmail`,
    imageSrc: `assets/icons/gmail.ico`,
    imageTitle: `My Gmail`,
  }

  public github = {
    imageAlt: `My Github Repository`,
    imageSrc: `assets/icons/github.ico`,
    imageTitle: `My Github Repository`,
    profile: `https://www.github.com/nicolas5746/`,
  }

  public linkedIn = {
    imageAlt: `My LinkedIn Profile`,
    imageSrc: `assets/icons/linkedin.ico`,
    imageTitle: `My LinkedIn Profile`,
    profile: `https://www.linkedin.com/in/nicolasbatistadev/`,
  }

  ngOnInit(): void {}
}