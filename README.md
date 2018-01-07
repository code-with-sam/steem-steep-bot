# Steepshot Scheduler CLI Tool

> This tool is a scheduling script for the site/app Steepshot that runs on the steem network. Steepshot is a photosharing app like Instagram but ready for the future. The scheduler allows you to queue photos from the command line to be posted on Steepshot at any given time in the future.

## setup
```
get clone
npm install
```

Rename ```config.example.js``` to ```config.js``` and fill in the information required, specifically your username and private posting key and the hour you want the scheduler to post your content (defaults to 10 e.g 10am - use a 24hr system)

Edit ```archive.js``` with you posting data, each post should contain a date, date format, title, description, tags, image link and image size. You can add as many items to the list as necessary. see ```archive.js``` or readme for examples.

```
node app.js
```

*note it might take a tiny bit longer to sync with Steepshot than it does with Steemit, be patient :)*


# Example Archive format
add as many items to your schedule as you like, you can only have one post per day (for now).

The first tag in the list is used as the category.

```
let schedule = [
  {
    date : '07/01/2018',
    dateFormat : 'DD/MM/YYYY',
    title : 'Exploring The Black Sand Beach',
    description : 'adventure 001',
    tags : ['photography', 'iceland'],
    imageLink : 'https://i.imgsafe.org/26/262efd1c8b.jpeg',
    imageSize: { height:800, width:800 }
  },
  {
    date : '08/01/2018',
    dateFormat : 'DD/MM/YYYY',
    title : '5',
    description : 'Adventure 002',
    tags : ['photography', 'california'],
    imageLink : 'https://i.imgsafe.org/26/262efd1c8b.jpeg',
    imageSize: { height:800, width:800 }
  },
  {
    date : '09/01/2018',
    dateFormat : 'DD/MM/YYYY',
    title : 'Hong Kong Mission ',
    description : 'adventure 003 ',
    tags : ['photography', 'hk'],
    imageLink : 'https://i.imgsafe.org/26/262efd1c8b.jpeg',
    imageSize: { height:800, width:800 }
  }
]

```
