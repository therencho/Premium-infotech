export default function ContactLoading() {
  return (
    <div className="container mx-auto py-10 px-4 flex justify-center items-center min-h-[50vh]">
      <div className="flex flex-col items-center">
        <div className="h-12 w-12 rounded-full border-4 border-t-blue-600 border-b-blue-600 border-l-transparent border-r-transparent animate-spin"></div>
        <p className="mt-4 text-gray-700">Loading contact information...</p>
      </div>
    </div>
  );
} 