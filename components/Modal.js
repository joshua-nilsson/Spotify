/* eslint-disable prettier/prettier */
import React, { Fragment, useState } from 'react';
import { Dialog, Transition, Switch } from '@headlessui/react';
import { useLocalStorage } from 'usehooks-ts';
import { FiAlertCircle } from 'react-icons/fi';

export default function Header() {
  const [isChecked, setIsChecked] = useLocalStorage('checked', false);
  const [isOpen, setIsOpen] = useState(!isChecked);

  return (
    <>
      <div className="mt-4 px-[0.425rem] xl:px-0">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center xl:justify-start cursor-pointer font-semibold text-[#FFF] transition-all hover:text-[#0db146] rounded"
        >
          <FiAlertCircle className="w-8 h-8" />
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(!isOpen)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
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
                  <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                    <FiAlertCircle className="relative top-[-0.15rem] inline align-middle text-[#0db146]" />{' '}
                    NOT THE ACTUAL WEBSITE
                  </Dialog.Title>
                  <div className="mt-4">
                    <p className="text-sm text-gray-500">
                      This website is{' '}
                      <strong>
                        <u>NOT</u>
                      </strong>{' '}
                      Spotify.
                      <br />
                      Please do not enter any sensitive information.
                    </p>
                    <p className="text-sm text-gray-500 mt-5">
                      You are viewing a learning project built for the purpose of mastery in my
                      skillset as a Front-End Software Engineer.
                    </p>
                  </div>

                  <div className="mt-5">
                    <button
                      type="button"
                      className="flex msm:inline-flex justify-center rounded-md border border-transparent bg-[#0db146] px-4 py-2 text-sm font-medium text-white hover:opacity-75 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0db146] focus-visible:ring-offset-2"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      Got it, thanks!
                    </button>
                    <Switch.Group>
                      <Switch
                        checked={isChecked}
                        className={`${
                          isChecked
                            ? 'bg-[#0db146] focus-visible:ring-[#0db146]'
                            : 'bg-gray-200 focus-visible:ring-gray-200'
                        } relative inline-flex h-6 w-11 items-center align-middle rounded-full mt-4 msm:mt-0 msm:ml-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2`}
                        onChange={() => setIsChecked(!isChecked)}
                        onKeyDown={({ key }) => key === 'Enter' && setIsChecked(!isChecked)}
                      >
                        <span
                          className={`${
                            isChecked ? 'translate-x-6' : 'translate-x-1'
                          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                        />
                      </Switch>
                      <Switch.Label className="inline-flex ml-2 text-sm font-medium align-middle select-none mt-4 msm:mt-0">
                        Do not show again
                      </Switch.Label>
                    </Switch.Group>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
