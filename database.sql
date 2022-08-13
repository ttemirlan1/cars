create TABLE cars(
    id  SERIAL PRIMARY KEY,
    brand VARCHAR(255),
    year VARCHAR(255),
    color VARCHAR(255),
    price VARCHAR(255),
    car_body VARCHAR(255)
);

create TABLE post(
    id  SERIAL PRIMARY KEY,
    title VARCHAR(255),
    content VARCHAR(255),
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES person(id)
);
