// @ts-check
const KEY = '03542fbaca8cb7e16a9bd9d20d79fd1b';
const HOST = 'www.erbibeksah.com.np';
const BASE_URL = `https://${HOST}`;

const URLS = [
  `${BASE_URL}/`,
  `${BASE_URL}/projects/kaazii/`,
  `${BASE_URL}/projects/retirement-benefits/`,
  `${BASE_URL}/projects/exam-proctoring/`,
  `${BASE_URL}/projects/video-cdn/`,
  `${BASE_URL}/projects/devops-migration/`,
];

async function submitIndexNow() {
  console.log(`Submitting ${URLS.length} URLs to IndexNow (Bing / Yandex / Copilot)...`);

  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: `${BASE_URL}/${KEY}.txt`,
    urlList: URLS,
  };

  try {
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    if (res.status === 200 || res.status === 202) {
      console.log(`✅ IndexNow submission successful! Status: ${res.status}`);
    } else {
      console.warn(`⚠️ IndexNow responded with HTTP status ${res.status}: ${res.statusText}`);
      const text = await res.text();
      if (text) console.warn(text);
    }
  } catch (err) {
    console.error('❌ IndexNow submission error:', err);
  }
}

submitIndexNow();
