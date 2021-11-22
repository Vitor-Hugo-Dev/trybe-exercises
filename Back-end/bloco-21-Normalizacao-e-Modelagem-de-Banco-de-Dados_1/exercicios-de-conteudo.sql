CREATE INDEX index_first_name ON sakila.actor(first_name);

SELECT *
FROM sakila.actor
WHERE first_name = 'RITA';

DROP INDEX index_first_name ON sakila.actor;


CREATE FULLTEXT INDEX index_address ON sakila.address(address);

SELECT *
FROM sakila.address
WHERE MATCH(address) AGAINST('drive'); -- só posso usar os comandos de full-text( match, against) search em pesquisas com full text index?

DROP INDEX index_address ON sakila.address;

SELECT *
FROM sakila.address
WHERE address LIKE '%drive%'; -- oq seria esse query cost?

CREATE UNIQUE INDEX unique_name_index ON sakila.language(name);

SELECT *
FROM sakila.language
WHERE name = 'Mandarin';

DROP INDEX unique_name_index ON sakila.language;
