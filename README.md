# Personal Bio Links [![status](https://img.shields.io/website-up-down-green-red/http/emilioblacksmith.github.io.svg)](https://emilioblacksmith.github.io/bioLink/)

## A Website Project for showing all of my main social links, to share in my social media

This project is a website to showcase my main links, and to help out strangers to know my current social media and personal projects that are currently in the making. It is based in Linktree and Linkin.bio. The main features of this projects are:

* A minimalistic web design for my main social media accounts and main links.
* A dark mode toggle button, that allows the user to have a better reading experience, based on their preference.
* A responsive design that changes depending if the user is in mobile or desktop.

## Preview
![Mobile Preview](https://github.com/EmilioBlacksmith/bioLink/assets/71019624/18c9e920-68bb-4253-94ba-e94155e35699)
![Website Preview](https://github.com/EmilioBlacksmith/bioLink/assets/71019624/36654b13-cf7c-4676-9414-37bf34960e45)

## How to tweak this project for your own uses

This project was meant for personal use to share my main links, so I'd encourage you to clone and rename this project to use your own purposes. It's a good starter template, I would, of course, suggest you delete my profile picture to put your own. by doing:

1. Click the <> Code Green button from the top right corner
2. in the Local Section, either click the Download ZIP, or Clone it with the terminal using the next:

    ```shell
        git clone git@github.com:EmilioBlacksmith/bioLink.git
    ```

3. I would suggest changing the next:
    * src/components/Links.jsx
    * src/components/Profile.jsx
    * src/icons/ -> to put all your favicon files (I used [https://realfavicongenerator.net/](https://realfavicongenerator.net/) to generate mine)
    * src/images/ -> add your profile picture here
    * index.html -> !! only to change the header with your own name
    * src/index.css -> If you want to change the colors for background, buttons and text, change their respective --body_example inside the :root(light) and [data-theme="dark"] (dark)
4. And commit to your own github repo, but before doing the next:
    * change the [ " base: "/your-repo-name/" ] ---> inside ./vite.config.js
    * and deploying in your terminal with (required to have nodejs installed):

    ```shell
        npm run build
    ```

5. Done, you will have your own personal bio link to share it to the world, let me know if everything works!

## Find a Bug or anything that should be improved?

If you found an issue or would like to submit an improvement to this project, please submit an issue using the issues tab above.

## Like this project?

Star it or share it to anyone that would find it useful for their own purpose and project. And feel free to follow my socials if you want to support more of this.

## Tech Stack behind this Project

![nodejs](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![javacript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white) ![vscode](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)

## Lighthouse Performance

![Lighthouse Biolink](https://github.com/EmilioBlacksmith/bioLink/assets/71019624/dbe0192c-f740-4d64-8da4-8441c93d3c0c)

[ the only issue with accessibility is due to the dark mode toggle due to it "not having a label" ]