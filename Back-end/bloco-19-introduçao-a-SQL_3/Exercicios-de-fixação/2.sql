SELECT * FROM sakila.customer
WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';

SELECT CONCAT(first_name, ' ', last_name) AS Clientes FROM sakila.customer
WHERE active = 0
AND store_id = 2
AND first_name <> 'KENNETH'
ORDER BY first_name ASC;

SELECT title, description, release_year, replacement_cost FROM sakila.film
WHERE replacement_cost >= '18,00'
AND rating = 'PG'
ORDER BY replacement_cost DESC, title 
LIMIT 100;

SELECT COUNT(*) FROM sakila.customer
WHERE active > 0
AND store_id = 1;

SELECT * from sakila.customer
WHERE active = 0
and store_id = 1;

SELECT * FROM sakila.film
WHERE rating = 'NC-17'
ORDER BY rental_rate, title
LIMIT 50;