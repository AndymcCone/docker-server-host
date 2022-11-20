**create network:**
```
  docker network create --driver bridge omanetti
```
**server app: <sub>(in the server directory)</sub>**
```
  docker build -t server .
  docker run -v $(pwd)/serverdata/response.txt:/serverdata/response.txt  -d --name server --network omanetti server
```

**client app: <sub>(in the client directory)</sub>**
```
  docker build -t client .
  docker run -v $(pwd)/clientdata:/clientdata --name client --network omanetti client
```

echo "$(<downloaded_checksum.txt )" response.txt | sha256sum -c
