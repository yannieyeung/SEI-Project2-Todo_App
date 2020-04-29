CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name TEXT,
    password TEXT
);

CREATE TABLE IF NOT EXISTS todo (
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    todo_item TEXT
);
