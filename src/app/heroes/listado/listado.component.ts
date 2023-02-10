import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent {

  heroes:string[] = ['Hola','spiderman','iroman','hulk'];
  heroeBorrado :string = '';
  
  borrarHeroe(){
   this.heroeBorrado = this.heroes.shift() || '';
  }
 

}
