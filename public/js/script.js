document.getElementById('fetchBtn').addEventListener('click', async () => {
  const res = await fetch('/api/message');
  const data = await res.json();
  document.getElementById('response').innerText = data.message;
});

async function sendEcho(text) {
  const res = await fetch('/api/echo', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text })
  });
  const data = await res.json();
  console.log('Echoed:', data.echoed);
}

document.getElementById('sendBtn').addEventListener('click', async () => {
  const input = document.getElementById('textInput').value;
  const res = await fetch('/api/echo', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text: input })
  });
  const data = await res.json();
  document.getElementById('echoResult').innerText = `Response: ${data.echoed}`;
});