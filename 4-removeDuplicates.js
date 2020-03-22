removeDups = (string) => {
    return string = string.split('').filter((v,i) => string.indexOf(v) === i).join('');
    
}

console.log(removeDups('google'));