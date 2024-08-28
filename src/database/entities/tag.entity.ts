import { Column, Entity, ManyToMany } from "typeorm";

import { CreateUpdateModel } from './models/create-update.model';
import { ArticleEntity } from "./article.entity";

@Entity('tags')
export class TagEntity extends CreateUpdateModel {
  @Column('text')
  name: string;

  @ManyToMany(() => ArticleEntity, (entity) => entity.tags)
  articles?: ArticleEntity;
}