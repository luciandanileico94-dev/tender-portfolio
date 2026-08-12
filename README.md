# Portofoliu tehnic Front End & Python

Indexul public al proiectelor si al dovezilor tehnice: [pagina statica](index.html).

## Stare si delimitare

Snapshot-ul repository-ului depus la termen este tag-ul `submission-21663739-2026-08-12`. Orice imbunatatire ulterioara si demo nou este marcat **post-depunere** si nu este prezentat ca stare de la termen.

## Dovezi actualizate post-depunere

Aceste linkuri sunt **post-depunere / updated evidence** și nu fac parte din materialul depus la termen. Ele trimit direct la documentația existentă din ramurile `main` ale proiectelor Farm Registry.

- Web: [Arhitectură](https://github.com/luciandanileico94-dev/farm-registry-web/blob/main/docs/architecture.md) · [Matrice de dovezi](https://github.com/luciandanileico94-dev/farm-registry-web/blob/main/docs/evidence-matrix.md)
- Mobile: [Arhitectură](https://github.com/luciandanileico94-dev/farm-registry-mobile/blob/main/docs/architecture.md) · [Matrice de dovezi](https://github.com/luciandanileico94-dev/farm-registry-mobile/blob/main/docs/evidence-matrix.md)
- Python: [Arhitectură](https://github.com/luciandanileico94-dev/farm-registry-python-tools/blob/main/docs/architecture.md) · [Matrice de dovezi](https://github.com/luciandanileico94-dev/farm-registry-python-tools/blob/main/docs/evidence-matrix.md)

## Proiecte si matrice tehnica

| Proiect | Stare | Live | Stack factual | Dovezi verificabile |
| --- | --- | --- | --- | --- |
| [Farm Registry Web](https://github.com/luciandanileico94-dev/farm-registry-web) | Depus | [Deschide](https://farm-registry-web.vercel.app) | React, TypeScript, React Query, Axios REST, Leaflet/GeoJSON, Vitest/RTL | [Arhitectură](https://github.com/luciandanileico94-dev/farm-registry-web/blob/main/docs/architecture.md) · [Matrice](https://github.com/luciandanileico94-dev/farm-registry-web/blob/main/docs/evidence-matrix.md) |
| [Farm Registry Python Tools](https://github.com/luciandanileico94-dev/farm-registry-python-tools) | Depus | [API](https://farm-registry-api-demo.onrender.com) · [Docs](https://farm-registry-api-demo.onrender.com/docs) | Python, FastAPI, Pydantic, Shapely/pyproj, REST/OpenAPI, pytest | [Arhitectură](https://github.com/luciandanileico94-dev/farm-registry-python-tools/blob/main/docs/architecture.md) · [Matrice](https://github.com/luciandanileico94-dev/farm-registry-python-tools/blob/main/docs/evidence-matrix.md) |
| [Farm Registry Mobile](https://github.com/luciandanileico94-dev/farm-registry-mobile) | Depus | [Deschide](https://farm-registry-mobile.vercel.app) | React Native, Expo, TypeScript, AsyncStorage, Jest/RNTL, Expo web preview | [Arhitectură](https://github.com/luciandanileico94-dev/farm-registry-mobile/blob/main/docs/architecture.md) · [Matrice](https://github.com/luciandanileico94-dev/farm-registry-mobile/blob/main/docs/evidence-matrix.md) |
| [Workplace Safety](https://github.com/luciandanileico94-dev/workplace-safety-demo) | Post-depunere | [Deschide](https://workplace-safety-demo.vercel.app) | Next.js, React, TypeScript, Vitest/RTL |
| [Tender Intelligence](https://github.com/luciandanileico94-dev/tender-intelligence-demo) | Post-depunere | [Deschide](https://tender-intelligence-demo.vercel.app) | React, TypeScript, Redux Toolkit, Python REST, Vitest/RTL, Playwright |
| [Learning Platform](https://github.com/luciandanileico94-dev/learning-platform-demo) | Post-depunere | [Deschide](https://learning-platform-demo-pi.vercel.app) | React, TypeScript, React Context, Express REST, Vitest/RTL, Playwright |

Web si Python formeaza impreuna o demonstratie front-end + FastAPI REST: clientul React foloseste `GET /parcels`, endpoint expus de serviciul FastAPI. Repository-urile sunt separate pentru claritate.

## Dovezi Git si date

Fiecare proiect depus are acum o arhitectură și o matrice de dovezi care leagă afirmația de fișier, simbol și comandă de verificare. Sunt disponibile branches, pull requests și verificări automate. Proiectele publice folosesc date sintetice sau anonimizate. Nu sunt publicate secrete, date personale ori materiale de producție.
