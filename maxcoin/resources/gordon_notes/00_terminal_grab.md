```bash


gordo@Webelistics□ MINGW64 ~/Desktop/node-databases (development)
$ docker pull mysql
Using default tag: latest
latest: Pulling from library/mysql
5262579e8e45: Pull complete
bfcc921068b5: Pull complete
072a02315ab1: Pull complete
711d47be56b4: Pull complete
755e67622a77: Pull complete
0080a11112d1: Pull complete

gordo@Webelistics□ MINGW64 ~/Desktop/node-databases (development)
$ docker run --name mysql -p 3406:3306 -e MYSQL_ROOT_PASSWORD=mypassword -d mysql
8761612bf35cdfbfa73c81bb9062cd783d61754b4338c500c0f6f90cf1831549

gordo@Webelistics□ MINGW64 ~/Desktop/node-databases/maxcoin (development)
$ npm i mysql2

added 11 packages, and audited 255 packages in 2m

29 packages are looking for funding
  run `npm fund` for details

6 vulnerabilities (3 moderate, 3 high)

To address issues that do not require attention, run:
  npm audit fix

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.

gordo@Webelistics□ MINGW64 ~/Desktop/node-databases/maxcoin (development)
$ npm audit fix --force
npm WARN using --force Recommended protections disabled.
npm WARN audit Updating docker to 1.0.0,which is a SemVer major change.
npm WARN deprecated source-map-url@0.4.1: See https://github.com/lydell/source-map-url#deprecated
npm WARN deprecated urix@0.1.0: Please see https://github.com/lydell/urix#deprecated
npm WARN deprecated cryptiles@2.0.5: This version has been deprecated in accordance with the hapi support policy (hapi.im/support). Please upgrade to the latest version to get the best features, bug fixes, and security patches. If you are unable to upgrade at this time, paid support is available for older versions (hapi.im/commercial).
npm WARN deprecated source-map-resolve@0.5.3: See https://github.com/lydell/source-map-resolve#deprecated
npm WARN deprecated resolve-url@0.2.1: https://github.com/lydell/resolve-url#deprecated
npm WARN deprecated boom@2.10.1: This version has been deprecated in accordance with the hapi support policy (hapi.im/support). Please upgrade to the latest version to get the best features, bug fixes, and security patches. If you are unable to upgrade at this time, paid support is available for older versions (hapi.im/commercial).
npm WARN deprecated sntp@1.0.9: This module moved to @hapi/sntp. Please make sure to switch over as this distribution is no longer supported and may contain bugs and critical security issues.
npm WARN deprecated hoek@2.16.3: This version has been deprecated in accordance with the hapi support policy (hapi.im/support). Please upgrade to the latest version to get the best features, bug fixes, and security patches. If you are unable to upgrade at this time, paid support is available for older versions (hapi.im/commercial).
npm WARN deprecated request@2.81.0: request has been deprecated, see https://github.com/request/request/issues/3142
npm WARN deprecated uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
npm WARN deprecated har-validator@4.2.1: this library is no longer supported
npm WARN deprecated hawk@3.1.3: This module moved to @hapi/hawk. Please make sure to switch over as this distribution is no longer supported and may contain bugs and critical security issues.
npm WARN deprecated highlight.js@9.18.5: Support has ended for 9.x series. Upgrade to @latest

added 102 packages, removed 15 packages, changed 10 packages, and audited 342 packages in 55s

44 packages are looking for funding
  run `npm fund` for details

# npm audit report

ajv  <6.12.3
Severity: moderate
Prototype Pollution in Ajv - https://github.com/advisories/GHSA-v88g-cgmw-v5xw
fix available via `npm audit fix`
node_modules/har-validator/node_modules/ajv
  har-validator  3.3.0 - 5.1.0
  Depends on vulnerable versions of ajv
  node_modules/har-validator
    request  *
    Depends on vulnerable versions of har-validator
    Depends on vulnerable versions of hawk
    Depends on vulnerable versions of tough-cookie
    node_modules/request
      less  1.4.0-b1 - 2.6.1 || 2.7.2 - 3.11.3
      Depends on vulnerable versions of request
      node_modules/less

cryptiles  <=4.1.1
Severity: critical
Insufficient Entropy in cryptiles - https://github.com/advisories/GHSA-rq8g-5pc5-wrhr
Depends on vulnerable versions of boom
fix available via `npm audit fix`
node_modules/cryptiles
  hawk  <=9.0.0
  Depends on vulnerable versions of boom
  Depends on vulnerable versions of cryptiles
  Depends on vulnerable versions of hoek
  Depends on vulnerable versions of sntp
  node_modules/hawk
    request  *
    Depends on vulnerable versions of har-validator
    Depends on vulnerable versions of hawk
    Depends on vulnerable versions of tough-cookie
    node_modules/request
      less  1.4.0-b1 - 2.6.1 || 2.7.2 - 3.11.3
      Depends on vulnerable versions of request
      node_modules/less

ejs  <3.1.7
Severity: critical
ejs template injection vulnerability - https://github.com/advisories/GHSA-phwq-j96m-2c2q
fix available via `npm audit fix --force`
Will install docker@0.2.14, which is a breaking change
node_modules/ejs
  docker  >=1.0.0-alpha.1
  Depends on vulnerable versions of ejs
  node_modules/docker

hawk  <=9.0.0
Severity: critical
Uncontrolled Resource Consumption in Hawk - https://github.com/advisories/GHSA-44pw-h2cw-w3vq
Depends on vulnerable versions of boom
Depends on vulnerable versions of cryptiles
Depends on vulnerable versions of hoek
Depends on vulnerable versions of sntp
fix available via `npm audit fix`
node_modules/hawk
  request  *
  Depends on vulnerable versions of har-validator
  Depends on vulnerable versions of hawk
  Depends on vulnerable versions of tough-cookie
  node_modules/request
    less  1.4.0-b1 - 2.6.1 || 2.7.2 - 3.11.3
    Depends on vulnerable versions of request
    node_modules/less

highlight.js  9.0.0 - 10.4.0
Severity: moderate
ReDOS vulnerabities: multiple grammars - https://github.com/advisories/GHSA-7wwv-vh3v-89cq
fix available via `npm audit fix`
node_modules/highlight.js

hoek  <4.2.1
Severity: high
Prototype Pollution in hoek - https://github.com/advisories/GHSA-jp4x-w63m-7wgm
fix available via `npm audit fix`
node_modules/hoek
  boom  <=3.1.2
  Depends on vulnerable versions of hoek
  node_modules/boom
    cryptiles  <=4.1.1
    Depends on vulnerable versions of boom
    node_modules/cryptiles
      hawk  <=9.0.0
      Depends on vulnerable versions of boom
      Depends on vulnerable versions of cryptiles
      Depends on vulnerable versions of hoek
      Depends on vulnerable versions of sntp
      node_modules/hawk
        request  *
        Depends on vulnerable versions of har-validator
        Depends on vulnerable versions of hawk
        Depends on vulnerable versions of tough-cookie
        node_modules/request
          less  1.4.0-b1 - 2.6.1 || 2.7.2 - 3.11.3
          Depends on vulnerable versions of request
          node_modules/less
  sntp  0.0.0 || 0.1.1 - 2.0.0
  Depends on vulnerable versions of hoek
  node_modules/sntp

lodash  <=4.17.20
Severity: critical
Regular Expression Denial of Service (ReDoS) in lodash - https://github.com/advisories/GHSA-x5rq-j2xg-h7qm
Prototype Pollution in lodash - https://github.com/advisories/GHSA-fvqr-27wr-82fm
Prototype Pollution in lodash - https://github.com/advisories/GHSA-p6mc-m468-83gw
Command Injection in lodash - https://github.com/advisories/GHSA-35jh-r3h4-6jhm
Prototype Pollution in lodash - https://github.com/advisories/GHSA-jf85-cpcp-j695
fix available via `npm audit fix`
node_modules/jsdoctypeparser/node_modules/lodash
node_modules/toc/node_modules/lodash
  jsdoctypeparser  1.2.0 - 2.0.0-alpha-5
  Depends on vulnerable versions of lodash
  node_modules/jsdoctypeparser
    dox  0.8.0 - 0.9.1
    Depends on vulnerable versions of jsdoctypeparser
    node_modules/dox
  toc  *
  Depends on vulnerable versions of lodash
  node_modules/toc

markdown-it  <12.3.2
Severity: moderate
Uncontrolled Resource Consumption in markdown-it - https://github.com/advisories/GHSA-6vfc-qv3f-vr6c
fix available via `npm audit fix`
node_modules/markdown-it

marked  <=4.0.9
Severity: high
Marked ReDoS due to email addresses being evaluated in quadratic time - https://github.com/advisories/GHSA-xf5p-87ch-gxw2
Inefficient Regular Expression Complexity in marked - https://github.com/advisories/GHSA-5v2h-r2cx-5xgj
fix available via `npm audit fix`
node_modules/marked

request  *
Severity: high
Server-Side Request Forgery in Request - https://github.com/advisories/GHSA-p8p7-x288-28g6
Depends on vulnerable versions of har-validator
Depends on vulnerable versions of hawk
Depends on vulnerable versions of tough-cookie
fix available via `npm audit fix`
node_modules/request
  less  1.4.0-b1 - 2.6.1 || 2.7.2 - 3.11.3
  Depends on vulnerable versions of request
  node_modules/less

slug  <=0.9.1
Severity: moderate
Regular Expression Denial of Service in slug - https://github.com/advisories/GHSA-jxqq-cqm6-pfq9
fix available via `npm audit fix`
node_modules/slug

tough-cookie  <4.1.3
Severity: moderate
tough-cookie Prototype Pollution vulnerability - https://github.com/advisories/GHSA-72xf-g2v4-qvf3
fix available via `npm audit fix`
node_modules/tough-cookie
  request  *
  Depends on vulnerable versions of har-validator
  Depends on vulnerable versions of hawk
  Depends on vulnerable versions of tough-cookie
  node_modules/request
    less  1.4.0-b1 - 2.6.1 || 2.7.2 - 3.11.3
    Depends on vulnerable versions of request
    node_modules/less

20 vulnerabilities (7 moderate, 8 high, 5 critical)

To address issues that do not require attention, run:
  npm audit fix

To address all issues (including breaking changes), run:
  npm audit fix --force

gordo@Webelistics□ MINGW64 ~/Desktop/node-databases/maxcoin (development)
$ npm audit fix --force
npm WARN using --force Recommended protections disabled.
npm WARN audit Updating docker to 0.2.14,which is a SemVer major change.
npm WARN deprecated mkdirp@0.3.5: Legacy versions of mkdirp are no longer supported. Please update to mkdirp 1.x. (Note that the API surface has changed to use Promises in 1.x.)
npm WARN deprecated mkdirp@0.3.2: Legacy versions of mkdirp are no longer supported. Please update to mkdirp 1.x. (Note that the API surface has changed to use Promises in 1.x.)
npm WARN deprecated pygmentize-bundled@2.1.1: no longer maintained

added 15 packages, removed 102 packages, changed 10 packages, and audited 255 packages in 12s

29 packages are looking for funding
  run `npm fund` for details

# npm audit report

bl  <=1.2.2
Severity: moderate
Memory Exposure in bl - https://github.com/advisories/GHSA-wrw9-m778-g6mc
Remote Memory Exposure in bl - https://github.com/advisories/GHSA-pp7h-53gx-mx7r
fix available via `npm audit fix --force`
Will install docker@1.0.0, which is a breaking change
node_modules/bl
  pygmentize-bundled  >=2.0.0
  Depends on vulnerable versions of bl
  node_modules/pygmentize-bundled
    docker  0.2.10 - 0.2.14
    Depends on vulnerable versions of pygmentize-bundled
    node_modules/docker

getsetdeep  *
Severity: high
Prototype Pollution in getsetdeep - https://github.com/advisories/GHSA-8j49-49jq-vwcq
fix available via `npm audit fix`
node_modules/getsetdeep
  bal-util  1.18.0
  Depends on vulnerable versions of getsetdeep
  node_modules/bal-util
    Depends on vulnerable versions of bal-util
    node_modules/watchr

6 vulnerabilities (3 moderate, 3 high)

gordo@Webelistics□ MINGW64 ~/Desktop/node-databases/maxcoin (development)
$ npm start

> maxcoin@1.2.0 start
> node main.js

Connecting to MySQL...
Successfully connected to MySQL
MySQL-connect: 112.445ms
Inserting data into MySQL...
MySQL-insert: 4.334s
Inserted 1341 documents into MySQL
Querying MySQL...
MySQL-find: 5.743ms
Disconnecting from MySQL...
MySQL-disconnect: 0.47ms
{
  id: 1126,
  valuedate: 2021-11-08T05:00:00.000Z,
  coinvalue: '67544.87'
}

gordo@Webelistics□ MINGW64 ~/Desktop/node-databases/maxcoin (development)
$ npm start

> maxcoin@1.2.0 start
> node main.js

Connecting to MySQL...
Successfully connected to MySQL
MySQL-connect: 14.411ms
Inserting data into MySQL...
MySQL-insert: 4.222s
Inserted 1341 documents into MySQL
Querying MySQL...
MySQL-find: 4.986ms
Disconnecting from MySQL...
MySQL-disconnect: 0.441ms
{
  id: 1126,
  valuedate: 2021-11-08T05:00:00.000Z,
  coinvalue: '67544.87'
}

gordo@Webelistics□ MINGW64 ~/Desktop/node-databases/maxcoin (development)
$ npm start

> maxcoin@1.2.0 start
> node main.js

Connecting to MySQL...
Successfully connected to MySQL
MySQL-connect: 12.96ms
Inserting data into MySQL...
MySQL-insert: 3.091s
Inserted 1341 documents into MySQL
Querying MySQL...
MySQL-find: 5.451ms
Disconnecting from MySQL...
MySQL-disconnect: 0.459ms
{
  id: 1126,
  valuedate: 2021-11-08T05:00:00.000Z,
  coinvalue: '67544.87'
}

gordo@Webelistics□ MINGW64 ~/Desktop/node-databases/maxcoin (development)
$ npm start

> maxcoin@1.2.0 start
> node main.js

Connecting to MySQL...
Successfully connected to MySQL
MySQL-connect: 14.184ms
Inserting data into MySQL...
MySQL-insert: 1.519s
Inserted 1341 documents into MySQL
Querying MySQL...
MySQL-find: 4.791ms
Disconnecting from MySQL...
MySQL-disconnect: 0.482ms
{
  id: 1126,
  valuedate: 2021-11-08T05:00:00.000Z,
  coinvalue: '67544.87'
}

gordo@Webelistics□ MINGW64 ~/Desktop/node-databases/maxcoin (development)
$


```
