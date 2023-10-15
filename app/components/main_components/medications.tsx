export function Medications() {
  return (
    <div className="col-span-3 bg-orange-200 p-5 rounded-xl text-orange-900">
      <h3 className="font-bold tracking-wide mb-3">Current Treatments</h3>
      <div className="flex flex-col gap-3">
        <section className="text-white bg-orange-600 p-3 rounded-xl">
          <header className="flex gap-3">
            <svg
              width="26"
              height="30"
              viewBox="0 0 26 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.3282 5.16661L21.2342 2.9921C19.6608 1.35819 17.0451 1.35819 15.4717 2.9921L2.6718 16.2843C1.18018 17.8333 1.18018 20.2844 2.67181 21.8334L4.76578 24.0079C6.33917 25.6418 8.95495 25.6418 10.5283 24.0079L23.3282 10.7157C24.8198 9.16675 24.8198 6.7156 23.3282 5.16661Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16 18V18C12.8545 16.6519 10.3481 14.1455 9 11V11"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h4>Vancomycin</h4>
          </header>

          <div className="flex gap-3 text-xs">
            <p className="w-8/12">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, blanditiis consectetur quibusdam quod saepe, dolor
              quam eos, placeat ipsum magnam quas autem quisquam quo voluptatem
              suscipit eveniet neque explicabo nesciunt!
            </p>
            <div>
              <p>Possible Side Affects</p>
              <ul className="list-disc pl-5">
                <li>Kidney Problems</li>
                <li>Liver Problems</li>
                <li>Death</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="text-white bg-orange-600 p-3 rounded-xl">
          <header className="flex gap-3">
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
                d="M13.5 14.5982C11.1905 15.9315 8.92246 16.7397 7.14791 16.9953C6.25768 17.1236 5.54415 17.1051 5.0306 16.9828C4.51988 16.8611 4.30015 16.6635 4.2058 16.5001C4.11144 16.3366 4.0502 16.0476 4.20018 15.5444C4.35099 15.0385 4.69176 14.4113 5.24796 13.7045C6.35665 12.2955 8.19053 10.7354 10.5 9.40201C12.8095 8.06862 15.0776 7.26051 16.8521 7.00484C17.7424 6.87658 18.4559 6.89503 18.9694 7.01739C19.4802 7.13908 19.6999 7.33665 19.7943 7.50008C19.8886 7.66352 19.9499 7.95258 19.7999 8.45573C19.6491 8.96166 19.3083 9.58881 18.7521 10.2956C17.6434 11.7046 15.8095 13.2648 13.5 14.5982Z"
                stroke="white"
                stroke-width="2"
              />
              <path
                d="M13.5 9.40184C11.1905 8.06846 8.92246 7.26035 7.14791 7.00468C6.25768 6.87641 5.54415 6.89487 5.0306 7.01723C4.51988 7.13892 4.30015 7.33648 4.2058 7.49992C4.11144 7.66335 4.0502 7.95242 4.20018 8.45557C4.35099 8.9615 4.69176 9.58865 5.24796 10.2955C6.35665 11.7045 8.19053 13.2646 10.5 14.598C12.8095 15.9314 15.0776 16.7395 16.8521 16.9952C17.7424 17.1234 18.4559 17.105 18.9694 16.9826C19.4802 16.8609 19.6999 16.6634 19.7943 16.4999C19.8886 16.3365 19.9499 16.0474 19.7999 15.5443C19.6491 15.0383 19.3083 14.4112 18.7521 13.7044C17.6434 12.2954 15.8095 10.7352 13.5 9.40184Z"
                stroke="white"
                stroke-width="2"
              />
            </svg>
            <h4>Radiotherapy</h4>
          </header>
        </section>
      </div>
    </div>
  );
}
