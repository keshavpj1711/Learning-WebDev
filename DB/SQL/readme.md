# Starting Out 

To get familiar with any database the first thing to do is doing CRUD.

# Create

## Creating a Table

```sql
CREATE TABLE table_name (
    column1 datatype,
    column2 datatype,
    column3 datatype,
   ....
);
```

Now we would like one of the column to be primary key, see example

```sql
CREATE TABLE Products (
  id INT NOT NULL,
  name STRING,
  price MONEY,
  PRIMARY KEY (id)
);
```

## Inserting values in Table

There are 2 ways of doing this

- If you don't know the order of the columns.
  - These are also used when you only want to add data to specific columns and keep others NULL.
  ```sql
  INSERT INTO table_name (column1, column2, column3, ...)
  VALUES (value1, value2, value3, ...); 
  ```

- If you know the order of the columns

  ```sql
  INSERT INTO table_name (column1, column2, column3, ...)
  VALUES (value1, value2, value3, ...); 
  ```

# Read

## Selecting columns without any arguments

The keyword used to read data from table is `SELECT`.

```sql 
SELECT column1, column2, ...
FROM table_name;
```

> When you want to read all the columns from a table we use `*` instead of column names.

### Selecting all columns

```sql 
SELECT * FROM table_name;
```

## Selecting columns with constraints

Now many a times we require only specific data, or say data with constraints.

### WHERE

When we want to select data where: 
- say a column has a specific value 
- or say data for that column is between certain value etc

```sql 
SELECT column1, column2, ...
FROM table_name
WHERE condition;
```

For example:

```sql
SELECT * FROM Customers
WHERE Country='Mexico'; 
```

### DISTINCT

```sql 
SELECT DISTINCT column1, column2, ...
FROM table_name;
```

# Update

## UPDATE

used to modify the existing records in a table.

```sql 
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition; 
```

## ALTER

- used to add, delete, or modify columns in an existing table
- used to add and drop various constraints on an existing table

### ALTER TABLE - ADD Column

```sql 
ALTER TABLE table_name
ADD column_name datatype;
```

>There's more to ALTER than this and for learning more about what it can do 
>refer to it's documentation from w3schools or some place with good sql docs.


# Delete

## DELETE

delete existing records in a table

```sql 
DELETE FROM table_name WHERE condition;
```

> Be careful when deleting records in a table! Notice the `WHERE` clause in the `DELETE` statement. The `WHERE` clause specifies which record(s) should be deleted. If you omit the `WHERE` clause, all records in the table will be deleted!


