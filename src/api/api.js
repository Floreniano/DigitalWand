export function sendRequest(method, url, body = null) {
  return fetch(url, {
    method,
    body: body === null ? null : JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
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
}
