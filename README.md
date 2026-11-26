# PokéDex

 A simple Pokémon catalogue, built with [React](https://reactjs.org/), [Material-UI](https://material-ui.com/) and [PokéAPI](https://pokeapi.co/).

## Links

 Watch it in action [here](https://pokedex-react-mui.netlify.app/)

## Features
- View basic details of each Pokémon
- Filter Pokémon based on Region and Type
- Sort Pokémon by ID/Name
- Search Pokémon by its Name/ID
- Dark mode toggle
- Scroll to top
- Lazy loading of images
- Responsive design

## Snapshots

Demo gif

![demo-gif](./public/screenshots/pokedex-demo.gif)

## Built With

- React
- Material-UI
- PokéAPI

## Run locally

Requires Node.js 22 LTS and npm. No API key or backend server is needed.

```sh
npm ci
npm start
```

Open http://localhost:3000/ in your browser. The development server binds to
127.0.0.1:3000, configured in `.env.development`. Stop it with Ctrl+C.

An internet connection is required to load Pokemon data and images from PokeAPI.
Run `npm run build` to create a production build.

The start/build scripts enable the legacy OpenSSL provider required by this
project's Webpack 4 toolchain on modern Node.js.
## To-do
- Include some more Pokémon data - strengths, weaknesses, moves
- Complex evolution chains (Eevee and the likes)
- Add favorites
- Offline mode
- Router for Pokemon details

## Credits

- [Scroll to top](https://juliapottinger.com/react-gatsby-scroll-to-top/)
- [Beautiful icons of Pokemon types](https://github.com/duiker101/pokemon-type-svg-icons)

##

Contributions, issues and feature requests are always welcome!
Star the repo if you like this project :)

