import { Liquibase, LiquibaseConfig, POSTGRESQL_DEFAULT_CONFIG } from 'liquibase';

const myConfig: LiquibaseConfig = {
  ...POSTGRESQL_DEFAULT_CONFIG,
  changeLogFile: './changelog.xml',
  url: 'jdbc:postgresql://localhost:5432/node_liquibase_testing',
  username: 'yourusername',
  password: 'yoursecurepassword',
  liquibase: '/usr/local/opt/liquibase/liquibase',
  classpath: './drivers/postgresql-42.2.8.jar'
}
const inst = new Liquibase(myConfig);

inst.status();
