
# BlockchainJS

A simple blockchain implementation in JavaScript using Node.js.

## Overview

This project is a basic blockchain implementation using JavaScript and Node.js. It includes functionality for mining blocks, broadcasting the blockchain to peers, and syncing chains among different nodes.

## Prerequisites

Make sure you have the following installed:

- [Postman](https://www.postman.com/downloads/)
- [Redis](https://github.com/microsoftarchive/redis/releases/tag/win-3.0.504)

## Third-Party Apps

- Postman: Used for mining blocks by making POST requests to `http://localhost:3000/api/mine`.
- Redis: Utilized as a publisher/subscriber model for broadcasting the blockchain to connected peers.

## Node.js Packages

- `body-parser`: Parses incoming request bodies in a middleware.
- `cross-env`: Enables environment variable setting across different platforms.
- `express`: Web framework for Node.js.
- `hex-to-binary`: Converts hexadecimal strings to binary strings.
- `nodemon`: Monitors changes in the source code and restarts the server.
- `redis`: Node.js Redis client for publisher/subscriber functionality.
- `request`: Simplified HTTP request client.

## How to Run

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the Redis server:
   - Locate `redis-server.exe` in your Redis directory.
   - Double-click on `redis-server.exe` to start the Redis server.

3. Run the server:
   ```bash
   npm run dev
   ```

4. Run peers in different consoles:
   ```bash
   npm run dev-peer
   ```

## Mining a Block

- Use Postman to mine a block by making a POST request to `http://localhost:3000/api/mine`. The mined block will be displayed on all connected peers.

## API Endpoints

- `GET /api/blocks`: Retrieves the current blockchain.
- `POST /api/mine`: Mines a new block and broadcasts it to peers.

## Code Structure

### `publishsubscribe.js`

Handles the publisher/subscriber functionality with Redis for broadcasting the blockchain to connected peers.

### `index.js`

Main file containing the server setup, routes, and synchronization logic.

### `crypto-hash.js`

Generates a SHA-256 hash for given inputs.

### `config.js`

Contains configuration constants like initial difficulty, mine rate, and genesis data.

### `blockchain.js`

Defines the Blockchain class with methods for adding blocks, validating chains, and replacing chains.

### `block.js`

Implements the Block class with static methods for creating genesis blocks and mining new blocks.

### `avgtime.js`

A utility file not used in the project, created to check timing and difficulty changes between block creations. Located in the project folder for reference but not integrated into the main project.

---
