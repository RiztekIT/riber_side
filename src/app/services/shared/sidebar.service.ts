import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Dashboard', url: '/dashboard', icono: 'mdi mdi-plus' },
      ]
    },
    {
      titulo: 'Administracion',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Catalogos', url: '/administracion-catalogos', icono: 'mdi mdi-plus' },
      ]
    },
    {
      titulo: 'Punto Venta',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Punto Venta', url: '/dashboard', icono: 'mdi mdi-plus' },
      ]
    },
    {
      titulo: 'Monitor General',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Monitor General', url: '/dashboard', icono: 'mdi mdi-plus' },
      ]
    },
    {
      titulo: 'Clientes',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Suscripciones', url: '/clientes-suscripcion', icono: 'mdi mdi-plus' },
        { titulo: 'Rutinas', url: '/clientes-rutina', icono: 'mdi mdi-plus' },
        { titulo: 'Dashboard Clientes', url: '/clientes-dashboard', icono: 'mdi mdi-plus' },
      ]
    }
  ];

  constructor() { }
}
