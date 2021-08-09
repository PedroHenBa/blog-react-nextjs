import * as Styled from './styles';
import { useContext, useEffect, useState } from 'react';
import { BlogThemeContext } from '../../contexts/BlogThemeContext';

export const ToggleTheme = () => {
  const [checked, setChecked] = useState(false);
  const { setTheme } = useContext(BlogThemeContext);

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    if (!localTheme) return;
    const recoveredTheme = JSON.parse(localTheme);
    if (recoveredTheme.name === 'inverted') {
      setChecked(true);
    }
  }, []);

  useEffect(() => {
    setTheme(checked ? 'inverted' : 'default');
  }, [checked, setTheme]);

  const handleChange = () => {
    setChecked((c) => !c);
    setTheme(checked ? 'inverted' : 'default');
  };

  return (
    <Styled.Container>
      <Styled.Label>
        <Styled.Input type="checkbox" value="Dark mode active" onChange={handleChange} checked={checked} />
        <Styled.Slider></Styled.Slider>
      </Styled.Label>
    </Styled.Container>
  );
};
