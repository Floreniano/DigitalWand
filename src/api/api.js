export function sendRequest(method, url, body = null) {
  const headers = {
    'Content-Type': 'application/json',
  };
  try {
    return fetch(url, {
      method,
      body: body === null ? null : JSON.stringify(body),
      headers,
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }
      return response.json().then((error) => {
        const e = new Error('Ошибка');
        e.data = error;
        throw e;
      });
    });
  } catch (e) {
    return console.log(e);
  }
}
