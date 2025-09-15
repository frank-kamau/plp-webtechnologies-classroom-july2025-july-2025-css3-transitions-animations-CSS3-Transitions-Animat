/* script.js
- Demonstrates: (1) JS functions with params & returns, (2) scope (global vs local),
- (3) triggering CSS animations via class toggles, (4) creating DOM elements (modal) and returning them.
- All UI initialization is done on DOMContentLoaded to ensure elements exist.
*/


// ---------- Globals (demonstrate global scope) ----------
let GLOBAL_COUNT = 0; // global variable to show scope differences


// Utility selectors
const qs = (s, ctx = document) => ctx.querySelector(s);
const qsa = (s, ctx = document) => Array.from(ctx.querySelectorAll(s));

// ---------- Part 2: JS Functions (scope, parameters, return values) ----------


/**
* calculateArea(width, height)
* - Parameters: width (Number-like), height (Number-like)
* - Returns: Number product, or null if invalid input
* - Demonstrates parameter usage and returning a value.
*/
function calculateArea(width, height) {
const w = Number(width);
const h = Number(height);
// local variable (demonstrates local scope)
const result = Number.isFinite(w) && Number.isFinite(h) ? w * h : null;
return result;
}

/**
* incrementGlobal(byAmount)
* - Demonstrates modifying a global variable.
* - Returns the new global value.
*/
function incrementGlobal(byAmount = 1) {
const n = Number(byAmount) || 1; // local var
GLOBAL_COUNT += n; // modify global
return GLOBAL_COUNT;
}


/**
* localScopeDemo()
* Shows a local variable that is not visible globally.
*/
function localScopeDemo() {
const localMessage = 'This is a local variable — not accessible outside.';
// display and return the message
return localMessage;
}

// ---------- Part 3: Combining CSS & JS (animation triggers)


/**
* togglePulse(selector)
* - Adds / removes the CSS class that triggers @keyframes pulse
* - Parameter: selector (String) CSS selector or Element
* - Returns: boolean (true if pulse is now active)
*/
function togglePulse(selector) {
const el = typeof selector === 'string' ? qs(selector) : selector;
if (!el) return false;
el.classList.toggle('pulse-on');
return el.classList.contains('pulse-on');
}


/**
* flipCard(selector)
* - Toggles the flip by adding/removing class 'flipped'
* - Parameter: selector (string or Element)
* - Return: none
*/

function flipCard(selector) {
const el = typeof selector === 'string' ? qs(selector) : selector;
if (!el) return;
el.classList.toggle('flipped');
}


/**
* createModal(content)
* - Creates DOM for a modal and returns the modal DOM node (does not attach it)
* - Parameter: content (String or Node)
* - Return: modal element (backdrop)
*/
function createModal(content) {
const backdrop = document.createElement('div');
backdrop.className = 'modal-backdrop';


const modal = document.createElement('div');
modal.className = 'modal';


cons
}