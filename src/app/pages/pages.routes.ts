import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { ClientesComponent } from './administracion/catalogos/clientes/clientes.component';
import { ProductosComponent } from './administracion/catalogos/productos/productos.component';
import { ProveedoresComponent } from './administracion/catalogos/proveedores/proveedores.component';
import { UsuariosComponent } from './administracion/catalogos/usuarios/usuarios.component';
import { CatalogosComponent } from './administracion/catalogos.component';

const pagesRoutes: Routes = [

    {
        path: '',
        component: PagesComponent,

        children: [

            { path: 'dashboard', component: DashboardComponent },
            { path: 'administracion-catalogos', component: CatalogosComponent },
            { path: 'administracion-clientes', component: ClientesComponent },
            { path: 'administracion-productos', component: ProductosComponent },
            { path: 'administracion-proveedores', component: ProveedoresComponent },
            { path: 'administracion-usuarios', component: UsuariosComponent },
            { path: 'account-settings', component: AccountSettingsComponent },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }

        ]
    }

];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);