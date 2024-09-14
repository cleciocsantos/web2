CREATE TABLE usuario(
    id_usuario int PRIMARY KEY,
    nome text NOT NULL,
    email text NOT NULL UNIQUE,
    senha text NOT NULL
);