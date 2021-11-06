create table company (
   id INT NOT NULL AUTO_INCREMENT,
   created_at TIMESTAMP NOT NULL DEFAULT now(),
   updated_at TIMESTAMP NOT NULL DEFAULT now(),
   industry VARCHAR(100),
   service VARCHAR(2000),
   company_size VARCHAR(100),
   has_technology BOOLEAN,
   current_technology VARCHAR(2000),
   PRIMARY KEY ( id )
);