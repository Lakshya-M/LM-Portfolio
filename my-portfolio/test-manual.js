const fs = require('fs');
const envFile = fs.readFileSync('.env.local', 'utf-8');
const envVars = Object.fromEntries(
  envFile.split('\n')
    .filter(Boolean)
    .map(line => line.split('=').map(s => s.trim().replace(/^\"|\"$/g, '')))
);

const payload = {
  access_key: envVars.WEB3FORMS_ACCESS_KEY,
  name: 'Lakshya Test Node',
  email: 'test@example.com',
  message: 'Local Testing without Next.js'
};

fetch('https://api.web3forms.com/submit', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  body: JSON.stringify(payload)
})
.then(r => r.text())
.then(t => {
  console.log('Raw response:', t);
  try {
    console.log('Parsed:', JSON.parse(t));
  } catch(e) {}
})
.catch(console.error);
