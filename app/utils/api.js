// @flow

const buildHeaders = (token: ?string) => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  return headers;
}

const request = (token: ?string, path: string, method: string, body: ?string) => (
  fetch(`https://timecrowd.net/api/v1/${path}`, {
    method: method,
    headers: buildHeaders(token),
    body: body ? JSON.stringify(body) : null,
  })
  .then(response => response.json())
);

export default {
  request,
};
