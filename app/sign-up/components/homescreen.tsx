import Image from "next/image";

export function HomeScreen() {
  return (
    <div
      className="flex h-screen gap-2 text-white bg-orange-700 p-10 
      bg-[url(/flower-background.png)] bg-right-bottom bg-no-repeat bg-[length:36rem]"
    >
      <svg
        width="64"
        height="64"
        viewBox="0 0 35 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.5 10.775V11.1C17.5 13.3402 17.5 14.4603 17.064 15.316C16.6805 16.0686 16.0686 16.6805 15.316 17.064C14.4603 17.5 13.3402 17.5 11.1 17.5H9.31667C7.07646 17.5 5.95635 17.5 5.10071 17.064C4.34806 16.6805 3.73613 16.0686 3.35264 15.316C2.91667 14.4603 2.91667 13.3402 2.91667 11.1V10.775V10.775C2.91667 8.53479 2.91667 7.41468 3.35264 6.55904C3.73613 5.80639 4.34806 5.19447 5.10071 4.81097C5.95635 4.375 7.07646 4.375 9.31666 4.375H11.1C13.3402 4.375 14.4603 4.375 15.316 4.81097C16.0686 5.19447 16.6805 5.80639 17.064 6.55904C17.5 7.41469 17.5 8.53479 17.5 10.775Z"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10.2083 11.6667H12.7C14.3802 11.6667 15.2202 11.6667 15.862 11.9936C16.4265 12.2813 16.8854 12.7402 17.173 13.3047C17.5 13.9464 17.5 14.7865 17.5 16.4667V30.625"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M24.7917 18.9583H22.3C20.6198 18.9583 19.7798 18.9583 19.138 19.2853C18.5735 19.5729 18.1146 20.0319 17.827 20.5964C17.5 21.2381 17.5 22.0782 17.5 23.7583V32.0833"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M17.5 18.0667V18.3917C17.5 20.6319 17.5 21.752 17.936 22.6076C18.3195 23.3603 18.9314 23.9722 19.684 24.3557C20.5397 24.7917 21.6598 24.7917 23.9 24.7917H25.6833C27.9235 24.7917 29.0436 24.7917 29.8993 24.3557C30.6519 23.9722 31.2639 23.3603 31.6474 22.6076C32.0833 21.752 32.0833 20.6319 32.0833 18.3917V18.0667V18.0666C32.0833 15.8264 32.0833 14.7063 31.6474 13.8507C31.2639 13.098 30.6519 12.4861 29.8993 12.1026C29.0436 11.6667 27.9235 11.6667 25.6833 11.6667H23.9C21.6598 11.6667 20.5397 11.6667 19.684 12.1026C18.9314 12.4861 18.3195 13.098 17.936 13.8507C17.5 14.7063 17.5 15.8264 17.5 18.0667Z"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <div>
        <p className="text-7xl font-black mb-5">OncoSupport</p>
        <p className="text-xl">Supporting your path to wellness.</p>
      </div>
    </div>
  );
}