# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# cities = City.create([{ name: 'Reykjavik' }, { name: 'Shanghai' },  { name: 'Barcelona' }])
ryk=City.create({ name: "Reykjavik"})
sh=City.create({ name: "Shanghai"})
bar=City.create({ name: "Barcelona"})


p1=Post.create({title: "Icelandic wonderland", location: "Iceland", content: "Reykjavík is my favorite place in the world!"})
p2=Post.create({title: "Hai Shanghai", location: "China", content: "Shanghai is a must see!"})
p3=Post.create({title: "Hola Barcelona", location: "Spain",content: "Barcelona is stunning!"})

ryk.posts << p1
sh.posts << p2
bar.posts << p3

u1=User.create({username: "MargauxWithAnX", artist_name: "Margaux", email: "margaux@margaux.com", password: "margaux", current_city: "San Francisco"})
u2=User.create({username: "Saeunn", artist_name: "Saeunn", email: "saeunn@saeunn.com", password: "saeunn", current_city: "Reykjavík"})
u3=User.create({username: "KateMay", artist_name: "KateMay", email: "katemay@katemay.com", password: "katemay", current_city: "Shanghai"})

u1.posts << p3
u2.posts << p1
u3.posts << p2