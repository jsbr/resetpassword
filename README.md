Reset password
==============

How to run
----------

### Install dependencies
```$ npm install```

### Launch development server:
```$ npm run start```

### Launch test:
```$ npm run test```

Why
---

Pour le projet j'ai utilisé React, typescript, parcel.js et Jest.

### React
Je suis en temps normal plus familier avec Angular, mais j'ai souvant eu a travailler avec React et c'était une occasion de
se rafréchire la mémoire. Initialement je voulais le faire avec `redux`, mais ça aurait ajouté un niveau de compléxité inutile vu la
simplicité du projet et que je m'étais limiter dans le temps.

### Typescript
Typescript offre le support de ES6+ tout en ajoutant le typage et est plus performant que Babel (malgré que pacel.js utilise babel.)
Le typage permet:
* De bien documenté le code.
* D'avantage d'erreur au build time.
* Ajoute des contraintes, ce qui permet de bien orienté le dévelopement.

Bref très utils en travaille d'équipe.

### Parcel.js
J'aime parcel.js. Il ne nécessite aucune configuration et est très rapide, malgré qu'il utilise Babel (seule Fusebox est plus rapide, mais j'ai déjà rentré des soucis)

### Jest
Outils de test simple qui vient avec JSDOM pour simplifier la vie

### Mon Approche
Comme dit plus haut j'avais l'idée en tête d'utilisé `redux` et lui ajouté une coche de IOC, d'où les services.
J'ai habituellement une approche très SOLID, mais bon je me suis limité en temps. 

NB: Je suis perfectioniste si vous reviewer pas vite, je risque d'y retouché ;) 