import React from 'react';
import { FaSnowflake } from "react-icons/fa";
import useTitle from '../Hooks/useTitle';
import blogImg from '../Resources/blog.jpg'

const Blog = () => {
  useTitle('Blog')

  return (
    <div>
      <header className='relative'>
        <img className='w-full h-[600px] object-cover' src={blogImg} alt="blogImg" />
        <div className='absolute bottom-28 left-[25%] lg:opacity-80 hidden lg:block'>
        <a
          href="/"
          className="inline-flex items-center text-4xl text-yellow-500"
        >
          <FaSnowflake />
          <span className="ml-2 text-2xl font-bold tracking-wide text-sky-500 uppercase custom-logo">
            Hack The Code
          </span>
        </a>
        </div>
      </header>
      <section className='py-24 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl px-4 md:px-24 lg:px-8'>
        <h1 className='text-4xl font-semibold bg-gray-900 p-4 text-gray-200 text-center rounded-md mb-10'>Question And Answer</h1>
        <div className='mb-6 text-justify'>
          <h2 className='text-2xl font-semibold mb-2 text-gray-100'>Q1. What is cors?</h2>
          <p className='text-lg text-gray-300'>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.</p>
          <p className='text-lg text-gray-300'>It extends and adds flexibility to the same-origin policy (SOP). However, it also provides potential for cross-domain attacks, if a website's CORS policy is poorly configured and implemented. CORS is not a protection against cross-origin attacks such as cross-site request forgery (CSRF).</p>
        </div>
        <div className='mb-6 text-justify'>
          <h2 className='text-2xl font-semibold mb-2 text-gray-100'>Q2. Why are you using firebase? What other options do you have to implement authentication?</h2>
          <p className='text-lg text-gray-300'>Firebase is a set of hosting services for any type of application.It offers NoSQL and real-time hosting of databases, content, social authentication, and notifications, or services.</p>
          <p className='text-lg text-gray-300'>Firebase is backed by Google and also reliable & easy to use. I have used firebase for user authentication and hosting so far.</p>
        </div>
        <div className='mb-6 text-justify'>
          <h2 className='text-2xl font-semibold mb-2 text-gray-100'>Q3. How does the private route work?</h2>
          <p className='text-lg text-gray-300'>Private route needs to protect pages or information from unauthorized user depends on some conditions. So. firstly needed to create registration and login section to authorize a user and then let him/her permit to access the protected information. Even if the user is not a registered member but try to enter to the protected area, then he/she will be redirected to the login section.</p>
          <p className='text-lg text-gray-300'>To apply private routing make the protected page or component as its child and keep it inside the private route component. <br /> <code><span className='text-gray-100'>element:</span> &lt;PrivateRoute&gt; <span className='text-emerald-600'>&lt;ProtectedPage/&gt;</span> &lt;/PrivateRoute&gt;</code></p>
        </div>
        <div className='text-justify'>
          <h2 className='text-2xl font-semibold mb-2 text-gray-100'>Q4. What is Node? How does Node work?</h2>
          <p className='text-lg text-gray-300'>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications.</p>
          <p className='text-lg text-gray-300'>Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request. Node.js basically works on two concept: Asynchronous & Non-blocking I/O</p>
        </div>
      </section>
    </div>
  );
};

export default Blog;