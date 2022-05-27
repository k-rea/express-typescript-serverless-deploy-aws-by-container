FROM public.ecr.aws/lambda/nodejs:16.2022.05.23.09
COPY . .
RUN npm install
CMD [ "dist/lambda.handler" ]