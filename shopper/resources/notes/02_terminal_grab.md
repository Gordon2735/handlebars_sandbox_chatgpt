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

gordo@Webelistics□ MINGW64 ~/Desktop/node-databases (development)
$ docker ps
CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS         PORTS
                           NAMES
8761612bf35c   mysql     "docker-entrypoint.s…"   14 seconds ago   Up 7 seconds   33060/tcp, 0.0.0.0:3406->3306/tcp   mysql
e6b1f6d9b77f   redis     "docker-entrypoint.s…"   8 hours ago      Up 8 hours     0.0.0.0:7379->6379/tcp              redis
e4c14b81612d   mongo     "docker-entrypoint.s…"   8 hours ago      Up 8 hours     0.0.0.0:37017->27017/tcp            mongodb

gordo@Webelistics□ MINGW64 ~/Desktop/node-databases (development)

```
