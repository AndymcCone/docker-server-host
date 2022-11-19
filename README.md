**create own network:**

  docker network create --driver bridge omanetti

server app:

  docker build -t server .
  
  docker run -d --name server --network omanetti server


client app:

  docker build -t client .
  
  docker run -v $(pwd)/response.txt:/clientdata/response.txt --name client --network omanetti client
