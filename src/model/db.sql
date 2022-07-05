CREATE TABLE clients (
    client_id BIGSERIAL PRIMARY KEY,
    client_name VARCHAR(64) NOT NULL,
    client_select VARCHAR(32) NOT NULL,
    client_tel VARCHAR(32) NOT NULL,
    client_sell int NOT NULL
);

INSERT INTO clients(client_name, client_select,client_tel,client_sell) VALUES('Nurillo','gips','+998994683603',5);