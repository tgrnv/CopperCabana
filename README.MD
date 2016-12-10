# CopperCabana
> CopperCabana is an automation software that buys prodcuts from supremenewyork.com automatically and as quickly as possible. It is written in JavaScript and based on node.js and [Horseman](https://github.com/johntitus/node-horseman).

## Features
- Fast checkout time
- Uses an actual and very fast search on the product page so you don't need to know the exact product name
- Saves screenshots along the way so that you can track what happened
- PLANNED: CLI to input your data with the option to save it
- PLANNED: Running it in a Docker environment so that it can be deployed to Heroku or similar services easily.

## Using it
1. You need to have node installed on your system
2. Clone this repo and `cd` into the folder you cloned it to
3. Run `npm install` to install all dependencies
4. Open `data.json` in a text editor of your choice and fill in all fields. _Note: `address2` and `address3` are not required. All other fields are._
5. Run `node copper.js` to start the bot.

## Contributing
Just test CopperCabana each Thursday and use the issue section to give feedback and report any problems you may have.
Also feel free to hack away in my code and submit pull requests for all the improvements you can come up with.
