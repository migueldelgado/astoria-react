import styled from 'styled-components';

interface IStep1Props {
  onClickNext?: () => void;
  onClickBack?: (params: any) => void;
  onChange?: (x:string, y:string) => null;
  formFields?: any;
}

const Wrapper = styled.div`
  border: 1px solid black;
`

const Step1: React.FC<IStep1Props> = ({ onChange, formFields }) => {

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event.target.value, event.target.id);
  }

  return (
    <Wrapper>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input id="firstName" type="text" value={formFields.firstName} onChange={onChangeInput} />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input id="lastName" type="text" value={formFields.lastName} onChange={onChangeInput} />
      </div>
    </Wrapper>
  )
}

export default Step1;