import requests

api_url = "http://server:80/download"
api_url2 = "http://server:80/checksum"

response = requests.get(api_url)
response2 = requests.get(api_url2)

with open("response.txt", "w") as f:
    f.write(response.text)

with open("downloaded_checksum.txt", "w") as f:
    f.write(response2.text)