# React Rock Paper Scissors Game

This is a simple Rock Paper Scissors game built using React and styled with Tailwind CSS. The project is set up with Vite for fast development and includes TypeScript for added type safety. The game utilizes React's `useState` and `useEffect` hooks to manage state and handle game logic. It's a straightforward implementation, perfect for beginners who want to learn React fundamentals.

## Features

- Rock, Paper, Scissors game
- Responsive design using Tailwind CSS
- Simple and intuitive user interface
- State management with React's `useState` hook
- Use of `useEffect` for handling game logic

## How to Play

1. Clone the repository to your local machine.
   ```bash
   git clone https://github.com/your-username/react-rock-paper-scissors.git
   ```

2. Navigate to the project directory.
   ```bash
   cd react-rock-paper-scissors
   ```

3. Install dependencies.
   ```bash
   npm install
   ```

4. Start the development server.
   ```bash
   npm start
   ```

5. Open your browser and visit `http://localhost:3000` to play the game.

## Deployment

The game is deployed using Firebase and can be accessed at [https://rock-paper-scissor-8beba.web.app/](https://rock-paper-scissor-8beba.web.app/). To deploy the game to Firebase, follow these steps:

1. Install the Firebase CLI if you haven't already.
   ```bash
   npm install -g firebase-tools
   ```

2. Login to your Firebase account.
   ```bash
   firebase login
   ```

3. Initialize your Firebase project.
   ```bash
   firebase init
   ```

4. Choose the hosting option and follow the prompts.

5. Build the project.
   ```bash
   npm run build
   ```

6. Deploy the project to Firebase.
   ```bash
   firebase deploy
   ```

7. Access your deployed game at the provided Firebase Hosting URL.

## Project Structure

```
react-rock-paper-scissors/
|-- public/
|   |-- index.html
|   |-- vite.svg
|-- src/
|   |-- assets/
|       |-- arrowUp.png
|       |-- lost.png
|       |-- paper.png
|       |-- party.png
|       |-- rock.png
|       |-- scissor.png
|   |-- components/
|       |-- Game.tsx
|       |-- Header.tsx
|       |-- PlayAgain.tsx
|       |-- Result.tsx
|   |-- App.tsx
|   |-- Main.tsx
|   |-- index.css
|   |-- vite-env.d.ts
|-- .gitignore
|-- package.json
|-- package-lock.json
|-- postcss.config.js
|-- requirements.md
|-- tailwind.config.js
|-- tsconfig.json
|-- tsconfig.node.json
|-- vite.config.ts
|-- yarn.lock
|-- firebase.json
|-- .firebaserc
```

## Acknowledgments

- Inspired by the classic Rock Paper Scissors game.
- Tailwind CSS for providing a utility-first CSS framework.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
