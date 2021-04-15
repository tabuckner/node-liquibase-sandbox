// const Liquibase = require('node-liquibase').Liquibase;
const LiquibaseTS = require('node-liquibase-ts').Liquibase;
const POSTGRESQL_DEFAULT_CONFIG = require('node-liquibase-ts').POSTGRESQL_DEFAULT_CONFIG;
// const inst = new Liquibase({});
const myConfig = {
  ...POSTGRESQL_DEFAULT_CONFIG,
  changeLogFile: './changelog.xml',
  url: 'jdbc:postgresql://localhost:5432/node_liquibase_testing',
  username: 'yourusername',
  password: 'yoursecurepassword',
}
const instTs = new LiquibaseTS(myConfig);
// console.warn(inst.status())
instTs.status();
