# MediaSelectionMdrae

This repo contains a completed version of the "Media Selection User Interface" angular project. The UX is made up of a `name` input field, `description` textarea field, and `media` display field. The user can select an image by clicking the "Select Image" button and selecting from the subsequently opened modal. If the user would like to remove their selection, they can click the remove icon in the top right corner of the selected image.

The project uses `unsplash-js` to interact with and pull 6 random photos from the Unsplash API. This functionality occurs on component initializtion, but if there's an error with the original request, a button is displayed in the modal which the user can click to rerun the request.

The UI is also responsive. On mobile screens, the modal displays images in a one column grid, while on tablet and desktop the images are displayed in a two column grid.

A "Log Form" button was also added. This outputs the current state of the form to the browser's console.

_Note_: I had some issues with Unsplash's API randomly returning an intermittent CORS error saying the preflight response didn't contain a "Access-Control-Allow-Origin" header. This started working randomly and seems to be an issue on Unsplash's side.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
