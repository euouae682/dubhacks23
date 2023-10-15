import Image from "next/image";
import Link from "next/link";

export function Treatments() {
  return (
    <div className="p-5 bg-orange-100 rounded-xl">
      <h3 className="text-2xl text-orange-900 font-bold mb-5">
        Current Treatments
      </h3>

      <div className="flex flex-col justify-around gap-1.5 text-white ">
        <div className="flex justify-between items-center px-5 py-4 bg-orange-600 rounded-2xl">
          <div className="flex gap-5">
            <svg
              width="24"
              height="24"
              viewBox="0 0 29 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.8726 5.4581L24.2569 2.90803C23.0429 0.991935 20.4802 0.467685 18.6113 1.7531L3.40713 12.2102C1.63532 13.4288 1.14406 15.8302 2.29498 17.6468L3.91065 20.1968C5.12465 22.1129 7.68735 22.6372 9.55629 21.3518L24.7604 10.8946C26.5323 9.67602 27.0235 7.27461 25.8726 5.4581Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.121 16.5624V16.5624C13.3095 14.6112 11.3563 11.6534 10.666 8.30148V8.30148"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span className="justify-self-start">Vancomycin</span>
          </div>

          <span>125mg</span>
        </div>

        <div className="flex justify-between items-center px-5 py-4 bg-orange-600 rounded-2xl">
          <div className="flex gap-5">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="1" fill="white" />
              <path
                d="M15 12C15 14.6668 14.5658 17.035 13.9 18.6997C13.5659 19.5348 13.1932 20.1435 12.8304 20.527C12.4697 20.9085 12.1887 21 12 21C11.8113 21 11.5303 20.9085 11.1696 20.527C10.8068 20.1435 10.4341 19.5348 10.1 18.6997C9.43419 17.035 9 14.6668 9 12C9 9.33323 9.43419 6.96497 10.1 5.30032C10.4341 4.46523 10.8068 3.85653 11.1696 3.47296C11.5303 3.0915 11.8113 3 12 3C12.1887 3 12.4697 3.0915 12.8304 3.47296C13.1932 3.85653 13.5659 4.46523 13.9 5.30032C14.5658 6.96497 15 9.33323 15 12Z"
                stroke="white"
                stroke-width="2"
              />
              <path
                d="M13.4999 14.5982C11.1904 15.9315 8.92234 16.7397 7.14779 16.9953C6.25755 17.1236 5.54403 17.1051 5.03048 16.9828C4.51975 16.8611 4.30003 16.6635 4.20567 16.5001C4.11131 16.3366 4.05008 16.0476 4.20005 15.5444C4.35086 15.0385 4.69164 14.4113 5.24784 13.7045C6.35653 12.2955 8.19041 10.7354 10.4999 9.40201C12.8094 8.06862 15.0775 7.26051 16.852 7.00484C17.7423 6.87658 18.4558 6.89503 18.9693 7.01739C19.4801 7.13908 19.6998 7.33665 19.7941 7.50008C19.8885 7.66352 19.9497 7.95258 19.7998 8.45573C19.6489 8.96166 19.3082 9.58881 18.752 10.2956C17.6433 11.7046 15.8094 13.2648 13.4999 14.5982Z"
                stroke="white"
                stroke-width="2"
              />
              <path
                d="M13.4999 9.40184C11.1904 8.06846 8.92234 7.26035 7.14779 7.00468C6.25755 6.87641 5.54403 6.89487 5.03048 7.01723C4.51975 7.13892 4.30003 7.33648 4.20567 7.49992C4.11131 7.66335 4.05008 7.95242 4.20005 8.45557C4.35086 8.9615 4.69164 9.58865 5.24784 10.2955C6.35653 11.7045 8.19041 13.2646 10.4999 14.598C12.8094 15.9314 15.0775 16.7395 16.852 16.9952C17.7423 17.1234 18.4558 17.105 18.9693 16.9826C19.4801 16.8609 19.6998 16.6634 19.7941 16.4999C19.8885 16.3365 19.9497 16.0474 19.7998 15.5443C19.6489 15.0383 19.3082 14.4112 18.752 13.7044C17.6433 12.2954 15.8094 10.7352 13.4999 9.40184Z"
                stroke="white"
                stroke-width="2"
              />
            </svg>

            <span className="justify-self-start">Radiotherapy</span>
          </div>

          <span></span>
        </div>

        <div className="flex justify-between items-center px-5 py-4 bg-orange-600 rounded-2xl">
          <div className="flex gap-5">
            <svg
              width="24"
              height="24"
              viewBox="0 0 29 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.8726 5.4581L24.2569 2.90803C23.0429 0.991935 20.4802 0.467685 18.6113 1.7531L3.40713 12.2102C1.63532 13.4288 1.14406 15.8302 2.29498 17.6468L3.91065 20.1968C5.12465 22.1129 7.68735 22.6372 9.55629 21.3518L24.7604 10.8946C26.5323 9.67602 27.0235 7.27461 25.8726 5.4581Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.121 16.5624V16.5624C13.3095 14.6112 11.3563 11.6534 10.666 8.30148V8.30148"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span className="justify-self-start">Arsenic trioxide</span>
          </div>

          <span>125mg</span>
        </div>
      </div>
    </div>
  );
}
