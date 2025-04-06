## How was generated

```
#do not start now, it will break things
openapi-generator generate -i input/openapi.json  -g spring --model-package ru.paf.highload.model --api-package ru.paf.highload.api --invoker-package ru.paf.highload.invoker --additional-properties=useSpringBoot3=true
rm pom.xml
```

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

## View

You can view the api documentation here
http://localhost:8080/swagger-ui.html
