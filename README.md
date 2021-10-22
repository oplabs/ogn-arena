# ogn-arena


## First time setup

# install postgres and start postgres server

```sh
createdb ognarena 
git clone git@github.com:oplabs/ogn-arena.git
cd ogn-arena 
yarn
```

```start the db
cd common
yarn migrate
yarn seed
```
```start the web site
cd dapp
yarn dev

```

# do dropdb ognarena if you wish to drop it

