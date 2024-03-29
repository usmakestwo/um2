# usmakestwo

[![Netlify Status](https://api.netlify.com/api/v1/badges/7f3263ed-5b1c-4751-92c5-2fbeb5804ef6/deploy-status)](https://app.netlify.com/sites/zealous-fermi-55ce0b/deploys)

# Installation

After downloading the file from Themeforest, You will find SuperProps.zip file. Then unzip the SuperProps.zip and run the following commands on SuperProps folder to get started with the project.

```
yarn
```

```
// For starting GatsbyJs Server run
yarn gatsby-dev
```

GatsbyJs server will start in `localhost:8000`

```
// For starting NextJs Server run
yarn next-dev
```

NextJs Server will start in `localhost:3000`

Available routes are below

```
/app
/saas
/saasmodern
/saasclassic
/hosting
/portfolio
/ride
/crypto
/charity
/interior
/appmodern
/appclassic
```

# Folder Structure

```
/packages
	/common [All common components and resource]
		/Assets
		/components
		/contexts
		/data
		/theme
	/functions
	/landing [NextJs version of the project]
	/landing-gatsby [Gatsby version of the project]
```

# Stack We Have Used

1. Lerna (A tool for managing JavaScript projects with multiple packages. https://lernajs.io)
2. Yarn Workspace
3. React Js and Next Js
4. Gatsby Js
5. Styled System and Styled Components
6. Firebase Deployment.

# Development

Follow the below procedure to go with the development process.

## GatsbyJs

If you want to develop only for gatsbyjs then then you don't need the `/landing` folder which contains only nextjs related code. You can delete `/landing` folder.

For any specific template like the template under `/app` route. If you want to use this template only, then you have to follow below procedure.

1. Go to `/landing-gatsby/src/pages/`
2. now copy all the content from `app.js`
3. Paste all the content in `/landing-gatsby/src/pages/index.js`

Now for cleaning the unused code in your project follow the below procedure.

1. Now you can delete all other pages except `404.js`. That mean in your `/pages` folder you will have two files `index.js` and `404.js`
2. From `/landing-gatsby/src/containers/` folder you can delete all other folder except `App` and `Error`
3. From `/common/src/assets/image/` folder you can delete all other folder except `app`. Do not delete any files from there like `404.svg`, `error.svg` etc.
4. From `/common/src/data/` folder you can delete all other folder except `App`.
5. From `/common/src/theme/` folder you can delete all other folder except `app`. Do not delete the `index.js` file.

Now if you start your `gatsbyjs` server with `yarn gatsby-dev` then you will get your server running on `localhost:8000`

## NextJs

If you want to develop only for `nextjs` then then you don't need the `/landing-gatsby` folder. You can delete the folder.

For any specific template like the template under `/app` route. If you want to use this template only, then you have to follow below procedure.

1. Go to `/landing/pages/`
2. now copy all the content from `app.js`
3. Paste all the content in `/landing/pages/index.js`

Now for cleaning the unused code in your project follow the below procedure.

1. Now you can delete all other pages except `_app.js`, `_documents.js` and `_error.js`. That mean in your `/pages` folder you will have four files `index.js`, `_app.js`, `_documents.js` and `error.js`
2. From `/landing/containers/` folder you can delete all other folder except `App` and `Error`
3. From `/common/src/assets/image/` folder you can delete all other folder except `app`. Do not delete any files from there like `404.svg`, `error.svg` etc.
4. From `/common/src/data/` folder you can delete all other folder except `App`.
5. From `/common/src/theme/` folder you can delete all other folder except `app`. Do not delete the `index.js` file.

To start the server for `nextjs` you have to run `yarn nextjs-dev` and the server will start on `locahost:3000`.

# Explaining Containers

In the `containers` directory you will get folder for our every template. If you want to use App template. Then in the `App` directory you will get folders containing different section of the template like `Banner`, `Footer`, `Testimonial`, `Navbar` etc.

All of these containers contains regular reactjs code.

# Deployment

For deploying your final project you have to build your project first. To build the project you have to follow below procedure.

### GatsbyJs

Run the below command on

```
yarn gatsby-build

// To check the build version locally run below command
// Not necessary if you don't want to check on your local.

yarn gatsby-serve
```

If you run `yarn gatsby-serve` then the build version the the project will start in `localhost:9000` . Navigate to the url you will get your site up and running.

### NextJs

To build the nextjs version run below commands.

```
yarn next-build

// To check the build version locally run below command
// Not necessary if you don't want to check on your local.

yarn next-start
```

If you want to host the static html version of your nextjs project then run the below command to build static version

```
yarn next-export
```

# Deployment Support

## now.sh

### GatsbyJs

We have given now.sh deployment by default. For hosting the project in now.sh first you have to rename `gatsby-landing.now.json` to `now.json`.

You can change the name according to your project in now.json file like:

```
{
	"name": "your_project_name"
}
```

Now run below command after building the project.

```
now
```

### NextJs

For deploying nextjs on now.sh you have rename `landing.now.json` to `now.json`. Now run below command after building the project.

```
now
```

You can change the name according to your project in now.json file like:

```
{
	"name": "your_project_name"
}
```

> **Make sure you have `now-cli` installed in your system.**

## Firebase

### NextJs

Rename `landing.firebase.json` to `firebase.json`. Then build your project with `nexjs` build command we have discussed above.

Before running the below deploy command, you have to delete the `/public/index.html` file. and
go to `/landing/package.json`, find engines and do the following

```
"engines": {
    "node": "8"
}
```

Then, To deploy to your site, run the following command from the root directory.

```
yarn firebase-deploy
```

> **Make sure you have `firebase-tools` installed on your machine.**

## Netlify

At first, open an account on netlify and go to `sites` tab.

### NextJs

Run the below command to make the project netlify deploy ready.

```
yarn netlify-deploy
```

After running the above command go to `/landing` folder. You will find a `out` folder there. Drag
and drop this `out` folder on netlify `sites` tab. Now after finishing the upload you are ready to go.

### GatsbyJs

If you want to host the `gatsbyjs` project, go to your command line and run this command on root directory.

```
yarn gatsby-build
```

After running above command go to `landing-gatsby` folder. You will find a `public` folder
there. Drag and drop this `public` folder on netlify `sites` tab.

### Resources:

- https://www.whatsmydns.net/
- https://www.netlify.com/docs/custom-domains/
- https://www.netlify.com/blog/2017/02/28/to-www-or-not-www/
- https://cloud.google.com/storage/docs/hosting-static-website
- https://www.terraform.io/docs/providers/google/getting_started.html
- https://circleci.com/blog/deploying-using-terraform-gcp/
- https://github.com/usmakestwo/terraform-with-circleci-example

---

### Requirements

1. Domain is verified with TXT records via [Google Webmaster Central](https://www.google.com/webmasters/verification/home?hl=en&authuser=1).

<img width="1394" alt="image" src="https://user-images.githubusercontent.com/1566236/58974524-98328980-8790-11e9-9993-c08679d50223.png">

2. Use A record instead of CNAME records for Apex domain.

  a. Since we are hosting with Netlify and using Google for email records, we cannot have a CNAME apex domain because it interfers with MX records(email)

<img width="1120" alt="Screen Shot 2019-06-05 at 12 46 34 PM" src="https://user-images.githubusercontent.com/1566236/58974304-1b071480-8790-11e9-845d-f89d34180e70.png">

3. Check to see if records are updated:
  - https://toolbox.googleapps.com/apps/dig/#TXT/
  - https://toolbox.googleapps.com/apps/checkmx/


### Requirements for using GCP with Terraform

Following the [GCP tutorial](https://www.terraform.io/docs/providers/google/getting_started.html), the following steps are required to bootstrap the infrastructure.

**Prerequisites**:

1. Go to [GCP API Library](https://console.developers.google.com/apis/library) and enable the following services:

- Compute Engine API - https://console.developers.google.com/apis/api/compute.googleapis.com

2. GCP Service Account with the correct resource provisioning
![Permissions](https://github.com/telus/analytics-data-pipeline/blob/master/assets/service-account-permissions.png)

3. Terraform downloaded and available through the CLI

### Deploy

1. Run `source init.sh`

2. Inside terraform directory `terraform apply`

3. Site is published

## Add Domain to Bucket

<img width="1126" alt="Screen Shot 2019-04-18 at 5 00 34 PM" src="https://user-images.githubusercontent.com/1566236/56391180-e6e58d80-61fb-11e9-82b5-57f4891437f9.png">

- https://domains.google
- https://www.google.com/webmasters/verification/home?pli=1&authuser=1
