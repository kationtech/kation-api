create table company (
   id INT NOT NULL AUTO_INCREMENT,
   created_at TIMESTAMP NOT NULL DEFAULT now(),
   updated_at TIMESTAMP NOT NULL DEFAULT now(),
   industry VARCHAR(100) NOT NULL,
   service VARCHAR(2000) NOT NULL,
   company_size INT NOT NULL,
   has_technology BOOLEAN,
   current_technology VARCHAR(2000),
   PRIMARY KEY ( id )
);