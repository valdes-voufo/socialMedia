
import { entreprise } from "./entreprise";
import { gender } from "./gender";

export interface user{
    id:string ;
    name:string ;
    vorname:string ;
    Speudo:string ;
    gender:gender ;
    iconUrl:string ;
    job:string ;
    jobDomain:string ;

    city:string ;
    telNumber:string ;
    email:string ;
    entreprise:entreprise ;
    domain: String ;
}
