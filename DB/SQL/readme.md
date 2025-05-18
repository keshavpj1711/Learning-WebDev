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


# Relationships in SQL Databases

## Primary Key

The PRIMARY KEY constraint uniquely identifies each record in a table.

Primary keys must contain UNIQUE values, and cannot contain NULL values.

### MySQL:

```sql
CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    PRIMARY KEY (ID)
); 
```

### SQL Server / Oracle / MS Access

```sql
CREATE TABLE Persons (
    ID int NOT NULL PRIMARY KEY,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int
); 
```

A table can have only ONE primary key; and in the table, this primary key can consist of single or multiple columns (fields).

To see the above point much clearly refer to the example below

```sql
CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    CONSTRAINT PK_Person PRIMARY KEY (ID,LastName)
); 
```

>In the example above there is only **ONE PRIMARY KEY (PK_Person)**. However, the **VALUE of the primary key is made up of TWO COLUMNS** (ID + LastName).

## Foriegn Key

A FOREIGN KEY is a field (or collection of fields) in one table, that refers to the PRIMARY KEY in another table.

The table with the foreign key is called the child table, and the table with the primary key is called the referenced or parent table.

## INNER JOIN

The INNER JOIN command returns rows that have matching values in both tables.

Example: 

```sql 
SELECT Orders.OrderID, Customers.CustomerName 
--These are the column s we would like in our joined table that would be visible
FROM Orders
INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID; 
```

>The INNER JOIN keyword selects all rows from both tables as long as there is a match between the columns. 
>
>If there are records in the "Orders" table that do not have matches in "Customers", these orders will not be shown!

