#MongoDB için Notlar

öncelikle ilgili db ye geçilmesi gereklidir.

use dbadi


db.createUser(
{
user: "accountUser",
pwd: passwordPrompt(),  // Or  "<cleartext password>"
roles: [ "readWrite", "dbAdmin" ]
}
)

[//]: # (//?)




db.createUser({user: "team3": "root",roles: [ "readWrite", "dbAdmin" ]})