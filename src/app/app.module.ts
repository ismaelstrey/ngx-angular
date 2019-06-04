import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { RatingModule } from 'ngx-bootstrap/rating';
import { SortableModule } from 'ngx-bootstrap/sortable';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { HomeComponent } from './home/home/home.component';
import { EmpresaComponent } from './empresa/empresa/empresa.component';
import { ContatoComponent } from './contato/contato/contato.component';
import { ServicosComponent } from './servicos/servicos/servicos.component';
import { ProdutosComponent } from './produtos/produtos/produtos.component';
import { SobreComponent } from './empresa/sobre/sobre.component';
import { PadraoComponent } from './template/padrao/padrao.component';
import { HeaderComponent } from './template/header/header.component';
import { LoginComponent } from './user/login/login.component';
import { AuthService, AuthGuard, AuthInterceptor } from './auth.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmpresaComponent,
    ContatoComponent,
    ServicosComponent,
    ProdutosComponent,
    SobreComponent,
    PadraoComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AccordionModule.forRoot(),
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    RatingModule.forRoot(),
    SortableModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot()
  ],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
