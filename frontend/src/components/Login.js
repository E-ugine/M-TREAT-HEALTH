export default function Login() {
    return (
      <section className="gradient-form h-full bg-neutral-200 dark:bg-neutral-700">
        <div className="container h-full p-10">
          <div className="flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
            <div className="w-full max-w-md">
              <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                <div className="px-6 py-8 md:px-8 md:py-10">
                  <div className="text-center">
                    <h4 className="mb-6 text-xl font-semibold">
                      Welcome Back to M-TREAT
                    </h4>
                  </div>
                  <form>
                    <p className="mb-4 text-center">Please log in to your account</p>
                    <div className="mb-6">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-700 dark:text-neutral-200"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full rounded-md border p-2 text-sm focus:ring-indigo-500 dark:bg-neutral-800"
                        required
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-700 dark:text-neutral-200"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        className="w-full rounded-md border p-2 text-sm focus:ring-indigo-500 dark:bg-neutral-800"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full rounded-md bg-indigo-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-600"
                    >
                      Login
                    </button>
                  </form>
                </div>
                <div className="text-center mt-4">
                  <p className="text-sm">
                    Don’t have an account?{" "}
                    <button className="text-indigo-500 underline hover:text-indigo-700">
                      Sign Up
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
  