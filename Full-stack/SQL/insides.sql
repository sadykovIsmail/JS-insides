
-- 1) Primary Key
-- What: Uniquely identifies each row in a table.
-- Why: Prevents duplicates and allows easy reference.

-- sql
-- CREATE TABLE users (
--   id SERIAL PRIMARY KEY,
--   name VARCHAR(100)
-- );
-- 2) Foreign Key
-- What: Links a row in one table to a row in another table (reference).
-- Why: Helps define relationships between tables.

-- sql
-- CREATE TABLE posts (
--   id SERIAL PRIMARY KEY,
--   content TEXT,
--   user_id INTEGER REFERENCES users(id)
-- );
-- 3) 🧱 Schema
-- What: Structure or blueprint of your database (tables, columns, relationships).
-- Why: Organizes data properly and defines rules.

-- Example: The layout/definition of all your tables and their column types.

-- 4) 🟩 SELECT
-- What: Retrieves data from a table.
-- Why: Used for querying and displaying data.

-- sqlь
-- SELECT name FROM users;

-- 5)🧩 WHERE
-- What: Filters rows that match a condition.
-- Why: To get specific data only.

-- sql
-- SELECT * FROM users WHERE id > 3;

-- 6)🔍 LIKE
-- What: Searches with pattern matching.
-- Why: Useful for partial matches (e.g., search boxes).

-- sql
-- SELECT * FROM users WHERE name LIKE 'A%';

-- 7)🚫 DISTINCT
-- What: Removes duplicate values.
-- Why: When you only want unique results.

-- sql
-- SELECT DISTINCT name FROM users;

--8) ➕ INSERT
-- What: Adds new data.
-- Why: To populate tables with information.

-- sql
-- INSERT INTO users (name) VALUES ('Alice');

-- 9)✏️ UPDATE
-- What: Changes existing data.
-- Why: Fix or update values.

-- sql
-- UPDATE users SET name = 'Bob' WHERE id = 2;

-- 10)❌ DELETE
-- What: Removes data.
-- Why: Clean up unnecessary or wrong entries.

-- sql
-- DELETE FROM users WHERE id = 3;

-- 11) JOIN
-- What: Combines data from multiple tables.
-- Why: To use related data across tables.

-- sql
-- SELECT users.name, posts.content
-- FROM users
-- JOIN posts ON users.id = posts.user_id;

-- 12) 🧠 GROUP BY
-- What: Groups rows sharing the same value and aggregates them.
-- Why: For stats or summaries (e.g., totals per user).

-- Think of it like sorting by a category and computing something for each group.

-- sql
-- SELECT user_id, COUNT(*) AS post_count
-- FROM posts
-- GROUP BY user_id;

-- 13) 📊 HAVING
-- What: Filters groups after GROUP BY.
-- Why: When you want conditions on aggregate results.

-- sql
-- SELECT user_id, COUNT(*) AS post_count
-- FROM posts
-- GROUP BY user_id
-- HAVING COUNT(*) > 5;

-- 14) 📈 Aggregate Functions
-- These summarize data:

-- COUNT() — how many

-- SUM() — total

-- AVG() — average

-- MIN() / MAX() — smallest/largest

-- sql
-- SELECT COUNT(*) FROM users;
-- SELECT AVG(age) FROM users;

-- 15) 🧠 Indexes
-- What: Speed up searches.
-- Why: Makes querying faster on large datasets.

-- sql
-- CREATE INDEX idx_email ON users(email);

-- 16) SELECT * FROM friends_of_pickles WHERE species IN ('cat', 'human'); would return the friends_of_pickles that are either a cat or a human.

-- To find rows that are not in a list, you use NOT IN instead of IN

-- 17) to sort SELECT * FROM friends_of_pickles ORDER BY name;. That returns the names in ascending alphabetical order. 
-- SELECT * FROM friends_of_pickles ORDER BY  height_cm DESC; returns from in descending from 10 to 1

-- 18)If you wanted to see the two shortest friends_of_pickles, you would run: SELECT * FROM friends_of_pickles ORDER BY height_cm LIMIT 2;

-- 19) Nested quiries SELECT * FROM family_members WHERE num_books_read = (SELECT MAX(num_books_read) FROM family_members)

-- 20) SELECT * FROM family_members WHERE favorite_book IS NOT NULL returns if it is not null

-- 21) SELECT character.name, character_actor.actor_name
-- FROM character 
-- INNER JOIN character_actor 
-- ON character .id = character_actor.character_id inner join 

-- 21) SELECT character.name, tv_show.name
-- FROM character
-- INNER JOIN character_tv_show
-- ON character.id = character_tv_show.character_id
-- INNER JOIN tv_show
-- ON character_tv_show.tv_show_id = tv_show.id;

-- 22) inner join using with WHERE SELECT character.name, tv_show.name
-- FROM character 
-- INNER JOIN character_tv_show
-- ON character.id = character_tv_show.character_id
-- INNER JOIN tv_show
-- ON character_tv_show.tv_show_id = tv_show.id WHERE character.name != 'Willow Rosenberg' AND tv_show.name != 'How I Met Your Mother'