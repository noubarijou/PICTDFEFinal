import { createContext, useEffect, useReducer, useContext } from 'react'
import { Reducer } from './Reducer'
export const FiltroContext = createContext();

const FiltroContextProvider = ({ children }) => {
    const [filtro, dispatch] = useReducer(Reducer, [], () => {
        const localData = sessionStorage.getItem('filtro');
        return localData ? JSON.parse(localData) : [{ portas: '', assentos: '', ar: '', combustivel: '', cambio: '', motor: '' }];
    });

    useEffect(() => {
        sessionStorage.setItem('filtro', JSON.stringify(filtro))
    }, [filtro])

    const adicionarItem = (filtro) => {
        dispatch({ type: 'ADICIONAR', payload: filtro })
    }

    const portasFiltro = (filtro) => {
        dispatch({ type: 'PORTAS', payload: filtro })
    }

    const assentosFiltro = (filtro) => {
        dispatch({ type: 'ASSENTOS', payload: filtro })
    }

    const arFiltro = (filtro) => {
        dispatch({ type: 'AR', payload: filtro })
    }

    const combustivelFiltro = (filtro) => {
        dispatch({ type: 'COMBUSTIVEL', payload: filtro })
    }

    const cambioFiltro = (filtro) => {
        dispatch({ type: 'CAMBIO', payload: filtro })
    }

    const motorFiltro = (filtro) => {
        dispatch({ type: 'MOTOR', payload: filtro })
    }

    // const removerItem = (filtro) => {
    //     dispatch({ type: 'REMOVER', payload: filtro })
    // }

    return (
        <>
            <FiltroContext.Provider value={{ filtro, adicionarItem, portasFiltro, assentosFiltro, arFiltro, combustivelFiltro, cambioFiltro, motorFiltro }}>
                {children}
            </FiltroContext.Provider>
        </>
    )
}

export default FiltroContextProvider;
export const CarrinhoState = () => {
    return useContext(FiltroContext)
}