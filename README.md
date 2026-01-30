# Playwright CSV-Driven Tests

This project runs UI tests with Playwright using test data from a CSV file. Each row in `data/test_cases.csv` is executed inside one Playwright test in `tests/translator.spec.js`. Results are written to `reports/test_results.csv` and an HTML report is generated in `playwright-report/`.

## Prerequisites
- Windows with Node.js 18+ installed
- Internet access (tests navigate to external sites)

## Install Dependencies
```bash
# From the project root
npm install

# Install Playwright browsers (Chromium/Firefox/WebKit)
npx playwright install
```

## Run Tests
- Run the CSV-driven translator test (recommended single worker):
```bash
npx playwright test tests/translator.spec.js --workers=1
```

- Run all tests:
```bash
npx playwright test
```

- Open the HTML report:
```bash
npx playwright show-report
```

- Optional: run headed (shows browser window) for debugging:
```bash
npx playwright test tests/translator.spec.js --headed --workers=1
```



## Project Structure
```
├── tests/
│ ├── pos/ # Positive test cases (24+)
│ │ ├── Pos_Fun_0001.spec.js
│ │ ├── Pos_Fun_0002.spec.js
│ │ └── ...
│ ├── neg/ # Negative test cases (10+)
│ │ ├── Neg_Fun_0001.spec.js
│ │ └── ...
│ └── ui/ # UI test cases
│ ├── Pos_UI_0001.spec.js
│ └── swiftTranslator.ui.spec.js

├── test-data/
│ └── IT3040_Assignment1_34_TestCases.xlsx # Complete test matrix
├── package.json # Dependencies
```


```

## Notes
- Playwright is configured for multiple browsers; you can customize `playwright.config.js` to adjust workers, retries, or proxies.
- The translator spec uses soft assertions so all rows are attempted; review the HTML report and `reports/test_results.csv` for per-row outcomes.
