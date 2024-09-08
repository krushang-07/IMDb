export default function Footer() {
    return (
      <footer className="w-full bg-black-800 dark:bg-black-900 text-gray-500 py-4 m-9">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left">
              <h2 className="text-xl font-semibold text-amber-500 dark:text-amber-400 mb-4">
                Movie Database
              </h2>
              <p className="text-sm mb-4">
                © {new Date().getFullYear()} Movie Database. All rights reserved.
              </p>
              <p className="text-sm mb-4">
                A comprehensive resource for all things movies, including news and reviews.
              </p>
            </div>
  
            <div className="flex flex-col md:flex-row gap-6 mb-4">
              <div className="text-center md:text-left">
                <h3 className="text-lg font-semibold text-amber-500 dark:text-amber-400 mb-2">
                  Quick Links
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/" className="hover:text-amber-400 dark:hover:text-amber-300 transition duration-300">Home</a>
                  </li>
                  <li>
                    <a href="/about" className="hover:text-amber-400 dark:hover:text-amber-300 transition duration-300">About</a>
                  </li>
                 
                </ul>
              </div>
  
              <div className="text-center md:text-left">
                <h3 className="text-lg font-semibold text-amber-500 dark:text-amber-400 mb-2">
                  Follow Us
                </h3>
                <div className="flex space-x-4 justify-center md:justify-start">
                  <a href="#" className="text-gray-400 hover:text-amber-400 dark:hover:text-amber-300 transition duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12a8 8 0 1 0-4.754 7.327M12 12v4.5m0-4.5V7.5m0 7.5H7.5m4.5 0h4.5" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-amber-400 dark:hover:text-amber-300 transition duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6.293 9.293a1 1 0 0 0 0 1.414L9.586 14 6.293 17.293a1 1 0 0 0 1.414 1.414L11 15.414l3.293 3.293a1 1 0 0 0 1.414-1.414L12.414 14l3.293-3.293a1 1 0 0 0-1.414-1.414L11 12.586 7.707 9.293a1 1 0 0 0-1.414 0z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-amber-400 dark:hover:text-amber-300 transition duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 9V6a3 3 0 0 1 6 0v3M9 15H7a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h2v3a1 1 0 0 0 2 0V2h2a4 4 0 0 1 4 4v5a4 4 0 0 1-4 4h-2v-2a1 1 0 0 0-2 0v2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  