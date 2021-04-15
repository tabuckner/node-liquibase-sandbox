# Node Liquibase Sandbox
## Usage
### Install
For now I've been 'side loading' the dependency using an absolute path to the root of my `node-liquibase` repo. This allows for a few less steps in making changes to the library. You can do symlinks if you want via node link or yarn link, I've just never had a ton of luck there. Never works quite how I expect.

```bash
yarn add /absolute/path/to/the/local/clone/of/node-liquibase
```

**NOTE: As long as the name of the package in that local directory matches what your imports expect you'll be good to go.**

### Testing CLI
There's an NPM script in THIS package.json that will let you test the CLI functionality.

```bash
yarn node-liquibase --changeLogFile="changelog.xml" --url="jdbc:postgresql://localhost:5432/node_liquibase_testing" --username="yourusername" --password="yoursecurepassword" --classpath="/Users/taylor/Dev/Liquibase/hackathons/node-liquibase/drivers/postgresql-42.2.8.jar" status 
```
