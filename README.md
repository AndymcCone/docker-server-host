**Building the enviroment <sub>(in the project root folder)</sub> :**
```
  ./server.sh
  ./client.sh
```

Server scripti käynnistää serverikontin käyttäen käyttäjän määrittelemää host-porttia, eli toimintaa voi testata localhost kohteesta käyttäjän määrittelemällä portilla. Kontti luo /serverdata hakemistoon response.txt nimisen tiedoston sekä laskee tiedostosta checksumin ja tallentaa sen checksum.txt nimiseen tiedostoon. Response.txt tallennetaan myös luotuun servervol voluumiin. Tämän jälkeen kontti jää odottamaan yhteydenottoja. 

Client script luo client imagen ja käynnistää sen pohjalta kontin joka ottaa lähettää serverikontille REST-pyynnön joka palauttaa serverikontin aiemmin luomat response.txt sekä checksum.txt tiedostot ja tallentaa ne clientkonttiin /clientdata hakemistoon sekä lisäksi host koneelle /clientvol voluumiin. Tiedostojen haun jälkeen scripti vielä vertaa serverillä laskettua checksumia paikallisesti laskettuun ja ilmoittaa täsmäävätkö checksumit.

