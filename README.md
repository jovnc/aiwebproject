psql
CREATE DATABASE aiwebproject;
CREATE USER aiwebproject WITH PASSWORD 'aiwebproject';
\c aiwebproject
GRANT ALL PRIVILEGES ON DATABASE aiwebproject TO aiwebproject;
