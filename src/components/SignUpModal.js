/*  */
import { useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export const SignUpModal = (props) => {
  const { cta } = props
  
  let [isOpen, setIsOpen] = useState(true)

  const closeModal = () => {
    setIsOpen(false)
  }


  if(cta) {
    return (
        <>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/25" />
            </Transition.Child>
  
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      {cta === "workshop" && "Confirm Your Seat"}
                      {cta === "free-chapter" && "Sent Free Chapter to Your Email"}
                      {cta === "confirmed" && "Thanks for Confirming"}
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        {cta === "workshop" && "Go to your email and confirm your seat to my workshop"}
                        {cta === "free-chapter" && "I just sent you a free chapter of my book"}
                        {cta === "confirmed" && "Thank you for reserving a seat for the workshop. Looking forward to seeing you there!"}
                      </p>
                    </div>
  
                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        {cta === "workshop" && "Got it, thanks!"}
                        {cta === "free-chapter" && "Got it, thanks!"}
                        {cta === "confirmed" && "Your Welcome"}
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>
    )
  } else { return }
}
