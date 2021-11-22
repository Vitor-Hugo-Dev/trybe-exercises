SELECT a.actor_id, a.first_name, f.film_id -- INNER JOIN
 FROM sakila.actor AS a
INNER JOIN sakila.film_actor AS f
ON a.actor_id = f.actor_id;

SELECT s.first_name, s.last_name, a.address 
FROM sakila.staff AS s
INNER JOIN sakila.address AS a
ON  s.address_id = a.address_id;

SELECT c.customer_id, c.first_name, c.email, a.address_id, a.address
FROM sakila.address AS a
INNER JOIN sakila.customer AS c
ON c.address_id = c.address_id
ORDER BY c.first_name DESC LIMIT 100;

SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM sakila.customer AS c
INNER JOIN sakila.actor AS a  -- trocar INNER por LEFT ou RIGHT
ON c.last_name = a.last_name
ORDER BY c.last_name;

SELECT t1.title, t1.replacement_cost, t2.title, t2.replacement_cost -- SELF JOIN (sem JOIN -,-)
FROM sakila.film AS t1, sakila.film AS t2
WHERE t1.length = t2.length
ORDER BY t1.title;

SELECT f1.film_id, f1.replacement_cost, f2.film_id, f2.replacement_cost 
FROM sakila.film AS f1, sakila.film AS f2 
WHERE f1.replacement_cost = f2.replacement_cost
ORDER BY f1.film_id LIMIT 100;

