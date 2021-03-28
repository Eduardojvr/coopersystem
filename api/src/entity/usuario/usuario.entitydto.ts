import {createConnection} from "typeorm";
import {Usuario} from "./usuario.entity";
import {TipoUsuario} from "./tipoUsuario.entity";

createConnection(/*...*/).then(async connection => {

  
    let photos = await connection
            .getRepository(Usuario)
            .createQueryBuilder("usuario")
            .innerJoinAndSelect("photo.metadata", "metadata")
            .getMany();


}).catch(error => console.log(error));