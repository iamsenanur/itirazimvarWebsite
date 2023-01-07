const form = document.getElementById('hoppa');
form.addEventListener('gonder', (e) => {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const date = document.getElementById('date').value;
  const complaintDiv = document.createElement('div');
  complaintDiv.innerHTML = `<h3>${title}</h3><p>${date}</p>`;

  const parentDiv = document.getElementById('hopveriler');
  parentDiv.appendChild(complaintDiv);
});
  
