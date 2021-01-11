import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { MenuComponent } from './system/menu/menu.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { ModuleComponent } from './system/module/module.component';
import { ConfigComponent } from './system/config/config.component';
import { DictTypeComponent } from './system/dict-type/dict-type.component';
import { AreaComponent } from './system/area/area.component';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { CodeComponent } from './development/code/code.component';
import { CodeConfigComponent } from './development/code-config/code-config.component';
import {NzTabsModule} from 'ng-zorro-antd/tabs';
registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ModuleComponent,
    ConfigComponent,
    DictTypeComponent,
    AreaComponent,
    CodeComponent,
    CodeConfigComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzTableModule,
    NzButtonModule,
    NzPageHeaderModule,
    NzSpaceModule,
    NzModalModule,
    NzFormModule,
    NzInputModule,
    NzGridModule,
    NzTreeSelectModule,
    ReactiveFormsModule,
    NzSelectModule,
    NzInputNumberModule,
    NzRadioModule,
    NzTabsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
