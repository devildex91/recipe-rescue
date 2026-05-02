# recipe-rescue


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
 # recipe-rescue
 [To view site](https://devildex91.github.io/recipe-rescue/)
 ## Table of Contents
 
 1. ### UX
 
 - Primary Goals
 - Business Goals
 - User Goals
 - User Stories
 - Design Choices
 - Wireframes
 
 2. ### Features
 
 - Existing Features
 - Features left to implement
 
 3. ### Technologies used
 
 4. ### Testing
 
 5. ### Deployment
 
 - How to run this project
 
 6. ### Credits
 
 - Content
 - Media
 - Code
 - Acknoledgements
 
 <details>
 <summary> 1. UX </summary>
 
 ---
 
 #### Primary Goals
 
 ---
 
 
 [back to top](#recipe-rescue)
 
 #### Business Goals
 
 ---
 
 [back to top](#recipe-rescue)
 
 #### User Goals
 
 ---
 

 [back to top](#recipe-rescue)
 
 #### User Stories
 
 ---
 

 
 [back to top](#recipe-rescue)
 
 #### Design Choices
 
 ---
 
 [back to top](#recipe-rescue)
 
 ##### Fonts
 
 ---

 <details>
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
 
 ##### Wireframes
 
 ---
 
 

 
 [back to top](#recipe-rescue)
 
 <details>
  <summary> 2. Features </summary>
 
 ---
 
 #### Existing Features
 
 ---
 
 
 #### Features left to implement
 
 ---
 
 - Full recipe details and steps on how to make will be added to the page at a later date but due to API limits have been added as a link to the Source URL 
 </details>
 
 [back to top](#recipe-rescue)
 
 <details>
  <summary>3. Technologies used </summary>
  
   ---
   + Visual Studios used as the primary IDE. 
   +  React and VITE used 
   + Display grid used for main layout and flexbox for improved responsive design within divs.  
   + Pexels used for photo on navbar and pictures that appear on larger screens apart from recipe photos are straight from spoonacular API.
   + Github for deployment. 
  </details>
 
 [back to top](#recipe-rescue)
 
 <details>
  <summary>4. Testing</summary>
  
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
 