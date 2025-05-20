# WHERE 

## WHERE WITH LOGICAL OPERATORS

```sql
SELECT country, rice_production from world_food where rice_production >= 10;
```
We can use other logical operators like =, <=, >= and not equal to.

## WHERE WITH LIKE: Usually used for pattern matching

```sql
Select country from world_food where country like 'U' || '%';
```
Basically this pipe symbol adds `U` with `%` which searches for all the coutries starting with U.

In SQL `||` is used to concatenate whereas in other languages it's used as OR.
Here we could have directly written `U%` but at later stages you will understand why we use this format

