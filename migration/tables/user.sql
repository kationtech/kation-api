create table user (
	id INT NOT NULL AUTO_INCREMENT,
	created_at TIMESTAMP NOT NULL DEFAULT now(),
	updated_at TIMESTAMP NOT NULL DEFAULT now(),
	user_type_id VARCHAR(100),
	company_id VARCHAR(100),
	name VARCHAR(100),
	email VARCHAR(100),
	contact_number VARCHAR(100),
	subscription BOOLEAN,
	PRIMARY KEY ( id )
);
