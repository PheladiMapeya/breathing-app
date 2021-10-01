
function breathe() {

    document.getElementById('breathText')!.innerText = 'Breathe In!';
    document.getElementById('circle')!.className = 'circle shrink';
    
    setTimeout(() => {
        document.getElementById('breathText')!.innerText = 'Breathe Out!';
        document.getElementById('circle')!.className = 'circle grow';
    }, 5000);   
}

setInterval((breathe),10000);

breathe();

