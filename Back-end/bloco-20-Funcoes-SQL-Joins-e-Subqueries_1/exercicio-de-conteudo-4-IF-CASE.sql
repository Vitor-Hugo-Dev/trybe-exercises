SELECT 
    film_id,
    title,
    IF(title = 'ACE GOLDFINGER',
        'Já assisti a esse filme',
        'Não conheço o filme') AS 'conheço o filme?'
FROM sakila.film;

SELECT title, rating, 
	CASE
	WHEN rating = 'G' THEN 'Livre para todos'
    WHEN rating = 'PG' THEN 'Não recomendamos para menores de 10 anos'
    WHEN rating = 'PG-13' THEN 'Não recomendamos para menores de 13 anos'
    WHEN rating = 'R' THEN 'não recomendamos para menores de 13 anos'
    ELSE 'Proibido para menores de idade'
END AS valor
FROM sakila.film
LIMIT 10;