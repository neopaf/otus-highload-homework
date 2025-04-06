## Prepare

Data [README.md](db/README.md).

```bash
docker run -p 3306:3306 -v $PWD/db:/var/lib/mysql-files --name paf-mysql -e MYSQL_ALLOW_EMPTY_PASSWORD=yes -d mysql:9.2.0
```

```bash
docker exec -it paf-mysql mysql -e "$(cat db/init.sql)"
 
```

```bash
docker exec -it paf-mysql mysql -e "$(cat db/load.sql)"
```


## Run

```bash
./gradlew bootRun
```

## One jar

```bash
./gradlew bootJar
```

