export const Reducer = (state, action) => {

    switch (action.type) {
        // case 'ADICIONAR':
        //     state.portas = action.payload

        //     const { portas } = state;

        //     console.log('Portas', portas);

        //     const conferirFiltro = state.filter(filtro => (
        //         filtro === action.payload
        //     ))

        //     if (!conferirFiltro.length) {
        //         return [...state, action.payload]
        //     }
        //     return state;

        case 'PORTAS':
            const conferirPortas = state.filter(filtro => (
                filtro.portas
            ))

            // if (!conferirPortas.length) {
            //     console.log(state.portas);
            //     return [...state, { portas: action.payload }]
            // }

            if (conferirPortas) {
                return state.map(
                    (content, i) => i === 0 ? { ...content, portas: action.payload }
                        : content
                )
            }

            return state;

        case 'ASSENTOS':
            const conferirAssentos = state.filter(filtro => (
                filtro.assentos
            ))

            // if (!conferirAssentos.length) {
            //     console.log(state.assentos);
            //     return [...state, { assentos: action.payload }]
            // }

            if (conferirAssentos) {
                return state.map(
                    (content, i) => i === 0 ? { ...content, assentos: action.payload }
                        : content
                )
            }

            return state;

        case 'AR':
            const conferirAr = state.filter(filtro => (
                filtro.ar
            ))

            // if (!conferirAr.length) {
            //     console.log(state.ar);
            //     return [...state, { ar: action.payload }]
            // }

            if (conferirAr) {
                return state.map(
                    (content, i) => i === 0 ? { ...content, ar: action.payload }
                        : content
                )
            }

            return state;

        case 'COMBUSTIVEL':
            const conferirCombustivel = state.filter(filtro => (
                filtro.ar
            ))

            // if (!conferirCombustivel.length) {
            //     console.log(state.ar);
            //     return [...state, { ar: action.payload }]
            // }

            if (conferirCombustivel) {
                return state.map(
                    (content, i) => i === 0 ? { ...content, combustivel: action.payload }
                        : content
                )
            }

            return state;

        case 'CAMBIO':
            const conferirCambio = state.filter(filtro => (
                filtro.ar
            ))

            // if (!conferirCambio.length) {
            //     console.log(state.ar);
            //     return [...state, { ar: action.payload }]
            // }

            if (conferirCambio) {
                return state.map(
                    (content, i) => i === 0 ? { ...content, cambio: action.payload }
                        : content
                )
            }

            return state;

        case 'MOTOR':
            const conferirMotor = state.filter(filtro => (
                filtro.ar
            ))

            // if (!conferirMotor.length) {
            //     console.log(state.ar);
            //     return [...state, { ar: action.payload }]
            // }

            if (conferirMotor) {
                return state.map(
                    (content, i) => i === 0 ? { ...content, motor: action.payload }
                        : content
                )
            }

            return state;

        case 'ORDENAR':
            const conferirOrdenar = state.filter(filtro => (
                filtro.ar
            ))

            // if (!conferirOrdenar.length) {
            //     console.log(state.ar);
            //     return [...state, { ar: action.payload }]
            // }

            if (conferirOrdenar) {
                return state.map(
                    (content, i) => i === 0 ? { ...content, ordenar: action.payload }
                        : content
                )
            }

            return state;

        case 'REMOVER':
            return state.filter(e => e.id !== action.payload.id)

        default:
            return state;
    }
} 