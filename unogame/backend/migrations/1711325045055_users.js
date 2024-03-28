/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.createTable("users", {
        id: "id",
        username: {
            type: "varchar(100)",
            notNull: true,
            unique: true
        },
        password: {
            type: "varchar(256)",
            notNull: true
        },
        created_at: {
            type: "timestamp",
            notNull: true,
            default: pgm.func("current_timestamp")
        },
        win_count: {
            type: "int"
        }
    });
};

exports.down = pgm => {
    pgm.dropTable("users");
};
