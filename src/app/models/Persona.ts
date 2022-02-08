export class Persona {
    id: any;
    nombre: string="";
    fotoperfil: string="";
    fotoback: string="";
    mail: string="anacoronel@homtmail.com";
    descripcion:string="";
    ciudad:string="";
    pais:string="";

    constructor(id:any, nombre:string, fotoperfil:string, fotoback:string, mail:string, descripcion:string,ciudad:string, pais:string ){

        this.id=id;
        this.nombre=nombre;
        this.fotoperfil=fotoperfil;
        this.fotoback=fotoback;
        this.mail=mail;
        this.descripcion=descripcion;
        this.pais=pais;
        this.ciudad=ciudad;

    }


}



    

 