import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { HomeAuthResolver } from './home-auth-resolver.service';
import { SharedModule } from '../shared';
import { CarouselComponent} from './carousel/carousel.component'

import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';

const homeRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: HomeComponent,
    resolve: {
      isAuthenticated: HomeAuthResolver
    }
  }
]);

@NgModule({
  imports: [
    homeRouting,
    SharedModule,
    NgxCarouselModule
  ],
  declarations: [
    HomeComponent,
    CarouselComponent
  ],
  providers: [
    HomeAuthResolver
  ]
})
export class HomeModule {}
