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
        { titulo: 'Pantalla Monitor', url: '/pantalla-monitor', icono: 'mdi mdi-plus' },
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
        { titulo: 'Punto Venta', url: '/punto-venta', icono: 'mdi mdi-plus' },
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
