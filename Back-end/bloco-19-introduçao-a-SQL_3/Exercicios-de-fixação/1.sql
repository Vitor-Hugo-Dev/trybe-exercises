SELECT * FROM sakila.film
WHERE title <> 'ALIEN CENTER'
AND replacement_cost < 20
ORDER BY length ;

SELECT * FROM sakila.film
WHERE rating = 'G'
OR rating = 'PG'
OR rating = 'PG-13' 
LIMIT 20;

SELECT * FROM sakila.rental
WHERE return_date IS NULL
AND staff_id = 1; 

SELECT * FROM sakila.staff
WHERE active IS TRUE;

SELECT * FROM sakila.address
WHERE address2 IS NOT NULL;

SELECT * FROM sakila.film
WHERE title LIKE 'academy%';

SELECT * FROM sakila.payment
WHERE amount = 0.99 OR amount = 2.99 AND staff_id = 2;

SELECT * FROM sakila.payment
WHERE (amount = 0.99 OR amount = 2.99) AND staff_id = 2;