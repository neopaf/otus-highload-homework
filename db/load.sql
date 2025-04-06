load DATA INFILE '/var/lib/mysql-files/people.csv'
    INTO TABLE paf_homework.user
    FIELDS TERMINATED BY ',' ENCLOSED BY '"'
    (second_name, first_name, birthdate, city);