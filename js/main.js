let btnDecode= document.getElementById('btn-decode');


const decodeString = (string) => {
    // console.log(btoa((string.replace(/\s/g, "").toUpperCase())));
    return btoa((string.replace(/\s/g, "").replace(/[\u0250-\ue007]/g, '').toUpperCase()));
}

btnDecode.addEventListener('click', (event)=> {
    // event.preventDefault();
    let decodeInput = document.getElementById("decode-input");
    let decodedString = decodeString(decodeInput.value);
    let resaultInput = document.getElementById('resault');
    resaultInput.innerHTML = decodedString;
})

// example thumbprint and its encoding in ascii
// "MjY3MzQ3Qjk4MDlERTA3OEREM0EzNzlFMDg1RkIxNDExQTBDNjc0NA=="
// ‎26 73 47 b9 80 9d e0 78 dd 3a 37 9e 08 5f b1 41 1a 0c 67 44