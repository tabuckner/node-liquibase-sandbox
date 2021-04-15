const LiquibaseTS = require('node-liquibase').Liquibase;
const POSTGRESQL_DEFAULT_CONFIG = require('node-liquibase').POSTGRESQL_DEFAULT_CONFIG;

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
