import React from 'react'

const Layout = () => {
    const arr = new Array(6)
    const tmp = 6
    return (
        <div className="flex flex-col min-h-screen">
            <header className="sticky top-0 bg-gray-800 text-white py-4 px-6">
                this is the header
            </header>
            <main className="">
                {
                    [...Array(6)].map((_, i) => (
                        <section key={i} className="flex flex-col md:flex-row m-3">
                            <div className={`md:w-1/2 p-4 h-96 ${i % 2 === 0 ? 'bg-green-700' : 'bg-pink-200'}`}>
                                Lorem ipsum 1
                            </div>
                            <div className={`md:w-1/2 p-4 h-96 ${i % 2 === 0 ? 'bg-pink-200' : 'bg-green-700'}`}>
                                Lorem ipsum 2
                            </div>
                        </section>
                    ))
                }

            </main>
            <footer className="bg-gray-800 text-white py-4 px-6">
                {/* Footer content */}
            </footer>
        </div>
    )
}

export default Layout

