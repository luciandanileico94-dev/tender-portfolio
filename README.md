# Portofoliu tehnic Front End & Python

Indexul public al proiectelor si al dovezilor tehnice: [pagina statica](index.html).

## Stare si delimitare

Snapshot-ul repository-ului depus la termen este tag-ul `submission-21663739-2026-08-12`. Orice imbunatatire ulterioara si demo nou este marcat **post-depunere** si nu este prezentat ca stare de la termen.

## Proiecte si matrice tehnica

| Proiect | Stare | Stack factual | Dovezi verificabile |
| --- | --- | --- | --- |
| [Farm Registry Web](https://github.com/luciandanileico94-dev/farm-registry-web) | Depus | React, TypeScript, React Query, Axios REST, Leaflet/GeoJSON, Vitest/RTL | [Arhitectură](https://github.com/luciandanileico94-dev/farm-registry-web/blob/main/docs/architecture.md) · [Matrice](https://github.com/luciandanileico94-dev/farm-registry-web/blob/main/docs/evidence-matrix.md) |
| [Farm Registry Python Tools](https://github.com/luciandanileico94-dev/farm-registry-python-tools) | Depus | Python, FastAPI, Pydantic, Shapely/pyproj, REST/OpenAPI, pytest | [Arhitectură](https://github.com/luciandanileico94-dev/farm-registry-python-tools/blob/main/docs/architecture.md) · [Matrice](https://github.com/luciandanileico94-dev/farm-registry-python-tools/blob/main/docs/evidence-matrix.md) |
| [Farm Registry Mobile](https://github.com/luciandanileico94-dev/farm-registry-mobile) | Depus | React Native, Expo, TypeScript, AsyncStorage, Jest/RNTL, Expo web preview | [Arhitectură](https://github.com/luciandanileico94-dev/farm-registry-mobile/blob/main/docs/architecture.md) · [Matrice](https://github.com/luciandanileico94-dev/farm-registry-mobile/blob/main/docs/evidence-matrix.md) |
| [Workplace Safety](https://github.com/luciandanileico94-dev/workplace-safety-demo) | Post-depunere | Next.js, React, TypeScript, Vitest/RTL |
| [Tender Intelligence](https://github.com/luciandanileico94-dev/tender-intelligence-demo) | Post-depunere | React, TypeScript, Redux Toolkit, Python REST, Vitest/RTL, Playwright |
| [Learning Platform](https://github.com/luciandanileico94-dev/learning-platform-demo) | Post-depunere | React, TypeScript, React Context, Express REST, Vitest/RTL, Playwright |

Demo-uri live stabile: [Farm Registry Web](https://farm-registry-web.vercel.app), [Farm Registry Mobile](https://farm-registry-mobile.vercel.app), [Workplace Safety](https://workplace-safety-demo.vercel.app), [Tender Intelligence](https://tender-intelligence-demo.vercel.app) si [Learning Platform](https://learning-platform-demo-pi.vercel.app). Acestea sunt suprafete UI; nu este revendicata o publicare live a API-ului Python.

Web si Python formeaza impreuna o demonstratie front-end + FastAPI REST: clientul React foloseste `GET /parcels`, endpoint expus de serviciul FastAPI. Repository-urile sunt separate pentru claritate.

## Dovezi Git si date

Fiecare proiect depus are acum o arhitectură și o matrice de dovezi care leagă afirmația de fișier, simbol și comandă de verificare. Sunt disponibile branches, pull requests și verificări automate. Proiectele publice folosesc date sintetice sau anonimizate. Nu sunt publicate secrete, date personale ori materiale de producție.
