import { Entity, ObjectIdColumn, ObjectID, Column } from "typeorm";

// @Entity() // uncomment this line and everything works
export class User {
  @ObjectIdColumn() id: ObjectID;

  @Column() firstName: string;

  @Column() lastName: string;

  @Column() age: number;
}
