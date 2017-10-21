import { Component, OnInit,Input ,Output,EventEmitter,AfterViewInit} from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';
@Component({
    selector: 'carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, AfterViewInit {
    @Input() dates:any=[];
    @Output() select:EventEmitter<any>=new EventEmitter();
    public carouselOne: NgxCarousel;
    constructor() { }
    ngOnInit() {
        this.carouselOne = {
            grid: {xs: 1, sm: 2, md: 3, lg: 3, all: 0},
            slide: 3,
            speed: 400,
            interval: 4000,
            point: {
              visible: true
            },
            load: 2,
            touch: true,
            loop: true,
            custom: 'banner'
          }
        
          
    }

    ngAfterViewInit() {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        let elements:any=document.getElementsByClassName('clickItem');
        // console.log(elements)
        for(let i=0;i<elements.length;i++){
            // console.log(elements[i])
            elements[i].addEventListener('click',(e)=>{
                console.dir(elements[i])

                this.select.emit(this.dates[elements[i].id]);
            },false)
        }
        // elements.addEventListener('click',function(e){
        //     console.log(e)
        // },false)
    }


    selectItem(item:any){
        console.log(item)
        this.select.emit(item);
    }

    myfunc(e){
        console.log(e)
    }
}
