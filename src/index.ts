import {MikroORM} from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import config from "./mikro-orm.config"

const main = async () => {
  // @ts-ignore
  const orm = await MikroORM.init(config);
  await orm.getMigrator().up();
 const post = orm.em.create(Post, {title: 'my first post'})
 await orm.em.persistAndFlush(post);
}

main().catch(err => {
  console.log(err)
})
