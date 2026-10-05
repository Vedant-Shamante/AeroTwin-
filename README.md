# AeroTwin

AeroTwin is a responsive aircraft operations and digital-twin dashboard prototype built with plain HTML, CSS, and JavaScript. No build tools or package installation are required.

## Run locally

Open `index.html` in a modern browser, or serve the `AeroTwin` folder with any static web server. The dashboard uses illustrative sample data and can be hosted as a static site.

## Pages

- `index.html` — fleet overview dashboard
- `pages/dashboard.html` — dashboard route
- `pages/digital-twin.html` — aircraft twin visualization
- `pages/engine-health.html` — propulsion monitoring
- `pages/predictions.html` — predictive maintenance insights
- `pages/mission.html` — mission operations
- `pages/maintenance.html` — service schedule
- `pages/telemetry.html` — sensor telemetry
- `pages/settings.html` — workspace settings

## Structure

- `css/` — shared shell, page, chart, and responsive styles
- `js/` — shared application shell, page views, and mock API
- `assets/` — optional locations for icons, images, and 3D models

All metrics, aircraft identifiers, and operational records are sample data for demonstration only. Connect `js/api.js` to a trusted backend before using this interface with live systems.
