# HMDA Homepage
The entrypoint to all things HMDA.

Information and code contained in this repository should be considered provisional and a work in progress unless otherwise indicated.

## Dependencies

* [yarn](https://yarnpkg.com)

## Install

Clone this repo and run the following:

```
yarn
```

## Run locally

After building your desired project, you can visit it by running a static webserver from the project root directory or running via docker:
`docker run -it -p "3000:80" -v "$(pwd):/usr/share/nginx/html" nginx:1.12`
