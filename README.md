# ogn-arena


## Deployments Guide

# https://docs.google.com/document/d/1LizBXVcPL3JcDms5nw9PvixuSnSHV_zReMjua8H1uSI


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
cp dev.env .env
yarn migrate
yarn seed
```
```start the web site
cd dapp
cp ../common/.env .env
yarn dev

```

# do dropdb ognarena if you wish to drop it

