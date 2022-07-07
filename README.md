# portfolio-react

## Host website via:
<h5> Github pages:</h5>
<li>https://www.youtube.com/watch?v=Q9n2mLqXFpU</li>
<li>https://www.c-sharpcorner.com/article/how-to-deploy-react-application-on-github-pages/</li>

##  
<h5>Package.json</h5>
Add:
<code> 
    
    "homepage": "https://{github_username}.github.io/{github_appname}"
    
    "homepage": "https://AlphonseRDSouza.github.io/portfolio-react"
</code> 

<code> npm install gh-pages — save-dev </code>

## 

<code> 
"scripts": {
    "predeploy": "npm run build",
    "deloy": "gh-pages -d build"
  },
</code>
