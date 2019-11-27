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
      titulo: 'Catalogos',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Dashboard', url: '/dashboard', icono: 'mdi mdi-plus' },
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
        { titulo: 'Suscripciones', url: '/dashboard', icono: 'mdi mdi-plus' },
        { titulo: 'Rutinas', url: '/dashboard', icono: 'mdi mdi-plus' },
        { titulo: 'Dashboard Clientes', url: '/dashboard', icono: 'mdi mdi-plus' },
        { titulo: 'Informacion Cuenta', url: '/dashboard', icono: 'mdi mdi-plus' },
      ]
    }
  ];

  constructor() { }
}
