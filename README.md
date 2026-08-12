# Portofoliu tehnic Front End & Python

Indexul public al proiectelor si al dovezilor tehnice: [pagina statica](index.html).

## Stare si delimitare

Snapshot-ul repository-ului depus la termen este tag-ul `submission-21663739-2026-08-12`. Orice imbunatatire ulterioara si demo nou este marcat **post-depunere** si nu este prezentat ca stare de la termen.

## Proiecte si matrice tehnica

| Proiect | Stare | Stack factual |
| --- | --- | --- |
| [Farm Registry Web](https://github.com/luciandanileico94-dev/farm-registry-web) | Depus | Demo static sintetic; React, TypeScript, React Query, Axios REST, Leaflet/GeoJSON, Vitest/RTL |
| [Farm Registry Python Tools](https://github.com/luciandanileico94-dev/farm-registry-python-tools) | Depus | Python, FastAPI, Pydantic, Shapely/pyproj, REST/OpenAPI, pytest |
| [Farm Registry Mobile](https://github.com/luciandanileico94-dev/farm-registry-mobile) | Depus | Coada si istoric offline local; React Native, Expo, TypeScript, AsyncStorage, Jest/RNTL |
| [Workplace Safety](https://github.com/luciandanileico94-dev/workplace-safety-demo) | Post-depunere | Flux SSM sintetic, ne-reglementat si neproductiv; Next.js, React, TypeScript, Vitest/RTL |
| [Tender Intelligence](https://github.com/luciandanileico94-dev/tender-intelligence-demo) | Post-depunere | Dosar local sintetic; React, TypeScript, Redux Toolkit, Python REST, Vitest/RTL, Playwright; fara scraping live, OCR sau analiza LLM |
| [Learning Platform](https://github.com/luciandanileico94-dev/learning-platform-demo) | Post-depunere | Flux de invatare sintetic doar in browser; React, TypeScript, React Context, Playwright; fara Telegram, backend sau admin |

Web si Python formeaza impreuna o demonstratie front-end + contract API: Web este un demo static cu date sintetice, iar repository-ul Python ofera un contract GeoJSON `GET /parcels` separat, testabil conform README-ului. Nu este un API live implementat sau deployat. Repository-urile sunt separate pentru claritate. Aplicatia Mobile ramane un flux offline local, fara GPS, backend sau sincronizare guvernamentala.

## Dovezi Git si date

Sunt disponibile repository-urile si README-urile publice, precum si verificari automate. Proiectele publice folosesc date sintetice sau anonimizate. Nu sunt publicate secrete, date personale ori materiale de productie si nu sunt revendicate deploy-uri live sau integrari guvernamentale.
