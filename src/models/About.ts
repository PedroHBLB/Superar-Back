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
    sobre: string;

    @Column("text")
    conhecimento: string;

    @Column("text")
    saude: string;

    @Column("text")
    qualidade: string;

    @Column("text")
    wtt: string;

    @Column("text")
    rsi: string;

    @Column("text")
    premiacao: string;

    @Column("text")
    bonus: string;

    @Column("text")
    duvidas: string;

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