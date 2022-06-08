CREATE TABLE tb_niveis(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(99) NOT NULL
)ENGINE=INNODB CHARSET=utf8;
CREATE TABLE tb_empresa(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    cep VARCHAR(10) NOT NULL,
    email longtext NOT NULL,
    cnpj VARCHAR(15) NOT NULL
)ENGINE=INNODB CHARSET=utf8;
CREATE TABLE tb_produto(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(155) NOT NULL,
    valor FLOAT NOT NULL,
   	descricao LONGTEXT NOT NULL
)ENGINE=INNODB CHARSET=utf8;
CREATE TABLE tb_usuario(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email LONGTEXT NOT NULL,
    senha LONGTEXT NOT NULL,
    telefone VARCHAR(15) NOT NULL,
    id_nivel INT NOT NULL,
    FOREIGN KEY (id_nivel) REFERENCES tb_niveis(id)
)ENGINE=INNODB CHARSET=utf8;
CREATE TABLE funcionario_empresa(
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL,
    id_empresa INT NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES tb_usuario(id),
    FOREIGN KEY (id_empresa) REFERENCES tb_empresa(id)
)ENGINE=INNODB CHARSET=utf8;
CREATE TABLE tb_transacoes(
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_produto INT NOT NULL,
    id_usuario INT NOT NULL,
    id_empresa INT NOT NULL,
    dt_transacao DATE NOT NULL,
    FOREIGN KEY (id_produto) REFERENCES tb_produto(id),
    FOREIGN KEY (id_usuario) REFERENCES tb_usuario(id),
    FOREIGN KEY (id_empresa) REFERENCES tb_empresa(id)
)ENGINE=INNODB CHARSET=utf8;
CREATE TABLE tb_cardapio(
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_empresa INT NOT NULL,
    id_produto INT NOT NULL,
    FOREIGN KEY (id_empresa) REFERENCES tb_empresa(id),
    FOREIGN KEY (id_produto) REFERENCES tb_produto(id)
)ENGINE=INNODB CHARSET=utf8;
INSERT INTO tb_niveis (id, nome)
VALUES (null, "root"), (null, "cliente"), (null, "dono"), (null, "caixa"), (null, "funcionario");