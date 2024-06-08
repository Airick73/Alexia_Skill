# Alexa Skill project

This project demos Alexa Skill Kit (ASK) and AWS Lambdas.

## Development Setup

Install project dependencies

```bash
npm i
```

Deploy Lambda

```bash
# run deployment via aws-cli, where FUNCTION_NAME is defined as an env var
aws lambda update-function-code --function-name ${FUNCTION_NAME} --zip-file fileb://dist/index.zip

# or simpy run deployment script
chmod +x deploy.sh
./deploy.sh
```

Update Lambda

```bash
# Update lambda via aws-cli
npm build
aws lambda update-function-code --function-name ${FUNCTION_NAME} --zip-file fileb://dist/index.zip

# Or simply run update script
chmod +x update.sh
./update.sh
```
