# MEMENTO

Memento was created as a take-home project over 3 days. The goal was to build a collections management page for an app for users to track precious objects. The project assignemt was delieverd via a mock jira ticket.

### Ticket Description
I’d like to be able to have a collection overview and help manage my memento collections.  

### Acceptance Criteria
- [x] Build matches the provided design 
- [x] The header shows the Memento logo, profile icon, and account settings icon
- [x] The profile/account settings icons are a sticky action bar on smaller screens
- [x] I can Edit/Delete/Save each collection
- [x] I can click “Add New Collection” to create a new collection
- [x] When a new collection is created, it will be created in edit mode. 

## Screenshots
##### Desktop
![Screen Shot 2021-06-17 at 7 50 37 AM](https://user-images.githubusercontent.com/72086109/122394345-de0bb600-cf43-11eb-9c95-189fd34f870d.png)
##### Tablet
![Screen Shot 2021-06-17 at 7 50 57 AM](https://user-images.githubusercontent.com/72086109/122394364-e532c400-cf43-11eb-92b3-2e26b00de34e.png)
##### Mobile w/sticky header
![Screen Shot 2021-06-17 at 7 51 28 AM](https://user-images.githubusercontent.com/72086109/122394405-f2e84980-cf43-11eb-9df7-984059aee6ca.png)![Screen Shot 2021-06-17 at 7 56 23 AM](https://user-images.githubusercontent.com/72086109/122394419-f67bd080-cf43-11eb-9fb5-c7d899d956ed.png)

## Installation
1. Clone this repo
2. CD into the root directory
3. Install dependencies with `npm i`
4. Start the dev server with `npm start`
5. Go to http://localhost:3000/ to see the site

## Technologies Used
- ![React](https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB)

- <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"/>

- [![JavaScript](https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://www.javascript.com/)

- ![HTML5](https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white)

- ![SASS](https://img.shields.io/badge/SASS%20-hotpink.svg?&style=for-the-badge&logo=SASS&logoColor=white)

- ![Cypress](https://img.shields.io/badge/cypress%20-%2317202C.svg?&style=for-the-badge&logo=cypress&logoColor=white)

## Project Planning
The small scale of the project along with brand guidelines and a comp meant that planning could be simple and targeted. First, I marked up the comp to create an outline of the components. Then I wrote out a few basic notes about the how I would structure and store the data as well as thoughts on how to use the state data to handle conditional rendering. 
![Memento plan](https://user-images.githubusercontent.com/72086109/122402539-92f5a100-cf4b-11eb-941d-4d7de33e4d7f.jpg)

## Design Choices

#### SASS
The use of brand colors and the consistent styling for the navigation and collection sections made this a good candidate for SASS. Mixins helped dry up the CSS and variables made the colors more semantic to write. 

#### Icon Selection
Icons that precsiely match the comp weren't available on the provided site so I had to find alternates. While the original comp used icons with solid color borders and white bodies, I choose icons that all had solid color bodies without borders, ensuring that they had a consistent look.  

#### Data type and organization
All of the collection data is held in state in App and passed to the collection list and collection components via props to ensure that application adheres to 'data down, actions up.' Any changes to state triggered by child components alter the data with methods bound to App. Binding was accomplished via ES6 arrow functions to avoid the need for Function.prototype.bind. By altering state, which trickles down to child components via props, I can ensure that user inputs will trigger rerenders when data changes. 

While the collection data are only a single strings, I decided to store them as objects to ensure that each collection had a unique ID for creating keys and to provide easy access via iterator methods. New collections use a Date object to generate a unique ID based on the current time. 

#### Collection as Controlled Form
Each collection component has its own state, which is updated dynamically when the user types in the form while in creation mode. This allows each individual collection component to function as a controlled form. 

#### Dynamic Rendering
The simplicity of this app implies a simple approach to rendering. To that end, the Collection component uses dynamic rendering to display a form input or collection title. This is triggered by the truthy or falsy value of the incoming title prop. By passing an empty string to new Collections, I can ensure that they render immediately in create mode. 

#### Sticky Action Bar
Because there are only two navigation controls, I decided to replace the navigation container with a sticky full banner header when the app is viewed on mobile. This was especially easy to accomplish because I had previously created a SASS mixin for the card style, allowing the new banner to match the aesthetic of the desktop and tablet views.  

The also moved the collections container up the page on mobile view to remove large the gap below the header. This improved the look of the mobile view and reduced the amount of unused space, since space is at a higher premium on smaller screens. 

## Accessibility
Memento is fully tab-able and recieved 100% accessibility rating via Lighthouse.
![Screen Shot 2021-06-17 at 8 00 42 AM](https://user-images.githubusercontent.com/72086109/122397704-35f7ec00-cf47-11eb-94d9-0af11b167310.png)

## Future Iterations
- [ ] Use Material UI to locate icons that match the comp
- [ ] Replace alert with custom modal
- [ ] Add dynamic form labels to remove Wave errors

## Contact the Contributers
[<img src="https://img.shields.io/badge/LinkedIn-matt--umland-informational?style=for-the-badge&labelColor=black&logo=linkedin&logoColor=0077b5&&color=0FBBD6"/>][linkedin2]
[<img src="https://img.shields.io/badge/Github-mattumland-informational?style=for-the-badge&labelColor=black&logo=github&color=8B0BD5"/>][github2]

<!-- Personal Definitions  -->
[linkedin2]: https://www.linkedin.com/in/matt-umland-he-him-4264455b/
[github2]: https://github.com/mattumland
