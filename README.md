# Hekto E-commerce
[![Ask DeepWiki](https://devin.ai/assets/askdeepwiki.png)](https://deepwiki.com/Laur017/hekto)

Hekto is a fully-featured e-commerce frontend application built with Vue.js 3. It showcases a modern, component-based architecture for an online store, complete with product listings, advanced filtering, a shopping cart, and detailed product views. The project uses Vuex for state management and Vue Router for seamless navigation.

## Key Features

*   **Dynamic Homepage**: Displays multiple sections including a hero banner, featured products, latest arrivals, trending items, and top categories.
*   **Product Listings**: Offers both grid and list views for browsing products, with pagination.
*   **Advanced Filtering & Sorting**: Users can filter products by brand, category, price range, discount, and rating. Products can also be sorted by price (high-to-low and low-to-high).
*   **Product Details Page**: Provides comprehensive information for each product, with an image gallery, description tabs, and a list of related products.
*   **Shopping Cart**: A functional cart where users can add items, adjust quantities, view the total cost, and clear the cart.
*   **Component-Based Architecture**: Built with Vue 3's composition API for clean and reusable components.
*   **State Management**: Centralized state is managed using Vuex, with modules for products, filters, and the cart.
*   **Responsive Design**: Styled with Sass for a consistent user experience across different devices.

## Tech Stack

*   **Framework**: [Vue.js 3](https://vuejs.org/)
*   **State Management**: [Vuex](https://vuex.vuejs.org/)
*   **Routing**: [Vue Router](https://router.vuejs.org/)
*   **Styling**: [Sass/SCSS](https://sass-lang.com/)
*   **Build Tool**: [Vue CLI](https://cli.vuejs.org/)

## Project Structure

The repository is organized into a modular structure to maintain a clean and scalable codebase:

```
/src
├── assets/          # Static assets like icons and images
├── components/      # Reusable Vue components (UI, Header, Footer, Products, etc.)
├── layout/          # Main layout components (TheHeader, TheFooter)
├── pages/           # Page-level components mapped to routes
├── sass/            # SCSS files organized by component and layout
├── store/           # Vuex store modules for state management
├── App.vue          # Root Vue component
├── main.js          # Main application entry point
├── router.js        # Route definitions
└── product-data.json # Static product and filter data
```

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You will need [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/laur017/hekto.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd hekto
    ```

3.  **Install NPM packages:**
    ```bash
    npm install
    ```

### Running the Application

**Compiles and hot-reloads for development:**
```bash
npm run serve
```
Once the server is running, you can access the application at `http://localhost:8080`.

**Compiles and minifies for production:**
```bash
npm run build
```

**Lints and fixes files:**
```bash
npm run lint
