/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.createTable("games", {
        game_id: {
            type: "serial",
            primaryKey: true
        },
        room_name: {
            type: "varchar(100)",
            notNull: true,
            unique: true
        },
        created_at: {
            type: "timestamp",
            notNull: true,
            default: pgm.func("current_timestamp")
        },
        max_players: {
            type: "int",
            notNull: true,
            default: 4
        },
        active_players: {
            type: "int",
            default: 1
        },
        started: {
            type: "boolean",
            default: false
        },
        current_turn: {
            type: "int",
            notNull: true,
            default: 1
        },
        turn_clockwise: {
            type: "boolean",
            default: true
        }
    });
};

exports.down = pgm => {
    pgm.dropTable("games");
};
