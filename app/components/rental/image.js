import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class RentalImageComponent extends Component {
  //Forma extendida:
  //   constructor(...args) {
  //     super(...args);
  //     this.isLarge = false;
  //   }

  //Forma abreviada:
  //isLarge = false;

  //Con propiedades rastreadas:
  @tracked isLarge = false;

  @action toggleSize() {
    this.isLarge = !this.isLarge;
  }
}
