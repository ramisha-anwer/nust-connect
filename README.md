<p align="center">β οΈThis Project is still under progressβ οΈ </p>

# NUST Connect

NUST Connect is our online system designed to guide students and employers through the co-op process. 

## Demo 

![Demo](demo.gif)

**_Built using React JS, Redux, Firebase & Styled-Components_** within a week.

The UI is inspired by **LinkedIn**

## π Objectives 


π Students can collaborate with each other to work on a project. <br/>
π NPO can post job/internship opportunities for students. <br/>
π Alumni can refer students for job openings in their current organisation. <br/>
π Students can create their profile to showcase their skills and upload resumes. <br/>
π Hiring managers can find candidates with appropriate skills/experience.<br/>
π Employers can schedule interviews . <br/>
π A Community place where students share their experience, guide and discuss academic/professional concerns.<br/>


## Features and Functionality

π Login using Google (Firebase Authentication)<br/>
π   Create a new post<br/>
π   Share photos and videos (React player for videos)<br/>
π   Like posts<br/>
π   Realtime update likes and posts<br/>
π   Auto authenticate user on refresh<br/>
π   Sign Out<br/>

## π‘Future Plans

-   Add Employers Module 
-   Schedule Interviews
-   Student Applications tracking system
-   Integrated Webcam feature for attending interviews
-   employer  can submit performance evaluation

## How to build your own..?

1. Clone this repo
1. Install all the dependencies
    ```bash
    npm i
    ```
1. Setup Firebase

    - Create Firebase account
    - Create a new project
    - Create a web app for that
    - Copy your config from there

        - Select config option
        - Paste those config inside firebase/config.js file

    - Setup authentication using Google

1. Tweak code as you like
1. Let's build the optimized version

    ```bash
    npm run build
    ```

1. **Now for hosting on Firebase lets config Firebase locally**

    - Install Firebase CLI
    - Login to Firebase

        ```bash
        firebase login
        ```

    - Initialize Firebase

        ```bash
        firebase init
        ```

    - Select hosting in the menu
    - Select your respective project from the list
    - Select 'build' as your hosting directory and other options as you want
    - Let's deploy our clone and make it live

        ```bash
        firebase deploy
        ```

**That's it our project is up and running share it now**



**_NOTE: PLEASE LET ME KNOW IF YOU DISCOVERED ANY BUG OR YOU HAVE ANY SUGGESTIONS_**
