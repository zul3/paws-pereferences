Paws & Preferences

Project Overview

Paws & Preferences is a single-page web application designed to identify user preferences for cats through a swipe-based interaction model. Inspired by popular swipe interfaces, the application allows users to like or dislike a series of cat images and presents a summary of preferences upon completion.

The application is implemented as a fully static site and is hosted using GitHub Pages.

Live Application:
https://zul3.github.io/paws-pereferences/


Objectives

- Provide an intuitive, swipe-based user interface for expressing preferences
- Ensure smooth performance on mobile devices
- Display a summary of user interactions and preferences
- Maintain a clean, maintainable, and framework-light codebase


Features

Core Functionality
- Swipe or button-based interaction to like or dislike cat images
- Fixed number of cat images per session
- Summary screen displaying liked cats and overall statistics

User Experience Enhancements
- Responsive, mobile-first layout using Bootstrap
- Tinder-style card animations with visual feedback (LIKE / NOPE)
- Progress indicator (count and progress bar)
- Undo functionality for the most recent action
- Image loading indicator
- Keyboard navigation support

Feedback and Interaction
- Optional sound effects with clear mute/unmute control
- Haptic feedback on supported mobile devices
- Confetti animation for high preference match rates
- Replay option to restart the session

Preference Analysis
- Like percentage calculation
- Basic preference insights based on generated traits


Technology Stack

- HTML5
- CSS3
- JavaScript (Vanilla)
- Bootstrap 5
- Cataas API (image source)
- Canvas Confetti (visual feedback)


Application Structure

paws-preferences/
│── index.html
│── style.css
│── script.js
│── sounds/
│   ├── like.mp3
│   └── dislike.mp3


Setup and Deployment

Local Development
1. Clone the repository:
   git clone https://github.com/zul3/paws-pereferences.git
2. Open index.html in a web browser.

No additional dependencies or build steps are required.

Deployment
The project is deployed using GitHub Pages and served directly from the main branch.


User Controls

- Like: Right arrow key or Like button
- Dislike: Left arrow key or Dislike button
- Undo: Undo button
- Toggle Sound: Sound toggle button


Design Considerations

- Mobile-first approach with touch-friendly interactions
- Predictable and stable undo behavior
- Consistent image sizing to avoid layout shifts
- Clear visual and audio feedback with accessibility in mind


Limitations

- Cat metadata (traits, age) is generated for UX purposes and is not sourced from real data
- Session state is not persisted across page reloads
- A fixed number of images is used per session


License

This project is provided for demonstration and evaluation purposes only.
