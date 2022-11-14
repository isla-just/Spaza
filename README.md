<!-- PROJECT LOGO -->
<br />

![GitHub repo size](https://img.shields.io/github/repo-size/isla-just/Spaza?color=%231E2F4D)
![GitHub watchers](https://img.shields.io/github/watchers/isla-just/Spaza?color=%23CCDDEF)
![GitHub language count](https://img.shields.io/github/languages/count/isla-just/Spaza?color=%239DC39C)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/isla-just/Spaza?color=%23FEB930)
[![LinkedIn][linkedin-shield]][linkedin-url]
[![Instagram][instagram-shield]][instagram-url]

<h6 align="center">Isla Just 200080 IDV 304</h6>
<p align="center">
</br>
   
   <p align="center">
  <a href="https://github.com/isla-just/Spaza ">
    <img src="ReadMeImg/logo.png" alt="Logo" width="140" height="">
  </a>
  </p>
  
  <h3 align="center">Spaza</h3>

  <p align="center">
    Streamlining how you run your spaza shop in the simplest way possible<br>
      <a href="https://github.com/isla-just/Spaza"><strong>Explore the docs »</strong></a>
      <br />
      <br />
      <a href="https://drive.google.com/file/d/1u50WK_0OsHp2c_UdYsXfx5iIYmHGkPXJ/view?usp=sharing">View Demo</a>
       ·
       <a href="https://github.com/isla-just/Spaza/issues">Report Bug</a>
       ·
       <a href="https://github.com/isla-just/Spaza/issues">Request Feature</a>
   </p>

<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Project Description](#project-description)
  * [Built with](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Features and Functionality](#features-and-functionality)
   * [Features](#features)
   * [Functionality](#functionality)
* [Concept Process](#concept-process)
   * [Wireframes](#wireframes)
   * [User-flow](#user-flow)
* [Development Process](#development-process)
   * [Implementation Process](#implementation-process)
        * [Highlights](#highlights)
        * [Challenges](#challenges)
   * [Reviews and Testing](#reviews-and-testing)
        * [Unit Testing](#unit-testing)
   * [Future Implementation](#future-implementation)
* [Final Outcome](#final-outcome)
   * [Mockups](#mockups)
   * [Video Demonstration](#video-demonstration)
   * [Promotional Video](#promotional-video)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)

<!--PROJECT DESCRIPTION-->
## About the Project

![image1][image1]

### Project Description

This hybrid application acts as a stock management system and sales portal for your spaza shop. Completing a purcase is as simple as taking a picture of the products and selling them using a QR code. Google's cloud vision AI scans the text in products and dynamically creates a cart based on Firebase stock.

### Built With

* [React Native](https://reactnative.dev/)
* [Expo Go](https://expo.dev/client)
* [Firebase](https://firebase.google.com/?gclid=CjwKCAjwzY2bBhB6EiwAPpUpZufOnLNl-jXh5teyM4UnSZIZk2Y5B8rTvxq-G4vw2dytVU7SIqyANhoCrc8QAvD_BwE&gclsrc=aw.ds)
* [Google Cloud Vision API](https://cloud.google.com/vision/?utm_source=google&utm_medium=cpc&utm_campaign=emea-za-all-en-dr-bkws-all-all-trial-e-gcp-1011340&utm_content=text-ad-none-any-DEV_c-CRE_253529196122-ADGP_Hybrid%20%7C%20BKWS%20-%20EXA%20%7C%20Txt%20~%20AI%20%26%20ML%20~%20Vision%20AI%23v1-KWID_43700073022732071-kwd-203288731687-userloc_1028688&utm_term=KW_google%20vision%20api-NET_g-PLAC_&gclid=CjwKCAjwzY2bBhB6EiwAPpUpZgJVtHKo-SFTkvih_9uGP3WhX3xHfE3kyNv6wgLSORiDcgu-oM_uCRoCyWsQAvD_BwE&gclsrc=aw.ds)


<!-- GETTING STARTED -->
## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

For development, I used Visual Studio Code [Visual Studio Code Download](https://code.visualstudio.com/). And I used ExpoGo to text the app on my phone [ExpoGo Download](https://expo.dev/client). I also had to set up my Google Cloud account and enable billing

### Installation
 
1. Clone the repo
```sh
git clone https://github.com/isla-just/Spaza.git
```

2. Plug in your google cloud vision API key on the CameraScreen.js file

```sh
const API_KEY = 'YOUR_API_KEY_HERE';
```

3. Open the solution in Visual Studio Code

4. Install all dependencies using Visual Studio
```sh
npm install
```

4. Run expo start in your terminal 

5. then download the ExpoGo app on your mobile device and scan the QR code

<!-- FEATURES AND FUNCTIONALITY-->
## Features and Functionality

### Onboarding and account customisation

![image2][image2]

Learn about the app, sign up or create your account but filling in relevant details and uploading your snapcode 

### Dashboard page

![image3][image3]

View an overview of how many sales you have completed on Spaza, how many items are currently in stock and how many sales you've done this month. You can also see the most recent sale as well as a chart visualisation of the spaza shop's finances. Lastly, the user can see stock that is running low as well as log out of their account   

### Stocktake

This page allows you to quickly and easily manage stock by adding, editing and deleting stock items in a user friendly way.

### Sell

![image5][image5]

Lastly, the user can sell items by taking a picture of them where the labels are scanned by using Google Cloud Vision's text recognition AI. They can then edit and adjust their cart where the total is calculated dynamically according to the results scanned by the AI. The user's snapscan QR code is then shown to process the payment. 


### Functionality

* `Authenticate` the user securely
* upload your snapscan `snapcode`
* View an `account overview`
* `manage` stock
* `AI product detection` using text
* `Dynamic` cart generation
* `Snapscan` payments


<!-- CONCEPT PROCESS -->
## Concept Process

The `Conceptual Process` is the set of actions, activities and research that was done when starting this project.

### Wireframing

![image7][image7]

### User-flow

![image8][image8]

### ERD

![image9][image9]

<!-- DEVELOPMENT PROCESS -->
## Development Process

![image10][image10]

The `Development Process` is the technical implementations and functionality done in the backend of the application.

### Implementation Process

#### Frontend and setup
I set up my project using Expo and started coding my front-end components. I set up my Firebase and started implementing React Navigation. I also set up all my API keys

#### Account creation and customisation
Then I completed an onboarding tutorial and implemented my login and signup with Firebase authentication. I also started playing around with Snapscan API calls

#### AI integration
I spent 4 weeks stuck on AI integration. I tried Google's ML kit object detection, Cloud Vision object detection and Clarifai general object recognition. This caused me to rethink my approach

#### CRUD functionality
I also implemented the stocktake CRUD functionality on Firebase so everything would be all setup for when I got the AI to actually work. I also started populating the dashboard

#### Completing a sale and snapcode
When I got the AI to actually work, I managed to add items to the cart and check out by pulling your Snapcode from the database

### Highlights

* I really enjoyed working with such an interesting concept and playing around with a different design style. I learned a lot from the AI integration and snapscan implementation

#### Challenges

* I really struggled with my AI implementation because initially, I wanted my app to scan objects using computer vision and calculate your cart total dynamically. However, I quickly came to realise that the AI available isn't very good at doing that (especially with South African goods). And even if I wanted to create a custom model and train my own AI - I had no data to do so


#### Future Implementation

* In the future, I'd love to integrate more AI that uses object detection to detect produce and not just packaged goods. I'd also like to focus on how I could potentially get this app to work offline or using less data so it can fit the context better

<!-- MOCKUPS -->
## Final Outcome

### Mockups

![image11][image11]

<!-- VIDEO DEMONSTRATION -->
## Video Demonstration

To see a run through of the application, click below:

[View Demonstration](https://drive.google.com/file/d/1u50WK_0OsHp2c_UdYsXfx5iIYmHGkPXJ/view?usp=sharing)

<!-- PROMO VIDEO -->
## Promotional Video

To see the promotional video, click below:

[View Promotional Video](https://youtu.be/lgKiEEDi1iI)

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/isla-just/Spaza/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- AUTHORS -->
## Authors

* **Isla Just** - [IslaJust](https://github.com/isla-just)

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.\

<!-- LICENSE -->
## Contact

* **Isla Just** - [@byislajust](https://www.instagram.com/byislajust/) - isla@just.co.za
* **Project Link** - https://github.com/isla-just/Spaza

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* [Firebase documentation](https://firebase.google.com/docs/build)
* [File upload](https://firebase.google.com/docs/storage/web/upload-files)
* [expo documentation](https://docs.expo.dev/versions/latest/sdk/imagepicker/)
* [Cloud Vision Tutorial](https://medium.com/@mlapeter/using-google-cloud-vision-with-expo-and-react-native-7d18991da1dd)
* [Img upload example](https://github.com/expo/firebase-storage-upload-example/blob/master/App.js)
* [Google Vision Tutorial](https://medium.com/swlh/how-to-integrate-google-vision-api-with-react-native-and-expo-6af0db04b4e8)
* [Firebase image upload](https://medium.com/@ericmorgan1/upload-images-to-firebase-in-expo-c4a7d4c46d06)
* [Dropdown select package](https://www.npmjs.com/package/react-native-dropdown-select-list)
* [Google vision object recognition tutorial](https://medium.com/swlh/how-to-integrate-google-vision-api-with-react-native-and-expo-6af0db04b4e8)
* [Google vision object recognition tutorial2](https://medium.com/@mlapeter/using-google-cloud-vision-with-expo-and-react-native-7d18991da1dd)
* [Google Cloud Vision documentation](https://cloud.google.com/vision/docs/object-localizer)
* [Text detection Tutorial](https://blog.logrocket.com/build-text-detector-react-native/)
* [Image recognition app](https://medium.com/@andrew.smith_84400/how-to-build-an-image-recognition-app-in-react-native-in-30-minutes-f9fa5f7d7532)
* [Snapscan npm package](https://www.npmjs.com/package/snapscan)
* [Onboarding tutorial](https://www.youtube.com/watch?v=gviC-G_zpQI&list=PLqLEnFoF-ykfGnuRnjlV8NY6-xo1zrUQD)

mockups:
* https://originalmockups.com/mockups/free-mockups
* https://freedesignresources.net/category/free-mockups/?_paged=6
* https://www.anthonyboyd.graphics/mockups/28/

* lecturer: Armand Pretorius https://github.com/ArmandPret

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/isla-just-b038a2202
[instagram-shield]: https://img.shields.io/badge/-Instagram-black.svg?style=flat-square&logo=instagram&colorB=555
[instagram-url]: https://www.instagram.com/dylandasilva.designs/

<!-- MARKDOWN LINKS & IMAGES -->
[image1]: ReadMeImg/slide1.png
[image2]: ReadMeImg/slide2.png
[image3]: ReadMeImg/slide3.png
[image4]: ReadMeImg/slide4.png
[image5]: ReadMeImg/slide5.png
[image6]: ReadMeImg/slide6.png
[image7]: ReadMeImg/slide7.png
[image8]: ReadMeImg/slide8.png
[image9]: ReadMeImg/slide9.png
[image10]: ReadMeImg/slide10.png
[image11]: ReadMeImg/slide11.png
[image12]: ReadMeImg/slide12.png

[image15]: ReadMeImg/devmockup1.png

 
