clear
git checkout master
git stash save --keep-index
git stash drop
git fetch
git pull
npm install
createdb notapocketclone
psql -f database/schema.sql -d notapocketclone
psql -f database/seed.sql -d notapocketclone
git branch -a
