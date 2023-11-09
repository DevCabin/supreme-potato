function boxTops(){
    console.log('hello there! Let us check if we are on the same page...');
    if (window.location.href.indexOf("f75540b7") != -1) {
        console.log('yes, we are! Welcome');
    } else {
        console.log('Nope. Carry on.');
    };
    console.log('check complete.')

}
window.onload = boxTops();