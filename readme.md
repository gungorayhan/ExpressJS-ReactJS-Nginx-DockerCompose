## client
docker build -f Dockerfile.dev -t ayhangungor/client . <br/>
docker build -t ayhangungor/client .

## server
docker build -f Dockerfile.dev -t ayhangungor/server .
docker build -t ayhangungor/server .

## docker-compose
docker-compose up --build