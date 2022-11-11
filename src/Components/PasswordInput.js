import { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import Styled from './PasswordInput.styles';

function PasswordInput({
  password,
  setPassword,
}) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <Styled.PasswordWrapper>
      <Styled.Label htmlFor="password">Password:</Styled.Label>
      <Styled.Input
        id="password"
        type={isPasswordVisible ? 'text' : 'password'}
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <Styled.ToggleButton
        type="button"
        onClick={() => setIsPasswordVisible(!isPasswordVisible)}
      >
        {isPasswordVisible ? <EyeSlashIcon /> : <EyeIcon />}
      </Styled.ToggleButton>
    </Styled.PasswordWrapper>
  );
}

export default PasswordInput;
