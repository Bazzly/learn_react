# learn_react

React Learning process

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="">
    <img src="/src/img/React-icon.svg.png" alt="Logo" width="150" height="150">
  </a>

  <h3 align="center">My react Learning process</h3>

  <p align="center">
    I will document my react js learning process here

  </p>
</p>

<!-- ABOUT THE PROJECT -->

## Day 01

1. Components help us to write reuseable, modular and better organized code.
2. React application is a tree of component.
3. Node must be installed on your machine v16 above is recommened.
4. prettier is recommened to be downloaded on VScode and set to format on save

# Start building app

Open terminal in your prefered directory

- CREATE VITE

  ```sh
  npm create vite@4.1.0
  ```

  vite can be use to install many javascript package
  follow the prompt create project name
  set framework
  select react
  typscript
  cd to react app folder

  - INSTALL ALL LIBRIES

  ```sh
  npm insatll
  ```

  open folder in vscode
  open vscode embeded terminal

  - RUN WEBSERVER

  ```sh
  npm run dev
  ```

## I create my first react component file extention (.tsx)

This website can be use to see how html get converted to react file

[www.babeljs.io](www.babeljs.io)

I render my first react component
![My Image](/src/img/first_comp.png)

- APP TREE

  ## APP -- MESSAGE

  - INSTALL BOOTSTRAP v5.2.3

  ```sh
  npm install bootstrap@5.2.3
  ```

  - IN MAIN.TSX FILE IMPORT BOOTSTRAP

  ```sh
  import 'bootstrap/dist/css/bootstrap/css'
  ```

## A commponent can not return more than one element in react


## Day 02

- Learn about props
 ```sh
interface Props{
    items: string[];
    heading: string;
    }
```
- Learn about hook state
 ```sh
  const [selectedIndex , setSelectedIndex] = useState(-1);
  ```
  - Video pause at 00:50:00 
  - Taking some rest @ Mon jun 5 0:46am