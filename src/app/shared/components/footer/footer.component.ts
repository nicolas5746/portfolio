import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass'],
})
export class FooterComponent implements OnInit {
  public copyrightYear: number = 2022;
  public fullName: string = `nicolás batista piñeyro`;

  public gmailIcon = {
    imageAlt: `My Gmail`,
    imageSrc: `assets/icons/gmail.ico`,
    imageTitle: `My Gmail`,
  };

  public githubIcon = {
    imageAlt: `My Github Repository`,
    imageSrc: `assets/icons/github.ico`,
    imageTitle: `My Github Repository`,
  };

  public linkedInIcon = {
    imageAlt: `My LinkedIn Profile`,
    imageSrc: `assets/icons/linkedin.ico`,
    imageTitle: `My LinkedIn Profile`,
  };

  ngOnInit(): void {}
}