import theme from '../../../assets/config/theme.json'

export default () => {
  const body = document.body.innerHTML;
  document.body.innerHTML = `
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" style="display:none">
        <symbol id="tlbx-icon-code" viewbox="0 0 114 102">
          <title>code</title>
          <g fill="currentColor" fill-rule="evenodd">
            <path d="M24.884 23L0 51l24.884 28L32 72.815 12.612 51 32 29.186zM89.116 23L82 29.185 101.388 51 82 72.815 89.116 79 114 51zM30 98.032L75.528 0 84 3.968 38.472 102z"
            />
          </g>
        </symbol>
        <symbol id="tlbx-icon-search" viewbox="0 0 97 97">
          <title>search</title>
          <path d="M96.61 90.8L72.075 66.267c12.785-15.891 11.812-39.262-2.93-54.008C61.493 4.609 51.325.395 40.504.395c-10.816 0-20.988 4.21-28.637 11.863C4.215 19.91 0 30.082 0 40.898 0 51.716 4.21 61.888 11.863 69.54c7.648 7.648 17.82 11.863 28.637 11.863 9.344 0 18.199-3.149 25.371-8.934L90.402 97l6.208-6.2zM40.505 72.63c-8.473 0-16.441-3.305-22.434-9.293-5.993-5.993-9.293-13.961-9.293-22.438 0-8.477 3.3-16.441 9.293-22.438 5.992-5.993 13.96-9.293 22.434-9.293 8.476 0 16.445 3.3 22.438 9.293 12.367 12.37 12.367 32.5 0 44.875-5.993 5.992-13.961 9.293-22.438 9.293z"
            fill="currentColor" fill-rule="evenodd" />
        </symbol>
        <symbol id="tlbx-icon-menu" viewbox="0 0 100 76">
          <title>menu</title>
          <g fill="currentColor">
            <rect x="0" y="0" width="100" height="10"></rect>
            <rect x="0" y="33" width="100" height="10"></rect>
            <rect x="0" y="66" width="100" height="10"></rect>
          </g>
        </symbol>
        ${
          theme && theme.brand
            ? theme.brand
            : `
        <symbol id="icon-toolbox" viewbox="0 0 117 98">
          <title>toolbox</title>
          <g fill="currentColor" fill-rule="evenodd">
            <path d="M101.983 21h-6.325c.045 0 .256.178.297.256.379.666.75 1.474.75 2.25v3.984c0 2.497-2.36 4.245-4.854 4.245H80.67c-2.5 0-4.264-1.748-4.264-4.245v-6.485h-37.01v6.485c0 2.497-1.787 4.245-4.292 4.245h-11.17c-2.5 0-4.835-1.748-4.835-4.245v-3.984c0-.772.347-1.575.722-2.237.046-.077.247-.264.297-.264h-4.982L0 37.55V52h50.14v-3.222c0-2.09 1.847-3.93 3.94-3.93h7.797c2.098 0 3.78 1.84 3.78 3.93V52H117V37.55L101.983 21z"
            />
            <path d="M24.244 29h11.1c.659 0 .709 0 .709-.675V8.228c0-1.115 1.376-2.188 2.47-2.188h38.931c1.1 0 2.498 1.073 2.498 2.188l-.005 13.191v6.906c0 .675.028.675.677.675h11.109c.645 0 1.267 0 1.267-.675v-4.038c0-.204-.086-.453-.19-.63-.205-.383-.641-.698-1.077-.698h-4.678c-.817 0-2.357 0-2.357-1.896l-.005-17.354C84.693 1.744 83.1 0 81.183 0L34.795.005c-1.926 0-3.488 1.743-3.488 3.709v17.349c0 .12.059.689 0 .689-.3 1.207-1.563 1.207-2.371 1.207h-4.692c-.445 0-.862.315-1.071.699-.1.175-.173.425-.173.629v4.038c0 .675.59.675 1.244.675zM65.526 59.381v3.344c0 2.109-1.672 4.08-3.757 4.08h-7.751c-2.081 0-3.916-1.971-3.916-4.075v-6.725L5 56v36.933C5 95.533 6.731 98 9.303 98h99c2.575 0 4.665-2.288 4.665-4.888l.032-3.298V56H65.527v3.381z"
            />
            <path d="M61.994 54.998v-6.65c0-.25.057-.348-.192-.348h-7.457c-.244 0-.345.098-.345.348v13.188c0 .254.096.464.345.464h7.457c.25 0 .192-.214.192-.464v-6.538z"
            />
          </g>
        </symbol>
        `
        }
      </svg>
    </div>
    ${body}
  `;
};
