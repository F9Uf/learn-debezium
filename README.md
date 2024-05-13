# Learn DEBEZIUM

## Create a new Debezium connector
- list all connections
  ```sh
  curl --location 'http://localhost:8083/connectors/'
  ```
- create a new connector
  ```sh
  curl --location 'http://localhost:8083/connectors' \
  --header 'Content-Type: application/json' \
  --data '{
    "name": "employee-connector-alpha",
    "config": {
      "connector.class": "io.debezium.connector.mongodb.MongoDbConnector",
      "mongodb.connection.string": "mongodb://mongo:27017/?replicaSet=rs0",
      "topic.prefix": "alpha",
      "database.include.list": "company",
      "collection.include.list": "company.employees"
    }
  }'
  ```
- get a connector status
  ```sh
  curl --location 'http://localhost:8083/connectors/employee-connector-alpha'
  ```

## Update data in MongoDB
- connect to MongoDB
  ```sh
  docker exec -it lean-debezium-mongo-1 mongosh
  ```
- use the database
  ```sh
  use company
  ```
- insert new document
  ```sh
  db.employees.insert({
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "address": {
      "street": "Hoeger Mall",
      "suite": "Apt. 692",
      "city": "South Elvis",
      "zipcode": "53919-4257",
      "geo": {
        "lat": "29.4572",
        "lng": "-164.2990"
      }
    },
    "phone": "493-170-9623 x156"
  })
  ```
- update existing document
  ```sh
  db.employees.update(
    { "username": "Bret" },
    { $set: { "phone": "" } }
  )
  ```
- delete existing document
  ```sh
  db.employees.deleteOne({ "username": "Antonette" })
  ```
