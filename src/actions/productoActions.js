import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types'

// Crear nuevos productos
export function crearNuevoProductoAction(params) {
    return () => {
        console.log('Desde action')
    }
}