create database paf_homework;
use paf_homework;

create table user
(
    id char(36) primary key,
    first_name varchar(100) comment 'Имя',
    second_name varchar(100) comment 'Фамилия',
    birthdate date comment 'Дата рождения',
    biography varchar(5000) comment 'Хобби, интересы и т.п.',
    city varchar(100) comment 'Москва, ...',
    password_salt char(10) comment 'random',
    password_hash char(32) comment 'md5(concat(Секретная строка,salt))'
);


