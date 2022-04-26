# Scene Mover - Frontend Implementation

![](https://rickschubert.net/blog/images/scenemover_moving_scene_with_files_in_view.gif "demo")

This repository holds the backend implementation for a locally running web application I wrote to help me write a screenplay. [I published a blog article about the application](https://rickschubert.net/blog/posts/how-i-wrote-an-application-to-help-me-write-a-screenplay/), if you are keen to find out more.

The web application is written with React using Redux for state management and React DnD for the drag-and-drop implementation. Starting point for the app's structure was [sheepy-fp-guide](https://github.com/iskenxan/sheepy-fp-guide).

# Development
- Run the web app with `npm start` to see it in the browser and to be able to debug
- Run `npm run build` or `npm run watch-build` to compile the VSCode extension. You can launch it from within VSCode with F5 in a new extension host.
