# Frontend

## Structure

- `assets/` : Static files like images, fonts, and icons.
- `components/` : Reusable UI pieces that can be used anywhere.
- `features/` : Domain specific pieces.
- `pages/` : Files the router points to.
- `styles/` : CSS files, fonts, and themes.
- `utils/` : Small functions that do a single task.

## Set up

```bash
cd frontend
npm install
npx flowbite-react@latest init
npm run build

# For development
npm run dev

# For production
npm run preview
```