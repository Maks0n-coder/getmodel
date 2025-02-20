import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

interface Param {
  id: number;
  name: string;
  type?: "string",
}

interface ParamValue {
  paramId: number;
  value: string | undefined;
}

interface Color {
  paramId: number;
  value: string | undefined;
}

interface Model {
  paramValues: ParamValue[];
  colors: Color[];
}

export interface Props {
  params: Param[];
  model: Model;
}

export interface ResultItem {
  modelParamValues: ParamValue[];
  paramValues: ParamValue[];
  colors: Color[];
  [key: string]: unknown;
}


const params: Param[] = [
  {
    id: 1,
    name: "Назначение",
  },
  {
    id: 2,
    name: "Длина",
  },
];

const model: Model = {
  paramValues: [
    {
      paramId: 1,
      value: "повседневное",
    },
    {
      paramId: 2,
      value: "макси",
    },
  ],
  colors: []
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App params={params} model={model} />
  </StrictMode>,
)
