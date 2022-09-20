import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  private dataset: any = {
    name: 'Nahuel Gastón',
    surname:'Valdez Peralta',
    age:26,
    email:'nvaldezperalta@gmail.com',
    phone:'+543816095866',
    education:[
    {name:'Higher Technician in Industrial Electricity',emit:'National University of Tucumán',yinit:'2015',yfinish:'2019',img:'',description:'Finish'},
    {name:'Information Systems Engineering ',emit:'National Technological University ',yinit:'2017',yfinish:'',img:'',description:'I’m studying the last year (5)'},
    ],
    workshops:[
      {name:'Databases with PostgreSQL',emit:'National Technological University',year:'2018',location:'San Miguel de Tucumán',rol:'Student',img:'/assets/certificates/dbpostgre.jpg',link:''},
      {name:'LADDER with IDE4PLC',emit:'National Technological University',year:'2020',location:'San Miguel de Tucumán',rol:'Student',img:'/assets/certificates/ide4plc.jpg',link:''},
      {name:'Creation and configuration of VLANS and the use of PING with the ICMP protocol',emit:'National Technological University',year:'2021',location:'San Miguel de Tucumán',rol:'Instructor',img:'/assets/certificates/vlan.jpg',link:'https://drive.google.com/file/d/1Er58pB7g0B5zoDp24OdIciVqHVm48Ip3/view?usp=sharing'},
      {name:'Rapid application development using REACT ADMIN and PostgREST',emit:'National Technological University',year:'2022',location:'San Miguel de Tucumán',rol:'Student',img:'/assets/certificates/react.png',link:''},
    ],
    courses: [
      {name:'SCRUM Fundamentals',emit:'Scrum Study', year:'2022',location:'San Miguel de Tucumán',img:'/assets/certificates/scrumfundamentals.jpg',link:''},
      {name:'Introduction to Cybersecurity',emit:'CISCO Virtual Academy',year:'2022',location:'San Miguel de Tucumán',img:'/assets/certificates/IntroductionCybersecutity.jpg',link:''},
      {name:'Mobile App Development',emit:'Google',year:'2022',location:'San Miguel de Tucumán',img:'/assets/certificates/appmoviles.jpg',link:''},
      {name:'Master in Programming Full-Stack JavaScript Angular Node',emit:'Udemy',year:'2022',location:'San Miguel de Tucumán',img:'/assets/certificates/masterfullstack.jpg',link:'https://www.udemy.com/certificate/UC-d995139c-6a05-4d94-af1a-9766c1b924f1/'},
      {name:'Ethical Hacking and Computer Forensics',emit:'Community Repairing',year:'2022',location:'San Miguel de Tucumán',img:'/assets/certificates/HE.png',link:''},
      {name:'Developing a portfolio with Angular, GitHub Pages and Firebase',emit:'Udemy',year:'2022',location:'San Miguel de Tucumán',img:'/assets/certificates/angular.png',link:'https://programadorperalta.github.io/products-angular/#/home'},
    ],
    projects:[
      {name:'Portable Multimeter Panel SENTRON PAC 4200',emit:'National University of Tucumán', year:'2019',location:'San Miguel de Tucumán',img:'/assets/certificates/sentronpac.png',link:'https://drive.google.com/file/d/1Q16-yBQ_iA1FN63pqJzp1FvXlQtvP5zK/view?usp=sharing',link2:''},    
      {name:'System for selling electronic products in JAVA',emit:'National Technological University', year:'2018',location:'San Miguel de Tucumán',img:'/assets/certificates/java.png',link:'',link2:''},    
      {name:'Installation of a LAMP Stack (Apache, MySQL and PHP) in PROXMOX',emit:'National Technological University', year:'2021',location:'San Miguel de Tucumán',img:'/assets/certificates/proxmox.png',link:'https://drive.google.com/file/d/1ZIUqpQJ_w_6y5ILvEvBOioILq5gUnhx7/view?usp=sharing',link2:''},    
      {name:'Telecommunications Engineering Project to Provide Broadband, Telephony and Digital TV services to a private neighborhood',emit:'National Technological University', year:'2021',location:'San Miguel de Tucumán',img:'/assets/certificates/wan.png',link:'https://drive.google.com/file/d/1TScaKFMPrjuk6QOG80r1rJUpVJSuZXjH/view?usp=sharing',link2:''},  
      {name:'Clothing Product Sales System in C#',emit:'National Technological University', year:'2021',location:'San Miguel de Tucumán',img:'/assets/certificates/cventa.jpg',link:'https://github.com/programadorperalta/LATIENDA',link2:''},
      {name:'Image recognition system using Artificial Neural Networks',emit:'National Technological University', year:'2022',location:'San Miguel de Tucumán',img:'/assets/certificates/ia.jpg',link:'https://drive.google.com/file/d/1dS8PsULsPaEWNOxb3YibDzXQ_CqO-bqR/view?usp=sharing',link2:'https://drive.google.com/file/d/1vlDi-DTuWUWiRxxkLC-cJTlS2LwGHVC0/view?usp=sharing'},
      {name:'Travel package management system with GeneXus and SQLServer',emit:'National Technological University', year:'2022',location:'San Miguel de Tucumán',img:'/assets/certificates/genexus.png',link:'https://drive.google.com/file/d/1C6rdTyTPPfLQn5wu7eecq4HimIBN6B4c/view?usp=sharing',link2:''},
    ],
    lenguages:[
      {name:'English',nivel:'Intermediate',number:5,img:'/assets/certificates/lenguage.jpg'},
    ],
    programming_lenguages:[
      {name:'C#',nivel:8,img:'/assets/img/c-sharp.png'},
      {name:'Java',nivel:8,img:'/assets/img/java.png'},
      {name:'CSS',nivel:8,img:'/assets/img/css.png'},
      {name:'HTML',nivel:8,img:'/assets/img/html-5.png'},
      {name:'SQL',nivel:9,img:'/assets/img/sql-server.png'},
      {name:'C++',nivel:9,img:'/assets/img/c-.png'},
      {name:'JavaScript',nivel:9,img:'/assets/img/js.png'},
      {name:'Python',nivel:7,img:'/assets/img/python.png'},
    ],
    frameworks:[
      {name:'NestJS',nivel:9,img:'/assets/certificates/nest.png'},
      {name:'VueJS',nivel:9,img:'/assets/certificates/ciscop.jpg'},
      {name:'Laravel',nivel:7,img:'/assets/certificates/ciscop.jpg'},
      {name:'Angular',nivel:9,img:'/assets/certificates/ciscop.jpg'},
    ],
    platforms:[
      {name:'.NET',nivel:9},
    ],
    virtualization:[
      {name:'PROXMOX',nivel:9},
      {name:'VMWare',nivel:9},
      {name:'VirtualBox',nivel:9},
      {name:'Docker',nivel:9},
    ],
    software:[
      {name:'Packet Tracer',nivel:9,img:'/assets/certificates/ciscop.jpg'},
      {name:'Filezilla',nivel:9,img:'/assets/certificates/filezilla.png'},
      {name:'WireShark',nivel:9,img:'/assets/certificates/wshark.png'},
      {name:'ProteUS',nivel:9,img:'/assets/certificates/prote.png'},
      {name:'Autocad',nivel:7,img:'/assets/certificates/cad.png'},
      {name:'GeneXus',nivel:7,img:'/assets/certificates/gen.png'},
    ],
    OS:[
      {name:'Windows',nivel:10},
      {name:'Linux',nivel:10},
    ],
    availability:'Full-Time'
  }


  constructor() { }

  getDataset():any{
    return this.dataset;
  }
}
