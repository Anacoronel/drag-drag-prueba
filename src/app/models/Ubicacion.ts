export class Ubicacion{
    id: any;
    ciudad: string="";
    pais: string="";
    persona:{id:any} ;

    constructor(id:any,ciudad:string, pais:string, persona:{id:any} ){
            this.id=id;
            this.ciudad=ciudad;
            this.pais=pais;
            this.persona=persona;
    }
}

