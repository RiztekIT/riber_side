import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';

// Modulos
import { SharedModule } from '../shared/shared.module';

import { FormsModule } from '@angular/forms';

// ng2-charts
import { ChartsModule } from 'ng2-charts';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { UsuariosComponent } from './administracion/catalogos/usuarios/usuarios.component';
import { ProveedoresComponent } from './administracion/catalogos/proveedores/proveedores.component';
import { ProductosComponent } from './administracion/catalogos/productos/productos.component';
import { ClientesComponent } from './administracion/catalogos/clientes/clientes.component';
import { CatalogosComponent } from './administracion/catalogos.component';


// temporal


@NgModule({

    declarations: [
    DashboardComponent,
    ProgressComponent,
    PagesComponent,
    Graficas1Component,
    IncrementadorComponent,
    GraficoDonaComponent,
    AccountSettingsComponent,
    PromesasComponent,
    UsuariosComponent,
    ProveedoresComponent,
    ProductosComponent,
    ClientesComponent,
    CatalogosComponent
    ],
    exports: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
    ]

})

export class PagesModule {
}