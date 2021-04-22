![Node and Liquibase](assets/img/node-liquibase-sandbox.png)
# Node Liquibase Sandbox
A tiny repo to help with evaluating [The Liquibase NPM Offering](https://www.npmjs.com/package/liquibase) for yourself!

## Table of Contents
* [Usage](#usage)
  * [Database](#database)
  * [TypeScript Files](#typescript-files)
  * [JavaScript Files](#javascript-files)
  * [CLI](#cli)
* [Install a Different Version of node-liquibase](#install-a-different-version-of-node-liquibase)

## Usage
### Database
#### What
You can use whatever database you would like here, but we've supplied a small startup script that will get you up and running with Postgres and PGAdmin 4 via docker. The project is already configured to make use of these settings, so if you wish to test against a different DB, you'll need to ensure that the configuration is updated accordingly.

#### Why
Once the backing DB is up and running, you can do _anything_ you'd like and that Liquibase core supports.

#### How
```bash
./db-start-up.sh
```
or
```bash
chmod +x ./db-start-up.sh && ./db-start-up.sh
```

### TypeScript Files
#### What
There is an example usage of the library offered by [liquibase](https://www.npmjs.com/package/liquibase) in `./index.ts`. This file shows how the library can be imported into your TypeScript files, and make use of Liquibase core in a programmatic fashion.

#### Why
This will demonstrate all of the TypeScript features that were integrated with the re-write of [liquibase](https://www.npmjs.com/package/liquibase). 

#### How
Below is a simple command making use of `ts-node` to provide a very easy way of executing of TypeScript code. Make any changes you wish to `./index.ts` and then run the following command from a terminal in the root of this project:

```bash
npx ts-node --project ./tsconfig.json ./index.ts
```

### JavaScript Files
#### What
There are bound to be users who _do not_ want to use TypeScript, and for this reason we've also provided support for "next gen" JavaScript.

#### Why
In order to cover as many use cases as possible and respect _as many of the Node users out there as possible_, we made sure to provide the Library in both ES and Common JS modules.

#### How
To test [liquibase](https://www.npmjs.com/package/liquibase) in a JavaScript context, make any changes you wish to `./testing.js` and then run the following command from a terminal in the root of this project:

```bash
node ./testing.js
```

### CLI
#### What
In addition to JavaScript and TypeScript usage, [liquibase](https://www.npmjs.com/package/liquibase) also provides a Node CLI wrapper around the Liquibase CLI.

#### Why
One of the complaints we've heard around Liquibase CLI is the installation process. What's easier than `yarn global add liquibase`? Nothing. The answer is nothing.
#### How
There's an NPM script in _THIS_ `package.json` that will let you test the CLI functionality.

```bash
yarn node-liquibase --changeLogFile="changelog.xml" --url="jdbc:postgresql://localhost:5432/node_liquibase_testing" --username="yourusername" --password="yoursecurepassword" --classpath="/Users/taylor/Dev/Liquibase/hackathons/node-liquibase/drivers/postgresql-42.2.8.jar" status 
```

## Install a Different Version of node-liquibase
Feel free to change the version of [liquibase](https://www.npmjs.com/package/liquibase) installed in this project directly from NPM. Alternatively, if you are working on a fork there are many other ways to 'side-load' your desired version of [liquibase](https://www.npmjs.com/package/liquibase). 

You could use tools like `npm link` or even install an absolute filepath to the `package.json` of your choice (e.g. `yarn add /Users/me/path/to/my/fork`). This allows for a few less steps in making changes to the library.

**NOTE: As long as the name of the package in that local directory matches what your imports expect you'll be good to go.**
