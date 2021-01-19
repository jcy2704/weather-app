export default function loaderAnimation() {
  const div = document.createElement('div');
  const span = document.createElement('span');

  div.className = 'spinner-grow text-primary m-5';
  div.style = 'width: 5rem; height: 5rem;';
  div.setAttribute('role', 'status');

  span.className = 'visually-hidden';
  span.textContent = 'Loading...';

  div.appendChild(span);

  return div;
}
