CREATE TABLE usuario(
    id_usuario INTEGER PRIMARY KEY,
    nome text NOT NULL,
    email text NOT NULL UNIQUE,
    senha text NOT NULL
);