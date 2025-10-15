'use client'

import 'bootstrap/dist/css/bootstrap.min.css';

export default function NotFound() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <h1 className="display-1 text-danger">404</h1>
        <p className="lead">Oops! The page you're looking for doesn't exist.</p>
        <p>It might have been moved or deleted.</p>
        <div className="mt-4">
          <a href="/" className="btn btn-primary">Go back to Home</a>
        </div>
      </div>
    </div>
  );
}
