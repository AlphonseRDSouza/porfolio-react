# portfolio-react

## Host website via:
<h3>1. Github pages:</h3>
Tutorials:
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

## 

<h3>2. Netlify:</h3>
https://app.netlify.com/

Tutorial:
 <li>https://www.youtube.com/watch?v=OPalwvWO63U</li>
