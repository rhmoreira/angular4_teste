import { AuthComponent } from './auth/auth.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListContatoComponent} from './contato/list.contato.component';
import { NovoContatoComponent} from './contato/novo.contato.component';

const routes: Routes = [
  {path: 'listContato', component: ListContatoComponent, outlet: 'body'},
  {path: 'novoContato', component: NovoContatoComponent, outlet: 'body'},
  {path: 'login', component: AuthComponent, outlet: 'body'},
  {path: '', redirectTo: 'listContato', pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
