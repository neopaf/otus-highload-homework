create index user_by_names on paf_homework.user (second_name, first_name);

explain
select id,
       first_name,
       second_name,
       birthdate,
       biography,
       city,
       password_salt,
       password_hash
from paf_homework.`user`
where first_name like 'А%'
  and second_name like 'П%';

explain ANALYZE
select id,
       first_name,
       second_name,
       birthdate,
       biography,
       city,
       password_salt,
       password_hash
from paf_homework.`user`
where first_name like 'А%'
  and second_name like 'П%';