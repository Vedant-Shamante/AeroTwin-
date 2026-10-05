const aircraftSvg = `
<svg class="twin-aircraft" viewBox="0 0 1000 300" role="img" aria-labelledby="aircraft-title aircraft-desc">
  <title id="aircraft-title">Two-dimensional aircraft side view</title>
  <desc id="aircraft-desc">Technical illustration of a twin-engine passenger aircraft with highlighted engines, wings, cabin and landing gear.</desc>
  <defs>
    <linearGradient id="plane-body" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#fff"/><stop offset=".2" stop-color="#f5fbff"/><stop offset=".52" stop-color="#cce7f7"/><stop offset=".78" stop-color="#a6d1e9"/><stop offset="1" stop-color="#6ca5ca"/></linearGradient>
    <linearGradient id="plane-wing" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#fff"/><stop offset=".35" stop-color="#c4e2f3"/><stop offset="1" stop-color="#5897bf"/></linearGradient>
    <linearGradient id="plane-engine" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#fff"/><stop offset=".45" stop-color="#d9effa"/><stop offset="1" stop-color="#669fbe"/></linearGradient>
  </defs>
  <g class="aircraft-drawing" transform="translate(1000 0) scale(-1 1)" stroke="#397ba4" stroke-linejoin="round" stroke-linecap="round">
    <path class="plane-wing" d="M395 135 223 70 195 74 315 146 427 163Z"/>
    <path class="plane-wing" d="m564 139 216 45 23-7-165-65-88 11Z"/>
    <path class="plane-wing" d="m195 131 65-59 23 2-31 73Z"/>
    <path class="plane-body" d="M90 145q37-7 82-8l574-15 120 19q37 6 68 22-29 13-70 17l-620 8q-87 1-139-12-25-7-25-15 0-10 10-16Z"/>
    <path class="plane-tail" d="m173 138 29-81 36 2 16 75m-24 56 15 45-35 3-49-48"/>
    <path class="cockpit-glass" d="m875 140 28 3 25 13-49-2Z"/>
    <path class="body-highlight" d="M120 148q85-11 213-12l493-10"/>
    <path class="body-livery" d="M159 174q142 11 314 4t360-16"/>
    <path class="cabin-windows" d="m260 137 8 0m18-1 8 0m18-1 8 0m18-1 8 0m18-1 8 0m18-1 8 0m18-1 8 0m18-1 8 0m18-1 8 0m18-1 8 0m18-1 8 0m18-1 8 0m18-1 8 0m18-1 8 0m18-1 8 0m18-1 8 0m18-1 8 0m18-1 8 0"/>
    <path class="wing-detail" d="m230 80 114 62m-96-66 122 67m220 2 180 43m-167-51 174 42"/>
    <path class="tail-detail" d="m205 67 31 3m-48 129 34 43"/>
    <g class="engine-unit" data-engine-model="1"><path class="engine-cowl" d="M465 176q4-27 30-29h47q15 4 16 30-2 23-17 25h-47q-27-3-29-26Z"/><path class="engine-cowl-inset" d="M489 153h48q14 3 14 22t-14 22h-48q-12-4-13-22t13-22Z"/><ellipse class="engine-inlet" cx="478" cy="177" rx="8" ry="21"/><path class="engine-blade" d="m478 160 3 17-3 17-3-17Zm-13 17 13-3 13 3-13 3Z"/><path class="engine-highlight" d="M492 154h44"/></g>
    <g class="engine-unit" data-engine-model="2"><path class="engine-cowl" d="M674 179q4-25 29-27h45q15 4 16 28-2 22-16 24h-46q-26-3-28-25Z"/><path class="engine-cowl-inset" d="M699 155h45q14 3 14 25t-14 22h-45q-12-4-13-22t13-25Z"/><ellipse class="engine-inlet" cx="687" cy="180" rx="8" ry="20"/><path class="engine-blade" d="m687 164 3 16-3 16-3-16Zm-13 16 13-3 13 3-13 3Z"/><path class="engine-highlight" d="M701 155h41"/></g>
    <path class="gear-strut" d="m330 188-4 37m-8 0h20m242-30-3 31m-8 0h19m191-36-2 33m-8 0h19"/>
    <circle class="gear-wheel" cx="326" cy="230" r="8"/><circle class="gear-wheel" cx="560" cy="231" r="8"/><circle class="gear-wheel" cx="749" cy="228" r="7"/>
    <path class="plane-marking" d="M120 168h62m643-20 49 5"/>
  </g>
</svg>`;

const engineSvg = `
<svg class="twin-engine" viewBox="0 0 1000 250" role="img" aria-labelledby="engine-title engine-desc">
  <title id="engine-title">Interactive turbofan digital twin</title>
  <desc id="engine-desc">Shaded 2.5D cutaway of a turbofan with clearly identified fan, compressor, combustor, turbine, and exhaust nozzle stages.</desc>
  <defs>
    <linearGradient id="engine-shell" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#fff"/><stop offset=".13" stop-color="#e1f3fc"/><stop offset=".3" stop-color="#9dccE3"/><stop offset=".52" stop-color="#f8fdff"/><stop offset=".79" stop-color="#a9cfe3"/><stop offset="1" stop-color="#5e8daa"/></linearGradient>
    <linearGradient id="engine-core" x1="0" y1="0" x2="1" y2="0"><stop stop-color="#16a9df"/><stop offset=".33" stop-color="#30c4e0"/><stop offset=".49" stop-color="#ffc45c"/><stop offset=".63" stop-color="#f45f37"/><stop offset=".78" stop-color="#f28a42"/><stop offset="1" stop-color="#37a9d1"/></linearGradient>
    <radialGradient id="fan-metal" cx="35%" cy="26%"><stop stop-color="#f9fdff"/><stop offset=".35" stop-color="#9ac9e2"/><stop offset=".72" stop-color="#347fa6"/><stop offset="1" stop-color="#174c6b"/></radialGradient>
    <marker id="flow-arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 8 4 0 8Z" fill="#139ec8"/></marker>
  </defs>
  <g class="engine-diagram" stroke-linejoin="round" stroke-linecap="round">
    <path class="engine-casing-shadow" d="M112 183q62 24 146 25h490q69-1 105-30l71-39v18l-71 37q-45 26-105 27H258q-85-2-146-28l-39-31Z"/>
    <path class="engine-casing" d="M112 49q62-24 146-25h490q69 1 105 30l71 39v61l-71 37q-45 26-105 27H258q-85-2-146-28l-39-31V81Z"/>
    <path class="casing-highlight" d="M121 82 165 48q36-16 94-17h487q73 0 105 27l61 35"/>
    <path class="engine-inner" d="M119 89q63-20 144-20h470q75 0 112 23l51 26-51 23q-39 22-112 22H263q-81 0-144-20l-28-10V99Z"/>
    <path class="engine-flow-bed" d="M260 91h514v57H260Z"/><path class="engine-core-flow" d="M264 110h514v38H264Z"/>
    <path class="flow-lines" d="M290 119h455m-430 13h410" marker-end="url(#flow-arrow)"/>
    <g class="fan-stage"><ellipse class="fan-disc" cx="137" cy="119" rx="30" ry="66"/><path class="fan-blades" d="M137 119 132 58q7-7 12 1l-3 60 20-57q10-2 11 6l-26 56 43-39q9 4 6 12l-45 32 57-12q7 8 1 14l-58 7 53 29q0 9-10 10l-49-35 30 52q-5 9-13 4l-24-53-6 60q-8 6-13-1l8-60-29 53q-10 0-11-9l34-50-53 27q-9-4-5-13l55-31-61 1q-6-8 0-14l60 7-49-37q2-10 11-9Z"/><ellipse class="fan-hub" cx="137" cy="119" rx="10" ry="20"/><ellipse class="fan-rim" cx="137" cy="119" rx="28" ry="64"/></g>
    <g class="compressor-stages"><path d="m213 70 18 49-18 49m20-95 19 46-19 47m21-91 19 44-19 45m21-87 19 42-19 43m21-83 18 40-18 41m22-80 18 39-18 39"/><path class="compressor-highlight" d="m216 75 15 43m20-39 15 38m23-34 15 32m25-28 13 28m26-22 11 22"/></g>
    <path class="combustor" d="M365 91q34-24 76 0l16 28-16 28q-42 24-76 0l-15-28Z"/><path class="combustor-liner" d="M368 98q34-19 69 0l12 21-12 21q-35 19-69 0l-11-21Z"/><path class="combustion-flame" d="M372 119q30-23 68 0-34 22-68 0Z"/><path class="flame-core" d="M381 119q20-12 46 0-23 12-46 0Z"/>
    <g class="turbine-stages"><path d="m498 79 17 40-17 40m22-79 18 39-18 39m23-76 17 37-17 37m23-72 16 35-16 35m22-67 15 32-15 32"/><path class="turbine-highlight" d="m500 84 15 34m25-31 13 34m28-29 13 28m29-24 12 23m29-18 11 18"/></g>
    <path class="exhaust-core" d="m580 100 196 10v18l-196 10Z"/><path class="nozzle-rim" d="m777 93 44 26-44 26"/><path class="shaft" d="M158 119h669"/>
    <path class="casing-seam" d="M190 55v128m630-133v138m48-118v100"/><path class="casing-rivet" d="M230 43h1m52-4h1m52-1h1m52 0h1m52 0h1m52 0h1m52 0h1m52 0h1m52 0h1m52 2h1m52 9h1m-580 135h1m52 7h1m52 1h1m52 0h1m52 0h1m52 0h1m52 0h1m52 0h1m52 0h1m52-2h1"/>
    <path class="sensor-dot" d="M288 57v-20m91 45V43m111 43V48m124 36V47m104 41V51"/>
  </g>
</svg>`;

const stage = `
<div class="twin-stage">
  <div class="stage-toolbar" aria-label="Visualization controls">
    <button class="btn" data-twin-action="thermal" aria-pressed="false">◉ Thermal overlay</button>
    <button class="btn" data-twin-action="labels" aria-pressed="false">⌖ Labels</button>
    <span class="view-mode"><i></i> 2D SCHEMATIC</span>
  </div>
  <section class="twin-visual-panel aircraft-panel" aria-labelledby="aircraft-visual-title">
    <div class="visual-heading"><div><span class="visual-eyebrow">AIRFRAME OVERVIEW</span><h3 id="aircraft-visual-title">Aircraft Digital Twin</h3><p>2D interactive model · real-time system data</p></div><span class="visual-live"><i></i> Synced</span></div>
    <div class="aircraft-canvas">
      ${aircraftSvg}
      <svg class="aircraft-connectors" viewBox="0 0 1000 300" aria-hidden="true"><path d="M145 47v53l185 28m152-81v52l-68 22m395-53v32l-203 26M205 253v-40l173-44m230 84v-43l-86-44m227 80v-50l-91-8"/><circle cx="330" cy="128" r="4"/><circle cx="429" cy="121" r="4"/><circle cx="621" cy="130" r="4"/><circle cx="378" cy="169" r="4"/><circle cx="579" cy="166" r="4"/><circle cx="685" cy="185" r="4"/></svg>
      <span class="aircraft-label label-flight"><i>⌖</i><span>Flight control<b>● Normal</b></span></span>
      <span class="aircraft-label label-avionics"><i>▤</i><span>Avionics<b>● Synced</b></span></span>
      <span class="aircraft-label label-electrical"><i>ϟ</i><span>Electrical<b>● Normal</b></span></span>
      <span class="aircraft-label label-environment"><i>✿</i><span>Environmental<b>● Normal</b></span></span>
      <button class="aircraft-label label-engine-one engine-chip" data-engine-select="1" aria-pressed="false"><i>◉</i><span>Engine 1<b>97.2% · Healthy</b></span></button>
      <button class="aircraft-label label-engine-two engine-chip" data-engine-select="2" aria-pressed="false"><i>◉</i><span>Engine 2<b>96.8% · Healthy</b></span></button>
      <span class="aircraft-label label-hydraulics"><i>⌁</i><span>Hydraulics<b>● Normal</b></span></span>
    </div>
  </section>
  <section class="twin-visual-panel engine-panel" aria-labelledby="engine-visual-title">
    <div class="visual-heading"><div><span class="visual-eyebrow">PROPULSION SYSTEM</span><h3 id="engine-visual-title">Engine Digital Twin</h3><p>Interactive cutaway · sensor readings mapped to engine stages</p></div><span class="engine-health"><b>98.6%</b><small>ENGINE HEALTH</small></span></div>
    <div class="engine-canvas">${engineSvg}<span class="engine-label fan-label">FAN SPEED <b>2,450 RPM</b></span><span class="engine-label oil-label">OIL PRESSURE <b>4.2 bar</b></span><span class="engine-label temp-label">EXHAUST TEMP <b>642 °C</b></span><span class="engine-depth-label">CUTAWAY VIEW · AIRFLOW LEFT TO RIGHT</span></div>
    <div class="engine-stages" aria-label="How the engine works"><div><i>01</i><b>Fan</b><small>Draws air in</small></div><span>→</span><div><i>02</i><b>Compressor</b><small>Pressurizes air</small></div><span>→</span><div class="hot-stage"><i>03</i><b>Combustor</b><small>Fuel adds energy</small></div><span>→</span><div class="hot-stage"><i>04</i><b>Turbine</b><small>Turns the fan</small></div><span>→</span><div><i>05</i><b>Nozzle</b><small>Produces thrust</small></div></div>
    <div class="engine-callouts"><span><i>◌</i> Inlet temp <b>22 °C</b></span><span><i>◉</i> Fuel flow <b>18.5 L/h</b></span><span><i>♨</i> Oil temperature <b>92 °C</b></span><span><i>∿</i> Vibration <b>Normal</b></span><span><i>↗</i> Turbine temp <b>690 °C</b></span></div>
  </section>
  <div class="stage-scale">ILLUSTRATIVE MODEL · AT-204</div>
</div>
<div class="twin-kpis"><div class="twin-kpi"><small>Model synchronization</small><strong class="positive">98.6%</strong></div><div class="twin-kpi"><small>Last telemetry packet</small><strong>12 seconds ago</strong></div><div class="twin-kpi"><small>Active components</small><strong>248 / 251</strong></div><div class="twin-kpi"><small>Model revision</small><strong>REV 4.8.2</strong></div></div>`;

const components = makeTable(['System', 'Condition', 'Live value', 'Threshold'], [
    ['Engine 1', statusBadge('Optimal'), 'EGT 642 °C', '< 700 °C'],
    ['Engine 2', statusBadge('Optimal'), 'EGT 638 °C', '< 700 °C'],
    ['Hydraulics', statusBadge('Nominal'), 'Pressure 2,980 psi', '2,600–3,200 psi'],
    ['Electrical', statusBadge('Nominal'), 'Bus 28.1 V', '26–30 V'],
    ['Landing gear', statusBadge('Monitor', 'watch'), 'Cycle count 8,420', 'Service at 9,000']
]);

renderWorkspace(`
<div class="grid grid-4">
  ${metricCard('Aircraft model', 'AT-204', 'Airbus A320neo · MSN 10842', '✈')}
  ${metricCard('Twin confidence', '98.6%', '<span class="positive">Verified</span> against flight data', '◇', 'var(--green)')}
  ${metricCard('Telemetry streams', '248', '<span class="positive">All core streams active</span>', '⌗', 'var(--cyan)')}
  ${metricCard('Last sync', '12 sec', 'Real-time connection', '↻', 'var(--amber)')}
</div>
<div class="panel section-gap">
  <div class="panel-head"><div><h2 class="panel-title">Aircraft model</h2><p class="panel-subtitle">2D system visualization · select an engine to inspect</p></div><span class="tag tag-live"><i class="dot"></i> Connected</span></div>
  ${stage}
</div>
<div class="section-gap">${panel('Component health', 'Current digital-twin system readings', components)}</div>`);

document.addEventListener('click', event => {
    const engineButton = event.target.closest('[data-engine-select]');
    if (engineButton) {
        const selected = engineButton.dataset.engineSelect;
        document.querySelectorAll('[data-engine-select]').forEach(button => {
            const isSelected = button.dataset.engineSelect === selected;
            button.setAttribute('aria-pressed', String(isSelected));
        });
        document.querySelectorAll('[data-engine-model]').forEach(engine => {
            engine.classList.toggle('engine-selected', engine.dataset.engineModel === selected);
        });
        return;
    }

    const button = event.target.closest('[data-twin-action]');
    if (!button) return;
    const twinStage = document.querySelector('.twin-stage');
    const action = button.dataset.twinAction;
    if (action === 'thermal') {
        const enabled = twinStage.classList.toggle('thermal-on');
        button.setAttribute('aria-pressed', String(enabled));
    } else if (action === 'labels') {
        const hidden = twinStage.classList.toggle('hide-labels');
        button.setAttribute('aria-pressed', String(hidden));
    }
});
