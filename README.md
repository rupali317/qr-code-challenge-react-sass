
# Frontend Mentor - QR code component solution

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

  
## Table of contents

- [Overview](#overview)

- [Screenshot](#screenshot)

- [Links](#links)

- [My process](#my-process)

- [Built with](#built-with)

- [What I learned](#what-i-learned)

- [Continued development](#continued-development)

- [Useful resources](#useful-resources)

- [Author](#author)

- [Acknowledgments](#acknowledgments)
  

## Overview

### Screenshot

![QR code component screenshot](https://github.com/rupali317/qr-code-challenge-react-sass/blob/main/public/images/QR%20code%20challenge%20screenshot.png)


### Links

- Solution URL: [QR code github](https://github.com/rupali317/qr-code-challenge-react-sass)
- Live Site URL: [QR code challenge live](https://rupali-qr-code-react-sass.netlify.app/)


## My process

### Built with

- Semantic HTML5 markup
- ReactJS (used create-react-app command to setup the project)
- SASS Ruby
- React Testing Library


### What I learned
  
1. Importance of rel="noreferrer”. When we use target="_blank" in your HTML code to open a link in a new tab or window, there's a potential security risk, especially in older web browsers. If we do not add this information to the link, there's a chance that the newly opened tab or window can know details about the page that opened it. This might not be a problem in many cases, but it could potentially be exploited by bad websites.


### Improvements from previous version

1) Instead of getting fonts from another link, I hosted it locally to improve web performance metrics. Th
2) In another iteration, I was able to vertically position the qr code to the center of the mobile screen especially when the bottom bar of the browser exists. In my case, svh unit is suitable since this project does not involve any scrolling
3) Segregated the SCSS files to enhance modularity and maintainability 


### Continued development

1) Explore more testing such as clicking the footer links, and taking one to the respective sites.
2) PageSpeed Insight detected that there is no Content Security Policy (CSP) in enforcement mode. A strong CSP significantly reduces the risk of cross-site scripting (XSS) attacks. [Learn how to use a CSP to prevent XSS](https://developer.chrome.com/docs/lighthouse/best-practices/csp-xss/?utm_source=lighthouse&utm_medium=lr)
  

### Useful resources

- [Scrimba's React course](https://scrimba.com/learn/learnreact) - A hands-on mode of practicing React. It was a refresher for me.
- [Steps to build React project using create-react-app](https://radixweb.com/blog/steps-to-build-react-project-with-create-react-app)
- [Sass](https://sass-lang.com/)
- [New viewport unit](https://ishadeed.com/article/new-viewport-units/#:~:text=Be%20careful%20with%20the%20dvh,is%20scrolling%20up%20or%20down.) - Talked about when svh is used
  

## Author  

- Website - [Rupali Roy Choudhury](https://www.linkedin.com/in/rupali-rc/)
- Frontend Mentor - [@rupali317](https://www.frontendmentor.io/profile/rupali317)
 

## Acknowledgments

I express my gratitude towards my mentor - Deborah for the insightful code review session
