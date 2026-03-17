// test-contact.js
const fs = require('fs');
const dotenv = require('dotenv');

// Load environment variables manually
const envPath = '.env.local';
if (fs.existsSync(envPath)) {
  const envConfig = dotenv.parse(fs.readFileSync(envPath));
  for (const k in envConfig) {
    process.env[k] = envConfig[k];
  }
}

async function run() {
  console.log("Key from env:", process.env.WEB3FORMS_ACCESS_KEY);

  const payload = {
    access_key: process.env.WEB3FORMS_ACCESS_KEY,
    name: "Lakshya Test",
    email: "test@example.com",
    message: "This is a local test run message.",
  };

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const text = await res.text();
    console.log("Raw Response Text:", text);

    try {
      const data = JSON.parse(text);
      console.log("Parsed JSON:", JSON.stringify(data, null, 2));
    } catch (e) {
      console.error("Could not parse response as JSON.");
    }
  } catch (err) {
    console.error("Fetch failed:", err);
  }
}

run();
