import { Component } from '@angular/core';
import { heroe } from './hero'


export class Super {
	id: number;
	nombre: string;
}


export class AppComponent {
	nicks = [
	new heroe(1, 'AlphaFrag'),
	new heroe(2, 'Letal'),
	new heroe(3, 'Header'),
	new heroe(4, 'RagFurioso'),
	new heroe(5, 'LostSoul')
	]

	supra: Super = {
		id: 1,
		nombre: 'Cacaman'
	}

	nick = supra.name;
}

@Component({
  selector: 'my-app',
  template: `<h1>Yo soy {{nick}}</h1>
  Mis Nick preferidos son
 <ul>
 	<li *ngFor="let nick of nicks">{{nick.name}}</li>
 </ul>
 <p *ngIf="nicks.length > 2">Demasiados heroes ({{nicks.length}})</p>
 <br>
 <label>Cambiar nombre heroe
 <input  [(ngModel)]="supra.nombre" placeholder="Nombre">
 </label>
 `
})
