
import io from 'socket.io-client';

export const Socket = io(`http://${window.location.hostname}:3000`);