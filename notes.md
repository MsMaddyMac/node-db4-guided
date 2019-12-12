# Data Modeling Notes

What about that `db-config.js`?

And aggregation in SQL?

## Requirements

A client has hired you to build an API for managing `zoos` and the `animals` kept at each `zoo`. The API will be used for `zoos` in the _United States of America_, no need to worry about addresses in other countries.

For the `zoos` the client wants to record:

- name.
- address.

For the `animals` the client wants to record:

- name.
- species.
- list of all the zoos where they have resided.

Determine the database tables necessary to track this information.
Label any relationships between table.

## Samuel's Project: Bug Tracker

`Admin` can assign a `ticket` to an `employee` with priority.

Employee sees the ticket (notified by email).

> software development is a game of abstraction (abstraction = how can I take something that exists and represent it in software?)

## A good data model (opinion)

- captures ALL the data needed by the system
- captures ONLY the data needed by the system
- reflects reality (from the point of view of the system)
- is flexible (can adapt and evolve with the needs of the system)
- guarantee data integrity (without sacrificing too much performance)
- is driven by the way we access the data

## Components

- entities (resources): nouns -- > tables (things we want to manage). In Samuel's Project on line 25 those entities will be the admin, ticket, and employee.
- properties (column, fields, attributes) -- > columns
- relationships (between the entities (tables)) -- > foreign keys 

## Workflow

- identify entities (resources): nouns -- > tables
- identify properties (column, fields, attributes) -- > columns
- identify relationships (between the entities (tables)) -- > foreign keys 

## Relationships

- one to one: rare
- one to many: this the most common type
- many to many: smoke and mirrors, a trick!

## Mantras

- Every table must have a Primary Key (PK)
- Work on **two or three** entities at a time
- _one to many_ relationship requires a `Foreign Key`
- the `FK` goes on the **many** side
- _many to many_ requires a **third table**