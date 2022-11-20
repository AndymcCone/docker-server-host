**create network:**
```
  docker network create --driver bridge omanetti
```
**server app: <sub>(in the server directory)</sub>**
```
  docker build -t server .
  docker run -d --name server --network omanetti server
```

**client app: <sub>(in the client directory)</sub>**
```
  docker build -t client .
  docker run -v $(pwd)/clientdata/response.txt:/clientdata/response.txt --name client --network omanetti client
```
