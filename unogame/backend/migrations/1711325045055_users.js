/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.createTable("users", {
        user_id: {
            type: "serial",
            primaryKey: true
        },
        username: {
            type: "varchar(100)",
            notNull: true,
            unique: true
        },
        password: {
            type: "varchar(50)",
            notNull: true
        },
        created_at: {
            type: "timestamp",
            notNull: true,
            default: pgm.func("current_timestamp")
        },
        first_name: {
            type: "varchar(100)"
        },
        last_name: {
            type: "varchar(100)"
        },
        win_count: {
            type: "int"
        },
    });
};

exports.down = pgm => {
    pgm.dropTable("users");
};
