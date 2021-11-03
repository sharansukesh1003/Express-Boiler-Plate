import { join } from "path"
import { ConnectionOptions } from "typeorm"
import { UserEntity } from "./database/entity/user.entity"

const connectionOptions : ConnectionOptions = {
    type : "postgres",
    host : "localhost",
    port : 5432,
    username : "postgres",
    password : "password here",
    database : "Database name here",
    entities : [UserEntity],
    synchronize : true,
    dropSchema : false,
    migrationsRun : true,
    logging : false,
    logger : "debug",
    migrations : [join(__dirname,"src/migration/**/*.ts")], 
};

export = connectionOptions;