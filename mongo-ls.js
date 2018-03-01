/**

Program     :  mongo-ls.js
Description :  list all collections and document count in a given database
Author      :  Hariprasath Ravichandran
GitHub      :  https://github.com/haravich

**/

// Usage: mongo {Server without mongodb:// example 127.0.0.1:27017}/{DbName} [-u {Username}] [-p {Password}] < ./mongo-ls.js
var collections = db.getCollectionNames();

print('Collections inside the db:');
for(var i = 0; i < collections.length; i++){
  var name = collections[i];

  if(name.substr(0, 6) != 'system')
    print(name + ' - ' + db[name].count() + ' records');
}
