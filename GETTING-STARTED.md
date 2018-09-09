# Material-UI Steps

https://material-ui.com/getting-started/installation/

npm install @material-ui/core
npm install @material-ui/icons


### How to Deploy to S3 Bucket

```bash
// create a bucket
aws s3 mb s3://lee.would-you-rather

// list buckets
aws s3 ls

// build and deploy the app
npm run build
aws s3 sync build/ s3://lee.would-you-rather --acl public-read
aws s3 website --index-document index.html --error-document error.html s3://lee.would-you-rather

// URL
http://lee.would-you-rather.s3-website-us-west-2.amazonaws.com
```
