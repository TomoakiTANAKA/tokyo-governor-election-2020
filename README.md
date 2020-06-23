# Tokyo Governor Election 2020

[![Netlify Status](https://api.netlify.com/api/v1/badges/dd8c299b-4473-4eb1-b8ef-62e874e55e10/deploy-status)](https://app.netlify.com/sites/suspicious-bell-a9c79e/deploys)

## **Start developing.**

```shell
gatsby develop
open http://localhost:8000
```

## **Start production.**

* netlify

### first time

* set repository link to netlify

```shell
netlif login
netlify link
```

### deploy production

```shell
# create public files（set files on public directory)
netlify deploy

# reflect in the production
netlify deploy --prod
```

## **Modify posts**

modify *.md file on `content/blog/{candidate.name}/index.md`