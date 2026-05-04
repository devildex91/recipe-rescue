# recipe-rescue
 ---

fixes 

List and recipe component changed into one component to more easily control state managment for these components
originally everything was flexbox but changed to grid for morecontrol 
css variables added to make updates easier 
had to get rid of gap and set margins on each section so that navbar and footer spanned whole screen without issue


all images resized and compressed f or better load times 
 found a bug as screen sizes increased so did gaps and discovered footer was adding an extra grid row because was set to start at grid 5 which was adding an unnneeded row and causing layout issues
 all content was shrinking too far to still be easily readable an extra large screens so added a safety measure at 1800 px and 1200 pixels to ensure that all fonts and images scale properly as s creen size grows 
 on testing dicovered once recipe cards render to page image and logo were too large with new sizes so changed from width to max-width to allow to shrink as needed for new content.
 upon testing ingredients and Recipe sections needed wrapping in a <main> section for accesibility and subsequently css needed adjusting to keep layout the same.
 extra margin added to top of footer to create gap when recipe cards appear 
 had to change grid as pictures from API were pixelating at certain sizes
 All files were in subfolder so haver had to move all files into root as was becoming dificult to deploy properly 
 On first attemp site went live but was not updating on pushing to repository so deleted file paths moved whole project into root from sub directory and followed vite instructions as well as github instructions to get it working as intended
 After googling to find solution discovered API has to be put in secrets in actions to make it work on github pages
 react icons used for favicons 
 original recipe cards contained included and missing ingredients but was looking too clutered so were removed with link to full recipe provided instead. 
 <main> added in to help with accesibility for screen readers 
 # recipe-rescue
 [To view site](https://devildex91.github.io/recipe-rescue/)
 ## Table of Contents
 
   ## [UX](#ux-1)
 
  [Primary Goals](#primary-goals)<br>
  [Business Goals](#business-goals)<br>
  [User Goals](#user-goals)<br>
  [User Stories](#user-stories)<br>
  [Design Choices](#design-choices)<br>
  [Wireframes](#wireframes)<br>
 
  ## [Features](#features-1)
 
 - Existing Features
 - Features left to implement
 
  ## Technologies used
 
 4. ### Testing
 
 5. ## Deployment
 
 - How to run this project
 
 6. ## Credits
 
 - Content
 - Media
 - Code
 - Acknoledgements
 
 1. ### UX
 
 ---
 
 #### Primary Goals
 
 ---
 The primary goal of Recipe Rescue is to stop food waste. We aim to do this by providing our users with the opportunity to use what is left in their fridge. Once we have been provided with your ingredients, we will do all the hardwork for you by providing a list of recipes. Not only does that mean you use up your food not bin it and discover a new favourite recipe while you are at it.   
 
 [back to top](#recipe-rescue)
 
 #### Business Goals
 
 ---
 The business goals of Recipe Rescue are to stop food waste and save the environment. We believe both these goals are interlinked. If we can stop food waste then that not only means more food for everyone, but also less food in landfill. With those two goals in mind we believe that if we can achieve more customers who hate wasting food then we can keep landfills empty for longer.  

 [back to top](#recipe-rescue)
 
 #### User Goals
 
 ---
 
 The goals for new users are to find new ideas for recipes to spice up their dinner times. They also want to discover new wasy to use up what food they have left. Another goal is to save money. 

 For existing customers they wish to not only continue to save money but also to keep discovering what amazing ways they can use up their food that they diddnt believe was possible. 

 [back to top](#recipe-rescue)
 
 #### User Stories
 
 ---
  For full Acceptance Criteria and tasks please follow [this link]() to the project board for Recipe Rescue.

  **User Story** 
As a first time visitor I would like it to be simple to use and follow to achieve a list of recipes.

**Acceptance Criteria**

- Website is responsive to whatever screen size is used to access it.
- Website clearly tells user what they need to do and makes it obvious.
 
**Tasks**

- Ensure all sections are easy to use and simple to follow.
- Apply a flexible layout so that it works on all screen sizes.


**User Story**

 As a user, I want to see how many ingredients I am missing for a specific recipe, so that I can decide if it's worth a quick trip to the shop or if I should choose a different meal.

**Acceptance Criteria** 

 - Each recipe card displays the missing ingredients.

**Tasks**

- Make sure the recipe card displays all the missing ingredients for each recipe.


**User Story**

As a busy home cook I would like to input the ingredients I have left so i can find recipes I can make with minimal extra ingredients.

**Acceptance Criteria**


- Users can type and add multiple ingredients to search.
- The app returns a list of recipes that include as many of the ingredients available as possible.
- Each recipe must display a title, image and all the ingredients missing.

**Tasks**


- Build a input field to add ingredients too.
- Integrate a related API to handle recipe search.
- Design a recipe card to display the information from the API.
 
 [back to top](#recipe-rescue)
 
 #### Design Choices
 
 ---
 
 [back to top](#recipe-rescue)
 
 ##### Fonts
 
 ---

 
 <summary>Fonts</summary>
 
 
 
 </details>
 

 
 [back to top](#recipe-rescue)
 
 ##### Colours
 
 ---
 
 [back to top](#recipe-rescue)
 
 ##### Styling
 
 ---
 
 
 [back to top](#recipe-rescue)
 
 ##### Background
 
 ---
 
 -
 
 [back to top](#recipe-rescue)
 
 ##### Images
 
 ---
 
 -All images from pexels 
 - logo image from logo.com
 - 
 
 [back to top](#recipe-rescue)
 
 ### Wireframes
 
 ---
 <bold>First view of phone upon entering site with ingredients list<bold>
 ![Phone ingredients List wireframes](/src/assets/images/Phone-I-list-WF.png)
 <p>The div will expand to fit the ingredients underneath the form and after five ingredients have been added a button will render. This will send an API call to  <p>

 
 [back to top](#recipe-rescue)
 
 
  2. ### Features
 
 ---
 
 #### Existing Features
 
 ---
 
 
 #### Features left to implement
 
 ---
 
 - Full recipe details and steps on how to make will be added to the page at a later date but due to API limits have been added as a link to the Source URL 
 
 
 [back to top](#recipe-rescue)
 
 
  3. Technologies used 
  
   ---
   + Visual Studios used as the primary IDE. 
   +  React and VITE used 
   + Display grid used for main layout and flexbox for improved responsive design within divs.  
   + Pexels used for photo on navbar and pictures that appear on larger screens apart from recipe photos are straight from spoonacular API.
   + Github for deployment. 
  </details>
 
 [back to top](#recipe-rescue)
 
 4. Testing
  
  ---

 <details>
 <summary>Lighthouse tests screenshots</summary>
 
 </details>
 
 
 <details>
 <summary>html tests</summary>
 
 </details>
 
 - HTML code tested at [validator.w3](https://validator.w3.org/) all pages passed with no errors or warnings.
 
 - CSS tested at[jigsaw.w3](https://jigsaw.w3.org/css-validator/) and the css validates as CSS level 3 + SVG.
  <p>
     <a href="https://jigsaw.w3.org/css-validator/check/referer">
         <img style="border:0;width:88px;height:31px"
             src="https://jigsaw.w3.org/css-validator/images/vcss"
             alt="Valid CSS!" />
     </a>
 </p> 
 <p>
  <a href="https://jigsaw.w3.org/css-validator/check/referer">
         <img style="border:0;width:88px;height:31px"
             src="https://jigsaw.w3.org/css-validator/images/vcss-blue"
             alt="Valid CSS!" />
     </a>
 </p>
 <details>
 <summary>  Contrast testing screenshots</summary>
 

 
 </details>
 

 
 </details>
 
 [back to top](#recipe-rescue)
 
 <details>
 <summary> 5 . Deployment</summary>
 
 ---
 
 [To view site](https://devildex91.github.io/recipe-rescue/)
 
 <details>
 <summary>Site has been deployed through Github pages by:</summary>
 
 ---
 
 1.  Go to [devildex91/recipe-rescue](https://github.com/devildex91/recipe-rescue).
 2.  click on the settings button 
 3.  Scroll down and click on pages 
 4.  In the branch select main 
 5.  Refresh the page(this may take a couple of minutes to update) and click the link to view.
 </details>
 <details>
 <summary> To download and work on the code yourself locally. </summary>
 
 ---
 
 1.  Navigate to [devildex91/recipe-rescue](https://github.com/devildex91/recipe-rescue)
 2.  Click on the green code button
 3.  Select download zip as shown.
 4.  Once downloaded unpack zipped file to a location of your choosing and you can work on and run the code in an IDE of your choosing(Have fun).
  </details>
  <details>
 <summary> To fork a repository.</summary>
 
 ---
 
 - please see [github docs](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) for more detailed and an easier to follow guide than I can produce but remember to navigate to [devildex91/recipe-rescue](https://github.com/devildex91/recipe-rescue) to fork this repository.
 
 </details>
 
 - ##### Note for anybody working on this code that bootstrap 5.3 has been used to create much of the page and should be reused by yourself to ensure it all works as intended.
 </details>
 
 [back to top](#recipe-rescue)
 
 <details>
 <summary> 6. Credits</summary>
 
 ---
 
 #### Content
 
 ---
 
 - fonts imported from [google fonts.](https://fonts.google.com/selection/embed)
 
 
 [back to top](#recipe-rescue)
 
 #### Media
 
 ---
 
 - All pictures from pexels.com .
 - for all image optimisation [squoosh](https://squoosh.app/) has been used to help with the resize of images and compression tasks.
 - All favicons for social media links from [fontawesome](https://fontawesome.com/)
 
 [back to top](#recipe-rescue)
 
 #### Code
 
 ---
 
 
 
 #### Acknoledgements
 

 </details>
 
 [back to top](#recipe-rescue)
 