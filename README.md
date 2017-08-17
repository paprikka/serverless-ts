![Logo!](./logo.jpeg)

## What?

Prototype / Test / Deploy serverless API using Amazon API Gateway.

### Features

- TDD using Jest
- Typescript support (using `serverless-webpack`)
- Local testing with `serverless-offline`

See http://serverless.com for more details.


## Required dependencies / tools

- http://serverless.com
- [yarn](https://www.npmjs.com/package/yarn)


### Why yarn?

In my experience NPM v5 had some issues with missing dependencies (quite common, when using linked packages), hence we're sticking to Yarn for the time being. Downgrading to NPM v4 would result with slowe package install times.

## Setup


1. `yarn global add serverless` - install serverless CLI
2. `yarn` install required dependencies
3. Update your `serverless.yaml` config file:

```
service: serverless-bootstrap-typescript # <-- here

provider:
name: aws
runtime: nodejs6.10
profile: lambda # <-- aaand... here

plugins:
- serverless-offline
- serverless-webpack

functions:
hello:
    handler: handler.hello
    events:
    - http:
        path: test/hello
        method: get
```

## Testing

### TDD environment (using TS-Jest)

    $ yarn tdd

Note that this enviroment uses dev.env.json by default

## Deployment

    $ yarn deploy


## Usage

1. Author handler in `handlers/` directory
2. Add new handlers to `<project root>/handlers.ts`

