# js-widget-collection

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Table of Contents

- [js-widget-collection](#js-widget-collection)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Features](#features)
  - [Live Demo](#live-demo)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Adding New Widgets](#adding-new-widgets)
    - [Code Structure](#code-structure)
  - [Contributing](#contributing)
  - [License](#license)
  - [Contact](#contact)

## Overview

**js-widget-collection** is a collection of interactive JavaScript widgets designed to demonstrate various animation techniques using CreateJS. This project serves as a playground for experimenting with animated graphics and provides reusable components for web developers.

## Features

- **Loading Circles**: Smooth animated circles that display loading states.
- **Circular Progress Circles**: Dynamic circular progress bars with customizable parameters.
- **3D Circles**: Engaging 3D animations that create depth in web interfaces.
- **Responsive Design**: Optimized for various screen sizes ensuring a seamless experience across devices.

## Live Demo

[View the Live Demo](http://the-live-demo-link.com)

## Installation

To get started with Scratchpad locally, follow these steps:

1. **Clone the repository**

   ```bash
   git clone https://github.com/mwmuni/js-widget-collection.git
   cd js-widget-collection
   ```

2. **Install dependencies**

   Ensure you have [Node.js](https://nodejs.org/) installed.

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm start
   ```

   This will start a development server at `http://localhost:8080`. Open this URL in your browser to view the project.

4. **Build for production**

   To build the project for production, run:

   ```bash
   npm run build
   ```

   The optimized files will be output to the `dist/` directory.

## Usage

Once the development server is running, navigate to `http://localhost:8080` to explore the different JavaScript widgets. Each widget is displayed within a card and includes an optional "Show Code" button to view the source code in a modal.

### Adding New Widgets

To add new widgets:

1. Create a new JavaScript file in the `src/` directory.
2. Implement your widget using CreateJS or any other preferred library.
3. Update the `index.html` file to include a new card for your widget, referencing the new JavaScript file and corresponding canvas element.

### Code Structure

- **src/**: Contains source JavaScript and CSS files.
- **dist/**: Contains the built and bundled files ready for production.
- **public/**: Public assets and additional scripts.
- **package.json**: Project dependencies and scripts.

## Contributing

Contributions are welcome! If you'd like to contribute to Scratchpad, please follow these steps:

1. **Fork the repository**

2. **Create a new branch**

   ```bash
   git checkout -b feature/YourFeatureName
   ```

3. **Commit your changes**

   ```bash
   git commit -m "Add some feature"
   ```

4. **Push to the branch**

   ```bash
   git push origin feature/YourFeatureName
   ```

5. **Open a Pull Request**

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or feedback, please contact [sieykic@gmail.com](mailto:sieykic@gmail.com).
