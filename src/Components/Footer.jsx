const Footer = () => {
  return (
    <footer className="text-gray-400 bg-gray-900 body-font fixed">
        <div className="container px-4  py-4 mx-auto flex items-center sm:flex-row flex-col">
            <a href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-green-500 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-base">Diseños VyN</span>
            </a>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a href='https://api.whatsapp.com/send/?phone=%2B5491170367233&text&app_absent=0' target="_blank" rel="noreferrer" className="flex ml-3 text-gray-400 text-xs"> WhatsApp
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>                 
              </a>
              <a href='https://www.instagram.com/disenios.vyn/' target="_blank" rel="noreferrer" className="flex ml-3 text-gray-400 text-xs"> Instagram  
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 mx-1 items-center" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
              </a>
            </span>
        </div>
    </footer>
  )
}
export default Footer