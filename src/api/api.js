export async function request(url, method = 'GET', body = null) {
  try {
    const response = await fetch(`http://localhost:3000${url}`, {
      method,
      body: body === null ? null : JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    /* eslint-disable no-console */
    return console.warn('ERROR ', error);
  }
}
