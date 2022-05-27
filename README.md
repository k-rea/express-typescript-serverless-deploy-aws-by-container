# Express + Typescript deploy AWS Demo

## Usage

Set Environment in .envrc and direnv allow
```shell
export APP_NAME=
export ACCOUNT_ID=
export PROFILE=
export AWS_PROFILE=
export REGION=
```

### Deploy
```shell
npm install
make create-repository
make build-dev
make push-dev
npm run deploy
```

### Destroy
```shell
npm run destroy
```


