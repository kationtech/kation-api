create table user (
	id INT NOT NULL AUTO_INCREMENT,
	created_at TIMESTAMP NOT NULL DEFAULT now(),
	updated_at TIMESTAMP NOT NULL DEFAULT now(),
	user_type_id VARCHAR(100) NOT NULL,
	company_id VARCHAR(100) NOT NULL,
	name VARCHAR(100) NOT NULL,
	email VARCHAR(100) NOT NULL,
	contact_number VARCHAR(100) NOT NULL,
	subscription BOOLEAN,
	PRIMARY KEY ( id )
);
