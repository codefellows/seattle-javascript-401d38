# React Config Files

## Eslint config

- To use corrently you must install the following dev dependencies
  - `babel-eslint`
  - `eslint-plugin-react`

## Github Workflows

`tests.yml`

- installs node and runs any tests that have been added to the project

`react.yml`

- Uses build and deploy scripts to publish a react front end to gh-pages
- Requires a peronal token with repo / branch  persmissions to be added to your developer secrets as `PERSONAL_TOKEN`
