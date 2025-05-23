# Casino Game API Prototype

This project is a prototype for a Casino Game API built using Node.js and Express. It provides endpoints to simulate and interact with various casino games, including Bingo and Class 3 Slot games, and is designed to be extensible for additional game types in the future.

## Features

- **Bingo Ball Draw**: Simulates the drawing of Bingo balls.
- **Bingo Card Generation**: Generates Bingo cards for players.
- **Game Queue**: Manages multiple Bingo games and their players.
- **Pattern Evaluation**: Checks for winning patterns in a Bingo game.
- **Class 3 Slot Game**: Evaluates line wins and calculates credits per line for a Class 3 Slot Game.
- **Line Evaluation**: Checks for winning lines in a Class 3 Slot Game.
- **Payout Evaluation**: Calculates credits per line based on game results for Class 3 Slot Game.
- **Extensible Architecture**: Designed to support additional casino games and features as the project grows.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/motosharpley/express-casino-game-api.git
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

1. Start the dev server:

   ```bash
   npm run dev
   ```

2. Access the following endpoints:

   - `GET /`: Returns a welcome message.
   - `GET /ball-draw`: Simulates drawing all Bingo balls and returns the results.
   - `GET /bingo-card`: Generates a new Bingo card and returns it.
   - `GET /bingo-game`: Retrieves player information for the current Bingo game.
   - `GET /all-bingo-game`: Retrieves details of all Bingo games.
   - `GET /class-3`: Evaluates line wins and calculates credits per line for the Class 3 Slot Game.

3. The server runs on `http://localhost:3000` by default.

## Dependencies

- [Express](https://expressjs.com/): Web framework for Node.js.
- [CORS](https://www.npmjs.com/package/cors): Middleware for enabling Cross-Origin Resource Sharing.

## Folder Structure

- `app.js`: Main entry point of the application.
- `components/`: Contains modules for various casino game functionalities.

## License

This project is licensed under the MIT License.
