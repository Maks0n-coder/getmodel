import { FormEvent, useState } from "react";
import { Props, ResultItem } from "./main";

function App({ params, model }: Props) {

  const [modelParamValues, setModelParamValues] = useState(model.paramValues)
  const [newParams, setNewParams] = useState(params)
  const [count, setCount] = useState(3)
  const [result, setResult] = useState<ResultItem[]>([]);

  const handleChange = (paramId: number, value: string) => {
    const newModelParamValues = modelParamValues.map((val) =>
      val.paramId === paramId ? { ...val, value } : val
    );
    setModelParamValues(newModelParamValues);
  };

  const getValue = (paramsId: number) => {
    return modelParamValues.find((val) => paramsId === val.paramId)?.value || ''
  }

  const addParam = () => {
    setCount(count + 1)
    const newParam = {
      id: Number(`${count}`),
      name: `Цвет${count}`
    }

    const addModelParamValues = {
      paramId: Number(`${count}`),
      value: `Розовый${count}`
    }
    setModelParamValues([...modelParamValues, addModelParamValues]);
    setNewParams([...newParams, newParam])
  }

  const getModel = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = { ...model, modelParamValues };
    setResult(prevResult => {
      return [...prevResult, res];
    });
  }

  return (
    <div className="container">
      <form className="form mb-3" onSubmit={getModel}>
        {newParams.map((param) => (
          <div key={param.id}>
            <label className="form-label" >
              {param.name}
              <input className="form-control" type="text" onChange={(e) => handleChange(param.id, e.target.value)} value={getValue(param.id)} />
            </label>
          </div>
        ))}
        <button className="btn btn-primary">Результат</button>
      </form>
      <button className="btn btn-primary" onClick={addParam}>Добавить</button>
      <ul>
        {result.map((item, index) => (
          <li key={index}>
            <span style={{ fontWeight: 'bold' }}>------------------------------------------------</span>
            <pre className="result">{JSON.stringify(item, null, 2)}</pre>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
