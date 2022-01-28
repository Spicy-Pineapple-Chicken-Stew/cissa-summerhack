# cissa-summerhack (Bridge)

[Link to our website/app here :)](http://194.193.55.245:3000/)

## Table of Contents

1. [ Project Description ](#desc)
2. [ Installation and Usage ](#usage)
3. [ Demonstration ](#demo)
4. [ Technical Overview ](#tech)
5. [ Challenges ](#challenge)
6. [ Future Roadmaps ](#future)

<a name="desc"></a>
## 1. Description

Have you ever wanted to cram your lectures but don't have enough time before the exams? Ever wanted a quick revision on a particular lecture but don't have the time to watch through it all? Have no fear, because Bridge is the solution. Bridge is a tool designed to enhance study efficiency by generating summaries and quizzes for a variety of different study materials. Our AI will intelligently generate state-of-the-art summaries that takes into account contextual information, so you can retain the maximum possible information in the shortest possible text length. In addition, quizzes in the form of flashcards will also be generated based on each summary, to provide you with a quick and easy way to quiz yourself on the content of your study material, without painstakingly creating your own flashcards.

Our website is tailor made to be able to run on all devices, whether it is your laptop, computer, iPad or phone (some features may not be available on smaller devices. For optimal experience we recommend using laptops/computers), so you can study effectively whether you are sitting at home, or on the train. We also support text, websites, youtube videos or custom videos uploaded by you, so you can be assured that your study materials will work with our system. 

Bridge also acts as a central place to organize your study notes. By registering on our website with a simple username, you can permanently save all of your past submissions, including the flashcards that comes with each submission, and access them at any time. We also provide you with the option to customize your flashcards to better suit your need.

<a name="usage"></a>
## 2. Installation and Usage

No installation is needed. Simply navigate to [this link](http://194.193.55.245:3000/) and start using our website immediately! Browser with Javascript support is required.

Alternatively, running from source in a local environment is possible by cloning the github repository, although not recommended (as a deployed website is available). More instructions will be offered below

#### How to use the website

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

<a name="demo"></a>
## 3. Demonstration

Here is a video promo of our website, including a quick demonstration

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/KBGzuzQ4BiU/0.jpg)](https://www.youtube.com/watch?v=KBGzuzQ4BiU)


<a name="tech"></a>
## 4. Technical Overview

Our front-end component is built using ReactJS and MaterialUI, with axios for HTTP requests handling. We also utilized react-flash-cards to display our generated flashcards.

To achieve true SPA (single page application), we opted not to use react router, but instead structure our screens/pages into components, and used Contexts to expose sub-components with the ability to navigate between pages. We also utilized Contexts to store a variety of other information such as users, tasks and more.

To achieve near-realtime update with each user submission, we used a timer that queries the backend for the status of each "task" (submission) and updates accordingly. This results in almost instantaneous updates on each task without manual user intervention, thus improving user experience.

Our back-end component is built using Flask, and we opted to use MongoDB as our database, due to its ease of storing dynamic user data as opposed to a standard SQL database.

Due to the (relatively) large processing times required for certain files, primarily video files, we designed a form of Asynchronous Task Queue, much like Celery, but without the need to use brokers such as Redis or RabbitMQ due to the resource heavy nature of some of our computation. Instead, every submission will be executed on a different thread, assigning an ID to each "task", which ensures each API request is not blocked by the computation of each submission. Taking advantage of shared memory of threads we can access each task from anywhere in order to retrieve its status, update its status or return its contents. 

Our USP (unique selling point) is of course using AI to process textual data, summarizing them and generating questions based on the summary. We have elected to use two different AIs to perform text summary:

- BERT: BERT, or Bidirectional Encoder Representations from Transformers, is a model developed by Google that achieved surprising results in the field of NLP (natural language processing). The BERT model we opted to use performs what is known as "extractive text summarization", which is a process of taking in a paragraph of text, taking the N-most important sentences and constructing them as a summary. As we later discovered through experimentation, this model performs expectionally well in shorter texts or texts containing speech, or texts that have more filler words. However, for more scientific texts or longer texts, this model does not perform well as the sentences often do not connect, which is expected as the model works by ranking sentences. 

- GPT2: GPT2, or Generative Pre-Trained Transformer 2, is a very famous AI developed by OpenAI. It is primarily used for text generation, often capable of generating text indistinguishable from that of a human. In our case, we used GPT2 to perform "abstractive text summarization", which essentially generates a paragraph of summary from scratch, when provided with a piece of text. We have found that this AI model works exceptionally well with longer texts, capable of providing short yet concise summaries, without loosing too much information. However, it does not work particularly well with short texts or texts containing speech. 

In addition, we utilized AI as part of our question generation:
- NLTK Pos Tagger: The Pos Tagger, from NLTK, a popular NLP framework for Python, is a robust tokenizer that is able to identify parts of speech. We developed an algorithm, leveraging the Pos Tagger, in order to perform negation, which essentially just computes the negative sentiment of a given sentence. For example, the negation of "I like cakes" would be something like "I do not like cakes". We utilized this algorithm to generate True/False questions; By negating a sentence, we could label that sentence as false. 
- Structured BERT SRL predictor: SRL, or Semantic Role Labelling, is a process of labelling parts of speech with its respective roles. Essentially a more advanced version of a simple Pos Tagger. This particular model was an improvement from an earlier SRL predictor built with a Bidirectional LSTM network. What was interesting to us, in particular, was this model's ability to tag the arguments of a verb, which we used to generate questions by placing the second argument as the answer, and rephrasing the verb + 1st argument as the question.

We also leveraged Google's Speech to Text API in order to transcribe video content to textual content. Although the API performs exceptionally well, it unfortunately does not punctuate the text, which is a concern as both of our summarization models relies heavily on punctuation. Instead, we opted to use an additional AI specifically designed to punctuate "raw" texts, built using a Bidirectional LSTM architecture.

<a name="challenge"></a>
## Challenges

Many of us were not familiar with the ReactJS framework and/or the MaterialUI library, which means there was a steep learning curve at the very beginning. However, through hard work and dedication, we quickly overcame this hurdle and became quickly familiarized with many of the core concepts of ReactJS and is able to comfortably build the front-end component. 

Git was also something we had to learn, as the git workflow is not something seen in other fields. However, once everyone became familiar with the ins-and-outs of git, our collaborative efforts became very efficient, and tasks were being done on schedule.

Perhaps the most challenging part was the initial research phase of the project. Obviously, none of us have completed a similar project and the lack of existing comparable projects means we more or less have to start from 0. In particualr, coming up with algorithms to generate questions based on text was a particular hard roadblock for us, as there is extremely little publicly available information specifically on this subject. However, we managed to overcome this by brainstroming and trial and error of variety of different ideas.

<a name="future"></a>
## Future Roadmaps

We believe this idea has commercial viability, due to no other competitors currently on the market. Summarization website does exist, but none of them is tailored towards students, and almost all of them support texts only. Our next goal would be to refine our current technologies in order to produce better summaries and questions and possibly rehaul the website and ensure it is more user friendly.
