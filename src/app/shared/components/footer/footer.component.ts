import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass'],
})
export class FooterComponent implements OnInit {
  public blank: string = `_blank`;
  public footer = {
    copyrightYear: 2022,
    fullName: `nicolás batista piñeyro`,
  };
  public gmail = {
    email: `mailto:nicolasbatista@codeando.es`,
    imageSrc: `assets/icons/gmail.ico`,
    imageTitle: `My Gmail`,
    rel: `noopener noreferrer`,
  };
  public github = {
    imageSrc: `assets/icons/github.ico`,
    imageTitle: `My Github Repository`,
    profile: `https://www.github.com/nicolas5746/`,
  };
  public linkedIn = {
    imageSrc: `assets/icons/linkedin.ico`,
    imageTitle: `My LinkedIn Profile`,
    profile: `https://www.linkedin.com/in/nicolasbatistadev/`,
  };

  ngOnInit(): void {}
}