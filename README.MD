# CopperCabana
```
       ****
     ********
    **  ******
     *   ******     ******
         ******   *********         Welcome to
          ****  *****   ***
          ***  ***     **           oooooooo8   ooooooo  oooooooooo oooooooooo ooooooooooo oooooooooo
    *************       *         o888     88 o888   888o 888    888 888    888 888    88   888    888
  ******************              888         888     888 888oooo88  888oooo88  888ooo8     888oooo88
 *****   H*****H*******           888o     oo 888o   o888 888        888        888    oo   888  88o
 ***     H-___-H  *********         888oooo88    88ooo88  o888o      o888o      o888ooo8888 o888o  88o8
  ***    H     H      *******
   **    H-___-H        *****       oooooooo8     o      oooooooooo      o      oooo   oooo     o
     *   H     H         ****     o888     88    888      888    888    888      8888o  88     888
         H     H         ***      888           8  88     888oooo88    8  88     88 888o88    8  88
         H-___-H         **       888o     oo  8oooo88    888    888  8oooo88    88   8888   8oooo88
         H     H         *          888oooo88 o88o  o888o o888ooo888 o88o  o888o o88o    88 o88o  o888o
         H-___-H
```
> CopperCabana is an automation software that buys prodcuts from supremenewyork.com as quickly as possible. It is written in JavaScript and based on node.js and [Horseman](https://github.com/johntitus/node-horseman).

## Features
- The bot waits for droptime and starts automatically _Note: There's currently a timeout after 15 minutes._
- Fast checkout time
- Uses an actual and very fast search on the product page so you don't need to know the exact product name
- Saves screenshots along the way so that you can track what happened
- PLANNED: CLI to input your data with the option to save it
- PLANNED: Running it in a Docker environment so that it can be deployed to Heroku or similar services easily.
- PLANNED: Start copping when the site changed in order to not be affected by time inaccuracies

## Using it
0. This will probably only work on OS X and other Unix OSes.
1. You need to have node installed on your system.
2. Clone this repo and `cd` into the folder you cloned it to.
3. Run `npm install` to install all dependencies.
4. Open `data.json` in a text editor of your choice and fill in all fields. _Note: `address2` and `address3` are not required. All other fields are._
5. Run `node copper.js` to start the bot.

## Contributing
Just test CopperCabana each Thursday and use the issue section to give feedback and report any problems you may have.
Also feel free to hack away in my code and submit pull requests for all the improvements you can come up with.
