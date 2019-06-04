import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { EmpresaComponent } from './empresa/empresa/empresa.component';
import { ContatoComponent } from './contato/contato/contato.component';
import { ServicosComponent } from './servicos/servicos/servicos.component';
import { ProdutosComponent } from './produtos/produtos/produtos.component';
import { SobreComponent } from './empresa/sobre/sobre.component';
import { LoginComponent } from './user/login/login.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'empresa', component: EmpresaComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'servicos', component: ServicosComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'login', component: LoginComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
