#!/bin/bash

port=$(<port.info)
echo "Response is downloadable from localhost:$port"
sleep 0.5;

echo "resetting client container and image"
docker rm client && docker rmi client
sleep 0.5;

#echo "removing the data folders"
#removing the data folders
#sleep 0.5;

echo "building client"
docker build -t client client/.
sleep 0.5;

echo "running client"
docker run -v $(pwd)/client/clientvol:/clientdata --name client --network omanetti client
sleep 0.5;

echo "checksumming"
echo "$(<$(pwd)/client/clientvol/downloaded_checksum.txt )" $(pwd)/client/clientvol/response.txt | sha256sum -c
sleep 0.5;