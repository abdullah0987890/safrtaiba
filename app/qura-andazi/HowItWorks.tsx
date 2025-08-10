
'use client';

export default function HowItWorks() {
  const steps = [
    {
      step: '1',
      title: 'Register',
      description: 'Fill out the registration form with your details including CNIC/Passport, contact information',
      icon: 'ri-user-add-line'
    },
    {
      step: '2',
      title: 'Pay Token Fee',
      description: 'Pay Rs. 950 token fee through JazzCash, EasyPaisa, or bank transfer to secure your entry',
      icon: 'ri-secure-payment-line'
    },
    {
      step: '3',
      title: 'Get Token',
      description: 'Receive your unique token number via SMS and email confirmation for the monthly draw',
      icon: 'ri-ticket-line'
    },
    {
      step: '4',
      title: 'Monthly Draw',
      description: 'Wait for the monthly draw conducted transparently with all participants notified',
      icon: 'ri-trophy-line'
    },
    {
      step: '5',
      title: 'Win or Refund',
      description: 'If you win, enjoy your Umrah package! If not, get Beautiful Gifts',
      icon: 'ri-medal-line'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            How Qura Andazi Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our transparent lottery system gives everyone an equal chance to win a blessed Umrah journey. 
            Here's how simple it is to participate.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((item, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl relative z-10">
                    <i className={item.icon}></i>
                  </div>
                  
                  <div className="absolute top-10 left-20 w-full h-0.5 bg-green-200 hidden md:block" 
                       style={{ display: index === steps.length - 1 ? 'none' : 'block' }}>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Step {item.step}: {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Important Terms & Conditions
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-5 h-5 flex items-center justify-center mr-3 text-green-600 mt-0.5">
                  <i className="ri-check-line"></i>
                </div>
                <p className="text-gray-700">One entry per person per month</p>
              </div>
              <div className="flex items-start">
                <div className="w-5 h-5 flex items-center justify-center mr-3 text-green-600 mt-0.5">
                  <i className="ri-check-line"></i>
                </div>
                <p className="text-gray-700">Valid CNIC or Passport required</p>
              </div>
              <div className="flex items-start">
                <div className="w-5 h-5 flex items-center justify-center mr-3 text-green-600 mt-0.5">
                  <i className="ri-check-line"></i>
                </div>
                <p className="text-gray-700">Draw conducted every last day of month</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-5 h-5 flex items-center justify-center mr-3 text-green-600 mt-0.5">
                  <i className="ri-check-line"></i>
                </div>
                <p className="text-gray-700">Refunds processed within 7 days</p>
              </div>
              <div className="flex items-start">
                <div className="w-5 h-5 flex items-center justify-center mr-3 text-green-600 mt-0.5">
                  <i className="ri-check-line"></i>
                </div>
                <p className="text-gray-700">Winners announced via SMS and email</p>
              </div>
              <div className="flex items-start">
                <div className="w-5 h-5 flex items-center justify-center mr-3 text-green-600 mt-0.5">
                  <i className="ri-check-line"></i>
                </div>
                <p className="text-gray-700">Package must be used within 6 months</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
