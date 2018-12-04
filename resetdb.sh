clear

# Copy and paste this into your .bashrc or .bash_profile (whichever you use).

# alias pgsqlstart="pg_ctl -D /usr/local/var/postgres -l /usr/local/var/postgres/server.log start"

# alias pgsqlstop="pg_ctl -D /usr/local/var/postgres -l /usr/local/var/postgres/server.log stop"
# alias pgsqlstop="pg_ctl -D /usr/local/var/postgres -l /usr/local/var/postgres/server.log stop -s -m fast"

#---------------------------------------
# To Stop Postgres,
# pgsqlstop

dropdb --echo notapocketclone
createdb --echo notapocketclone
psql -f database/schema.sql -d notapocketclone
psql -f database/seed.sql -d notapocketclone

# Now to start Postgres, just type
# pgsqlstart