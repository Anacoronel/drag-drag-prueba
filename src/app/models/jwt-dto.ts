export class JwtDto{
    token: string;
    type: string;
    nombreUsuario: string;
    authorities:any;
    constructor(token: string, type: string, nombreUsuario: string, authorities: any) {
        this.token = token;
        this.nombreUsuario = nombreUsuario;
        this.authorities = authorities;
        this.type = type;
    }
}