import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Livro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text" })
  titulo: string;

  @Column({ type: "text" })
  autor: string;

  @Column({ type: "text" })
  isbn: string;

  @Column({ type: "integer" })
  anoPublicacao: number;

  @Column({ type: "boolean", default: true })
  disponivel: boolean;
}
