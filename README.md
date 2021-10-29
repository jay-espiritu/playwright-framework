## Installation Overview

#### Package installation

    npm install

#### Playwright installation

    npx playwright install

### Test Execution

By default, test files are run in parallel. Tests in a single file are run in order, in the same worker process. Group tests with `test.describe.parallel` to run tests in a single file in parallel.

#### **Run all tests**

    npm run test
    or
    npx playwright test

#### [**Run tagged tests**](https://playwright.dev/docs/test-annotations#tag-tests)

    npx playwright test --grep @tag
