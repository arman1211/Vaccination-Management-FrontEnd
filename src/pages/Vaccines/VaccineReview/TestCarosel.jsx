import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles

const TestimonialsCarousel = () => {
  const testimonials = [
    {
      name: "John Doe",
      text: "This podcast is amazing! The storytelling and production quality are top-notch. I cant wait for the next episode!",
      rating: 5,
    },
    {
      name: "Jane Smith",
      text: "This podcast kept me on the edge of my seat. Its a must-listen for true crime enthusiasts!",
      rating: 5,
    },
    {
      name: "Emily Johnson",
      text: "I cant get enough of this podcast! The hosts voice is so soothing, and the stories are gripping. Highly recommend!",
      rating: 5,
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        showStatus={false}
      >
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-gray-200 rounded-lg p-8 text-center">
            <p className="font-bold uppercase">{testimonial.name}</p>
            <p className="text-xl font-light italic text-gray-700">
              {testimonial.text}
            </p>
            <div className="flex items-center justify-center space-x-2 mt-4">
              {[...Array(testimonial.rating)].map((star, i) => (
                <svg
                  key={i}
                  className="text-yellow-500 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default TestimonialsCarousel;
