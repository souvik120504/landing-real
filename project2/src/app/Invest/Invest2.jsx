"use client"
export default function Invest2() {
  const percentage = 87;
  const radius = 80;
  const stroke = 12;
  const normalizedRadius = radius - stroke;
  const circumference = Math.PI * normalizedRadius;

  const strokeDashoffset =
    circumference - (percentage / 100) * circumference;

  return (
    <div className="w-full bg-gray-200 py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 items-start justify-between">
        <div className="flex flex-col gap-4 bg-white rounded-3xl p-6 w-full lg:w-[45%]">
          <p className="text-lg text-gray-600">ABOUT US</p>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            Your partner in <br />property investment
          </h1>
          <div className="bg-cover bg-center w-full h-64 rounded-3xl" style={{backgroundImage:'url("https://images.unsplash.com/photo-1451153378752-16ef2b36ad05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmxhdHxlbnwwfHwwfHx8MA%3D%3D")'}}></div>
        </div>

        <div className="flex flex-col gap-6 w-full lg:w-[50%]">
          <div className="bg-white rounded-3xl p-6">
            <h2 className="text-gray-800 font-semibold mb-2 text-xl md:text-2xl">
              Yearly revenue increase
            </h2>
            <p className="text-sm text-gray-500">
              The property that suits you. Choose an apartment that suits your urgent requirements.
            </p>
            <div className="flex justify-center mt-6">
              <svg
                height={radius}
                width={radius * 2}
                viewBox={`0 0 ${radius * 2} ${radius}`}
              >
                <path
                  d={`
                    M ${stroke} ${radius}
                    A ${normalizedRadius} ${normalizedRadius} 0 0 1 ${radius * 2 - stroke} ${radius}
                  `}
                  fill="transparent"
                  stroke="#e5e7eb"
                  strokeWidth={stroke}
                />
                <path
                  d={`
                    M ${stroke} ${radius}
                    A ${normalizedRadius} ${normalizedRadius} 0 0 1 ${radius * 2 - stroke} ${radius}
                  `}
                  fill="transparent"
                  stroke="#22c55e"
                  strokeWidth={stroke}
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  className="transition-all duration-500"
                />
                <text
                  x="50%"
                  y="70%"
                  textAnchor="middle"
                  className="text-xl font-bold fill-gray-800"
                >
                  {percentage}%
                </text>
              </svg>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6">
            <div className="w-full bg-purple-700 rounded-3xl p-4 flex flex-col gap-4 md:flex-row items-center justify-between text-black">
              <div className="rounded-3xl bg-white bg-opacity-10 p-3 text-sm md:text-base text-center">
                This Year <br />
                <span className="block text-base md:text-lg font-semibold">Our revenue increment analytics</span>
              </div>
              <div className="rounded-3xl bg-white p-3 text-base md:text-lg font-semibold text-purple-900 text-center">
                $250,862 <br />Total Revenue
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}