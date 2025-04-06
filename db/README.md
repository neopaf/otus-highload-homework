```bash
mkdir raw
curl https://raw.githubusercontent.com/OtusTeam/highload/master/homework/people.v2.csv -o raw/people.csv
```
```bash
cat raw/people.csv | sed 's/ /,/' > people.csv
```

