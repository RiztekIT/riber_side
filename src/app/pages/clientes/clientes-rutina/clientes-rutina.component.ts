import { Component, OnInit } from '@angular/core';

declare function rutinasInit();

@Component({
  selector: 'app-clientes-rutina',
  templateUrl: './clientes-rutina.component.html',
  styles: []
})
export class ClientesRutinaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    rutinasInit();
  }

}
