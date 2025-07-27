// Dynamic touch/mouse detection on first interaction
let inputHandlersSetup = false;
let detectedInputType = null;

function setupDynamicInputHandlers() {
    // Listen for first touch event
    document.addEventListener('touchstart', function handleFirstTouch(e) {
        if (!inputHandlersSetup) {
            console.log('📱 FIRST TOUCH DETECTED - Setting up mobile touch handlers!');
            detectedInputType = 'touch';
            inputHandlersSetup = true;
            
            // Remove this listener since we only need it once
            document.removeEventListener('touchstart', handleFirstTouch);
            
            // Setup mobile touch handlers
            setupMobileTouchHandling();
        }
    }, { passive: true });
    
    // Listen for first mouse event (only if touch hasn't been detected)
    document.addEventListener('mousedown', function handleFirstMouse(e) {
        if (!inputHandlersSetup) {
            console.log('🖥️ FIRST MOUSE DETECTED - Setting up desktop mouse handlers!');
            detectedInputType = 'mouse';
            inputHandlersSetup = true;
            
            // Remove this listener since we only need it once
            document.removeEventListener('mousedown', handleFirstMouse);
        }
    }, { passive: true });
}