import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('G-SDSLK6RG2Z'); // Replace with your GA Tracking ID
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};