### The code can be found in Github - https://github.com/hereisethanhunt/book-library

### The site is LIVE here - https://book-library.netlify.com/

### Steps to replicate task in localhost -

1. Visit https://github.com/hereisethanhunt/book-library
2. Clone the repository by running git clone https://github.com/hereisethanhunt/book-library.git
3. cd book-library
4. npm install
5. npm start

### Prerequisite - Node and npm should be installed in the system.

### Key features - 

1. This is a PWA app, it is mobile-first responsive and will install in androids and IOS phones.

2. React is used in the frontend along with Redux to manage state dependencies.

3. The folder structure is as follows -

   Container - contains app (which has files dependent on the entire project) , contains book-library (which is right now the only existing app).

   Component - contains all functionality level files and folder from all the apps inside the container (right now only book-library in container).

   modules in css is used for local level css inclusion whereas normal css file used for app folder.

   actions are provided next to the component it fires.

   reducer is given in the container of that particular app.

   root-reducer will stay inside the app of container.

## Available Scripts

In the project directory, you can run:

### `npm start`

### `npm run build`

### `npm run eject`
