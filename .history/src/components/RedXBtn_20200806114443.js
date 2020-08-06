import React from 'react';

export default function RedXBtn() {
  return (
    <div>
      <button type="button" className="fill-current text-red-500">
        <svg
          className="btn-redXBtn"
          width="36"
          height="36"
          viewBox="0 0 36 36"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15 6C6.705 6 0 12.705 0 21C0 29.295 6.705 36 15 36C23.295 36 30 29.295 30 21C30 12.705 23.295 6 15 6ZM21.45 27.45C21.3112 27.5891 21.1464 27.6994 20.9649 27.7746C20.7835 27.8499 20.589 27.8887 20.3925 27.8887C20.196 27.8887 20.0015 27.8499 19.8201 27.7746C19.6386 27.6994 19.4738 27.5891 19.335 27.45L15 23.115L10.665 27.45C10.3845 27.7305 10.0041 27.888 9.6075 27.888C9.21086 27.888 8.83047 27.7305 8.55 27.45C8.26953 27.1695 8.11197 26.7891 8.11197 26.3925C8.11197 26.1961 8.15065 26.0016 8.22581 25.8202C8.30097 25.6387 8.41113 25.4739 8.55 25.335L12.885 21L8.55 16.665C8.26953 16.3845 8.11197 16.0041 8.11197 15.6075C8.11197 15.2109 8.26953 14.8305 8.55 14.55C8.83047 14.2695 9.21086 14.112 9.6075 14.112C10.0041 14.112 10.3845 14.2695 10.665 14.55L15 18.885L19.335 14.55C19.4739 14.4111 19.6387 14.301 19.8202 14.2258C20.0016 14.1507 20.1961 14.112 20.3925 14.112C20.5889 14.112 20.7834 14.1507 20.9648 14.2258C21.1463 14.301 21.3111 14.4111 21.45 14.55C21.5889 14.6889 21.699 14.8537 21.7742 15.0352C21.8493 15.2166 21.888 15.4111 21.888 15.6075C21.888 15.8039 21.8493 15.9984 21.7742 16.1798C21.699 16.3613 21.5889 16.5261 21.45 16.665L17.115 21L21.45 25.335C22.02 25.905 22.02 26.865 21.45 27.45Z" />
        </svg>
      </button>
    </div>
  );
}
