```bash
gordo@Webelistics□ MINGW64 ~/Desktop/node-databases (development)
$ docker pull mongo
Using default tag: latest
latest: Pulling from library/mongo
707e32e9fc56: Pull complete
c7ac84d07e95: Pull complete

gordo@Webelistics□ MINGW64 ~/Desktop/node-databases (development)
$ docker run --name mongodb -p 37017:27017 -d mongo
e4c14b81612df6846c90b674e13988503f2673aaf30b61edebe2eabaaa3e15c2

gordo@Webelistics□ MINGW64 ~/Desktop/node-databases/maxcoin (develop
$ npm start

> maxcoin@1.2.0 start
> node main.js

Connecting to Redis...
Successfully connected to Redis
Redis-connect: 2.117ms
Inserting data into Redis...
[ioredis] Unhandled error event: Error: connect ECONNREFUSED 127.0.0
    at TCPConnectWrap.afterConnect [as oncomplete] (node:net:1532:16
[ioredis] Unhandled error event: Error: connect ECONNREFUSED 127.0.0
    at TCPConnectWrap.afterConnect [as oncomplete] (node:net:1532:16
[ioredis] Unhandled error event: Error: connect ECONNREFUSED 127.0.0
    at TCPConnectWrap.afterConnect [as oncomplete] (node:net:1532:16
[ioredis] Unhandled error event: Error: connect ECONNREFUSED 127.0.0
    at TCPConnectWrap.afterConnect [as oncomplete] (node:net:1532:16
[ioredis] Unhandled error event: Error: connect ECONNREFUSED 127.0.0
    at TCPConnectWrap.afterConnect [as oncomplete] (node:net:1532:16
[ioredis] Unhandled error event: Error: connect ECONNREFUSED 127.0.0
    at TCPConnectWrap.afterConnect [as oncomplete] (node:net:1532:16
[ioredis] Unhandled error event: Error: connect ECONNREFUSED 127.0.0
    at TCPConnectWrap.afterConnect [as oncomplete] (node:net:1532:16
[ioredis] Unhandled error event: Error: connect ECONNREFUSED 127.0.0
    at TCPConnectWrap.afterConnect [as oncomplete] (node:net:1532:16
[ioredis] Unhandled error event: Error: connect ECONNREFUSED 127.0.0
    at TCPConnectWrap.afterConnect [as oncomplete] (node:net:1532:16
[ioredis] Unhandled error event: Error: connect ECONNREFUSED 127.0.0
    at TCPConnectWrap.afterConnect [as oncomplete] (node:net:1532:16
[ioredis] Unhandled error event: Error: connect ECONNREFUSED 127.0.0
    at TCPConnectWrap.afterConnect [as oncomplete] (node:net:1532:16
[ioredis] Unhandled error event: Error: connect ECONNREFUSED 127.0.0

gordo@Webelistics□ MINGW64 ~/Desktop/node-databases/maxcoin (develop
$ npm start


gordo@Webelistics□ MINGW64 ~/Desktop/node-databases/maxcoin (developnt)

gordo@Webelistics□ MINGW64 ~/Desktop/node-databases/shopper (developnt)
$ npm run dev

> shopper@0.0.0 dev
> nodemon ./server/bin/start

[nodemon] 2.0.22
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node ./server/bin/start.js`

gordo@Webelistics□ MINGW64 ~/Desktop/node-databases/shopper (developnt)
$ cd ~maxcoin
bash: cd: ~maxcoin: No such file or directory

gordo@Webelistics□ MINGW64 ~/Desktop/node-databases/shopper (developnt)
$ cd ~ maxcoin
bash: cd: too many arguments

gordo@Webelistics□ MINGW64 ~/Desktop/node-databases/shopper (developnt)
$ cd ~/maxcoin
bash: cd: /c/Users/gordo/maxcoin: No such file or directory

gordo@Webelistics□ MINGW64 ~/Desktop/node-databases/shopper (developnt)
$ cd ..

gordo@Webelistics□ MINGW64 ~/Desktop/node-databases (development)
$ cd maxcoin\
> ^C

gordo@Webelistics□ MINGW64 ~/Desktop/node-databases/maxcoin (developnt)

gordo@Webelistics□ MINGW64 ~/Desktop/node-databases/maxcoin (develop
$ docker pull redis
Using default tag: latest
latest: Pulling from library/redis
a803e7c4b030: Pulling fs layer
57e05a1ddec3: Pull complete
4635c857038a: Pull complete
10001c6989b4: Pull complete
f93feb85ceb4: Pull complete
4f4fb700ef54: Pull complete
320349bd761d: Pull complete
Digest: sha256:b68c6efe2c5f2d7d7d14a2749f66d6d81645ec0cacb92572b2fb7
Status: Downloaded newer image for redis:latest
docker.io/library/redis:latest

gordo@Webelistics□ MINGW64 ~/Desktop/node-databases/maxcoin (develop
$ docker run --name redis -p 7379:6379 -d redis
e6b1f6d9b77f9b4ece9885fad034d9963013d659e8bd3e05dd3ece35359fe925

gordo@Webelistics□ MINGW64 ~/Desktop/node-databases/maxcoin (develop
$ docker ps
CONTAINER ID   IMAGE     COMMAND                  CREATED          S
                   NAMES

gordo@Webelistics□ MINGW64 ~/Desktop/node-databases/maxcoin (develop
$ npm start

> maxcoin@1.2.0 start
> node main.js

Connecting to Redis...
Successfully connected to Redis
Redis-connect: 2.346ms
Inserting data into Redis...
Redis-insert: 18.756s
Inserted 1342 documents into Redis
Querying Redis...

gordo@Webelistics□ MINGW64 ~/Desktop/node-databases/maxcoin (develop
$ npm start

> maxcoin@1.2.0 start
> node main.js

Connecting to Redis...
Successfully connected to Redis
Redis-connect: 2.2ms
Inserting data into Redis...
Redis-insert: 838.654ms
Inserted 0 documents into Redis
Querying Redis...

gordo@Webelistics□ MINGW64 ~/Desktop/node-databases/maxcoin (developnt)
$ npm i ioredis

up to date, audited 244 packages in 13s

29 packages are looking for funding
  run `npm fund` for details

6 vulnerabilities (3 moderate, 3 high)

To address issues that do not require attention, run:
  npm audit fix

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.

gordo@Webelistics□ MINGW64 ~/Desktop/node-databases/maxcoin (developnt)
$ cd ..

gordo@Webelistics□ MINGW64 ~/Desktop/node-databases (development)
$ cd shopper

gordo@Webelistics□ MINGW64 ~/Desktop/node-databases/shopper (developnt)
$ npm i ioredis

added 11 packages, and audited 372 packages in 7s

36 packages are looking for funding
  run `npm fund` for details

3 moderate severity vulnerabilities

To address all issues, run:

gordo@Webelistics□ MINGW64 ~/Desktop/node-databases/shopper (develop
$ npm run dev

> shopper@0.0.0 dev
> nodemon ./server/bin/start

[nodemon] 2.0.22
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node ./server/bin/start.js`
Successfully connected to Redis server
Successfully connected to MongoDB
shopper listening on port 9080
[nodemon] restarting due to changes...
[nodemon] starting `node ./server/bin/start.js`
Error connecting to Redis server Error: connect ECONNREFUSED 127.0.0
    at TCPConnectWrap.afterConnect [as oncomplete] (node:net:1532:16
  errno: -4078,
  code: 'ECONNREFUSED',
  syscall: 'connect',
  address: '127.0.0.1',
  port: 7370
}
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node ./server/bin/start.js`
Successfully connected to Redis server
Successfully connected to MongoDB
shopper listening on port 9080
[nodemon] restarting due to changes...
[nodemon] starting `node ./server/bin/start.js`

gordo@Webelistics□ MINGW64 ~/Desktop/node-databases/shopper (developnt)
$ npm i connect-redis
[..................] | idealTree: sill logfile start cleaning logs, [##################] \ reify:connect-redis: http fetch GET 200 https[##################] / reify:connect-redis: http fetch GET 200 https[##################] / reify:connect-redis: http fetch GET 200 https[##################] / reify:connect-redis: http fetch GET 200 https[##################] / reify:connect-redis: http fetch GET 200 https

added 1 package, and audited 373 packages in 5s

36 packages are looking for funding
  run `npm fund` for details

3 moderate severity vulnerabilities

To address all issues, run:
  npm audit fix

Run `npm audit` for details.

gordo@Webelistics□ MINGW64 ~/Desktop/node-databases/shopper (develop
$ npm run dev

> shopper@0.0.0 dev
> nodemon ./server/bin/start

[nodemon] 2.0.22
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node ./server/bin/start.js`
Successfully connected to Redis server
Successfully connected to MongoDB
shopper listening on port 9080
[nodemon] restarting due to changes...
[nodemon] starting `node ./server/bin/start.js`
C:\Users\gordo\Desktop\node-databases\shopper\server\app.js:5
const RedisStore = require('connect-redis')(session);
                                           ^

TypeError: require(...) is not a function
    at Object.<anonymous> (C:\Users\gordo\Desktop\node-databases\sho)
    at Module._compile (node:internal/modules/cjs/loader:1275:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1329
    at Module.load (node:internal/modules/cjs/loader:1133:32)
    at Module._load (node:internal/modules/cjs/loader:972:12)
    at Module.require (node:internal/modules/cjs/loader:1157:19)
    at require (node:internal/modules/helpers:119:18)
    at Object.<anonymous> (C:\Users\gordo\Desktop\node-databases\shos:8:13)
    at Module._compile (node:internal/modules/cjs/loader:1275:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1329

Node.js v19.8.1
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node ./server/bin/start.js`
C:\Users\gordo\Desktop\node-databases\shopper\server\app.js:5
const RedisStore = require('connect-redis')(session);
                                           ^

TypeError: require(...) is not a function
    at Object.<anonymous> (C:\Users\gordo\Desktop\node-databases\sho)
    at Module._compile (node:internal/modules/cjs/loader:1275:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1329
    at Module.load (node:internal/modules/cjs/loader:1133:32)
    at Module._load (node:internal/modules/cjs/loader:972:12)
    at Module.require (node:internal/modules/cjs/loader:1157:19)
    at require (node:internal/modules/helpers:119:18)
    at Object.<anonymous> (C:\Users\gordo\Desktop\node-databases\shos:8:13)
    at Module._compile (node:internal/modules/cjs/loader:1275:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1329

Node.js v19.8.1
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node ./server/bin/start.js`
C:\Users\gordo\Desktop\node-databases\shopper\server\app.js:5
const RedisStore = require('connect-redis')(session);
                                           ^

TypeError: require(...) is not a function
    at Object.<anonymous> (C:\Users\gordo\Desktop\node-databases\sho)
    at Module._compile (node:internal/modules/cjs/loader:1275:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1329
    at Module.load (node:internal/modules/cjs/loader:1133:32)
    at Module._load (node:internal/modules/cjs/loader:972:12)
    at Module.require (node:internal/modules/cjs/loader:1157:19)
    at require (node:internal/modules/helpers:119:18)
    at Object.<anonymous> (C:\Users\gordo\Desktop\node-databases\shos:8:13)
    at Module._compile (node:internal/modules/cjs/loader:1275:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1329

Node.js v19.8.1
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node ./server/bin/start.js`
C:\Users\gordo\Desktop\node-databases\shopper\server\app.js:5
const RedisStore = require('connect-redis')(session);
                                           ^

TypeError: require(...) is not a function
    at Object.<anonymous> (C:\Users\gordo\Desktop\node-databases\sho)
    at Module._compile (node:internal/modules/cjs/loader:1275:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1329
    at Module.load (node:internal/modules/cjs/loader:1133:32)
    at Module._load (node:internal/modules/cjs/loader:972:12)
    at Module.require (node:internal/modules/cjs/loader:1157:19)
    at require (node:internal/modules/helpers:119:18)
    at Object.<anonymous> (C:\Users\gordo\Desktop\node-databases\sho    at Module._compile (node:internal/modules/cjs/loader:1275:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1329

Node.js v19.8.1
[nodemon] app crashed - waiting for file changes before starting...


gordo@Webelistics□ MINGW64 ~/Desktop/node-databases/shopper (develop
$ npm install

up to date, audited 373 packages in 2s

36 packages are looking for funding
  run `npm fund` for details

3 moderate severity vulnerabilities

To address all issues, run:
  npm audit fix

Run `npm audit` for details.

gordo@Webelistics□ MINGW64 ~/Desktop/node-databases/shopper (develop
$ npm audit fix

up to date, audited 373 packages in 2s

36 packages are looking for funding
  run `npm fund` for details

# npm audit report

semver  7.0.0 - 7.5.1
Severity: moderate
semver vulnerable to Regular Expression Denial of Service - https://HSA-c2qf-rxjj-qqgw
fix available via `npm audit fix`
node_modules/simple-update-notifier/node_modules/semver
  simple-update-notifier  1.0.7 - 1.1.0
  Depends on vulnerable versions of semver
  node_modules/simple-update-notifier
    nodemon  2.0.19 - 2.0.22
    Depends on vulnerable versions of simple-update-notifier
    node_modules/nodemon

3 moderate severity vulnerabilities

To address all issues, run:
  npm audit fix

gordo@Webelistics□ MINGW64 ~/Desktop/node-databases/shopper (develop
$ npm audit fix

up to date, audited 373 packages in 2s

36 packages are looking for funding
  run `npm fund` for details

# npm audit report

semver  7.0.0 - 7.5.1

gordo@Webelistics□ MINGW64 ~/Desktop/node-databases/shopper (develop
$ npmnpm run dev
bash: npmnpm: command not found

gordo@Webelistics□ MINGW64 ~/Desktop/node-databases/shopper (develop
$ npm run dev

> shopper@0.0.0 dev
> nodemon ./server/bin/start

[nodemon] 2.0.22
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node ./server/bin/start.js`
C:\Users\gordo\Desktop\node-databases\shopper\server\app.js:5
const RedisStore = require('connect-redis')(session);
                                           ^

TypeError: require(...) is not a function
    at Object.<anonymous> (C:\Users\gordo\Desktop\node-databases\sho)
    at Module._compile (node:internal/modules/cjs/loader:1275:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1329
    at Module.load (node:internal/modules/cjs/loader:1133:32)
    at Module._load (node:internal/modules/cjs/loader:972:12)
    at Module.require (node:internal/modules/cjs/loader:1157:19)
    at require (node:internal/modules/helpers:119:18)
    at Object.<anonymous> (C:\Users\gordo\Desktop\node-databases\shos:8:13)
    at Module._compile (node:internal/modules/cjs/loader:1275:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1329

Node.js v19.8.1
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node ./server/bin/start.js`
C:\Users\gordo\Desktop\node-databases\shopper\server\app.js:21
                        store: new RedisStore({
                               ^

TypeError: RedisStore is not a constructor
    at module.exports (C:\Users\gordo\Desktop\node-databases\shopper
    at Object.<anonymous> (C:\Users\gordo\Desktop\node-databases\shos:35:13)
    at Module._compile (node:internal/modules/cjs/loader:1275:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1329
    at Module.load (node:internal/modules/cjs/loader:1133:32)
    at Module._load (node:internal/modules/cjs/loader:972:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/mo
    at node:internal/main/run_main_module:23:47

Node.js v19.8.1
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node ./server/bin/start.js`
C:\Users\gordo\Desktop\node-databases\shopper\server\app.js:5
const RedisStore = require('connect-redis')(session);
                                           ^

TypeError: require(...) is not a function
    at Object.<anonymous> (C:\Users\gordo\Desktop\node-databases\sho)
    at Module._compile (node:internal/modules/cjs/loader:1275:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1329
    at Module.load (node:internal/modules/cjs/loader:1133:32)
    at Module._load (node:internal/modules/cjs/loader:972:12)
    at Module.require (node:internal/modules/cjs/loader:1157:19)
    at require (node:internal/modules/helpers:119:18)
    at Object.<anonymous> (C:\Users\gordo\Desktop\node-databases\shos:8:13)
    at Module._compile (node:internal/modules/cjs/loader:1275:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1329

Node.js v19.8.1
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node ./server/bin/start.js`
C:\Users\gordo\Desktop\node-databases\shopper\server\app.js:22
                        store: RedisStore({
                               ^

TypeError: RedisStore is not a function
    at module.exports (C:\Users\gordo\Desktop\node-databases\shopper
    at Object.<anonymous> (C:\Users\gordo\Desktop\node-databases\shos:35:13)
    at Module._compile (node:internal/modules/cjs/loader:1275:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1329
    at Module.load (node:internal/modules/cjs/loader:1133:32)
    at Module._load (node:internal/modules/cjs/loader:972:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/mo
    at node:internal/main/run_main_module:23:47

Node.js v19.8.1
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
)
    at Module._extensions..js (node:internal/modules/cjs/loader:1329:10)
    at Module.load (node:internal/modules/cjs/loader:1133:32)
    at Module._load (node:internal/modules/cjs/loader:972:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:83:12)
    at node:internal/main/run_main_module:23:47

Node.js v19.8.1
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node ./server/bin/start.js`
C:\Users\gordo\Desktop\node-databases\shopper\server\app.js:5
const RedisStore = require('connect-redis')(session);
                                           ^

TypeError: require(...) is not a function
    at Object.<anonymous> (C:\Users\gordo\Desktop\node-databases\shopper\server\app.js:5:44)
    at Module._compile (node:internal/modules/cjs/loader:1275:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1329:10)
    at Module.load (node:internal/modules/cjs/loader:1133:32)
    at Module._load (node:internal/modules/cjs/loader:972:12)
    at Module.require (node:internal/modules/cjs/loader:1157:19)
    at require (node:internal/modules/helpers:119:18)
    at Object.<anonymous> (C:\Users\gordo\Desktop\node-databases\shopper\server\bin\start.js:8:13)
    at Module._compile (node:internal/modules/cjs/loader:1275:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1329:10)

Node.js v19.8.1
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node ./server/bin/start.js`
C:\Users\gordo\Desktop\node-databases\shopper\server\app.js:24
                        secret: 'very secret secret to encrypt session',
                        ^^^^^^

SyntaxError: Unexpected identifier 'secret'
    at internalCompileFunction (node:internal/vm:73:18)
    at wrapSafe (node:internal/modules/cjs/loader:1195:20)
    at Module._compile (node:internal/modules/cjs/loader:1239:27)
    at Module._extensions..js (node:internal/modules/cjs/loader:1329:10)
    at Module.load (node:internal/modules/cjs/loader:1133:32)
    at Module._load (node:internal/modules/cjs/loader:972:12)
    at Module.require (node:internal/modules/cjs/loader:1157:19)
    at require (node:internal/modules/helpers:119:18)
    at Object.<anonymous> (C:\Users\gordo\Desktop\node-databases\shopper\server\bin\start.js:8:13)
    at Module._compile (node:internal/modules/cjs/loader:1275:14)

Node.js v19.8.1
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node ./server/bin/start.js`
C:\Users\gordo\Desktop\node-databases\shopper\server\app.js:28
        );
        ^

SyntaxError: Unexpected token ')'
    at internalCompileFunction (node:internal/vm:73:18)
    at wrapSafe (node:internal/modules/cjs/loader:1195:20)
    at Module._compile (node:internal/modules/cjs/loader:1239:27)
    at Module._extensions..js (node:internal/modules/cjs/loader:1329:10)
    at Module.load (node:internal/modules/cjs/loader:1133:32)
    at Module._load (node:internal/modules/cjs/loader:972:12)
    at Module.require (node:internal/modules/cjs/loader:1157:19)
    at require (node:internal/modules/helpers:119:18)
    at Object.<anonymous> (C:\Users\gordo\Desktop\node-databases\shopper\server\bin\start.js:8:13)
    at Module._compile (node:internal/modules/cjs/loader:1275:14)

Node.js v19.8.1
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node ./server/bin/start.js`
C:\Users\gordo\Desktop\node-databases\shopper\server\app.js:5
const RedisStore = require('connect-redis')(session);
                                           ^

TypeError: require(...) is not a function
    at Object.<anonymous> (C:\Users\gordo\Desktop\node-databases\shopper\server\app.js:5:44)
    at Module._compile (node:internal/modules/cjs/loader:1275:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1329:10)
    at Module.load (node:internal/modules/cjs/loader:1133:32)
    at Module._load (node:internal/modules/cjs/loader:972:12)
    at Module.require (node:internal/modules/cjs/loader:1157:19)
    at require (node:internal/modules/helpers:119:18)
    at Object.<anonymous> (C:\Users\gordo\Desktop\node-databases\shopper\server\bin\start.js:8:13)
    at Module._compile (node:internal/modules/cjs/loader:1275:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1329:10)

Node.js v19.8.1
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node ./server/bin/start.js`
(node:21400) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 11 exit listeners added to [Bus]. Use emitter.setMaxListeners() to increase limit
(Use `node --trace-warnings ...` to show where the warning was created)
C:\Users\gordo\Desktop\node-databases\shopper\server\app.js:5
const RedisStore = require('connect-redis')(session);
                                           ^

TypeError: require(...) is not a function
    at Object.<anonymous> (C:\Users\gordo\Desktop\node-databases\shopper\server\app.js:5:44)
    at Module._compile (node:internal/modules/cjs/loader:1275:14)

gordo@Webelistics□ MINGW64 ~/Desktop/node-databases/shopper (development)
$ npm run dev

> shopper@0.0.0 dev
> nodemon ./server/bin/start

[nodemon] 2.0.22
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node ./server/bin/start.js`
C:\Users\gordo\Desktop\node-databases\shopper\server\app.js:5
const RedisStore = require('connect-redis')(session);
                                           ^

TypeError: require(...) is not a function
    at Object.<anonymous> (C:\Users\gordo\Desktop\node-databases\shopper\server\app.js:5:44)
    at Module._compile (node:internal/modules/cjs/loader:1275:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1329:10)
    at Module.load (node:internal/modules/cjs/loader:1133:32)
    at Module._load (node:internal/modules/cjs/loader:972:12)
    at Module.require (node:internal/modules/cjs/loader:1157:19)
    at require (node:internal/modules/helpers:119:18)
    at Object.<anonymous> (C:\Users\gordo\Desktop\node-databases\shopper\server\bin\start.js:8:13)
    at Module._compile (node:internal/modules/cjs/loader:1275:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1329:10)

Node.js v19.8.1
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node ./server/bin/start.js`
C:\Users\gordo\Desktop\node-databases\shopper\server\app.js:5
const RedisStore = require('connect-redis')(session);
TypeError: require(...) is not a function
    at Object.<anonymous> (C:\Users\gordo\Desktop\node-databases\shopper\server\app.js:5:44)
    at Module._compile (node:internal/modules/cjs/loader:1275:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1329:10)
    at Module.load (node:internal/modules/cjs/loader:1133:32)
    at Module._load (node:internal/modules/cjs/loader:972:12)
    at Module.require (node:internal/modules/cjs/loader:1157:19)
    at require (node:internal/modules/helpers:119:18)
    at Object.<anonymous> (C:\Users\gordo\Desktop\node-databases\shopper\server\bin\start.js:8:13)
    at Module._compile (node:internal/modules/cjs/loader:1275:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1329:10)

Node.js v19.8.1
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node ./server/bin/start.js`
Successfully connected to Redis server
Successfully connected to MongoDB
shopper listening on port 9080
[nodemon] restarting due to changes...
[nodemon] starting `node ./server/bin/start.js`
Successfully connected to Redis server
Successfully connected to MongoDB
shopper listening on port 9080
[nodemon] restarting due to changes...
[nodemon] restarting due to changes...
[nodemon] starting `node ./server/bin/start.js`
Successfully connected to Redis server
Successfully connected to MongoDB
shopper listening on port 9080
[nodemon] restarting due to changes...
[nodemon] restarting due to changes...
[nodemon] starting `node ./server/bin/start.js`
node:internal/modules/cjs/loader:1093
  throw err;
  ^

Error: Cannot find module '../../services/item'
Require stack:
- C:\Users\gordo\Desktop\node-databases\shopper\server\routes\shop\index.js
- C:\Users\gordo\Desktop\node-databases\shopper\server\routes\index.js
- C:\Users\gordo\Desktop\node-databases\shopper\server\app.js
- C:\Users\gordo\Desktop\node-databases\shopper\server\bin\start.js
    at Module._resolveFilename (node:internal/modules/cjs/loader:1090:15)
    at Module._load (node:internal/modules/cjs/loader:934:27)
    at Module.require (node:internal/modules/cjs/loader:1157:19)
    at require (node:internal/modules/helpers:119:18)
    at Object.<anonymous> (C:\Users\gordo\Desktop\node-databases\shopper\server\routes\shop\index.js:3:21)
    at Module._compile (node:internal/modules/cjs/loader:1275:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1329:10)
    at Module.load (node:internal/modules/cjs/loader:1133:32)
    at Module._load (node:internal/modules/cjs/loader:972:12)
    at Module.require (node:internal/modules/cjs/loader:1157:19) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    'C:\\Users\\gordo\\Desktop\\node-databases\\shopper\\server\\routes\\shop\\index.js',
    'C:\\Users\\gordo\\Desktop\\node-databases\\shopper\\server\\routes\\index.js',
    'C:\\Users\\gordo\\Desktop\\node-databases\\shopper\\server\\app.js',
    'C:\\Users\\gordo\\Desktop\\node-databases\\shopper\\server\\bin\\start.js'
  ]
}

Node.js v19.8.1
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node ./server/bin/start.js`
Successfully connected to Redis server
Successfully connected to MongoDB
shopper listening on port 9080
[nodemon] restarting due to changes...
[nodemon] starting `node ./server/bin/start.js`
Successfully connected to Redis server
Successfully connected to MongoDB
shopper listening on port 9080
Not implemented
[nodemon] restarting due to changes...
[nodemon] starting `node ./server/bin/start.js`
Successfully connected to Redis server
Successfully connected to MongoDB
shopper listening on port 9080
[nodemon] restarting due to changes...
[nodemon] restarting due to changes...
[nodemon] starting `node ./server/bin/start.js`
Successfully connected to Redis server
Successfully connected to MongoDB
shopper listening on port 9080
[nodemon] restarting due to changes...
[nodemon] starting `node ./server/bin/start.js`
Successfully connected to Redis server
Successfully connected to MongoDB
shopper listening on port 9080
[nodemon] restarting due to changes...
[nodemon] starting `node ./server/bin/start.js`
Successfully connected to Redis server
Successfully connected to MongoDB
shopper listening on port 9080
[nodemon] restarting due to changes...
[nodemon] starting `node ./server/bin/start.js`
Successfully connected to Redis server
Successfully connected to MongoDB
shopper listening on port 9080
[nodemon] restarting due to changes...
[nodemon] restarting due to changes...
[nodemon] starting `node ./server/bin/start.js`
Successfully connected to Redis server
Successfully connected to MongoDB
shopper listening on port 9080
[nodemon] restarting due to changes...
[nodemon] restarting due to changes...
[nodemon] starting `node ./server/bin/start.js`
Successfully connected to Redis server
Successfully connected to MongoDB
shopper listening on port 9080
[nodemon] restarting due to changes...
[nodemon] starting `node ./server/bin/start.js`
Successfully connected to Redis server
Successfully connected to MongoDB
shopper listening on port 9080
[nodemon] restarting due to changes...
[nodemon] starting `node ./server/bin/start.js`
Successfully connected to Redis server
Successfully connected to MongoDB
shopper listening on port 9080
[nodemon] restarting due to changes...
[nodemon] starting `node ./server/bin/start.js`
Successfully connected to Redis server
Successfully connected to MongoDB
shopper listening on port 9080
[nodemon] restarting due to changes...
[nodemon] starting `node ./server/bin/start.js`
Successfully connected to Redis server
Successfully connected to MongoDB
shopper listening on port 9080
[nodemon] restarting due to changes...
[nodemon] restarting due to changes...
[nodemon] starting `node ./server/bin/start.js`
Successfully connected to Redis server
Successfully connected to MongoDB
shopper listening on port 9080
[nodemon] restarting due to changes...
[nodemon] starting `node ./server/bin/start.js`
Successfully connected to Redis server
Successfully connected to MongoDB
shopper listening on port 9080
[nodemon] restarting due to changes...
[nodemon] starting `node ./server/bin/start.js`
C:\Users\gordo\Desktop\node-databases\shopper\server\app.js:51
                if()
                   ^

SyntaxError: Unexpected token ')'
    at internalCompileFunction (node:internal/vm:73:18)
    at wrapSafe (node:internal/modules/cjs/loader:1195:20)
    at Module._compile (node:internal/modules/cjs/loader:1239:27)
    at Module._extensions..js (node:internal/modules/cjs/loader:1329:10)
    at Module.load (node:internal/modules/cjs/loader:1133:32)
    at Module._load (node:internal/modules/cjs/loader:972:12)
    at Module.require (node:internal/modules/cjs/loader:1157:19)
    at require (node:internal/modules/helpers:119:18)
    at Object.<anonymous> (C:\Users\gordo\Desktop\node-databases\shopper\server\bin\start.js:8:13)
    at Module._compile (node:internal/modules/cjs/loader:1275:14)

Node.js v19.8.1
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node ./server/bin/start.js`
[nodemon] restarting due to changes...
[nodemon] starting `node ./server/bin/start.js`
Successfully connected to Redis server
Successfully connected to MongoDB
shopper listening on port 9080
[nodemon] restarting due to changes...
[nodemon] starting `node ./server/bin/start.js`
Successfully connected to Redis server
Successfully connected to MongoDB
shopper listening on port 9080
[nodemon] restarting due to changes...
[nodemon] restarting due to changes...
[nodemon] starting `node ./server/bin/start.js`
Successfully connected to Redis server
Successfully connected to MongoDB
shopper listening on port 9080
[nodemon] restarting due to changes...
[nodemon] starting `node ./server/bin/start.js`
Successfully connected to Redis server
Successfully connected to MongoDB
shopper listening on port 9080
[nodemon] restarting due to changes...
[nodemon] starting `node ./server/bin/start.js`
Successfully connected to Redis server
Successfully connected to MongoDB
shopper listening on port 9080
[nodemon] restarting due to changes...
[nodemon] starting `node ./server/bin/start.js`
Successfully connected to Redis server
Successfully connected to MongoDB
shopper listening on port 9080
[nodemon] restarting due to changes...
[nodemon] starting `node ./server/bin/start.js`
Successfully connected to Redis server
Successfully connected to MongoDB
shopper listening on port 9080
TypeError: BasketService.getAll is not a function
    at C:\Users\gordo\Desktop\node-databases\shopper\server\app.js:56:40
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
TypeError: BasketService.getAll is not a function
    at C:\Users\gordo\Desktop\node-databases\shopper\server\app.js:56:40
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
TypeError: BasketService.getAll is not a function
    at C:\Users\gordo\Desktop\node-databases\shopper\server\app.js:56:40
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
TypeError: BasketService.getAll is not a function
    at C:\Users\gordo\Desktop\node-databases\shopper\server\app.js:56:40
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
TypeError: BasketService.getAll is not a function
    at C:\Users\gordo\Desktop\node-databases\shopper\server\app.js:56:40
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
TypeError: BasketService.getAll is not a function
    at C:\Users\gordo\Desktop\node-databases\shopper\server\app.js:56:40
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
[nodemon] restarting due to changes...
[nodemon] starting `node ./server/bin/start.js`
Successfully connected to Redis server
Successfully connected to MongoDB
shopper listening on port 9080
[nodemon] restarting due to changes...
[nodemon] starting `node ./server/bin/start.js`
Successfully connected to Redis server
Successfully connected to MongoDB
shopper listening on port 9080
[nodemon] restarting due to changes...
[nodemon] restarting due to changes...
[nodemon] starting `node ./server/bin/start.js`
Successfully connected to Redis server
Successfully connected to MongoDB
shopper listening on port 9080
[nodemon] restarting due to changes...
[nodemon] restarting due to changes...
[nodemon] starting `node ./server/bin/start.js`
Successfully connected to Redis server
Successfully connected to MongoDB
shopper listening on port 9080
[nodemon] restarting due to changes...
[nodemon] starting `node ./server/bin/start.js`
Successfully connected to MongoDB

gordo@Webelistics□ MINGW64 ~/Desktop/node-databases/shopper (development)
$ npm run dev

> shopper@0.0.0 dev
> nodemon ./server/bin/start

[nodemon] 2.0.22
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node ./server/bin/start.js`
Successfully connected to Redis server
Successfully connected to MongoDB
shopper listening on port 9080
[nodemon] restarting due to changes...
[nodemon] starting `node ./server/bin/start.js`
Successfully connected to Redis server
Successfully connected to MongoDB
shopper listening on port 9080
[nodemon] restarting due to changes...
[nodemon] restarting due to changes...
[nodemon] starting `node ./server/bin/start.js`
C:\Users\gordo\Desktop\node-databases\shopper\server\app.js:8
const BasketService = require('./services/BasketService.js');const UIserService
                                                                   ^^^^^^^^^^^^

SyntaxError: Missing initializer in const declaration
    at internalCompileFunction (node:internal/vm:73:18)
    at wrapSafe (node:internal/modules/cjs/loader:1195:20)
    at Module._compile (node:internal/modules/cjs/loader:1239:27)
    at Module._extensions..js (node:internal/modules/cjs/loader:1329:10)
    at Module.load (node:internal/modules/cjs/loader:1133:32)
    at Module._load (node:internal/modules/cjs/loader:972:12)
    at Module.require (node:internal/modules/cjs/loader:1157:19)
    at require (node:internal/modules/helpers:119:18)
    at Object.<anonymous> (C:\Users\gordo\Desktop\node-databases\shopper\server\bin\start.js:8:13)
    at Module._compile (node:internal/modules/cjs/loader:1275:14)

Node.js v19.8.1
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node ./server/bin/start.js`
C:\Users\gordo\Desktop\node-databases\shopper\server\app.js:9
const UserService = require('./services/UserService.js');
      ^

SyntaxError: Identifier 'UserService' has already been declared
    at internalCompileFunction (node:internal/vm:73:18)
    at wrapSafe (node:internal/modules/cjs/loader:1195:20)
    at Module._compile (node:internal/modules/cjs/loader:1239:27)
    at Module._extensions..js (node:internal/modules/cjs/loader:1329:10)
    at Module.load (node:internal/modules/cjs/loader:1133:32)
    at Module._load (node:internal/modules/cjs/loader:972:12)
    at Module.require (node:internal/modules/cjs/loader:1157:19)
    at require (node:internal/modules/helpers:119:18)
    at Object.<anonymous> (C:\Users\gordo\Desktop\node-databases\shopper\server\bin\start.js:8:13)
    at Module._compile (node:internal/modules/cjs/loader:1275:14)

Node.js v19.8.1
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node ./server/bin/start.js`
[nodemon] restarting due to changes...
[nodemon] starting `node ./server/bin/start.js`
C:\Users\gordo\Desktop\node-databases\shopper\server\app.js:8
const UserService = require('./services/UserService.js');
      ^

SyntaxError: Identifier 'UserService' has already been declared
    at internalCompileFunction (node:internal/vm:73:18)
    at wrapSafe (node:internal/modules/cjs/loader:1195:20)
    at Module._compile (node:internal/modules/cjs/loader:1239:27)
    at Module._extensions..js (node:internal/modules/cjs/loader:1329:10)
    at Module.load (node:internal/modules/cjs/loader:1133:32)
    at Module._load (node:internal/modules/cjs/loader:972:12)
    at Module.require (node:internal/modules/cjs/loader:1157:19)
    at require (node:internal/modules/helpers:119:18)
    at Object.<anonymous> (C:\Users\gordo\Desktop\node-databases\shopper\server\bin\start.js:8:13)
    at Module._compile (node:internal/modules/cjs/loader:1275:14)

Node.js v19.8.1
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node ./server/bin/start.js`
Successfully connected to Redis server
Successfully connected to MongoDB
shopper listening on port 9080
[nodemon] restarting due to changes...
[nodemon] starting `node ./server/bin/start.js`
Successfully connected to Redis server
Successfully connected to MongoDB
shopper listening on port 9080
[nodemon] restarting due to changes...
[nodemon] starting `node ./server/bin/start.js`
Successfully connected to Redis server

```
