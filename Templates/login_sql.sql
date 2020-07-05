Set search_path to public;
Select username, password 
	from users
		Where username = %(username)s
		LIMIT 1;
		