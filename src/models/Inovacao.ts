import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  OneToOne,
} from "typeorm";
import { Pilar } from "./Pilar";
import { v4 as uuid } from "uuid";
import { Exclude, Expose } from "class-transformer";

@Entity("inovacao")
export class Inovacao {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column("text")
  pilar_id: string;

  @Expose({ name: "pilar" })
  @JoinColumn({ name: "pilar_id" })
  @OneToOne(() => Pilar)
  pilarId: Pilar;

  @Column("text")
  titulo: string;

  @Column("text")
  descricao: string;

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
