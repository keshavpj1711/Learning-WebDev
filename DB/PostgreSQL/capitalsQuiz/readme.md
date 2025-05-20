# How we do things in db?

So first of all we have created our own postgresql database locally and we plan onto use that only.

We created a flags_db with two tables one for capitals.csv and other for flags.csv

## Creating Tables

- First we opened the query tool for flags_db then 
we wrote the SQL queries in order to create the tables

```sql 
CREATE TABLE flags (
	id SERIAL PRIMARY KEY,
	name VARCHAR(45),
	flag TEXT
);
-- Similarly we can create other table
```

- Then we imported the csv files using the pgadmin tool(via docker) in order to work efficiently.

## Problems faced as an ARCH BTW user 😎

There are a few problems that i faced being an arch btw user.

- No official pgadmin4 gui present for arch 

- Have to use pgadmin4 through docker container

- Fiddling around with posgresql.conf file to connect the db to 
pgadmin since it was running in docker container rather than local machine


# Connecting our App to Database

```js
import pg from "pg";

const db = new pg.Client({
	user: 'username',
  host: 'localhost',
  database: 'postgres',
  password: 'yourpassword',
  port: 5432,
});

// After this you can make db queries
```