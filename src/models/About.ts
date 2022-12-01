import {
    Entity,
    PrimaryColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    JoinColumn,
    OneToOne,
} from "typeorm";

import { v4 as uuid } from "uuid";
import { Exclude } from "class-transformer";

@Entity("about")
export class About {
    @PrimaryColumn("uuid")
    readonly id: string;

    @Column("text")
    name: string;

    @Column("text")
    about: string;

    @Exclude()
    @CreateDateColumn()
    created_at: Date;

    @Exclude()
    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}