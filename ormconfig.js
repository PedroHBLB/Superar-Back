module.exports = {
    type: "postgres",
    host: process.env.DB_HOST,
    port: 3333,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    cache: { type: "ioredis" },
    migrations: ["src/database/migrations/*.js"],
    entities: ["src/models/*.js"],
    cli: {
        migrationsDir: "src/database/migrations",
        entitiesDir: "src/models",
    },
};
