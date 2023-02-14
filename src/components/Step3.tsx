import styled from 'styled-components';

interface IStep3Props {
  onClickNext?: () => void;
  onClickBack?: (params: any) => void;
  onChange?: (x:string, y:string) => null;
  formFields?: any;
}

const Wrapper = styled.div`
  border: 1px solid black;
`

const Step3: React.FC<IStep3Props> = ({ onChange, formFields }) => {

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event.target.value, event.target.id);
  }

  return (
    <Wrapper>
      <div>
        <label htmlFor="items">Items</label>
        <input id="items" type="text" value={formFields.items} onChange={onChangeInput} />
      </div>
      <div>
        <label htmlFor="total">Total</label>
        <input id="total" type="text" value={formFields.total} onChange={onChangeInput} />
      </div>
    </Wrapper>
  )
}

export default Step3;