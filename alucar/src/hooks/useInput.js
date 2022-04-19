import useLocalStorage from './useLocalStorage';

export const useInput = (key, initialValue) => {
    const [value, setValue] = useLocalStorage(key, initialValue);
    
    const reset = () => setValue(initialValue);

    const attributeObj = {
        value,
        onChange: (e) => setValue(e.target.value)

    }
    
    return [value, reset, attributeObj];
}
