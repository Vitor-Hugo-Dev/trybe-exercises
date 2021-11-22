USE BeeMovies;

DELIMITER $$
CREATE TRIGGER insert_year
	BEFORE INSERT ON movies
	FOR EACH ROW
BEGIN
    SET NEW.release_year = YEAR(NOW());
END $$

DELIMITER ;

DELIMITER $$
CREATE TRIGGER insert_on_movie_log
	AFTER INSERT ON movies
    FOR EACH ROW
BEGIN
	INSERT INTO movies_logs (movie_id, executed_action, log_DATE)
    VALUES (NEW.movie_id, 'INSERT', NOW());
END $$
DELIMITER ;

SELECT* FROM movies_logs;

INSERT INTO movies (ticket_price, ticket_price_estimation)
VALUES ( 2, 2);
