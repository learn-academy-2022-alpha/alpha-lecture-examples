Database and PostgreSQL Queries 3/16/2022

PostgreSQL -

Relational database - rows and columns, Excel sheet
Structured Query Language - SQL, used to talk to databases
SQL - group or family of languages, domain-specific language
HTML, RSpec, SQL

PostgreSQL - object-oriented SQL language

PGAdmin - management tool for PostgreSQL databases
Any passwords for PGAdmin - SDlearn123

Queries - requests to the database

Get all the rows and all the columns from a particular table
SELECT * FROM country;

Limiting the number of columns:
SELECT name, continent, population
FROM country;

Add another query parameter to reduce the number of rows:
SELECT name, continent, population
FROM country
LIMIT 10;

WHERE - creating conditions
SELECT name, continent, population
FROM country
WHERE continent = 'North America';

SELECT name, continent, population
FROM country
WHERE continent != 'North America';

SELECT name, continent, population
FROM country
WHERE population < 1000000;


SELECT name, continent, population
FROM country
WHERE population < 1e6;


SELECT name, continent, population
FROM country
WHERE population < 1e6
AND continent = 'North America';

LIKE:
SELECT name, continent, population
FROM country
WHERE continent LIKE '%America%';


ORDER BY
SELECT name, region, indepyear
FROM country
ORDER BY indepyear
LIMIT 5;

Dealing with Null
SELECT name, region, indepyear
FROM country
WHERE indepyear IS NOT null
ORDER BY indepyear DESC
LIMIT 5;

10 most recently indep countries where Elisabeth is head of state
SELECT name, headofstate, indepyear
FROM country
WHERE headofstate LIKE '%Elisabeth%'
AND indepyear IS NOT null
ORDER BY indepyear DESC
LIMIT 10;

10 most densely populated countries with AS
SELECT name, population, surfacearea,
population / surfacearea AS density
FROM country
ORDER BY density DESC
LIMIT 10;
