export const SuccessMessage = () => {
  return (
    <div className="successMessage alert alert-success shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span className="mx-4">Artículo agregado con éxito!</span>
    </div>
  )
}


export const SuccessMessageOrder = () => {
  return (
    <div className="successMessage alert alert-success shadow-lg w-full">
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span className="mx-4">Orden enviada con éxito! Dentro de 72hs nos comunicaremos!</span>
    </div>
  )
}