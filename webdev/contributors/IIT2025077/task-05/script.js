/*
  TASK: Choose ONE browser API feature to implement

  Options:
  1. Copy-to-Clipboard        → Clipboard API
  2. Character Counter        → Input / Keyboard events
  3. Offline Detection        → Navigator + online/offline events
  4. Network Status Indicator → Navigator connection API (if supported)

  Rules:
  - Vanilla JS only
  - Built-in Browser APIs only
  - No libraries, no frameworks
*/

// TODO 1: Decide which feature you are implementing

// TODO 2: Read the official MDN documentation for the chosen API

// TODO 3: Select required DOM elements

// TODO 4: Attach required event listeners
//         (click, input, online/offline, etc.)

// TODO 5: Use the Browser API to get real data/state

// TODO 6: Update the UI dynamically based on the API result

// TODO 7: Handle edge cases
//         (permissions denied, unsupported API, empty input, etc.)
const insert=document.querySelector('#output')
let count=0;
document.querySelector('input').addEventListener('keydown',(e)=>{
    if(e.key.length=='1')count++;
    else if(e.key==='Backspace'&&count>0)count--;
    insert.innerHTML=`<p>${count}</p>`
})