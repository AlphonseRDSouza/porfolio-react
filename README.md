### Quick Preview - https://alphonsedsouza-profile.netlify.app/

### Overview:
-	useState hook
-	React Icons:   
    * Google fonts,
    * [React icons](https://react-icons.github.io/react-icons/)
  
-   Modern and responsive design with css3
-   Multiple contact options(Email, Messenger and WhatsApp): [EmailJs](https://www.emailjs.com/docs/examples/reactjs/)
-	Create Carousels/Slides with SwiperJS[Todo]
-	Deploy your website.  ![Deploy To Netlify](https://www.netlify.com/img/deploy/button.svg)

### Sections:

- Home
- About me
- Experience
- Testimonial[Todo]
- Contact me

### How to deploy:
<h4>1. Github pages:</h4>
Tutorials:

   * [Video: Deploy A React App To Github Pages](https://www.youtube.com/watch?v=Q9n2mLqXFpU)
   
   * [Blog: GitHub Pages Deployment](https://www.c-sharpcorner.com/article/how-to-deploy-react-application-on-github-pages/)

#####  
<h5>Package.json</h5>
Add:
 
 ``` 
    "homepage": "https://{github_username}.github.io/{github_appname}"
    
    "homepage": "https://AlphonseRDSouza.github.io/portfolio-react"
 ``` 

<code> npm install gh-pages — save-dev </code>

##### 

``` 
"scripts": {
    "predeploy": "npm run build",
    "deloy": "gh-pages -d build"
  },
```


##### 2. [Netlify](https://app.netlify.com/):
Tutorial:
  * [Video: Deploy React App to Netlify](https://www.youtube.com/watch?v=OPalwvWO63U)
