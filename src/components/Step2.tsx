import styled from 'styled-components';

interface IStep2Props {
  onClickNext?: () => void;
  onClickBack?: (params: any) => void;
  onChange?: (x:string, y:string) => null;
  formFields?: any;
}

const Wrapper = styled.div`
  border: 1px solid black;
`

const Step2: React.FC<IStep2Props> = ({ onChange, formFields }) => {

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event.target.value, event.target.id);
  }

  return (
    <Wrapper>
      <div>
        <label htmlFor="address">Address</label>
        <input id="address" type="text" value={formFields.address} onChange={onChangeInput} />
      </div>
      <div>
        <label htmlFor="city">City</label>
        <input id="city" type="text" value={formFields.city} onChange={onChangeInput} />
      </div>
    </Wrapper>
  )
}

export default Step2;