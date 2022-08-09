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


## Blades of Valor Services/Servers

Here are all the Services/Server we had planned out. Not all are implemented.

1. BoV smart contract
	* Runs on polygon
	* Implementation outline(https://docs.google.com/document/d/1gM4KwW69JPnn6IjIRkTi_lR1iYr7WiucFdX9CYWliGY/edit?usp=sharing)
	* Note the contract only fires events. It does not do battle calculations. It only verifies hash matching and ownership via the Mainnet Lookup Server(below)
	* [TODO] track hero DNA and experience progression
	* [TODO] track hero equipment (to be fed into the Character Model Generator below) 
	* [TODO] track hero staking
	* [TODO] pair and rolls hero battles
	* [TODO] each call should be guarded with Mainnet Lookup Server(below) to verify ownership
2. Character Model Generator
	Creates 3d poseable models that can be used to display BoV heroes by various engines
	* Runs on virtual windows instance(GPU required)
	* Uses Character Creator(https://www.reallusion.com/character-creator/default.html) a 3d poseable model generator
	* [Implemented] random hero DNA generator that generate heroes with a variety of unique faces, body types and hair that is passabily lifelike
	* [Implemented] parser that can parse hero DNA into traits that can be used to generate models through Character Creator
	* [Implemented] attach default equipment to each hero class
	* [Implemented] output models for unity web3d for display on the web
	* [TODO] separate out equipment from each hero class and implement them as modular add ons
	* [TODO] output models for unreal engine for battle move display
	* [TODO] daemonize server to read changes in hero state from BoV smart contract
3. Mainnet Lookup Server
	* Ensure the correct ownership on mainnet so that we can run cheap battles on a secondary chain while keeping the NFT tokens on mainnet
	* Off Chain on a virtual server instance
	* [TODO] daemonize server to watch the BoV smart contract for callback events
		- A guarded event is an event that contains as parameters
			* An array of conditions to be met before the callback is called
			* The callback to the contract 
		- For example to set a loadout on a hero, we set as conditions that the caller owns the hero and all the equipment being equipped. Once the call to setting the loadout is made, it fires the guard event instead of actually setting the equipment. The Server pickups the guard event checks mainnet to verify that all conditions are met before calling the callback on the contract.
4. Unity Web Preview Server
	* [Implemented] takes the model generated by the Character Model Generator, combine it with animations to create a web preview for the web server
	* Currently only a batch tool running in unity
	* [TODO] daemonize to pick up models generated by the Character Model Generator
5. Unreal Battle Server
	* [Implemented] takes models from Character Model Generator and add them to unreal engine
	* [Implemented] use sequence director to animate and composite multiple heroes in fight sequences
	* [TODO] automate sequence director so that it reads pairings and rolls from the BoV Game Contract and generates battle movies from it
	* [TODO] setup the server on a virtual instance
6. Battle Server
	* Do the actual prep for the rolls in battle
	* [TODO] looks up battle pairing events from the BoV Game contract, takes the loadout and stats of each hero involvement and does the actual calculations on their battle stats. Call BoV Game Contract (the fight() method) with the actual numbers that contract will use to implement the rolls
	* [TODO] daemonize the server run on a virtual instance and to continuously lookup the BoV Game contract for pairing events
7. Web Server
	* [Implemented] takes models generated by Unity and combine them with character and NFT token data to display them as preview and metadata
	* [TODO] account management for hero holders
	* [TODO] interactions with the game contract for staking and setLoadout and claiming rewards
	* [TODO] ingestion and display of Battle Movies from the Unreal Battle Server


