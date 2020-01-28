export class Registros {

  text: string;
  frmt: string;
  type: string;
  icon: string;
  date: Date;

  constructor( text: string, format: string ){
    this.text = text;
    this.frmt = format;
    this.date = new Date();
    this.Registros_rellenar(text, format);
  }

  private Registros_rellenar(text: string, format: string) {
    const tipo = text.substr(0, 4)
    switch (tipo) {
      case 'http':
        this.icon='globe';
        this.type = 'http'
      break;

      case 'geo:':
        this.icon='pin';
        this.type='map';
      break;

      default:
        this.icon='help';
        this.type='unknow'
      break;
    }
  }



}
