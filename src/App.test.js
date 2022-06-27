import { render, screen } from '@testing-library/react';
import App from './Pages/App';

//Pruebas de integracion

test('Debe mostrar el header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Agenda de contactos/i);
  expect(headerElement).toBeInTheDocument();
});

test('Debe mostrar el boton para añadir usuarios', () => {
  render(<App />);
  const addUserButtonElement = screen.getByText(/Añadir/i);
  expect(addUserButtonElement).toBeInTheDocument();
});
