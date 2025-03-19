import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-20">
        <div className="container mx-auto text-center px-6">
          <h1 className="text-5xl font-extrabold mb-4">Welcome to the Exam Portal</h1>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Your one-stop solution for managing exams, results, and more.
          </p>
          <Link
            href="/signup"
            className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md 
                       hover:bg-gray-200 hover:scale-105 transition-transform"
          >
            Get Started
          </Link>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* Manage Exams */}
            <div className="p-8 bg-white shadow-lg rounded-2xl transition-transform transform 
                            hover:scale-105 hover:shadow-xl">
              <div className="mb-4 flex justify-center">
                <div className="p-3 bg-blue-100 rounded-full">
                  <Image
                    src="https://www.svgrepo.com/show/422769/account-manage-personal.svg"
                    alt="Manage Exams"
                    width={50}
                    height={50}
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Manage Exams</h3>
              <p className="text-gray-600">Create, schedule, and manage exams effortlessly.</p>
            </div>

            {/* Track Results */}
            <div className="p-8 bg-white shadow-lg rounded-2xl transition-transform transform 
                            hover:scale-105 hover:shadow-xl">
              <div className="mb-4 flex justify-center">
                <div className="p-3 bg-green-100 rounded-full">
                  <Image
                    src="https://www.svgrepo.com/show/451377/test-data.svg"
                    alt="Track Results"
                    width={50}
                    height={50}
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Track Results</h3>
              <p className="text-gray-600">View and analyze exam results in real-time.</p>
            </div>

            {/* Role-Based Access */}
            <div className="p-8 bg-white shadow-lg rounded-2xl transition-transform transform 
                            hover:scale-105 hover:shadow-xl">
              <div className="mb-4 flex justify-center">
                <div className="p-3 bg-yellow-100 rounded-full">
                  <Image
                    src="https://www.svgrepo.com/show/486261/platform-managementrole-management.svg"
                    alt="Role-Based Access"
                    width={50}
                    height={50}
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Role-Based Access</h3>
              <p className="text-gray-600">Admins and students get tailored experiences.</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
