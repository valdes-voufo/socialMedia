import { LiteralArrayExpr } from "@angular/compiler";
import { user } from "./user";

export interface post{
    id:string ;
    autor:user ;
    coment:LiteralArrayExpr ;
    
    images:LiteralArrayExpr ;
    Text:string ;
    like:Number;


}