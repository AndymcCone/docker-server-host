FROM ubuntu:16.04

WORKDIR /clientdata
RUN apt-get update && apt-get install -y python3 python3-requests

COPY connect.py .

CMD ["python3", "connect.py"]
