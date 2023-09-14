const puppeteer = require('puppeteer');
const fs = require('fs');

async function takeProjectScreenshot(url, outputPath) {
    const browser = await puppeteer.launch({
        headless: "new",
    });
    const page = await browser.newPage();
    await page.goto(url);

    // Ensure the directory exists before saving the screenshot
    const outputDir = outputPath.substring(0, outputPath.lastIndexOf('/'));
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    await page.screenshot({ path: outputPath });
    await browser.close();
}

const url = "https://watt-v2.vercel.app/#"
const screenshotPath = "./screenshots/screenshot.png"

takeProjectScreenshot(url, screenshotPath)
    .then(() => {
        console.log(`Screenshot saved to ${screenshotPath}`)
    })
    .catch((error) => {
        console.log("Error taking screenshot", error)
    })

module.exports = takeProjectScreenshot;
