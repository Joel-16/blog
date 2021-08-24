import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, BaseEntity, PrimaryGeneratedColumn } from "typeorm";


@Entity('Article')
export class Article extends BaseEntity {

    @PrimaryGeneratedColumn()
    id : string

    @Column()
    name :string

    @Column({unique: true})
    email : string

    @Column()
    body : string

    @Column()
    title : string

    @CreateDateColumn()
    createdAt : number;

    @Column({ name:'updated_at', nullable: true})
    updatedAt: number;

    @BeforeInsert()
    addId() {
    const date = new Date();
    this.createdAt = Date.now()
    this.updatedAt = Date.now()
    }
 
    @BeforeUpdate()
    updateDates(){
       this.updatedAt = Date.now()
    }
}   