// Custom light amber skin for Swagger UI so these docs don't look like
// every other default swagger-ui-express page. Only cosmetic overrides —
// leaves the GET/POST/PUT/DELETE method colors untouched (they're semantic).
const swaggerUiOptions = {
  customSiteTitle: 'Scalable Backend API — Docs',
  customCss: `
    @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital@1&family=Inter:wght@400;500;600&display=swap');

    .topbar { display: none }
    body { background: #fdf8f1; font-family: 'Inter', sans-serif; }

    .swagger-ui { font-family: 'Inter', sans-serif; }
    .swagger-ui .info .title {
      font-family: 'Fraunces', serif;
      font-style: italic;
      color: #92400e;
    }
    .swagger-ui .info a { color: #b45309; }
    .swagger-ui .scheme-container {
      background: #fdf8f1;
      box-shadow: none;
      border-bottom: 1px solid #f3d9b1;
    }
    .swagger-ui .btn.authorize {
      background: #fdf8f1;
      color: #92400e;
      border-color: #b45309;
    }
    .swagger-ui select { border-color: #f3d9b1; }
    .swagger-ui .opblock-tag { border-bottom: 1px solid #f3d9b1; }
    .swagger-ui .opblock { border-color: #f3d9b1; }
    .swagger-ui table thead tr td, .swagger-ui table thead tr th {
      border-bottom: 1px solid #f3d9b1;
      color: #92400e;
    }
  `,
};

module.exports = swaggerUiOptions;
