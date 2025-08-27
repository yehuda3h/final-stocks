function CardAdvertiser({ user }) {
  if (!user) {
    return (
      <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold mb-4 text-gray-800">
          About the Seller
        </h3>
        <p className="text-gray-600">No seller information available</p>
      </div>
    );
  }

  return (
    <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-bold mb-4 text-gray-800">About the Seller</h3>
      <div className="space-y-4 flex gap-6 flex-wrap items-center">
        <div className="flex items-center gap-4">
          <svg
            className="w-6 h-6 text-blue-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0012 11z"
              clipRule="evenodd"
            />
          </svg>
          <div>
            <p className="font-semibold text-gray-800">{user.name || "N/A"}</p>
            <p className="text-gray-600">Seller</p>
          </div>
        </div>

        {user.number_phone && (
          <div className="flex items-center gap-4">
            <svg
              className="w-6 h-6 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <div>
              <p className="font-semibold text-gray-800">{user.number_phone}</p>
              <p className="text-gray-600">Phone</p>
            </div>
          </div>
        )}

        {user.email && (
          <div className="flex items-center gap-4">
            <svg
              className="w-6 h-6 text-purple-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <div>
              <p className="font-semibold text-gray-800">{user.email}</p>
              <p className="text-gray-600">Email</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CardAdvertiser;
