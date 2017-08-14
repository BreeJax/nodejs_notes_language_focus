brew install mongodb //this installed mongo globally
brew services start mongodb //this starts mongo when you start it
sudo mkdir -p /data/db // creting a directory for mongo to store the data
sudo chmod 777 /data/db // give mongo read/write permission
mongod //starting up mongo for use
command + t //open up a new tab while mongo is running
curl -o primer-dataset.json https:/ /raw.githubusercontent.com/mongodb/docs-assets/primer-dataset/primer-dataset.json
waiting for connections on port 27017 //This is the port that mongo uses- just do http://localhost:27017/

➜  ~ curl -o primer-dataset.json https:/
/raw.githubusercontent.com/mongodb/docs-assets/primer-dataset/primer-dataset.json // downloading sample data(not needed normally)
➜  ~ mongoimport --db newdb --collection restaurants --file primer-dataset.json //this is bringing in all of the data to use
mongo //starting mongo so that you can use it
use {newdb} //this is to create and switch to a database. brackets not needed
show collections //this is how you see what JSON is inside of the db so that you can use it
db.{collectionsName}.find() //this just shows you about everything inside of the collections
db.things.insert({"label":"hello world"}) //created one object with one value
control + C //to quit to quit everything in Mongo
