import { Liquibase, POSTGRESQL_DEFAULT_CONFIG } from 'node-liquibase';

const myConfig = {
  ...POSTGRESQL_DEFAULT_CONFIG,
  changeLogFile: './changelog.xml',
  url: 'jdbc:postgresql://localhost:5432/node_liquibase_testing',
  username: 'yourusername',
  password: 'yoursecurepassword',
}
const inst = new Liquibase(myConfig);
inst.status();
