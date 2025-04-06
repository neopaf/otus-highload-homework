load DATA INFILE '/var/lib/mysql-files/people.csv'
    INTO TABLE paf_homework.user
    FIELDS TERMINATED BY ',' ENCLOSED BY '"'
    (first_name, second_name, birthdate, city);