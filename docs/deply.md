## Deploy to Netlify Free

in netlify, when refreshing the page, it shows a 404 page not found.
To solve that, create a file named `_redirects` without any extension in the public folder. The add the following code in the file

    /* /index.html  200

then build and upload the file to netlify.

## Deploy to Digital Ocean Free

Create a new `App` from the digital ocean dashboard. During completing all the procedures don't forget to select the app type as `static SPA` else it will charge at least $10 per month.
Then we need to change in the `build command`. Add the following command in there

    npm run build && rm -rf ./public && mv ./build ./public

the default command is not suitable for most the cases. Then after deploying we'll face the page refreshing issue. So to solve that go to the settings of the App and add the new line in the `App Spec`

    catchall_document: index.html

it may be confusing. The whole App Spec should look like this

    name: kishor-academy-frontend
    region: blr
    static_sites:
    - build_command: npm run build && rm -rf ./public && mv ./build ./public
    - ----------------------------new line-----------------
    catchall_document: index.html
    --------------------------------------------------------
    environment_slug: node-js
    envs:
    - key: REACT_APP_GHOST_CONTENT_API_KEY
    scope: BUILD_TIME
    value: my_value
    - key: REACT_APP_GHOST_APP_URL
    scope: BUILD_TIME
    value: my_value
    github:
    branch: main
    deploy_on_push: true
    repo: Munna-Khandakar/Kishor-Academy
    name: kishor-academy
    routes:
    - path: /
    source_dir: /

After doing all these things, the app is supposed to work...!
