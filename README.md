# cissa-summerhack (Bridge)

[Link to our website/app here :)](http://194.193.55.245:3000/)

## Table of Contents

1. [ Project Description ](#desc)
2. [ Installation and Usage ](#usage)
3. [ Demonstration ] (#demo)
4. [ Technical Overview ] (#tech)
5. [ Challenges ] (#challenge)
6. [ Future Roadmaps ] (#future)

<a name="desc"></a>
## 1. Description

Have you ever wanted to cram your lectures but don't have enough time before the exams? Ever wanted a quick revision on a particular lecture but don't have the time to watch through it all? Have no fear, because Bridge is the solution. Bridge is a tool designed to enhance study efficiency by generating summaries and quizzes for a variety of different study materials. Our AI will intelligently generate state-of-the-art summaries that takes into account contextual information, so you can retain the maximum possible information in the shortest possible text length. In addition, quizzes in the form of flashcards will also be generated based on each summary, to provide you with a quick and easy way to quiz yourself on the content of your study material, without painstakingly creating your own flashcards.

Our website is tailor made to be able to run on all devices, whether it is your laptop, computer, iPad or phone (some features may not be available on smaller devices. For optimal experience we recommend using laptops/computers), so you can study effectively whether you are sitting at home, or on the train. We also support text, websites, youtube videos or custom videos uploaded by you, so you can be assured that your study materials will work with our system. 

Bridge also acts as a central place to organize your study notes. By registering on our website with a simple username, you can permanently save all of your past submissions, including the flashcards that comes with each submission, and access them at any time. We also provide you with the option to customize your flashcards to better suit your need.

<a name="usage"></a>
## 2. Installation and Usage

No installation is needed. Simply navigate to [this link](http://194.193.55.245:3000/) and start using our website immediately! Browser with Javascript support is required.

Alternatively, running from source in a local environment is possible by cloning the github repository, although not recommended (as a deployed website is available). More instructions will be offered below

#### Usage

To start using the website, simply click "Begin" on the homepage, which will prompt you to the upload page. The upload page could also be accessed via the navigation bar under "Upload". If you wish to login or register an account with us, simply click the "Login" button in the navigation bar.

In the upload page, choose the format of the materials you wish to submit. We accept "Pure Text" (a paragraph or block of text), links (YouTube videos and text-based websites links are supported) or custom video uploads. Once you submit, you can choose to see your submissions by clicking "My Contents" or stay on the same page and submit something else. You are able to submit multiple things at once without waiting for one to necessarily complete before submitting another. 

My contents (which is accessible under the navigation bar too, under "my contents" button) acts as a central place to view all your current submissions (and past submissions if you are logged in). By default, only submissions that have been processed are shown, but you could click on the switch in the top right-hand corner to view any submissions that are still being processed by our servers. Once a submission is finished, you can click on the green box and it will take you to the contents of your submissions.

The default view offers a quick glance at the summary, generated flashcards and your peak of your original submission. If you wish to view each element in more detail, we recommend switching to "detailed view" by clicking the toggle button on the top right hand corner. 

In there, you can see the different options by clicking on the three lines in the top left hand corner, which will open a menu. You can see the summary and flash cards on a bigger screen space, and you also have the option to edit the automatically generated flashcards by clicking on "Edit". There, you are able to edit individual flashcards, and also add/delete any cards.

#### Running the service locally

##### Front-end

Requirements:
- node
- npm

Navigate to src/front-end, run npm install to install all required dependencies, then run npm start to start a local server. 

Note: If you wish to run the back-end server locally as well, please ensure to change all URLs in axios requests within the source code to the appropriate backend URL.

##### Back-end

Requirements:
- Python 3 (3.6+)
- Flask
- PyMongo
- AllenNLP & AllenNLP_Models
- BERT Extractive Summary
- Flask CORS
- BeautifulSoup
- PyTube
- Google Cloud SDK (Storage and Speech)
- NLTK

Configuration files:
- config.py (root folder). This file should contain MONGO_USERNAME and MONGO_PASSWORD for your mongodb database.
- credentials.json (root folder). This is your google API credentials file.

Additional requirements:
- MongoDB database. Database should be named 'summerhack' and have 'users' collection. Change MongoDB URI in __init__.py with your mongo URI.
- Google Speech to Text API. A credentials.json with access to Speech to Text API is required.

Run 'flask run' or 'python run.py' to start the server locally

