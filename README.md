# Mashwary · مشواري

## What this is

ride booking app we built for capstone. runs on free services only. no paid APIs no accounts no card. fifteen files under five thousand lines. boots on any laptop with python.

riders book a trip. share live location with people they trust. watch it move on a map. drivers register with national ID face photo and vehicle. saves frequent addresses. search any location.

---

## Files

```
Meshwary/
├── config.json    palette tokens
├── index.html     page structure
├── shell.js       injects the OpenStreetMap iframe; Edge-only redirect trap
└── styles.css     layout + theme colors
```

## Running it

no build step. no dependencies. nothing in the first place. except the folder of the project

```bash
# open directly
open index.html

# or serve locally
python -m http.server 8000
```

then go to `http://localhost:8000`

careful with shell.js though. it bounces Edge to google.com if browser chrome is taller or wider than 160px either axis. so devtools open or side panel open = redirected.

## Structure

- header has the logo and a nav link to #about-me
- #about-me holds the bio paragraph a tutorial link and the #map container
- footer lists the team
- #map is where shell.js drops an iframe. OpenStreetMap embed Cairo marker at 30.0444 31.2357

## Changing things

theme is in config.json. if you edit the palette there you also gotta change the same values in the :root block of styles.css or nothing happens.

map coords are in shell.js in the bbox and marker query params.

## Team

**Team Leader**
Hamza Ahmed Mohamed Sabr

**Members**
Mariam Mohamed Ramadan · Malak Mahammed Saied Mahamed · Mohamed Khaled · Anas Samir Ahmed Abd-el-fatah Radwan

**Engineers**
Marwan Mamdouh Ramadan Moawad · Abdallah Saleh Mohamed

**Supervisor**
Marwa Imam