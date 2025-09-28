const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({ width: 1600, height: 3000 });
  await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await new Promise((resolve) => setTimeout(resolve, 6000));
  await page.pdf({
    path: '/Users/youngjin-hong/Desktop/resume/resume-draft.pdf',
    width: '1600',
    height: '1587',
    printBackground: true, // 배경색, 배경이미지까지 출력
  });
  await browser.close();
})();
