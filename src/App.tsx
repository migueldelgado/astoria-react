import React from 'react';
import './App.css';
import Sidebar from './components/common/sidebar/Sidebar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { IMenuItem, MenuType } from './components/menu/Menu';
import AstoriaLogo from './assets/astoria_logo.png';
import Topbar from './components/common/topbar/Topbar';
import styled from 'styled-components';
import Card from './components/common/Card';
import Footer from './components/common/footer/Footer';
import FormSteps from './components/FormSteps';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import TreasuryForm from './pages/treasury/TreasuryForm';
import useFetch from './hooks/useFetch';

library.add(far, fas, fab);

const Wrapper = styled.div`
  min-height: 100vh;
  padding-left: 16rem;
  display: flex;
  flex-direction: column;
`;

const Body = styled.div`
  padding: 0 1rem;
  flex: 1;
`;

function App() {
  const message = 'This was done by Miguel Delgado';
  const menuItems: IMenuItem[] = [
    {
      type: MenuType.button,
      label: 'Home',
      url: '/',
      icon: ['fas', 'house'],
    },
    {
      type: MenuType.sub,
      label: 'Productos',
      url: '/productos',
      icon: ['fab', 'product-hunt'],
      childItems: [
        { label: 'Insumos', url: '/insumos' },
        { label: 'Recetas', url: '/recetas' },
      ],
    },
    {
      type: MenuType.sub,
      label: 'Inventarios',
      url: '/inventarios',
      icon: ['fas', 'warehouse'],
      childItems: [
        { label: 'Inventarios', url: '/inventarios' },
        { label: 'Compras', url: '/compras' },
        { label: 'Salidas', url: '/salidas' },
        { label: 'Procesos', url: '/procesos' },
      ],
    },
    {
      type: MenuType.sub,
      label: 'Auditorias',
      url: '/sales',
      icon: ['fas', 'head-side-mask'],
      childItems: [
        { label: 'Auditoria', url: '/auditoria' },
        { label: 'Resumen', url: '/resumen' },
      ],
    },
    {
      type: MenuType.sub,
      label: 'Finanzas',
      url: '/sales',
      icon: ['fas', 'coins'],
      childItems: [
        { label: 'Factura Proveedor', url: '/factura-proveedor' },
        { label: 'Tesoreria', url: '/tesoreria' },
      ],
    },
    {
      type: MenuType.sub,
      label: 'Administracion',
      url: '/sales',
      icon: ['fas', 'folder-open'],
      childItems: [
        { label: 'Ficha Proveedores', url: '/ficha-proveedores' },
        { label: 'Ficha Locales', url: '/ficha-locales' },
        { label: 'Ficha Colaboradores', url: '/ficha-colaboradores' },
        { label: 'Roles', url: '/roles' },
      ],
    },
    {
      type: MenuType.button,
      label: 'Ingreso Venta Diaria',
      url: '/venta-diaria',
      icon: ['fas', 'file-invoice-dollar'],
    },
  ];

  const test = useFetch();

  return (
    <div className="App">
      <Sidebar menuItems={menuItems} logo={AstoriaLogo} />
      <Wrapper>
        <Topbar>TOPBAR</Topbar>
        <Body>
          <Card>
            {/* <Card.Header>Registration form</Card.Header> */}
            <Card.Body>
              <TreasuryForm />
            </Card.Body>
          </Card>
        </Body>
        <Footer message={message} />
      </Wrapper>
    </div>
  );
}

export default App;
