SELECT language_id, MAX(replacement_cost) FROM sakila.film GROUP BY language_id;

SELECT rating, SUM(replacement_cost) FROM sakila.film GROUP BY rating;
