# gatsby-aamu-starter

Gatsby [Aamu.app](https://aamu.app) starter for creating a blog

![The index page of the starter blog](https://raw.githubusercontent.com/AamuApp/gatsby-aamu-starter/master/screenshot.jpg "The index page of the starter blog")

If you want to use try this out yourself, you first need to set up a project on Aamu.app which will host your data. 

See the demo site here: **[DEMO](https://gatsby-aamu-starter.netlify.com/)**

Static sites are scalable, secure and have very little required maintenance. They come with a drawback though. Not everybody feels good editing files, building a project and uploading it somewhere. This is where Aamu.app comes into play.

With Aamu.app and Gatsby you can connect your favorite static site generator with an API that provides an easy to use interface for people writing content and automate the publishing using services like [Travis CI](https://travis-ci.org/) or [Netlify](https://www.netlify.com/).

## Features

* Simple content model and structure. Easy to adjust to your needs.
* Responsive/adaptive images via [gatsby-image](https://www.gatsbyjs.org/packages/gatsby-image/)

# Installation

### Create an Aamu.app account

To use this website, you need an [Aamu.app](https://aamu.app/) account. Create one/log into your account and then create a database from the template **gatsby-aamu-starter**: 

After that, you need an **API key**. Go to database settings for your newly created database and create an API key. Copy-paste that to somewhere safe.

### Deployment to Netlify

You can use this repository on Netlify. After creating an Aamu.app database, click this:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/AamuApp/gatsby-aamu-starter)

Netlify will ask your permission to clone this repository — First click *Connect to GitHub*, then click *Authorize*. 

You will be then taken to a page which asks your *secret token*. Enter your API key here. 

Submit the form and Netlify will start building your site. This cloned repository will be on your GitHub account.

#### Common Netlify errors

```
2:33:39 PM: error "gatsby-source-graphql" threw an error while running the sourceNodes lifecycle:
2:33:39 PM: not finished source and transform nodes - 0.593s
```

Your Aamu.app API key is wronng or missing.
# Development on your local machine

### Get the source code and install dependencies.

```
git clone git@github.com:AamuApp/gatsby-aamu-starter.git
cd gatsby-aamu-starter
npm install
```

Or use the [Gatsby CLI](https://www.npmjs.com/package/gatsby-cli).

```
$ gatsby new aamu-starter https://github.com/AamuApp/gatsby-aamu-starter
```

### Set up of the needed content model and create a configuration file

This project comes with a Aamu.app setup command `npm run setup`.

### Crucial Commands

This project comes with a few handy commands for linting and code fixing. The most important ones are the ones to develop and ship code. You can find the most important commands below.

Run in the project locally:

```
npm run dev
```

Run a production build into `./public`. The result is ready to be put on any static hosting you prefer:

```
npm run build
```

Run a production build into `./public` and publish the site to GitHub pages:
```
npm run deploy
```

Removes all dependencies, scripts and data from the installation script.:
```
npm run cleanup-repository
```



# Roadmap

- [x] [make the starter completely responsive](https://github.com/AamuApp/gatsby-aamu-starter/issues/2)
- [ ] [include tags](https://github.com/AamuApp/gatsby-aamu-starter/issues/3)
- [x] [support traced placeholders](https://github.com/AamuApp/gatsby-aamu-starter/issues/4)
- [ ] [add i18n](https://github.com/AamuApp/gatsby-aamu-starter/issues/6)

# Other resources

- Tutorial video series ["Building a blazing fast website with GatsbyJS and Contentful"](https://www.youtube.com/watch?v=Ek4o40w1tH4&list=PL8KiuH6vpACV-F7jXribe4YveGBhBeG9A) by @Khaledgarbaya
