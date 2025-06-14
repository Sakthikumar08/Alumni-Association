import React from 'react';
import { motion } from 'framer-motion';
import Event1 from '../../assets/images/Event1.png';
import Event2 from '../../assets/images/Event2.png';
import Event3 from '../../assets/images/Event3.png';

const events = [
  {
    id: 1,
    title: "Annual Alumni Gala",
    date: "May 15, 2023",
    time: "7:00 PM - 11:00 PM",
    location: "Grand Ballroom, University Campus",
    description: "An evening of celebration, networking, and reminiscing with fellow alumni.",
    category: "social",
    image: `${Event1}`
  },
  {
    id: 2,
    title: "Career Networking Workshop",
    date: "June 8, 2023",
    time: "5:30 PM - 8:00 PM",
    location: "Business School Auditorium",
    description: "Learn from alumni leaders about industry trends and career opportunities.",
    category: "professional",
    image: `${Event2}`
  },
  {
    id: 3,
    title: "10-Year Reunion: Class of 2013",
    date: "July 22, 2023",
    time: "2:00 PM - 6:00 PM",
    location: "Alumni Gardens",
    description: "Special reunion event for the Class of 2013. Families welcome!",
    category: "reunion",
    image: `${Event3}`
  }
];

const UpcomingEvents = () => {
  return (
    <section className="py-16 bg-gray-50">
      {/* Add Font Awesome CDN to your public/index.html head section */}
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
        integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" 
        crossOrigin="anonymous" 
        referrerPolicy="no-referrer" 
      />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Upcoming Events</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join us for these exciting alumni gatherings and networking opportunities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col h-full"
            >
              <div className="relative group overflow-hidden rounded-t-lg h-48">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                    event.category === 'social' ? 'bg-blue-100 text-blue-800' :
                    event.category === 'professional' ? 'bg-purple-100 text-purple-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                  </span>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-b-lg shadow-md flex-grow">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                
                <div className="space-y-2 mt-4">
                  <div className="flex items-center text-gray-600">
                    <i className="fas fa-calendar-day mr-2 text-blue-500 w-5 text-center"></i>
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <i className="fas fa-clock mr-2 text-purple-500 w-5 text-center"></i>
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <i className="fas fa-map-marker-alt mr-2 text-green-500 w-5 text-center"></i>
                    <span>{event.location}</span>
                  </div>
                </div>

                <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors duration-300">
                  <i className="fas fa-user-plus mr-2"></i>
                  Register Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors duration-300">
            <i className="fas fa-calendar-alt mr-2"></i>
            View All Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;