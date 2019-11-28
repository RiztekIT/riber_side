import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {
      titulo: '  Principal',
      icono: 'fa fa-address-card',
      submenu: [
        { titulo: 'Pantalla Monitor', url: '/pantalla-monitor', icono: 'fa fa-user-o' },
      ]
    },
    {
      titulo: '  Administracion',
      icono: 'fa fa-desktop',
      submenu: [
        { titulo: 'Catalogos', url: '/administracion-catalogos', icono: 'fa fa-list-ul' },
      ]
    },
    {
      titulo: '  Punto Venta',
      icono: 'fa fa-credit-card',
      submenu: [
        { titulo: 'Punto Venta', url: '/punto-venta', icono: 'fa fa-money' },
      ]
    },
    {
      titulo: '  Clientes',
      icono: 'fa fa-users',
      submenu: [
        { titulo: 'Suscripciones', url: '/clientes-suscripcion', icono: 'fa fa-address-book-o' },
        { titulo: 'Rutinas', url: '/clientes-rutina', icono: 'fa fa-trophy' },
        { titulo: 'Dashboard Clientes', url: '/clientes-dashboard', icono: 'fa fa-user-circle' },
      ]
    }
  ];

  constructor() { }
}
