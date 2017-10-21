import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxCarousel } from 'ngx-carousel';
import { TagsService, UserService } from '../shared';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  titleEvent: string;
  typeEvent: string;
  ubicationEvent: string;
  dateEvent: string;
  hourEvent: string;
  pricingEvent: string;
  textBuyTickets: string;
  textOrganization: string;
  textUbication: string;
  textButacas: string;
  textBrochure: string;
  textSectionInfo: string;
  contentInfoA: string;
  contentInfoB: string;
  socialFacebook: string;
  socialTwitter: string;
  socialInstagram: string;
  textSectionBuyTicket: string;
  subTextSectionBuyTicket: string;
  listEvents: Array<any>;

  public carouselOne: NgxCarousel;
  public dates = [];
  public dateSelect: any= {};

  organizadoBool: boolean;
  lugarBool: boolean;
  brochureBool: boolean;
  butacasBool: boolean;
  butacas: boolean;
  classOrganizador: string;
  classLugar: string;
  classBrochure: string;
  classButacas: string;
  constructor (
    private router: Router,
    private tagsService: TagsService,
    private userService: UserService
  ) {
    this.titleEvent = 'La Paz Expone 2018';
    this.typeEvent = 'Exposicion';
    this.ubicationEvent = 'Campo Ferial Chuquiago marka';
    this.dateEvent = '15 de Octubre';
    this.hourEvent = '22:50 hrs.';
    this.pricingEvent = 'Bs. 30';
    this.textBuyTickets = 'Comprar Entradas';
    this.textOrganization = 'Organizado por...';
    this.textUbication = 'Lugar';
    this.textButacas = 'Butacas';
    this.textBrochure = 'Descarga el brochure';
    this.textSectionInfo = 'Información';
    this.contentInfoA = ' !!!!!test text... Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on\n' + ' ' +
      '       it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter\n' +
      '        that shakes when you put quarters in it? No? Well, that\'s what you see at a toy store. And you must think you\'re\n' +
      '        in a toy store, because you\'re here shopping for an infant named Jeb.';
    this.contentInfoB = 'Look, just because I don\'t be givin\' no man a foot massage don\'t make it right for Marsellus to throw Antwone\n' +
      '        into a glass motherfuckin\' house, fuckin\' up the way the nigger talks. Motherfucker do that shit to me, he better\n' +
      '        paralyze my ass, \'cause I\'ll kill the motherfucker, know what I\'m sayin\'?';
    this.socialFacebook = 'https://www.facebook.com';
    this.socialTwitter = 'https://www.twitter.com';
    this.socialInstagram = 'https://www.instagram.com';
    this.textSectionBuyTicket = 'Compra tu Entrada';
    this.subTextSectionBuyTicket = 'Selecciona la Fecha y compra una entrada';
    this.listEvents = this.getListevents()
    this.butacas = false;
    this.organizadoBool = true;
    this.lugarBool = true;
    this.brochureBool = true;
    this.butacasBool = false;
    this.classButacas = 'col-12 btn-full'
    this.classBrochure = 'col-12 btn-full'
    this.classLugar = 'col-12 btn-full'
    this.classOrganizador = 'col-12 btn-full'
    this.dates=[
      {
        day:'Sabado',
        date:'15',
        hour:'19:30'
      },
      {
        day:'Domingo',
        date:'16',
        hour:'19:30'
      },
      {
        day:'Lunes',
        date:'17',
        hour:'19:30'
      },
      {
        day:'Martes',
        date:'18',
        hour:'19:30'
      },
      {
        day:'Miercoles',
        date:'19',
        hour:'19:30'
      },
      {
        day:'Jueves',
        date:'20',
        hour:'19:30'
      }
    ]
  }

  ngOnInit() {
    console.log('onInit', this)
    /*
    * organizadoBool
lugarBool
brochureBool
butacasBool
    * */
    if (this.organizadoBool) {
        this.classOrganizador = 'col-12 btn-full'
    }
    if (this.lugarBool && this.butacasBool) {
      this.classLugar = 'col-6 btn-fifty'
      this.classButacas = 'col-6 btn-fifty'
    } else {
      this.classLugar = 'col-12 btn-full'
      this.classButacas = 'col-12 btn-full'
    }
  }

  getListevents () {
    return ([
      {
        id: 1,
        name: 'La Paz Expone',
        pic: './../../assets/img/eventB.jpg',
        locale: 'Campo Ferial Chuquiago Marka',
        date: '15/07/17',
        pricing: 'Bs. 18'
      },
      {
        id: 2,
        name: 'El Alto de Pie',
        pic: './../../assets/img/eventA.jpg',
        locale: 'Campo Ferial Chuquiago Marka',
        date: '15/07/17',
        pricing: 'Bs. 18'
      }, {
        id: 3,
        name: 'Concierto de Jazz',
        pic: './../../assets/img/eventA.jpg',
        locale: 'Campo Ferial Chuquiago Marka',
        date: '15/07/17',
        pricing: 'Bs. 18'
      },
      {
        id: 4,
        name: 'Rap contra el racismo',
        pic: './../../assets/img/eventB.jpg',
        locale: 'Campo Ferial Chuquiago Marka',
        date: '15/07/17',
        pricing: 'Bs. 18'
      }
    ])
  }
  onSelectDate(data:any){
    console.log("data")
    console.log(data)
    this.dateSelect=data;
  }
}


