import React from 'react'
import { useToggle } from '@oneloop/hooks'
import { Button } from '@oneloop/button'

import { Toast } from '.'

export default {
  component: Toast,
  title: 'Toast',
  argTypes: {
    variant: {
        name: 'variant',
        description: '**Variantes disponibles del toast:** [\n \'toastBase\',\'toastNormal\',\'toastAlert\,\'toastCheck\,\'toastError\,\'toastLoading\,\'toastSuccess\]',
      },
    modal: {
      name: 'Modal',
      description: '**modalBG**: Muestra o no el overlay.<br> **variant**: Recibe la posición del modal, por defecto está centrado, si no puede recibir "top" o "bottom".',
      type: 'text',
      control: { type: 'none' },
    },
    header: {
      name: 'Header',
      description: '**closeIcon**: Recibe la funcionalidad para cerrar el modal y muestra el icono X en la margen superior izquierdo. <br> **text**: Título del modal. <br> **variant**: Array donde la primera posición, es donde queremos que se ubique el título "start" o "center", y la segunda posición es el tamaño del texto "l" o "sm". ',
      type: 'text',
      control: { type: 'none' },
    },
    body: {
      name: 'Body',
      description: 'No hay variantes es lo que queremos que se vea en el centro del modal.',
      type: 'text',
      control: { type: 'none' },
    },
    footer: {
      name: 'Footer',
      description: '**variant**: Posicionamiento de los botones "start", "center", "end".',
      type: 'text',
      control: { type: 'none' },
    },
  },
}

export const base = () => <Toast type='base' variant='toastBase' text="Seleccione una propiedad"/>
     

export const normal = () =>
  React.createElement(() => {
    const [openAlert, setOpenAlert] = useToggle(false)
    return (
      <React.Fragment>
        <Button onClick={setOpenAlert}>Show normal toast</Button>
        <br />
        <br />
        {openAlert && (
          <Toast type='normal' variant='toastNormal' text="Seleccione una propiedad" closeFunction={setOpenAlert} />
        )}
      </React.Fragment>
    )
  })

export const alert = () =>
  React.createElement(() => {
    const [openAlert, setOpenAlert] = useToggle(false)
    return (
      <React.Fragment>
        <Button onClick={setOpenAlert}>Show alert toast</Button>
        <br />
        <br />
        {openAlert && (
          <Toast variant='toastAlert' type="alert" text="Alert message" closeFunction={setOpenAlert} />
        )}
      </React.Fragment>
    )
  })

export const check = () =>
  React.createElement(() => {
    const [openAlert, setOpenAlert] = useToggle(false)
    return (
      <React.Fragment>
        <Button onClick={setOpenAlert}>Show check toast</Button>
        <br />
        <br />
        {openAlert && (
          <Toast variant='toastCheck' type="check" text="Success message" closeFunction={setOpenAlert} />
        )}
      </React.Fragment>
    )
  })

  export const error = () =>
  React.createElement(() => {
    const [openAlert, setOpenAlert] = useToggle(false)
    return (
      <React.Fragment>
        <Button onClick={setOpenAlert}>Show error toast</Button>
        <br />
        <br />
        {openAlert && (
          <Toast variant='toastError' type="error" text="Error message" closeFunction={setOpenAlert} />
        )}
      </React.Fragment>
    )
  })
  export const loading = () =>
  React.createElement(() => {
    const [openAlert, setOpenAlert] = useToggle(false)
    return (
      <React.Fragment>
        <Button onClick={setOpenAlert}>Show loading toast</Button>
        <br />
        <br />
        {openAlert && (
          <Toast variant='toastNormal' type="loading" text="Cargando..." closeFunction={setOpenAlert} />
        )}
      </React.Fragment>
    )
  })
  export const exporting = () =>
  React.createElement(() => {
    const [openAlert, setOpenAlert] = useToggle(false)
    return (
      <React.Fragment>
        <Button onClick={setOpenAlert}>Show export toast</Button>
        <br />
        <br />
        {openAlert && (
          <Toast variant='toastNormal' type="loading" text="Exportando..." closeFunction={setOpenAlert} />
        )}
      </React.Fragment>
    )
  })
  export const success = () =>
  React.createElement(() => {
    const [openAlert, setOpenAlert] = useToggle(false)
    return (
      <React.Fragment>
        <Button onClick={setOpenAlert}>Show success toast</Button>
        <br />
        <br />
        {openAlert && (
          <Toast variant='toastSuccess' type="success" text="Report export ready!" closeFunction={setOpenAlert} download='console.log(hola)'/>
        )}
      </React.Fragment>
    )
  })

