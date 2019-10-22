import { Component } from "@angular/core";
import { faHeart, faCross } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  faHeart = faHeart;
  faCross = faCross;
  activePlace = null;
  title = "rip-sthlm";
  places = [
    {
      name: "Debaser Slussen",
      born: "2002-09-??",
      dead: "2013-09-28",
      description: "lorem ipsum",
      location: { latitude: 59.321639, longitude: 18.073469 },
      articles: [
        {
          title: "Debaser slussen stänger",
          link: "http://www.aftonbladet.se"
        }
      ]
    },
    {
      name: "Debaser Medis",
      born: "2006-09-01",
      dead: "2016-12-31",
      description: "lorem ipsum",
      location: { latitude: 59.314689, longitude: 18.072799 },
      articles: [
        {
          title: "Klart - Debaser medis lägger ner",
          link: "https://www.stockholmdirekt.se/nyheter/klart-debaser-medis-lagger-ner/reppkp!hDo3yir8wT@rm@UESXR1w/"
        },
        {
          title: "Debaser medis tvingas lämna sina lokaler",
          link: "https://www.svd.se/debaser-medis-tvingas-lamna-sina-lokaler"
        },
        {
          title: "Debaser medis blir bibliotek",
          link: "https://www.svt.se/nyheter/lokalt/stockholm/debaser-medis-konsertlokal-blir-bibliotek"
        },
        {
          title: "Debaser får ingen ny lokal - lägger ner",
          link: "https://mitti.se/nyheter/debaser-lokal-lagger/"
        }
      ]
    },
    {
      name: "Kägelbanan",
      born: "1887-??-??",
      dead: "2019-06-16",
      description: "lorem ipsum",
      location: { latitude: 59.318488, longitude: 18.074486 },
      articles: [
        {
          title: "Debaser slussen stänger",
          link: "http://www.aftonbladet.se"
        }
      ]
    },
    {
      name: "Kraken",
      born: "1987-10-10",
      dead: "2016-07-07",
      description: "lorem ipsum",
      location: { latitude: 59.293491, longitude: 18.078697 },
      articles: [
        {
          title: "Debaser slussen stänger",
          link: "http://www.aftonbladet.se"
        }
      ]
    }
  ];

  getPlace(place: any) {
    this.activePlace = place;
  }

  close() {
    this.activePlace = null;
  }
}
