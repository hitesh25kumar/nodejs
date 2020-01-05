import { ProdEnvironment } from './prod.env';
import { DevEnvironment} from './dev.env';

export interface Environment {
    db_url: string,
    jwt_secret:string
}

export function getEnvironmentVariables(){
if(process.env.Node_Env === 'production'){
    return ProdEnvironment;
}
return DevEnvironment;
}