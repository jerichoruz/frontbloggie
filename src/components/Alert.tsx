import { smallBox } from '../common';

const Alert = (title, content, type) => {
  const icon = type === 'error' ? 'fa-warning' : 'fa-check';
  const color = type === 'error' ? '#d32f2f' : '#0277bd';
  smallBox({
    title,
    content,
    color,
    icon: `fa ${icon}`,
    timeout: 8000,
  });
};

export default Alert;
