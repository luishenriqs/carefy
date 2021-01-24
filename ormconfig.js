console.log('process.env.DATABASE_URL :>> ', process.env.DATABASE_URL)
module.exports = {
  "type": "postgres",
  "url": process.env.DATABASE_URL,

  
  /* ******************** */
  "entities": [
    "./dist/modules/**/infra/typeorm/entities/*.js"
  ],

  // "entities": [
  //   "./src/modules/**/infra/typeorm/entities/*.ts"
  // ],
  /* ******************** */


  /* ******************** */
  "migrations": [
    "./dist/shared/infra/typeorm/migrations/*.js"
  ],

  // "migrations": [
  //   "./src/shared/infra/typeorm/migrations/*.ts"
  // ],
  /* ******************** */



  "cli": {
    "migrationsDir": "./src/shared/infra/typeorm/migrations"
  }
}
