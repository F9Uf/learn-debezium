rs.initiate({
    _id: "rs0",
    members: [{ _id: 0, host: "mongo:27017", priority: 1.0 }],
});
rs.status();
