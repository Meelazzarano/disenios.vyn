const Footer = () => {
  return (
    <footer className="text-gray-400 bg-gray-900 body-font fixed">
        <div className="container px-4  py-4 mx-auto flex items-center sm:flex-row flex-col">
            <a href="*" className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-green-500 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-base">Diseños VyN</span>
            </a>
            <p className="text-xs text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">© 2022 MelinaLazzarano </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a href='https://api.whatsapp.com/send/?phone=%2B5491170367233&text&app_absent=0' target="_blank" className="flex ml-3 text-gray-400 text-xs"> WhatsApp
                 <svg aria-hidden="true" focusable="false" className="w-4 mr-4 mx-1 item-center" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor" d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z">
                    </path> 
                  </svg>                  
            </a>
            <a href='https://www.instagram.com/disenios.vyn/' target="_blank" className="flex ml-3 text-gray-400 text-xs"> Instagram  
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