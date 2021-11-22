SELECT * FROM sakila.film;
SELECT title FROM sakila.film;
SELECT COUNT(*) FROM sakila.film;

SELECt DISTINCT last_name FROM sakila.actor;

SELECt COUNT(DISTINCT last_name) AS nomes_unicos FROM sakila.actor;

SELECt first_name, last_name FROM sakila.actor
ORDER BY  first_name DESC, last_name DESC;

SELECT * FROM sakila.language LIMIT 5 OFFSET 1;

SELECT * FROM sakila.film;

SELECT 
    title, release_year, length, rating, replacement_cost
FROM
    sakila.film
ORDER BY length DESC, replacement_cost LIMIT 20;