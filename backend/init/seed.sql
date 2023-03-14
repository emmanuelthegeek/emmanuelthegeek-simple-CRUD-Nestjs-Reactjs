CREATE TABLE products (
    product_id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    price FLOAT(10,2) NOT NULL,
    description TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL,
    PRIMARY KEY(product_id)
);

INSERT INTO products (name, price, description) VALUES ('Laptop', 22000.23, 'Black 64 inch HP Laptop');
INSERT INTO products (name, price, description) VALUES ('Graphics Card', 5000.00, 'Dedicated Graphics Card');
INSERT INTO products (name, price, description) VALUES ('Male Shirts', 225.55, 'Durable male shirts'); 
INSERT INTO products (name, price, description) VALUES ('Female Handbags', 60.00, 'Female Gucci handbag');