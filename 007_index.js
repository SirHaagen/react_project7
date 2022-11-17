
//!ESTO ES A MODO DE REPASO, SE DEBE INTEGRAR A react-course y ELIMINAR LOS NÚMEROS PARA QUE FUNCIONE

import React from 'react';
import reactDOM from 'react-dom/client';

import { Button } from './Button';

const root = reactDOM.createRoot(document.getElementById('root'));


root.render(<>
  <Button text="Get API data"/>
</>);