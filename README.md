Run
`docker run --rm --name test-mongo -p 27017:27017 mongo`

Run `yarn start`

Notice error:

```
{ Error
    at new RepositoryNotFoundError (/Users/z002s72/dev/examples/typeorm-entity-bug/src/error/RepositoryNotFoundError.ts:12:22)
    at MongoEntityManager.EntityManager.getRepository (/Users/z002s72/dev/examples/typeorm-entity-bug/src/entity-manager/EntityManager.ts:769:19)
    at Connection.getMongoRepository (/Users/z002s72/dev/examples/typeorm-entity-bug/src/connection/Connection.ts:325:29)
    at Object.<anonymous> (/Users/z002s72/dev/examples/typeorm-entity-bug/src/index.ts:18:39)
    at step (/Users/z002s72/dev/examples/typeorm-entity-bug/src/index.ts:32:23)
    at Object.next (/Users/z002s72/dev/examples/typeorm-entity-bug/src/index.ts:13:53)
    at /Users/z002s72/dev/examples/typeorm-entity-bug/src/index.ts:7:71
    at new Promise (<anonymous>)
    at __awaiter (/Users/z002s72/dev/examples/typeorm-entity-bug/src/index.ts:3:12)
    at /Users/z002s72/dev/examples/typeorm-entity-bug/src/index.ts:8:25
  name: 'RepositoryNotFoundError',
  message: 'No repository for "User" was found. Looks like this entity is not registered in current "default" connection?' }
```

Uncomment the line in User.ts and everything works

# Awesome Project Build with TypeORM

Steps to run this project:

1.  Run `npm i` command
2.  Setup database settings inside `ormconfig.json` file
3.  Run `npm start` command
