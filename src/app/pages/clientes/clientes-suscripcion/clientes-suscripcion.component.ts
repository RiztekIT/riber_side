import { Component, OnInit } from '@angular/core';

declare function suscripInit();

@Component({
  selector: 'app-clientes-suscripcion',
  templateUrl: './clientes-suscripcion.component.html',
  styles: []
})
export class ClientesSuscripcionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    suscripInit();
  }

}
