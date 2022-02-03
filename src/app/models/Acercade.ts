export class Acercade{
    id: any;
    texto: string="";
    persona: {id:any};
    constructor(id:any, texto:string, persona:{id:any}){
        this.id=id;
        this.texto=texto;
        this.persona=persona;

    }
}
