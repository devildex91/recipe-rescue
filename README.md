# recipe-rescue

---

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

[Existing Features](#existing-features)<br>
[Features left to implement](#features-left-to-implement)<br>

## [Technologies used](#technologies-used-1)

### [Testing](#testing-1)

## [Deployment](#deployment-1)

[How to run this project](#how-to-run-project)<br>

## [Credits](#)

[Content](#content)<br>
 [Media](#media)<br>
 [Code](#code)<br>
 [Acknoledgements](#acknoledgements)<br>

### UX

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

For full Acceptance Criteria and tasks please follow [this link](https://github.com/users/devildex91/projects/6/views/1?layout=board) to the project board for Recipe Rescue.

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

The original design for this project was a project called Sparkflow which was an app to take an artist,genre or mood and return a playlist [sparkflow designs](/src//assets/images/mobile-design.png). As the screen got larger ther final page was going to also include a youtube iframe with whichever artist had been clicked on [larger design](/src/assets/images/wireFrames-computer-closerLookpage.png). Although i did start this project, as i got further in I felt that in order to fully achieve everything possible with this app it was better left for a later project once i had the backend sorted as well so I could add login pages and the user review section could be more responsive and updatable. From that original idea came recipe-rescue. That is because it follows a similar structure to sparkflow in taking a parameter and searching and returning a result although in a simpler format more suited to the milestone project at hand. For in depth details on the design choices of recipe-rescue please see the individual sections that follow.

##### Fonts

---

  <details>
 <summary>logo</summary>

![logo](/src/assets/images/recipe-rescue-logo.webp)

  </details>
    
    
   <p> For the font choices of recipe rescue i designed the logo first which can be seen above. Following this I diddnt want to stray to far from this design to tie it all in so chose the same geologica font that is in the logo title. Although the slogan is a different font i chose not too use this within the app as felt certain cutomers may struggle to read this font if used in a high quantity so left it out of the design. 
 </p>
 <details>
 <summary>Fonts</summary>
 
   ![geologica](/src/assets/images/geologica.png)
 
 </details>


[back to top](#recipe-rescue)

##### Colours

---

 <details>
 <summary>colours</summary>

![colours](/src/assets/images/colour-choice.png)

 </details>
 I chose the colour choices above because:

#F0f2BD because it acts as a warm neutral background. Its softer than a pure white on the eyes while keeping the app cosy feeling. It also has an assocoiation with grains and sunlight.

#B2CD9C because it associates with vegetables, herbs and healthy eating. It also promotes freshness and sustainability as well as a natural and organic feel which is in keeping with the business plans of the company.

#CA7842 although part of the original design as its been shown to stimulate the appetite and associates with spices and warmth it was kept out of the final design as it just diddnt feel to fit with the design of the app standing out a little too much and looking out of place.

#4B352A because of its association with chocolatte,coffee and grilled meat. it also provides a grounding and sophisticated feel to the app replacing many of the parts that
#CA7842 was used for this very reason. This is why it has been used in styling buttons and text as well as freaming and footers in certain places as well. It also adds a good contrast rate against the green for accessabilty and reabability tests.

#3F2D22 due to contrast testing this colour is not in the chart above but has been chosen as an alternative to #4b352A because it is a close enough match but passed both AA and AAA WCAG tests.

[back to top](#recipe-rescue)

##### Styling

---

Recipe Rescue has been styled with a mobile firt approach ensuring everything works from 280px and up. The site has been styled with a 20px margin between all content that where possible has consistently remained throughout most of the content at all screen sizes allowing breathing room to avoid cognitive overload..

Following from this all content has a mixture of greens and browns that have all been chosen as they represent different aspects of the food palete. The background colour was chosen as it easier on the eyes as not to overwhelm users.

All information follows a Gestalt principle and all informnation is kept together where possible.

We limited the font families to just the one to keep with the consistency and a cohesive user experience throughout the app. This helps with the readability and ensures the contrast is sufficient for accessibility.

All buttons have been designed with hover styles so the users is always aware of where they are on the page and the contrast between the colours remains.

[back to top](#recipe-rescue)

##### Background

---

The background remains #F0f2BD throughout the app so it is warm and neutral helping cognitive overload while remianing warm and consistent throughout.

[back to top](#recipe-rescue)

##### Images

---

All images have been chosen as they not only follow the theme of the app but also follow the colour scheme of the site where possible.

All images have been sourced from [pexels](https://www.pexels.com/) and the logo for the nav section of the page and within the copyright and favicon was created using [logo.com](https://logo.com/).

[back to top](#recipe-rescue)

##### Wireframes

---

 <details>
 <summary> <bold>First view of phone upon entering site with ingredients list as well as once ingredients have been added.<bold></summary>

![Phone ingredients List wireframes](/src/assets/images/Phone-I-list-WF.png)

The div will expand to fit the ingredients underneath the form and after five ingredients have been added a button will render. This will send an API call to

 </details>
 
 <details>
 <summary><bold>View of recipe section on mobile screens </bold></summary>

![Phone recipe section wireFrame](/src/assets/images/Phone-Rec-WF.png)

Once the ingredients list has been submitted an API call will be made and the recipe section will render onto the page showing 6 recipes that will have minimal extra ingredients needed. The recipe card will also be a button with a link to the source URL for full recipe details.

 </details>

<details>
<summary>Tablet Wireframe with and without ingredients</summary>

![Tablet wireframe without ingredients](/src/assets/images/tablet-I-list-No-ing-WF.png)
![Tablet wireframe with ingredients](/src/assets/images/Tablet-I-list-With-Ing-WF.png)

The main difference between phone and tablet view is that with the extra space two images render to the page once the screen size hits 798px. The other difference is that the ingredients and button will appear to the right hand side of the ingredients form.

</details>
<details>
<summary>Tablet wireframe of recipe section</summary>

![Tablet wireframe recipe section](/src/assets/images/Tablet-Rec-WF.png)

Once tablet sizes kick in display grid takes over much of the layout of the page and the recipe section has a subgrid that has two columns of 1fr and then auto rows so that all of the recipe cards will remain a consistent layout as the screen grows.

</details>
<details>
<summary>Desktop Wireframe with ingredients section</summary>

![Desktop ingredients wireframe](/src/assets/images/Desktop-I-list-No-ing-WF.png)
![Desktop ingredients with ing](/src/assets/images/Desktop-I-list-With-ing-WF.png)

The styling of the ingredients section is extremely similar to the tablets sizing although all font sizes grow to better fit the space.

</details>
<details>
<summary>Desktop wireframe with recipe section</summary>

![Desktop wireframe with recipe section](/src/assets/images/Desktop-rec-WF.png)

The main difference for desktrop screens over tablet screens is that the grid within the recipe section expands to three colums with auto rows to allow two rows of three recipe cards.

</details>
 
[back to top](#recipe-rescue)
 
 
### Features
 ---
 
 #### Existing Features
 ---
 - Ingredients list with ability to add, remove, or clear ingredients.
 - Recipe search that returns 6 recipes based on minimal missing ingredients.
 - Responsive on all screen sizes.
 
 #### Features left to implement
 ---
 - Full recipe details and steps on how to make will be added to the page at a later date but due to API limits have been added as a link to the Source URL.
 - Advanced search to be added allowing to search based on dietary requirments.
 - Sign in page to be added to allow saving of favourite recipes or specialist search parameters.   
 
 [back to top](#recipe-rescue)
 
### Technologies used 
   ---
   -  Visual Studios used as the primary IDE. 
   -  React and VITE used. 
   -  Display grid used for main layout and flexbox for improved responsive design within divs.  
   - Pexels used for photo on navbar and pictures that appear on larger screens apart from recipe photos are straight from spoonacular API.
   - Github and github actions for deployment. 
  
 [back to top](#recipe-rescue)
 
### Testing
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

 main added in to help with accesibility for screen readers


 <details>
 <summary>Lighthouse tests screenshots</summary>
    

 </details>
 
 
 <details>
 <summary>html tests</summary>
 
 ![html check](/src/assets/images/html-check.png)
 HTMl all passed though being a React app the only HTMl are stylesheet links and a root div to render content into.
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

 All JSX components tested at [json table](https://jsontotable.org/jsx-validator) and passed with no errors 

 ![jsx validator](/src/assets/images/jsx-valid.png)
 <details>

 <>
 <summary>  Contrast testing screenshots</summary>

  ![brown text dark green background](/src/assets/images/contrast%20checker%20browntext-darkgreen%20background.png)
  Following firt contrast checker to ensurer all tests passed i have changed all standard font to bold as the first test failed on WCAG AAA for normal text so all is bold to ensure AA and AAA pass contrast checks.
 ![hover effect](/src/assets/images/hover-effect-buttons.png)

 All tests passed for hover effect on buttons.

![button normal](/src/assets/images/button-color.png)

button color changed as first test failed AAA so changed to lighter text color to ensure passed.

![alternate font color](/src/assets/images/alternate-color-test.png)

alternative color chosen for fonts that is a similar match to the chosen brown but a shade lighter so that it provides an alternative in scenarios where otherwise it would fail. 



 </details>


 </details>
 
 [back to top](#recipe-rescue)
 
 
 ### Deployment
 ---
  - ##### Note for anybody working on this code React and Vite has been to develop this app so will need to be used to work with this code please see credits for a full list of dependencies and versions

[To view site](https://devildex91.github.io/recipe-rescue/)
#### How to run project 
 <details>
 <summary>Site has been deployed through Github pages by:</summary>
 
 ---
 
 1. Setting up a vite project by opening up your IDE and operning a terminal.
 2. Type:<br>
  npm create vite@latest<br>
   and follow the prompts making sure to select React and javascript. 
 3. Once set up open vite.config.js and replace the code with :

       import { defineConfig } from 'vite'<br>

import react from '@vitejs/plugin-react'<br>

export default defineConfig({<br>
plugins: [react()],<br>
base: "/your-repo-name/", // 👈 Replace with your exact repository name<br>
})

4. In the terminal again type : <br>
   npm install gh-pages --save-dev

5. Update package.json by adding the following:
   {
   "name": "my-vite-app",
   "homepage": "https://your-github-username.github.io/your-repo-name",
   "scripts": { <br>
   "dev": "vite",<br>
   "build": "vite build",<br>
   "lint": "eslint .",<br>
   "preview": "vite preview",<br>
   "predeploy": "npm run build",<br>
   "deploy": "gh-pages -d dist"<br>
   }
   }

- Note: Vite builds into a folder named dist (unlike Create React App which used build), so ensure the script says -d dist.

6. Run: <br>
   npm run deploy<br>
   This will:<br>

- Run npm run build to create a production-ready dist folder.
- Create a new branch in your GitHub repository called gh-pages.
- Push the contents of dist to that branch.

7. Enable github pages by:<br>

- Go to your repository on GitHub.
- Click Settings > Pages in the left sidebar.
- Under Build and deployment, ensure the Source is set to "Deploy from a branch."
- Under Branch, select gh-pages and the /(root) folder.
- Click Save.

###### Your site should now be live at https://your-username.github.io/your-repo-name/

 </details>

 <details>
 <summary> To download and work on the code yourself locally. </summary>
 
 ---
 
 1.  Navigate to [devildex91/recipe-rescue](https://github.com/devildex91/recipe-rescue)
 2.  Click on the green code button
 3.  Select download zip
 4.  Once downloaded unpack zipped file to a location of your choosing and you can work on and run the code in an IDE of your choosing(Have fun).

  </details>

  <details>
 <summary> To fork a repository.</summary>

---

- please see [github docs](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) for more detailed and an easier to follow guide than I can produce but remember to navigate to [devildex91/recipe-rescue](https://github.com/devildex91/recipe-rescue) to fork this repository.

 </details>

[back to top](#recipe-rescue)

### Credits

---

#### Content

---

- geologica imported from [google fonts.](https://fonts.google.com/selection/embed)

[back to top](#recipe-rescue)

#### Media

---

- All pictures from pexels.com.
- for all image optimisation [squoosh](https://squoosh.app/) has been used to help with the resize of images and compression tasks.
- All favicons apart from title favicon from [React icons](https://react-icons.github.io/react-icons/)

[back to top](#recipe-rescue)

#### Code

---

- css styles for box shadow properties from [getcssscan](https://getcssscan.com/css-box-shadow-examples)

##### dependencies for React/Vite:

- "react": "^19.2.5",
- "react-dom": "^19.2.5",
- "react-icons": "^5.6.0"
- "@eslint/js": "^10.0.1",
- "@types/react": "^19.2.14",
- "@types/react-dom": "^19.2.3",
- "@vitejs/plugin-react": "^6.0.1",
- "eslint": "^10.2.1",
- "eslint-plugin-react-hooks": "^7.1.1",
- "eslint-plugin-react-refresh": "^0.5.2",
- "gh-pages": "^6.3.0",
- "globals": "^17.5.0",
- "vite": "^8.0.10"

#### Acknoledgements

[back to top](#recipe-rescue)
