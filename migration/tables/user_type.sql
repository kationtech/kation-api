create table user_type (
   id INT NOT NULL AUTO_INCREMENT,
   created_at TIMESTAMP NOT NULL DEFAULT now(),
   updated_at TIMESTAMP NOT NULL DEFAULT now(),
   type VARCHAR(100) NOT NULL,
   description VARCHAR(40) NOT NULL,
   PRIMARY KEY ( id )
);