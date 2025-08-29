**DYNAMISK WEB**
# Introduktion til url-parametre

Du skal lave en "mikro-air-bnb-klon" med otte destinationer i en listevisning, samt en detaljevisning om hver destination(genereret automatisk).

### **Mål**
Målet med opgaven er at træne listevisning og detaljevisning ved brug af url-parametre(query-strings).

### **Materialer**
- en figma fil, som indeholder et layout til liste-visning samt et layout til detaljevisning.
- følgende datafiler:
    - `destiations.json`, som indeholder alle 8 desitinationer
    - 8 separate json filer (`1.json`, `2.json`, `3.json`...), som hver indeholder én destination og som er navngivet med destinationens id. Vi bruger denne måde for at simulere et api.
- billedfiler til alle 8 destinationer i mappen `img`. 

### **Opgaven**

I listevisningen fetches alle 8 destinationer i `destiations.json`. Ved at klikke på en af de 8 destinationer, skal brugeren vises en ny side (fx. `destination.html`), som viser mere uddybende detaljer om den enkelte destination. Ved hjælp af et url-parameter skal du videresende til `destination.html` hvilken en af destinationerne brugeren har klikket på. Url'en på denne side ser måske sådan ud: 
```
http://127.0.0.1:5500/destination.html?id=5
```

Du skal nu "fiske" id'et ud af url'en og fetche den json-fil som kun indeholder data om den pågældende destination. 

### **Processen** 
- Husk at lave en branch til din aflevering.
- Commit ofte
- Tænk over, hvad du skriver i dine commit-beskeder.

### **Ekstraopgave** - hvis du er hurtigt færdig
Få funktionaliteten med at markere en favorit til at virke. Hvis du markerer en destination som favorit, skal hjertet være rødt (eller en anden farve efter dit valg) på _både_ listevisning _og_ detaljevisning. Du skal måske undersøge lidt på forhånd om LocalStorage eller cookies.

### **Aflevering**: 
Du afleverer ved at lave et **pull-request** hvor du sætter din lærer på som *reviewer*.

### **Feedback**: 
Din lærer kigger dit pull-request igennem, og hvis du blot får et godkendt/approved tilbage betyder det, at du har løst opgaven lige som det var forventet. 

Hvis din lærer sender et godkendt/approved tilbage, men også tilknytter en kommentar, er det måske for at gøre opmærksom på en detalje du let kan forbedre. Du behøver ikke at lave en ny pull request.

Hvis du får en anmodning tilbage fra din lærer om at udføre ændringer, skal du implementere ændringerne/løse problemet og lave en ny pull-request. 
