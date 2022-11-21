#!/bin/bash

echo "Input port number:"; read port;
echo $port > port.info

echo "stopping server container"
docker stop server
sleep 0.5;

echo "resetting server container and image"
docker rm server && docker rmi server
sleep 0.5;

echo "resetting network"
docker network rm omanetti
sleep 0.5;

echo "creting network"
docker network create --driver bridge omanetti
sleep 0.5;

echo "building server"
docker build -t server server/.
sleep 0.5;

echo "running server"
mkdir $(pwd)/server/servervol
echo "" > $(pwd)/server/servervol/response.txt
docker run -v $(pwd)/server/servervol/response.txt:/serverdata/response.txt -d --name server --network omanetti -p $port:80 server
sleep 0.5;
