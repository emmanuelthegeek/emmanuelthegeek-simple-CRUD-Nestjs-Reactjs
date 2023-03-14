## Table of contents

- [Introduction](#Introduction)
- [Explanation](#Explanation)
- [Installation](#Installation)
  - [Configuration](#1-Configuration)
  - [Database](#2-Database)
  - [Nest.js API](#3-Nest.js-API)
  - [OpenAPI Specification](#4-OpenAPI-Specification)
  - [Unit Testing](#5-Unit-Testing)

## Introduction

A [Nest.js](https://github.com/nestjs/nest) REST API CRUD project that is linked to a docker MySQL database. The API performs CRUD operations on a table in the database.

## Explanation

This section contains an explanation of the tools used in this project.

- **Nest.js as the Node.js Framework** <br/>
 It is a Node.js framework that uses Express.js under the hood and is highly opinionated framework, which enforces a MVC architecture making it less prone to errors, it uses TypeScript as its primary language, and Nest.js CLI comes with a default testing environment which is configured with Jest. <br/>

- **MySQL as the Database** <br/>
 MySQL is faster, and more widely used..

- **TypeORM as the ORM Library** <br/>
  TypeORM is built for TypeScript and is recommended when using TypeScript in a project.

- **class-validator as the Validation Package** <br/>
  In the [Nest.js documentation](https://docs.nestjs.com/techniques/validation), it is recommended to use the `class-validator` package because Nest.js's `ValidationPipe` already makes use of it. After further reading.

## Installation

To install this project and run it locally, clone the project on github or download the zip file, navigate to the root directory and run `npm install` to install the required packages.

### 1) Configuration

Rename the .env.example file to .env in the root diectory.
The keys in the env file will be used throughout the project for the database connection. Since the database runs in a docker container in this project, `MYSQL_HOST` value would be equal to `localhost`, and `MYSQL_DATABASE` is the name of the database that the project will use. The key `API_PORT` is the port on which the API will run.

### 2) Database

The database has one table called `products` and has the following structure:

| Column Name | Data Type    |
| ----------- | ------------ |
| product_id  | INT          |
| name        | VARCHAR(255) |
| price       | FLOAT(10,2)  |
| description | TEXT         |
| created_at  | DATETIME     |
| updated_at  | DATETIME     |

The first step is running the database docker container and seeding the database. Open the the terminal and run the following commands:

Create a local volume for the container

```bash
$ docker volume create --name mysql_products_volume -d local
```

Run the database container in the background

```bash
 $ docker-compose up -d
```

After running these commands, the database container will be up and running in docker in the background. The [docker-compose.yml]file configures Adminer client to interact with the database. To access the seeded database through Adminer GUI, go to:
http://localhost:8080/

fill the following fields on Adminer based on the values specified in the .env file for each key name (except the Server field).

| Field    | .ENV Value        |
| -------- | ----------------- |
| Server   | mysql-products-db |
| Username | MYSQL_USER        |
| Password | MYSQL_PASSWORD    |
| Database | MYSQL_DATABASE    |

### 3) Nest.js API

To start the application with the server listening for HTTP requests on the specified port in the `main.ts` file, run the following command in the terminal:

```bash
 $ npm run start
```

Or to automatically watch for changes:

```bash
 $ npm run start:dev
```

The application now should be running on the port specified in the `.env` file with the key `API_PORT`.

The available API endpoints are as follows:

- Get all products

```
 [GET]: http://localhost:API_PORT/products
```

- Get one product by id. If id doesn't exist, it throws an error.

```
 [GET]: http://localhost:API_PORT/products/id
```

- Create a product.

```
 [POST]: http://localhost:API_PORT/products
```

- Update a product by id. If id doesn't exist, it throws an error. Can provide any field _(name, price, or description)_ to be updated.

```
 [PATCH]: http://localhost:API_PORT/products/id
```

- Delete a product by id. If id doesn't exist, it throws an error.

```
 [DELETE]: http://localhost:API_PORT/products/id
```

### 4) OpenAPI Specification

This project is also configured with Swagger for OpenAPI Specification. To check the Swagger UI of this application, go to:

```
 http://localhost:API_PORT/api/
```

### 5) Unit Testing

A unit test was also added to this project. The unit tests were written using jest for the `products.service.ts`. To run the tests, use the following command:

```bash
$ npm test products.service
```

The output should be as follows:

```bash
Test Suites: 1 passed, 1 total
Tests:       9 passed, 9 total
Snapshots:   0 total
Time:        10.216 s
```

THANK YOU.