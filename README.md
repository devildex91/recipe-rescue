# Recipe-Rescue

---

[To view site](https://devildex91.github.io/recipe-rescue/)

## Table of Contents

## [UX](#ux-1)

[Primary Goals](#primary-goals)  
[Business Goals](#business-goals)  
[User Goals](#user-goals)  
[User Stories](#user-stories)  
[Design Choices](#design-choices)  
[Wireframes](#wireframes)

## [Features](#features-1)

[Existing features](#existing-features)  
[Features left to implement](#features-left-to-implement)

## [Technologies used](#technologies-used-1)

## [Testing](#testing-1)

[Lighthouse tests](#lighthouse-tests)  
[HTML tests](#html-tests)  
[CSS tests](#css-tests)  
[JSX tests](#jsx-tests)  
[Contrast tests](#contrast-tests)  
[Keyboard Accessibility tests](#keyboard-accessibility-testing)

## [Deployment](#deployment-1)

[How to run this project](#how-to-run-project)

## [Credits](#credits-1)

[Content](#content)  
[Media](#media)  
[Code](#code)  
[Acknowledgements](#Acknowledgements)

### UX

---

#### Primary Goals

---

The primary goal of Recipe Rescue is to stop food waste. We aim to do this by providing our users with the opportunity to use what is left in their fridge. Once we have been provided with your ingredients, we will do all the hard work for you by providing a list of recipes. Not only does that mean you fill up your stomach not a basket of shopping, but also discover a new favorite recipe while you are at it.

[Back to top](#recipe-rescue)

#### Business Goals

---

The business goals of Recipe Rescue are to stop food waste and save the environment. We believe both these goals are interlinked. If we can stop food waste then that not only means more food for everyone, but also less food in landfill. With those two goals in mind we believe that if we can achieve more customers who hate wasting food then we can keep landfills empty and your plate full.

[Back to top](#recipe-rescue)

#### User Goals

---

The goals for new users are to find new ideas for recipes to spice up their dinner times. They also want to discover new ways to use up what food they have left. Another goal is to save money.

For existing customers they wish to not only continue to save money but also to keep discovering what amazing ways they can use up their food that they did not believe was possible.

[Back to top](#recipe-rescue)

#### User Stories

---

For full Acceptance Criteria and tasks please follow [this link](https://github.com/users/devildex91/projects/6/views/1?layout=board) to the project board for Recipe Rescue.

##### User Story

As a first time visitor I would like it to be simple to use and follow to achieve a list of recipes.

##### Acceptance Criteria

- The website is responsive to whatever screen size is used to access it.
- The website clearly tells users what they need to do and makes it obvious.

##### Tasks

- Ensure all sections are easy to use and simple to follow.
- Apply a flexible layout so that it works on all screen sizes.

##### User-Story

As a user, I want to see how many ingredients I am missing for a specific recipe, so that I can decide if it's worth a quick trip to the shop or if I should choose a different meal.

##### Acceptance-Criteria

- Each recipe card displays the missing ingredients.

##### Tasks

- Make sure the recipe card displays all the missing ingredients for each recipe.

##### User Story

As a busy home cook I would like to input the ingredients I have left so I can find recipes I can make with minimal extra ingredients.

##### Acceptance Criteria

- Users can type and add multiple ingredients to search.
- The app returns a list of recipes that include as many of the ingredients available as possible.
- Each recipe must display a title, image and all the ingredients missing.

**Tasks**

- Build an input field to add ingredients too.
- Integrate a related API to handle recipe search.
- Design a recipe card to display the information from the API.

[Back to top](#recipe-rescue)

#### Design Choices

---

The original design for this project was a project called Sparkflow which was an app to take an artist, genre or mood and return a playlist. [Original design](/src//assets/images/readme-images/mobile-design.png). As the screen got larger the final page was going to also include a YOUTUBE iframe with whichever artist had been clicked on [Original Wireframe](/src/assets/images/readme-images/computer-closerlookpage-wireframes.png). Although I did start this project, as I got further in I felt that in order to fully achieve everything possible with this app it was better left for a later project once I had the server side sorted as well so I could add login pages and the user review section could be more responsive and updatable. From that original idea came recipe-rescue. That is because it follows a similar structure to Sparkflow in taking a parameter and searching and returning a result although in a simpler format more suited to the milestone project at hand. For in depth details on the design choices of recipe-rescue please see the individual sections that follow.

##### Fonts

---

  <details>
 <summary>logo</summary>

![logo](/src/assets/images/recipe-rescue-logo.png)

  </details>

   <p> For the font choices of recipe rescue I designed the logo first which can be seen above. Following this I did not want to stray too far from this design to tie it all in so chose the same geologica font that is in the logo title. Although the slogan is a different font I chose not to use this within the app as I felt certain customers may struggle to read this font if used in a high quantity so left it out of the design.
 </p>
 <details>
 <summary>Fonts</summary>

![Geologica](/src/assets/images/readme-images/geologica.png)

 </details>

[Back to top](#recipe-rescue)

##### Colours

---

 <details>
 <summary> Colours </summary>

![colours](/src/assets/images/readme-images/site-colour-choices.png)

 </details>
 I chose the colour choices above because:

###### F0f2BD because it acts as a warm neutral background. It's softer than a pure white on the eyes while keeping the app cosy feeling. It also has an association with grains and sunlight.

###### B2CD9C because it associates with vegetables, herbs and healthy eating. It also promotes freshness and sustainability as well as a natural and organic feel which is in keeping with the business plans of the company.

###### CA7842 although part of the original design as it's been shown to stimulate the appetite and associates with spices and warmth it was kept out of the final design as it just did not feel to fit with the design of the app standing out a little too much and looking out of place.

###### 4B352A because of its association with chocolate, coffee and grilled meat. It also provides a grounding and sophisticated feel to the app replacing many of the parts that

###### 3F2D22 due to contrast testing, although this colour is not in the chart above but has been chosen as an alternative to #4b352A. This is because it is a close enough match but passed both AA and AAA WCAG tests. Although the original colour is still used for the footer. Due to accessibility much of the original colour has been replaced with this new colour.

[Back to top](#recipe-rescue)

##### Styling

---

Recipe Rescue has been styled with a mobile first approach ensuring everything works from 280px and up. The site has been styled with a 20px margin between all content that where possible has consistently remained throughout most of the content at all screen sizes allowing breathing room to avoid cognitive overload.

Following from this all content has a mixture of greens and browns that have all been chosen as they represent different aspects of the food palette. The background colour was chosen as it is easier on the eyes as not to overwhelm users.

All information follows a Gestalt principle and all relevant information is kept together where possible.

We limited the font families to just the one to keep with the consistency and a cohesive user experience throughout the app. This helps with the readability and ensures the contrast is sufficient for accessibility.

All buttons have been designed with hover styles, so the user is always aware of where they are on the page and the contrast between the colours remains.

[back to top](#recipe-rescue)

##### Background

---

The background remains #F0f2BD throughout the app so it is warm and neutral helping reduce cognitive overload while remaining warm and consistent throughout.

The exception to this background is the nav element which has a background image instead.

[Back to top](#recipe-rescue)

##### Images

---

All images have been chosen as they not only follow the theme of the app but also follow the colour scheme of the site where possible.

All images have been sourced from [pexels](https://www.pexels.com/) and the logo for the nav section of the page and within the copyright and favicon was created using [logo.com](https://logo.com/).

[Back to top](#recipe-rescue)

##### Wireframes

---

 <details>
 <summary> <bold>First view of phone upon entering site with ingredients list as well as once ingredients have been added.<bold></summary>

![Phone ingredients List wireframes](/src/assets/images/readme-images/phone-Ingredients-wireframes.png)

The DIV will expand to fit the ingredients underneath the form and after five ingredients have been added a button will render. This will send an API call to Spoonacular.

 </details>

 <details>
 <summary><bold>View of recipe section on mobile screens </bold></summary>

![Phone recipe section wireframe](/src/assets/images/readme-images/phone-recipe-wireframe.png)

Once the ingredients list has been submitted an API call will be made and the recipe section will render onto the page showing 6 recipes that will have minimal extra ingredients needed. The recipe card will also be a button with a link to the source URL for full recipe details.

 </details>

<details>
<summary>Tablet Wireframe with and without ingredients</summary>

![Tablet wireframe without ingredients](/src/assets/images/readme-images/tablet-ingredientlist1-wireframe.png)
![Tablet wireframe with ingredients](/src/assets/images/readme-images/tablet-ingredientlist2-wireframe.png)

The main difference between the phone and tablet view is that with the extra space two images render to the page once the screen size hits 768px. The other difference is that the ingredients and button will appear to the right-hand side of the ingredients form.

</details>
<details>
<summary>Tablet wireframe of recipe section</summary>

![Tablet wireframe recipe section](/src/assets/images/readme-images/tablet-recipe-wireframe.png)

Once tablet sizes kick in, the display grid takes over much of the layout of the page and the recipe section has a sub-grid that has two columns of 1fr and then auto rows so that all the recipe cards will remain a consistent layout as the screen grows.

</details>
<details>
<summary>Desktop Wireframe with ingredients section</summary>

![Desktop ingredient wireframe](/src/assets/images/readme-images/desktop-ingredientlist1-wireframe.png)
![Desktop ingredients with ingredient](/src/assets/images/readme-images/desktop-ingredientlist2-wireframe.png)

The styling of the ingredients section is extremely similar to the tablet's sizing, although all font sizes grow to better fit the space.

</details>
<details>
<summary>Desktop wireframe with recipe section</summary>

![Desktop wireframe with recipe section](/src/assets/images/readme-images/desktop-recipe-wireframe.png)

The main difference for desktop screens over tablet screens is that the grid within the recipe section expands to three columns with auto rows to allow two rows of three recipe cards.

</details>

[Back to top](#recipe-rescue)

### Features

---

#### Existing Features

---

- Ingredients list with ability to add, remove, or clear ingredients.
- Recipe search that returns 6 recipes based on minimal missing ingredients.
- Link to the source site for full recipe details, ingredients lists and how to make the recipe.
- Responsive on all screen sizes.

#### Features left to implement

---

- Full recipe details and steps on how to make it will be added to the page at a later date but due to API limits have been added as a link to the Source URL.
- Advanced search to be added allowing to search based on dietary requirements.
- Sign in page to be added to allow saving of favourite recipes or specialist search parameters.

[Back to top](#recipe-rescue)

### Technologies used

---

- Visual Studios used as the primary IDE.
- React and VITE used.
- Display grid used for main layout and flexbox for improved responsive design within each DIV.
- Pexels used for photo on navbar and pictures that appear on larger screens apart from recipe photos are straight from spoonacular API.
- GITHUB and GITHUB pages for deployment.

[Back to top](#recipe-rescue)

## Testing

---

### Lighthouse tests

 <details>

 <summary>Lighthouse test results</summary>

#### main content scores

| Test number | Expected results |               |               |     | Actual Result |               |               |     |     |     |
| ----------- | ---------------- | ------------- | ------------- | --- | ------------- | ------------- | ------------- | --- | --- | --- |
|             | Performance      | Accessibility | Best practice | SEO | Performance   | Accessibility | Best practice | SEO |     |     |
| 1           | 90               | 100           | 100           | 100 | 75            | 95            | 100           | 92  |     |     |
| 2           | 90               | 100           | 100           | 100 | 80            | 85            | 95            | 92  |     |     |
| 3           | 85               | 100           | 100           | 100 | 85            | 100           | 100           | 100 |     |     |
|             |                  |               |               |     |               |               |               |     |     |     |

#### Mobile lighthouse notes

![mobile lighthouse](/src/assets/images/readme-images/mobile-lighthouse-test.png)

On first testing I found that due to image loading times the nav bar performance was being affected. To solve this I tried compressing all the files into Webp. This helped my loading times although not a great deal but sacrificed accessibility. It also affected my best practice scores because of the pixelation of the images as they got larger. This meant that I had a choice on which to prioritize, and chose to prioritize accessibility. Because of this I reverted to larger but better quality photos which improved the accessibility scores as well as adding in some missing aria labels brought the score up to 95 on accessibility. Another issue I had with my scores was that the contrast between the colours in my input in the ingredients form were not passing testing. This was an unexpected problem as I had checked the colours in a separate contrast checker before using the selected colours. Even though they had passed on a separate check I altered the colours until the score passed through Lighthouse as well which is why the input shows up a different colour to the buttons underneath it. Once I had fixed these issues my accessibility score increased to 100 and performance was set at 85.

Another problem I faced was that lighthouse testing could only be done on the initial App upon loading. This is because it is a single page React app, so the page conditionally renders different components when certain conditions are met rather than linking to separate pages so cannot be tested with lighthouse. The performance score is only 85 because of LCP which is due to the background image in the nav component. With this being a React app this means that I cannot move the Styling into the head of the HTML document because it is rendered as a JSX element. This means it would not work for styling, and it couldn't be added in as an HTML element with separate tags on for faster loading for this very reason. This meant the decision was made to compromise the performance score in order to make sure everything else is 100. I did this because as explained above anything that could be done sacrificed what I considered more important scores elsewhere.

The SEO was easily fixed by adding in a META description in the head of my index.html and that fixed the score.

#### Desktop lighthouse notes

![Desktop lighthouse](/src/assets/images/readme-images/desktop-lighthose-test.png)

The desktop testing was easy by comparison as all the hard work had been done on the mobile testing and the images that appear as the screen gets larger had already been compressed while sorting the picture within the navbar. Because of this the scores all came in at the same as the phone screen sizes with an increased performance rating so no more fixes were required.

The same details applied to the testing of Desktop screen sizes, although you can see the sacrifice is less significant on Desktop with a slightly improved performance almost in the 90s.

#### 404 lighthouse scores

| Test number | Expected results |               |               |     | Actual Result |               |               |     |     |     |
| ----------- | ---------------- | ------------- | ------------- | --- | ------------- | ------------- | ------------- | --- | --- | --- |
|             | Performance      | Accessibility | Best practice | SEO | Performance   | Accessibility | Best practice | SEO |     |     |
| 1           | 100              | 100           | 100           | 100 | 100           | 87            | 100           | 90  |     |     |
| 2           | 100              | 100           | 100           | 90  | 100           | 100           | 100           | 90  |     |     |
| 3           | 100              | 100           | 100           | 90  | 100           | 100           | 100           | 90  |     |     |
|             |                  |               |               |     |               |               |               |     |     |     |

![first lighthouse test](/src/assets/images/readme-images/404-lighthouse-first.png)
![second lighthouse test](/src/assets/images/readme-images/404-lighthouse-second.png)
![third lighthouse test](/src/assets/images/readme-images/404-lighthouse-third.png)

#### Mobile 404 notes

Upon first test although expected no errors, accessibility issues arose due to spacing between the button and the link causing issues. In order to solve this I increased both the spacing and margins around both the button and the link tag as well as increasing the font size so I could rectify these issues which upon the next test had been resolved.

I have chosen to leave the SEO scores as it is not a page that I believe requires the search engine score as it is a page purely for once an error has occurred and believed the score was high enough to warrant no action.

Third test uploaded, although all scores are the same as the second the button element was removed so it passed HTML check so resubmitted latest test to confirm results were all the same

![Desktop 404 test](/src/assets/images/readme-images/404-lighthouse-desktop.png)
![Desktop 404 second](/src/assets/images/readme-images/404-lighthouse-second-desktop.png)

#### Desktop 404 notes

Again similar to the main content once I had solved all the issues on mobile view the results were identical on Desktop view as well

The second screenshot submitted for the same reason as the last mobile design changed due to HTML not passing so included the latest screenshot with the same scores.

[Back to top](#recipe-rescue)

 </details>

### HTML tests

 <details>
 <summary> HTML tests</summary>

- HTML code tested at [validator.w3](https://validator.w3.org/) all pages passed with no errors or warnings.

#### Main content HTML check

![HTML check](/src/assets/images/readme-images/html-check.png)
HTML all passed though being a React app the only HTML are stylesheet links and a root DIV to render content into.

#### 404 page HTML check

![404 first check](/src/assets/images/readme-images/404-HTML-first.png)
![404 second check](/src/assets/images/readme-images/404-HTML-second.png)

After first test failure all trailing slashes were removed as well as styling the a href to look like a button and removing the button element and everything passed. But meant lighthouse testing had to be redone.

[Back to top](#recipe-rescue)

 </details>

### CSS tests

<details>
 <summary> CSS testing</summary>

#### index CSS test

- CSS tested at[jigsaw.w3](https://jigsaw.w3.org/css-validator/) and the CSS validates as CSS level 3 + SVG.

![index-css-test](/src/assets/images/readme-images/index-css-check.png)

Although no errors were found within the CSS originally the CSS was split into index.css and app.css. In order to improve the efficiency and because I had no real components that needed individually styling I chose to move it all into one index.css file. I felt this meant that the loading times would be increased as it did not need to look for two separate CSS files. Another change I made to my CSS was that I added CSS variables for easier updateability of the site for things such as colours and fonts.

Other issues I faced with my CSS was the gap property with display grid affecting the nav and footer elements. In order to solve this I chose to get rid of the gap property completely and instead add margins to the DIVS and content where necessary to achieve the look I wanted. In doing this it solved the problem with my nav and footer, and they spanned 100% width again.

While final testing noticed that the images on recipe card were behaving erratically disrupting the organised layout of the page. I solved this problem by removing some of the flexbox properties namely the justify-content from recipeCard DIV and adding a margin top of 10px to the image to keep it relative to the top of the recipe card no matter the size. Although this means the images turn out smaller than previosly, as they are low quality images from the external API this improves the visual quality of the images.(please see screenshots below for before and after shots)

![erratic-images](/src/assets/images/readme-images/erratic-image.png)  
![after-image-fix](/src/assets/images/readme-images/new-image-layout.png)

![404 CSS](/src/assets/images/readme-images/404-css-check.png)

The CSS in the head of my 404-page passed all checks. All the rest of the CSS was integrated into index.css file, although the decision was made to keep the body styles in the head of the HTML file to stop it reacting with any body styles already included for the main app. I also felt that this was a better option than adding another DIV purely to style within index.css.

While testing my site to confirm all was working as intended I noticed I had forgotten that I had wrapped the list section in a main element so when I added the main styling to my index.css it had broken the styling for my main app. To fix this I have moved the main styling for 404 back into the head of the 404 page. The tests above still apply as the code passed whilst going through the main index.css test, so I know that it does not need retesting now it has been moved as the code did not change only location.

[Back to top](#recipe-rescue)

 </details>

### JSX tests

<details>
<summary>JSX testing</summary>

#### JSX testing

All JSX components tested at [json table](https://jsontotable.org/jsx-validator)

##### Navbar

![navbar-jsx](/src/assets/images/readme-images/Navbar-jsx-test.png)

##### Header

![Header-jsx](/src/assets/images/readme-images/Header-jsx-test.png)

##### MainSection

![MainSection-jsx](/src/assets/images/readme-images/MainSection-jsx-test.png)

##### IngredientsList

![IngredientsSection-jsx](/src/assets/images/readme-images/IngredientsList-jsx-test.png)

##### RecipeCard

![RecipeCard-jsx](/src/assets/images/readme-images/Recipe-jsx-test.png)

##### Footer

![Footer-jsx](/src/assets/images/readme-images/Footer-jsx-test.png)

##### App

![App-jsx](/src/assets/images/readme-images/App-jsx-test.png)

##### Main

![main-jsx](/src/assets/images/readme-images/main-jsx-test.png)

All checks passed first time which was the expected result, although earlier in the development cycle the Main section was just called Recipe which is because it incorporated both the ingredients list and the Recipe card sections. Once I had all the code working through the use of props it was slowly refactored into the separate JSX elements. I chose to do this because I felt it was better practice to fully make the most of the React setup being used. I also felt it made the readability of the code much easier for someone else trying to work with the code as with a separate JSX element doing as close to one thing each you can easily navigate through to update sections as needed without affecting the rest of the code.

[Back to top](#recipe-rescue)

</details>

### Contrast tests

 <details>
 <summary> Contrast testing </summary>

#### Contrast testing

- all contrast testing carried out at [webaim](https://webaim.org/resources/contrastchecker/)

##### #4B352A foreground & #B2CD9C background

![brown text dark green background](/src/assets/images/readme-images/contrast-checker-browntext-darkgreen-background.png)

First test passed on all tests but AAA. Originally to solve this I made all the text bold. Once I had seen how this looked on the page I decided to add a lighter shade of brown which is screenshotted later in the contrast checking so that I had the option to change the fonts to #3F2D22 so that it was not too different as not to affect the visual appearance of the page whilst passing all contrast checks.

##### #4B352A background & #B2CD9C foreground

![original-button](/src/assets/images/readme-images/original-button-contrast.png)

Being the same colours as above it failed on the exact same test with the buttons styles. Because of this as seen with the colour choices below. Because the buttons failed as well I took the choice to change the brown throughout most of the app to #3F2D22 as it passes all contrast checks as shown later in the contrast checks.

##### #F0F2BD foreground & #4B352A background

![hover effect](/src/assets/images/readme-images/hover-effect-buttons.png)

All tests passed for hover effect on buttons as after the failed tests previously I took the decision to use the background colour for the site for a better contrast rating with the brown. This works for most of the site although for some reason still failed with the dark background on the lighthouse testing so reversed the effects to that of the buttons in the input box and this passed all contrast checks including lighthouse testing.

##### #F0F2BD background & #4B352A foreground

![button normal](/src/assets/images/readme-images/button-color.png)

All tests passed like described above the button colour and hover effect are the same colours but in reverse so once I had made the decision to change after the original failed tests this was more a formality as I knew it would pass the contrast test.

##### #3F2D22 foreground & #B2CD9C background

![alternate font color](/src/assets/images/readme-images/alternate-color-test.png)

As described above this was the alternate brown chosen so that I could guarantee all tests would pass without having all fonts bold. It was done by sliding the bar to a lighter shade of brown to ensure not only all contrast checks passed, but remained as close to the original colour as I could.

[Back to top](#recipe-rescue)

 </details>

### Keyboard Accessibility tests

 <details>
 <summary>Keyboard Accessibility</summary>

![input focus](/src/assets/images/readme-images/input-box-tab-focus.png)
![button focus](/src/assets/images/readme-images/button-tab-focus.png)
![recipe card focus](/src/assets/images/readme-images/recipe-card-tab-focus.png)

All of my apps are keyboard accessible as you can easily navigate throughout the page with the tab and shift keys to go up and down the page. You can enter ingredients and use the enter key to input these ingredients as well as using the tab and enter keys in order to select a recipe card and be taken to the source website. All the above screenshots show the focus on each element as they are selected with a tab from input down to recipe cards at the bottom.

[Back to top](#recipe-rescue)

 </details>

### development bugs and fixes

<details>
<summary>Development bugs and fixes</summary>

- Original design used only flexbox but changed to grid for more control over general layout across screen size changes.
- Found a bug in the height as screen sizes increased and the gap between the footer and the content above increased dramatically. I discovered that the footer was adding an extra grid row because was set to start at grid 5 which was adding an unnecessary row and causing layout issues
- All content was shrinking too far to still be easily readable on extra large screens so added a safety measure at 1800 px and 1200 pixels to ensure that all fonts and images scale properly as screen size grows.
- On testing discovered once recipe cards render to page image and logo were too large with new sizes so changed from width to max-width to allow it to shrink as needed for new content.
- Upon testing ingredients and Recipe sections needed wrapping in a main section for accessibility and subsequently CSS needed adjusting to keep layout the same.
- gridContainer ID added in to set grid styles on as being a React app margin was appearing around root DIV and body so set both of these to get rid of margin and added in #gridContainer to set styles on for the rest of content.
- Extra margin added to the top of the footer to create a gap between the top of the footer and the bottom of the recipe cards. This is due to the unpredictability of the content coming from the API so list length and image size/quality cannot be controlled.
- Had to change the grid as pictures from API were pixelating at certain sizes and have no control over API images as they are from an external source.
- All files were in the subfolder causing issues with deployment to GITHUB. To solve this I have had to move all files into root and reconfigure import paths.
- On first attempt the site went live but was not updating on pushing to the repository so deleted file paths moved the whole project into root from subdirectory and followed VITE instructions as well as GITHUB instructions to get it working as intended.
- After googling to find a solution, the discovered API has to be put in secrets in actions to make it work on GITHUB pages.
- The original recipe cards container had both missing ingredients and ingredients you already had but was looking too cluttered and causing layout issues. These were removed with a link to full recipe provided instead covering making up for taking this away and meaning no need to add full recipe to page helping with API limitations.
- Main section added in to help with accessibility for screen readers.
- Occasional broken image in API call due to error on end of the API and out of our control.
- Margin had to be increased along the bottom of the recipe section as the footer was behaving unexpectedly and needed extra margin to be pushed down.

[Back to top](#recipe-rescue)

</details>

[Back to top](#recipe-rescue)

### Deployment

---

- ##### Note for anybody working on this code React and Vite has been to develop this app so will need to be used to work with this code please see credits for a full list of dependencies and versions

[To view site](https://devildex91.github.io/recipe-rescue/)

#### How to run project

 <details>
 <summary>Site has been deployed through GITHUB pages by:</summary>

---

1.  Setting up a Vite project by opening up your IDE and opening a terminal.
2.  Type:  
    npm create vite@latest<br>  
    and follow the prompts making sure to select React and javascript.
3.  Once set up open vite.config.js and replace the code with:

    import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'

export default defineConfig({  
plugins: [react()],  
base: "/your-repo-name/", // Replace with your exact repository name
})

1. In the terminal again type :  
   npm install gh-pages --save-dev

2. Update package.json by adding the following:  
   {  
   "name": "my-vite-app",  
   "homepage": "<https://your-github-username.github.io/your-repo-name>",  
   "scripts": {  
   "dev": "vite",  
   "build": "vite build",  
   "lint": "eslint .",  
   "preview": "vite preview",  
   "predeploy": "npm run build",  
   "deploy": "gh-pages -d dist"  
   }  
   }

- Note: Vite builds into a folder named dist (unlike Create React App which used build), so ensure the script says -d dist.

1. Run:  
   npm run deploy  
   This will:

- Run npm run build to create a production-ready dist folder.
- Create a new branch in your GitHub repository called gh-pages.
- Push the contents of dist to that branch.

1. Enable GITHUB pages by:

- Go to your repository on GITHUB.
- Click Settings > Pages in the left sidebar.
- Under Build and deployment, ensure the Source is set to "Deploy from a branch."
- Under Branch, select gh-pages and the /(root) folder.
- Click Save.

###### Your site should now be live at <https://your-username.github.io/your-repo-name/>

 </details>

 <details>  
 <summary> To download and work on the code yourself locally. </summary>

---

1.  Navigate to [devildex91/recipe-rescue](https://github.com/devildex91/recipe-rescue)
2.  Click on the green code button
3.  Select download zip
4.  Once downloaded, unpack the zipped file to a location of your choosing, and you can work on and run the code in an IDE of your choosing (Have fun).

  </details>

  <details>  
 <summary> To fork a repository.</summary>

---

- please see [github docs](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) for more detailed and an easier to follow guide than I can produce but remember to navigate to [devildex91/recipe-rescue](https://github.com/devildex91/recipe-rescue) to fork this repository.

 </details>

[Back to top](#recipe-rescue)

### Credits

---

#### Content

---

- geologica imported from [google fonts.](https://fonts.google.com/selection/embed)
- Spoonacular API

[Back to top](#recipe-rescue)

#### Media

---

- All pictures from pexels.com.
- for all image optimization [squoosh](https://squoosh.app/) has been used to help with the resize of images and compression tasks.
- All favicons apart from title favicon from [React icons](https://react-icons.github.io/react-icons/)

[Back to top](#recipe-rescue)

#### Code

---

- CSS styles for box shadow properties from [getcssscan](https://getcssscan.com/css-box-shadow-examples)
- All code was written by myself apart from code for deployment which was based on instruction from Vite documentation and GITHUB documentation.

##### dependencies for React/Vite

---

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
- Spoonacular API(Your own account and API key will be needed if working on yourself locally)

#### Acknowledgements

- React icons for all icons
- Google fonts for font
- getcssscan for box shadow
- VITE documentation for deployment and setup of project
- GITHUB documentation for setup of GITHUB pages for deployment
- React documentation for help with React and JSX elements as well as best practices.
- Spoonacular API
  -Google Gemini used for help to find best practices on where to locate the 404 page in my app without having to use React router as could only find information on using React Router (For future projects react router will most likely be used but did not want to implement another dependency and refactor whole site for the 404 page).
- GITHUB copilot used to confirm best practice for my second API call to fully optimize what could have been quite a bottleneck of code awaiting API calls.

  [Back to top](#recipe-rescue)
