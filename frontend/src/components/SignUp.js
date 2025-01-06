export default function SignUp() {
    return (
      <section className="gradient-form h-full bg-neutral-200 dark:bg-neutral-700">
        <div className="container h-full p-10">
          <div className="flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
            <div className="w-full max-w-md">
              <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                <div className="px-6 py-8 md:px-8 md:py-10">
                  <div className="text-center">
                    <h4 className="mb-6 text-xl font-semibold">
                      Sign Up for M-TREAT
                    </h4>
                  </div>
                  <form>
                    <p className="mb-4 text-center">
                      Fill in the details below to create your account
                    </p>
  
                    {/* Name Input */}
                    <div className="mb-4">
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-700 dark:text-neutral-200"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full rounded-md border p-2 text-sm focus:ring-indigo-500 dark:bg-neutral-800"
                      />
                    </div>
  
                    {/* Email Input */}
                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-700 dark:text-neutral-200"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full rounded-md border p-2 text-sm focus:ring-indigo-500 dark:bg-neutral-800"
                      />
                    </div>
  
                    {/* Phone Input */}
                    <div className="mb-4">
                      <label
                        htmlFor="phone"
                        className="block mb-2 text-sm font-medium text-gray-700 dark:text-neutral-200"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full rounded-md border p-2 text-sm focus:ring-indigo-500 dark:bg-neutral-800"
                      />
                    </div>
  
                    {/* Password Input */}
                    <div className="mb-4">
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-700 dark:text-neutral-200"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        className="w-full rounded-md border p-2 text-sm focus:ring-indigo-500 dark:bg-neutral-800"
                      />
                    </div>
  
                    {/* Confirm Password Input */}
                    <div className="mb-4">
                      <label
                        htmlFor="confirmPassword"
                        className="block mb-2 text-sm font-medium text-gray-700 dark:text-neutral-200"
                      >
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        required
                        className="w-full rounded-md border p-2 text-sm focus:ring-indigo-500 dark:bg-neutral-800"
                      />
                    </div>
  
                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full rounded-md bg-indigo-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-600"
                    >
                      Sign Up
                    </button>
                  </form>
                </div>
                <div className="text-center mt-4">
                  <p className="text-sm">
                    Already have an account?{" "}
                    <button className="text-indigo-500 underline hover:text-indigo-700">
                      Login
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  