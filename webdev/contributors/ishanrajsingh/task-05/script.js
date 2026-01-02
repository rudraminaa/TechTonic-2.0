// TODO 1: Get DOM elements
const textInput = document.getElementById('textInput');
const copyBtn = document.getElementById('copyBtn');
const feedback = document.getElementById('feedback');

// TODO 2: Function to show feedback message
function showFeedback(message, type) {
    // Remove existing classes
    feedback.classList.remove('hidden', 'success', 'error');
    
    // Set message and type
    feedback.textContent = message;
    feedback.classList.add(type);
    
    // Auto-hide after 3 seconds
    setTimeout(() => {
        feedback.classList.add('hidden');
    }, 3000);
}

// TODO 3: Function to copy text to clipboard
async function copyToClipboard() {
    // Get text from textarea
    const text = textInput.value.trim();
    
    // Check if text is empty
    if (!text) {
        showFeedback('⚠️ Please enter some text to copy!', 'error');
        return;
    }
    
    try {
        // TODO 4: Use Clipboard API to write text
        await navigator.clipboard.writeText(text);
        
        // Show success message
        showFeedback('✅ Text copied to clipboard successfully!', 'success');
        
        console.log('Copied text:', text);
        
    } catch (error) {
        // TODO 5: Handle errors gracefully
        console.error('Failed to copy:', error);
        showFeedback('❌ Failed to copy text. Please try again.', 'error');
    }
}

// TODO 6: Add click event listener to copy button
copyBtn.addEventListener('click', copyToClipboard);

// TODO 7: Optional - Enable copy on Enter key (Ctrl+Enter)
textInput.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.key === 'Enter') {
        copyToClipboard();
    }
});

// TODO 8: Check if Clipboard API is supported
if (!navigator.clipboard) {
    showFeedback('⚠️ Clipboard API not supported in this browser', 'error');
    copyBtn.disabled = true;
}

console.log('Clipboard API available:', !!navigator.clipboard);
