create table if not exists tickets (
  id serial primary key,
  "title" varchar(32) not null unique,
  author varchar(128) not null,
  publication_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  content varchar(255) not null
);