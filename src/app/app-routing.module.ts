import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MenuComponent} from './system/menu/menu.component';
import {ModuleComponent} from './system/module/module.component';
import {ConfigComponent} from './system/config/config.component';
import {DictTypeComponent} from './system/dict-type/dict-type.component';
import {AreaComponent} from './system/area/area.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'sys/menu', component: MenuComponent},
  { path: 'sys/module', component: ModuleComponent},
  { path: 'sys/config', component: ConfigComponent},
  { path: 'sys/dictType', component: DictTypeComponent},
  { path: 'sys/area', component: AreaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
