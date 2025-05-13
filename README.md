# Bingo Engine Prototype

This project is a prototype for a Bingo game engine built using Node.js and Express. It provides several endpoints to simulate and interact with various components of a Bingo game, such as drawing balls, generating Bingo cards, and evaluating game results.

## Features

- **Ball Draw**: Simulates the drawing of Bingo balls.
- **Bingo Card Generation**: Generates Bingo cards for players.
- **Game Queue**: Manages multiple Bingo games and their players.
- **Pattern Evaluation**: Checks for winning patterns in a Bingo game.
- **Class 3 Slot Game**: Evaluates line wins and calculates credits per line for a Class 3Slot Game
- **Line Evaluation**: Checks for winning lines in a Class 3 Slot Game.
- **Payout Evaluation**: Calculates credits per line based on game for Class 3 Slot Game results.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/motosharpley/express-bingo-api.git
   ```

2. Navigate to the project directory:

   ```bash
   cd express-bingo-api
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the server:

   ```bash
   node app.js
   ```

2. Access the following endpoints:

   - `GET /`: Returns a welcome message.
   - `GET /ball-draw`: Simulates drawing all Bingo balls and returns the results.
   - `GET /bingo-card`: Generates a new Bingo card and returns it.
   - `GET /bingo-game`: Retrieves player information for the current Bingo game.
   - `GET /all-bingo-game`: Retrieves details of all Bingo games.
   - `GET /class-3`: Evaluates line wins and calculates credits per line.

3. The server runs on `http://localhost:3000` by default.

## Dependencies

- [Express](https://expressjs.com/): Web framework for Node.js.
- [CORS](https://www.npmjs.com/package/cors): Middleware for enabling Cross-Origin Resource Sharing.

## Folder Structure

- `app.js`: Main entry point of the application.
- `components/`: Contains modules for various Bingo game functionalities.

## License

This project is licensed under the MIT License.
