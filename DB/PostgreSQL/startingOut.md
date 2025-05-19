# PostgreSQL Quick Start Guide

## Installation

```bash
sudo pacman -S postgresql
```

## Initializing the Database

```bash
sudo -iu postgres
initdb --locale en_US.UTF-8 -D /var/lib/postgres/data
exit
```

- This sets up the storage area for all your databases.

## Starting and Enabling the Service

```bash
sudo systemctl enable postgresql
sudo systemctl start postgresql
# Checking if it's running 
sudo systemctl status postgresql
```

## Basic User and Database Management

### 1. Create a PostgreSQL User

Switch to the postgres user and create a new user (role):

```bash
sudo -iu postgres
createuser --interactive
```

- You’ll be prompted for the username and permissions (superuser, etc.).

### 2. Set a Password for the User

Enter the PostgreSQL shell and set a password:

```bash
sudo -u postgres psql
# After entering the pgsql shell
ALTER USER yourusername WITH PASSWORD 'yourpassword';
```

### 3. Create a Database

From your bash shell (not inside psql):

```bash
createdb -O yourusername your_database_name
```

- `-O` makes you the owner of the database

## Connecting to Databases

Connect to your database as your user:

```bash
psql -d your_database_name -U yourusername
```

- You’ll be prompted for the password if one is set.



