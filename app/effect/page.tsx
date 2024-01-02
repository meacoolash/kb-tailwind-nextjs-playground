import React from 'react'

const Effect = () => {
    return (
        <div className="bg-bkg text-content isolate overflow-hidden p-4 sm:p-8 grid place-items-center">
            <div
                className="grid relative min-h-screen place-items-center place-content-center gap-16 before:absolute before:h-3/4 before:w-3/4 before:rounded-tr-full before:rounded-bl-full before:blur-3xl before:bg-red-300/50 before:animate-spin-slower before:-z-10 after:absolute after:h-2/3 after:w-2/3 after:rounded-tr-full after:rounded-bl-full after:blur-3xl after:bg-blue-300/50 after:animate-spin-slow after:-z-10"
            >

                <div className='w-1/2'>
                    What is Lorem Ipsum?
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                    Why do we use it?
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

                </div>
            </div>

        </div>
    )
}

export default Effect