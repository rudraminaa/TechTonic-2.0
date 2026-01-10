# Dark Mode Toggle Implementation

## How It Works

### 1. CSS Variables
- Used CSS custom properties (variables) for all colors
- Defined two sets: default (light) and `[data-theme="dark"]`
- Variables automatically update when the `data-theme` attribute changes

### 2. localStorage
- Saves user preference as `'theme': 'dark'` or `'theme': 'light'`
- Persists across page reloads and browser sessions
- Read on page load to restore preference

### 3. JavaScript Flow
1. **initTheme()**: Runs on page load, reads localStorage, applies saved theme
2. **toggleTheme()**: Switches between light/dark when button clicked
3. **applyTheme()**: Updates DOM with the correct theme
4. **saveTheme()**: Writes preference to localStorage

### 4. Key Concepts
- **State Management**: Current theme stored in `data-theme` attribute
- **Persistence**: localStorage API for saving across sessions
- **Reactivity**: CSS variables enable instant theme changes
- **No Frameworks**: Pure vanilla JavaScript

## Testing
1. Toggle theme → Check UI changes
2. Refresh page → Theme should persist
3. Open DevTools → Check localStorage
4. No console errors

## Learnings
- Managing state without libraries
- CSS variable patterns for theming
- Browser storage APIs
- Event-driven architecture
