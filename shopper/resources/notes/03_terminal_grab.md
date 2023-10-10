```bash

Successfully connected to MongoDB
shopper listening on port 9080
Successfully connected to Redis server
Executing (default): SELECT 1+1 AS result
Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'B
ASE TABLE' AND TABLE_NAME = 'Orders' AND TABLE_SCHEMA = 'shopper'
Successfully connected to MySQL server
Executing (default): SHOW INDEX FROM `Orders` FROM `shopper`
Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'B
ASE TABLE' AND TABLE_NAME = 'OrderItems' AND TABLE_SCHEMA = 'shopper'
Executing (default): SHOW INDEX FROM `OrderItems` FROM `shopper`
[nodemon] restarting due to changes...
[nodemon] starting `node ./server/bin/start.js`
Successfully connected to Redis server
Successfully connected to MongoDB
shopper listening on port 9080
Executing (default): SELECT 1+1 AS result
Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'B
ASE TABLE' AND TABLE_NAME = 'Orders' AND TABLE_SCHEMA = 'shopper'
Successfully connected to MySQL server
Executing (default): SHOW INDEX FROM `Orders` FROM `shopper`
Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'B
ASE TABLE' AND TABLE_NAME = 'OrderItems' AND TABLE_SCHEMA = 'shopper'
Executing (default): SHOW INDEX FROM `OrderItems` FROM `shopper`
[nodemon] restarting due to changes...
[nodemon] restarting due to changes...
[nodemon] starting `node ./server/bin/start.js`
Successfully connected to Redis server
Successfully connected to MongoDB
shopper listening on port 9080
Executing (default): SELECT 1+1 AS result
Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'B
ASE TABLE' AND TABLE_NAME = 'Orders' AND TABLE_SCHEMA = 'shopper'
Successfully connected to MySQL server
Executing (default): SHOW INDEX FROM `Orders` FROM `shopper`
Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'B
ASE TABLE' AND TABLE_NAME = 'OrderItems' AND TABLE_SCHEMA = 'shopper'
Executing (default): SHOW INDEX FROM `OrderItems` FROM `shopper`
[nodemon] restarting due to changes...
[nodemon] starting `node ./server/bin/start.js`
Successfully connected to Redis server
Successfully connected to MongoDB
shopper listening on port 9080
Executing (default): SELECT 1+1 AS result
Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'B
ASE TABLE' AND TABLE_NAME = 'Orders' AND TABLE_SCHEMA = 'shopper'
Successfully connected to MySQL server
Executing (default): SHOW INDEX FROM `Orders` FROM `shopper`
Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'B
ASE TABLE' AND TABLE_NAME = 'OrderItems' AND TABLE_SCHEMA = 'shopper'
Executing (default): SHOW INDEX FROM `OrderItems` FROM `shopper`
[nodemon] restarting due to changes...
[nodemon] starting `node ./server/bin/start.js`
Successfully connected to Redis server
Successfully connected to MongoDB
shopper listening on port 9080
Executing (default): SELECT 1+1 AS result
Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'B
ASE TABLE' AND TABLE_NAME = 'Orders' AND TABLE_SCHEMA = 'shopper'
Successfully connected to MySQL server
Executing (default): SHOW INDEX FROM `Orders` FROM `shopper`
Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'B
ASE TABLE' AND TABLE_NAME = 'OrderItems' AND TABLE_SCHEMA = 'shopper'
Executing (default): SHOW INDEX FROM `OrderItems` FROM `shopper`
[nodemon] restarting due to changes...
[nodemon] restarting due to changes...
[nodemon] starting `node ./server/bin/start.js`
Successfully connected to Redis server
Successfully connected to MongoDB
shopper listening on port 9080
Executing (default): SELECT 1+1 AS result
Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'B
ASE TABLE' AND TABLE_NAME = 'Orders' AND TABLE_SCHEMA = 'shopper'
Successfully connected to MySQL server
Executing (default): SHOW INDEX FROM `Orders` FROM `shopper`
Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'B
ASE TABLE' AND TABLE_NAME = 'OrderItems' AND TABLE_SCHEMA = 'shopper'
Executing (default): SHOW INDEX FROM `OrderItems` FROM `shopper`
[nodemon] restarting due to changes...
[nodemon] starting `node ./server/bin/start.js`
Successfully connected to Redis server
Successfully connected to MongoDB
shopper listening on port 9080
Executing (default): SELECT 1+1 AS result
Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'B
ASE TABLE' AND TABLE_NAME = 'Orders' AND TABLE_SCHEMA = 'shopper'
Successfully connected to MySQL server
Executing (default): SHOW INDEX FROM `Orders` FROM `shopper`
Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_NAME = 'OrderItems' AND TABLE_SCHEMA = 'shopper'
Executing (default): SHOW INDEX FROM `OrderItems` FROM `shopper`
[nodemon] restarting due to changes...
[nodemon] restarting due to changes...
[nodemon] starting `node ./server/bin/start.js`
Successfully connected to Redis server
Successfully connected to MongoDB
shopper listening on port 9080
Executing (default): SELECT 1+1 AS result
Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_NAME = 'Orders' AND TABLE_SCHEMA = 'shopper'
Successfully connected to MySQL server
Executing (default): SHOW INDEX FROM `Orders` FROM `shopper`
Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_NAME = 'OrderItems' AND TABLE_SCHEMA = 'shopper'
Executing (default): SHOW INDEX FROM `OrderItems` FROM `shopper`
[nodemon] restarting due to changes...
[nodemon] restarting due to changes...
[nodemon] starting `node ./server/bin/start.js`
C:\Users\gordo\Desktop\node-databases\shopper\server\routes\admin\orders\index.js:7
        const order = OrderService(config.mysql.client);
                      ^

TypeError: Class constructor OrderService cannot be invoked without 'new'
    at module.exports (C:\Users\gordo\Desktop\node-databases\shopper\server\routes\admin\orders\index.js:7:16)
    at module.exports (C:\Users\gordo\Desktop\node-databases\shopper\server\routes\index.js:20:31)
    at module.exports (C:\Users\gordo\Desktop\node-databases\shopper\server\app.js:74:15)
    at Object.<anonymous> (C:\Users\gordo\Desktop\node-databases\shopper\server\bin\start.js:53:13)
    at Module._compile (node:internal/modules/cjs/loader:1275:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1329:10)
    at Module.load (node:internal/modules/cjs/loader:1133:32)
    at Module._load (node:internal/modules/cjs/loader:972:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:83:12)
    at node:internal/main/run_main_module:23:47

Node.js v19.8.1
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node ./server/bin/start.js`
Successfully connected to Redis server
Successfully connected to MongoDB
shopper listening on port 9080
Executing (default): SELECT 1+1 AS result
Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_NAME = 'Orders' AND TABLE_SCHEMA = 'shopper'
Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_NAME = 'Orders' AND TABLE_SCHEMA = 'shopper'
Successfully connected to MySQL server
Executing (default): SHOW INDEX FROM `Orders` FROM `shopper`
Executing (default): SHOW INDEX FROM `Orders` FROM `shopper`
Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_NAME = 'OrderItems' AND TABLE_SCHEMA = 'shopper'
Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_NAME = 'OrderItems' AND TABLE_SCHEMA = 'shopper'
Executing (default): SHOW INDEX FROM `OrderItems` FROM `shopper`
Executing (default): SHOW INDEX FROM `OrderItems` FROM `shopper`
[nodemon] restarting due to changes...
[nodemon] starting `node ./server/bin/start.js`
Successfully connected to Redis server
Successfully connected to MongoDB
shopper listening on port 9080
Executing (default): SELECT 1+1 AS result
Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_NAME = 'Orders' AND TABLE_SCHEMA = 'shopper'
Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_NAME = 'Orders' AND TABLE_SCHEMA = 'shopper'
Successfully connected to MySQL server
Executing (default): SHOW INDEX FROM `Orders` FROM `shopper`
Executing (default): SHOW INDEX FROM `Orders` FROM `shopper`
Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_NAME = 'OrderItems' AND TABLE_SCHEMA = 'shopper'
Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_NAME = 'OrderItems' AND TABLE_SCHEMA = 'shopper'
Executing (default): SHOW INDEX FROM `OrderItems` FROM `shopper`
Executing (default): SHOW INDEX FROM `OrderItems` FROM `shopper`
[nodemon] restarting due to changes...
[nodemon] starting `node ./server/bin/start.js`
Successfully connected to Redis server
Successfully connected to MongoDB
shopper listening on port 9080
Executing (default): SELECT 1+1 AS result
Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_NAME = 'Orders' AND TABLE_SCHEMA = 'shopper'
Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_NAME = 'Orders' AND TABLE_SCHEMA = 'shopper'
Successfully connected to MySQL server
Executing (default): SHOW INDEX FROM `Orders` FROM `shopper`
Executing (default): SHOW INDEX FROM `Orders` FROM `shopper`
Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_NAME = 'OrderItems' AND TABLE_SCHEMA = 'shopper'
Executing (default): SHOW INDEX FROM `OrderItems` FROM `shopper`
Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_NAME = 'OrderItems' AND TABLE_SCHEMA = 'shopper'
Executing (default): SHOW INDEX FROM `OrderItems` FROM `shopper`
[nodemon] restarting due to changes...
[nodemon] starting `node ./server/bin/start.js`
Successfully connected to MongoDB
shopper listening on port 9080
Successfully connected to Redis server
Executing (default): SELECT 1+1 AS result
Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_NAME = 'Orders' AND TABLE_SCHEMA = 'shopper'
Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_NAME = 'Orders' AND TABLE_SCHEMA = 'shopper'
Successfully connected to MySQL server
Executing (default): SHOW INDEX FROM `Orders` FROM `shopper`
Executing (default): SHOW INDEX FROM `Orders` FROM `shopper`
Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_NAME = 'OrderItems' AND TABLE_SCHEMA = 'shopper'
Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_NAME = 'OrderItems' AND TABLE_SCHEMA = 'shopper'
Executing (default): SHOW INDEX FROM `OrderItems` FROM `shopper`
Executing (default): SHOW INDEX FROM `OrderItems` FROM `shopper`
[nodemon] restarting due to changes...
[nodemon] starting `node ./server/bin/start.js`
Successfully connected to Redis server
Successfully connected to MongoDB
shopper listening on port 9080
Executing (default): SELECT 1+1 AS result
Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_NAME = 'Orders' AND TABLE_SCHEMA = 'shopper'
Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_NAME = 'Orders' AND TABLE_SCHEMA = 'shopper'
Successfully connected to MySQL server
Executing (default): SHOW INDEX FROM `Orders` FROM `shopper`
Executing (default): SHOW INDEX FROM `Orders` FROM `shopper`
Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_NAME = 'OrderItems' AND TABLE_SCHEMA = 'shopper'
Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_NAME = 'OrderItems' AND TABLE_SCHEMA = 'shopper'
Executing (default): SHOW INDEX FROM `OrderItems` FROM `shopper`
Executing (default): SHOW INDEX FROM `OrderItems` FROM `shopper`
Executing (default): SELECT `Order`.`id`, `Order`.`userId`, `Order`.`email`, `Order`.`status`, `Order`.`createdAt`, `Order`.`updatedAt`, `OrderItems`.`id` AS `OrderItems.id`, `OrderItems`.`sku` AS `OrderItems.sku`, `OrderItems`.`qty` AS `OrderItems.qty`, `OrderItems`.`name` AS `OrderItems.name`, `OrderItems`.`price` AS `OrderItems.price`, `OrderItems`.`createdAt` AS `OrderItems.createdAt`, `OrderItems`.`updatedAt` AS `OrderItems.updatedAt`, `OrderItems`.`OrderId` AS `OrderItems.OrderId` FROM `Orders` AS `Order` LEFT OUTER JOIN `OrderItems`
AS `OrderItems` ON `Order`.`id` = `OrderItems`.`OrderId`;
Executing (default): SELECT `Order`.`id`, `Order`.`userId`, `Order`.`email`, `Order`.`status`, `Order`.`createdAt`, `Order`.`updatedAt`, `OrderItems`.`id` AS `OrderItems.id`, `OrderItems`.`sku` AS `OrderItems.sku`, `OrderItems`.`qty` AS `OrderItems.qty`, `OrderItems`.`name` AS `OrderItems.name`, `OrderItems`.`price` AS `OrderItems.price`, `OrderItems`.`createdAt` AS `OrderItems.createdAt`, `OrderItems`.`updatedAt` AS `OrderItems.updatedAt`, `OrderItems`.`OrderId` AS `OrderItems.OrderId` FROM `Orders` AS `Order` LEFT OUTER JOIN `OrderItems`
AS `OrderItems` ON `Order`.`id` = `OrderItems`.`OrderId`;
Executing (default): SELECT `Order`.`id`, `Order`.`userId`, `Order`.`email`, `Order`.`status`, `Order`.`createdAt`, `Order`.`updatedAt`, `OrderItems`.`id` AS `OrderItems.id`, `OrderItems`.`sku` AS `OrderItems.sku`, `OrderItems`.`qty` AS `OrderItems.qty`, `OrderItems`.`name` AS `OrderItems.name`, `OrderItems`.`price` AS `OrderItems.price`, `OrderItems`.`createdAt` AS `OrderItems.createdAt`, `OrderItems`.`updatedAt` AS `OrderItems.updatedAt`, `OrderItems`.`OrderId` AS `OrderItems.OrderId` FROM `Orders` AS `Order` LEFT OUTER JOIN `OrderItems`
AS `OrderItems` ON `Order`.`id` = `OrderItems`.`OrderId`;
Executing (d90e5989-b03d-4000-b0ca-6111ae42d19a): START TRANSACTION;
Executing (d90e5989-b03d-4000-b0ca-6111ae42d19a): INSERT INTO `Orders` (`id`,`userId`,`email`,`status`,`createdAt`,`updatedAt`) VALUES (DEFAULT,?,?,?,?,?);
Executing (default): INSERT INTO `OrderItems` (`id`,`sku`,`qty`,`name`,`price`,`createdAt`,`updatedAt`) VALUES (DEFAULT,?,?,?,?,?,?);
Executing (default): INSERT INTO `OrderItems` (`id`,`sku`,`qty`,`name`,`price`,`createdAt`,`updatedAt`) VALUES (DEFAULT,?,?,?,?,?,?);
Executing (default): INSERT INTO `OrderItems` (`id`,`sku`,`qty`,`name`,`price`,`createdAt`,`updatedAt`) VALUES (DEFAULT,?,?,?,?,?,?);
Executing (d90e5989-b03d-4000-b0ca-6111ae42d19a): UPDATE `OrderItems` SET `OrderId`=?,`updatedAt`=? WHERE `id` IN (1)
Executing (d90e5989-b03d-4000-b0ca-6111ae42d19a): UPDATE `OrderItems` SET `OrderId`=?,`updatedAt`=? WHERE `id` IN (3)
Executing (d90e5989-b03d-4000-b0ca-6111ae42d19a): UPDATE `OrderItems` SET `OrderId`=?,`updatedAt`=? WHERE `id` IN (2)
Executing (d90e5989-b03d-4000-b0ca-6111ae42d19a): COMMIT;
Executing (default): SELECT `Order`.`id`, `Order`.`userId`, `Order`.`email`, `Order`.`status`, `Order`.`createdAt`, `Order`.`updatedAt`, `OrderItems`.`id` AS `OrderItems.id`, `OrderItems`.`sku` AS `OrderItems.sku`, `OrderItems`.`qty` AS `OrderItems.qty`, `OrderItems`.`name` AS `OrderItems.name`, `OrderItems`.`price` AS `OrderItems.price`, `OrderItems`.`createdAt` AS `OrderItems.createdAt`, `OrderItems`.`updatedAt` AS `OrderItems.updatedAt`, `OrderItems`.`OrderId` AS `OrderItems.OrderId` FROM `Orders` AS `Order` LEFT OUTER JOIN `OrderItems`
AS `OrderItems` ON `Order`.`id` = `OrderItems`.`OrderId`;
Executing (5fa122fd-8549-4108-9080-2cba7fc0e737): START TRANSACTION;
Executing (5fa122fd-8549-4108-9080-2cba7fc0e737): INSERT INTO `Orders` (`id`,`userId`,`email`,`status`,`createdAt`,`updatedAt`) VALUES (DEFAULT,?,?,?,?,?);
Executing (default): INSERT INTO `OrderItems` (`id`,`sku`,`qty`,`name`,`price`,`createdAt`,`updatedAt`) VALUES (DEFAULT,?,?,?,?,?,?);
Executing (default): INSERT INTO `OrderItems` (`id`,`sku`,`qty`,`name`,`price`,`createdAt`,`updatedAt`) VALUES (DEFAULT,?,?,?,?,?,?);
Executing (5fa122fd-8549-4108-9080-2cba7fc0e737): UPDATE `OrderItems` SET `OrderId`=?,`updatedAt`=? WHERE `id` IN (4)
Executing (5fa122fd-8549-4108-9080-2cba7fc0e737): UPDATE `OrderItems` SET `OrderId`=?,`updatedAt`=? WHERE `id` IN (5)
Executing (5fa122fd-8549-4108-9080-2cba7fc0e737): COMMIT;
Executing (default): SELECT `Order`.`id`, `Order`.`userId`, `Order`.`email`, `Order`.`status`, `Order`.`createdAt`, `Order`.`updatedAt`, `OrderItems`.`id` AS `OrderItems.id`, `OrderItems`.`sku` AS `OrderItems.sku`, `OrderItems`.`qty` AS `OrderItems.qty`, `OrderItems`.`name` AS `OrderItems.name`, `OrderItems`.`price` AS `OrderItems.price`, `OrderItems`.`createdAt` AS `OrderItems.createdAt`, `OrderItems`.`updatedAt` AS `OrderItems.updatedAt`, `OrderItems`.`OrderId` AS `OrderItems.OrderId` FROM `Orders` AS `Order` LEFT OUTER JOIN `OrderItems`
AS `OrderItems` ON `Order`.`id` = `OrderItems`.`OrderId`;
Executing (default): UPDATE `Orders` SET `status`=?,`updatedAt`=? WHERE `id` = ?
Executing (default): SELECT `Order`.`id`, `Order`.`userId`, `Order`.`email`, `Order`.`status`, `Order`.`createdAt`, `Order`.`updatedAt`, `OrderItems`.`id` AS `OrderItems.id`, `OrderItems`.`sku` AS `OrderItems.sku`, `OrderItems`.`qty` AS `OrderItems.qty`, `OrderItems`.`name` AS `OrderItems.name`, `OrderItems`.`price` AS `OrderItems.price`, `OrderItems`.`createdAt` AS `OrderItems.createdAt`, `OrderItems`.`updatedAt` AS `OrderItems.updatedAt`, `OrderItems`.`OrderId` AS `OrderItems.OrderId` FROM `Orders` AS `Order` LEFT OUTER JOIN `OrderItems`
AS `OrderItems` ON `Order`.`id` = `OrderItems`.`OrderId`;
Executing (default): UPDATE `Orders` SET `status`=?,`updatedAt`=? WHERE `id` = ?
Executing (default): SELECT `Order`.`id`, `Order`.`userId`, `Order`.`email`, `Order`.`status`, `Order`.`createdAt`, `Order`.`updatedAt`, `OrderItems`.`id` AS `OrderItems.id`, `OrderItems`.`sku` AS `OrderItems.sku`, `OrderItems`.`qty` AS `OrderItems.qty`, `OrderItems`.`name` AS `OrderItems.name`, `OrderItems`.`price` AS `OrderItems.price`, `OrderItems`.`createdAt` AS `OrderItems.createdAt`, `OrderItems`.`updatedAt` AS `OrderItems.updatedAt`, `OrderItems`.`OrderId` AS `OrderItems.OrderId` FROM `Orders` AS `Order` LEFT OUTER JOIN `OrderItems`

gordo@Webelistics□ MINGW64 ~/Desktop/node-databases/shopper (development)
$




```
