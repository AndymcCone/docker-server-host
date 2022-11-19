import requests

api_url = "http://server:80/download"
response = requests.get(api_url)

with open("response.txt", "w") as f:
    f.write(response.text)