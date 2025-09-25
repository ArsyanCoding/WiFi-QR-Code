const img = document.querySelector('img');
const ssidInput = document.querySelector('.ssid');
const ssidDisplay = document.querySelector('.ssid-display');
const password = document.querySelector('.password');
const button = document.querySelector('button');

function update() {
  const wifi = `WIFI:T:WPA;S:${ssidInput.value};P:${password.value};;`;
  img.src = `https://api.qrserver.com/v1/create-qr-code/?size=164x164&data=${wifi}`;
  
  // Update the text in the printable card with the current SSID value
  ssidDisplay.textContent = ssidInput.value || '[Network Name]';
}

// Initial update on load
update();

ssidInput.addEventListener(
  'keyup',
  update,
);

password.addEventListener(
  'keyup',
  update,
);

button.addEventListener(
  'click',
  () => {
    window.print();
  },
);
