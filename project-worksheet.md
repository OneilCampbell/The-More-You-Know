# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | complete
|Day 2| Wireframes / Priority Matrix / Functional Components | complete
|Day 3| Core Application Structure (HTML, CSS, etc.) | complete
|Day 4| Pseudocode / actual code | complete
|Day 5| Initial Clickable Model  | complete
|Day 6| MVP | complete
|Day 7| Present | complete


## Project Description
Trivia app that gathers data from apis and formats that data into a psuedo-jeopardy format, where a question is posed, answers are provided, and the user must choose the correct answer. After an answer is chosen, the user will be given an indication as to whether they chose correctly, then the question will be replaced by a new one and a new set of answers. There will also be a "Guess The Country" section where the user is presented with an image of a flag and they must guess which country has that flag, and a Joke section where the user can try to guess the punchline of some clever jokes.
http://spectacular-scent.surge.sh/

## APIs
https://opentdb.com/api_config.php
https://github.com/15Dkatz/official_joke_api
https://fabian7593.github.io/CountryAPI/

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe.
https://res.cloudinary.com/oneilcampbell/image/upload/v1547558795/20190115_082148.jpg

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matix.  
https://res.cloudinary.com/oneilcampbell/image/upload/v1547558795/20190115_082058.jpg

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 

- Find and use an external trivia/random-fact/general-info api 
- Create a user form 
- Use react routing to render the different pages
- Organize data gathered from api into Q/A format

#### PostMVP 

- Multiple apis
- More than one category and subsequent Q/A page
- Highscore board

## React Architectural Design

Define the the React components and the architectural design of your app.

https://res.cloudinary.com/oneilcampbell/image/upload/v1547558795/20190115_082113.jpg

## Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| Nav | This will render the nav bar| 
| Title | This will render the landing page | 
| Form | This will render the user form | 
| Trivia | This will render structure and logic for trivia questions | 
| Jokes | This will render structure and logic for the joke section | 
| Flags | This will render structure and logic for the guess the flag section | 
| Question | This will render each question | 
| Choice | This will render each choice/answer |
| End | This will render the game over page | 


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| Adding Form | H | 1hrs| 30min |
| Working With API | H | 3hrs| 1.5hr |
| Working With Multiple APIs | M | 3hrs| 1.5hr |
| Title Page | M | 30min | 1hr |
| Structuring Question Page | H | 1hrs| 1hr |
| Question Page Logic | H | 5hrs| 2hrs |
| Total | H | 13.5hrs| 6.5hrs | 

## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description | 
| --- | :---: |  
| replaceString | This function takes 3 strings as arguments, it looks for all instances of the 2nd string within the 1st and replaces each instance with the 3rd string, it then returns the newly updated string | 

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 
 
| Library | What it Does | 
| --- | :---: |  

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
//parses data and manually convert html4 entity codes to their symbol representations

   replaceString = (string, lookFor, replaceWith) => {
      while (string.includes(lookFor)) {
         string = string.replace(lookFor, replaceWith);
      }
      return string;
   }
   
//maps through array of symbols and their codes and calls the replaceString function to perform conversion 

   callReplaceString = (string) => {
      SymbolsAndCodesData.map(symbol => {
         return string = this.replaceString(string, symbol.entityCode, symbol.charSymbol);
      })
      return string;
   }
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

| Original Plan | Outcome | 
| --- | :---: |  
| Have one Category component that changes structure and functionality based on the type | Created separate Trivia, Jokes, and Flags components to keep components disjoint and concise | 

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.
