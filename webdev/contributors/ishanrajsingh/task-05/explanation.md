# Copy to Clipboard - Browser API Implementation

## Overview
This feature uses the **Clipboard API** to copy text from a textarea to the user's system clipboard.

## Browser API Used
- **`navigator.clipboard.writeText()`** - Modern async clipboard API

## How It Works

### 1. User Input
- User types or pastes text into the textarea
- Button click triggers the copy operation

### 2. Clipboard API Call
```javascript
await navigator.clipboard.writeText(text);

## MDN References
Clipboard API

writeText() method