document.addEventListener('DOMContentLoaded', () => { 
    let count = 0; 
    const countDisplay = document.getElementById('count'); 
    const decreaseButton = document.getElementById('decrease'); 
    const resetButton = document.getElementById('reset'); 
    const increaseButton = document.getElementById('increase'); 
    
    const updateDisplay = () => { 
        countDisplay.textContent = count; 
    };
    
    const handleClick = (button) => { 
        button.classList.add('clicked'); 
        setTimeout(() => { 
            button.classList.remove('clicked'); 
        }, 500);   
    };
    
    decreaseButton.addEventListener('click', () => { 
        count--; 
        updateDisplay();
        handleClick(decreaseButton);
        console.log('Decrease button clicked');
    }); 
    
    resetButton.addEventListener('click', () => { 
        count = 0; 
        updateDisplay();
        handleClick(resetButton);
        console.log('Reset button clicked'); 
    }); 
    
    increaseButton.addEventListener('click', () => { 
        count++; 
        updateDisplay();
        handleClick(increaseButton);
        console.log('Increase button clicked'); 
    }); 
    
    updateDisplay(); 
});