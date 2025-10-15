'use client'

import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function GlobalError({ error, reset }) {
  const router = useRouter();

  useEffect(() => {
    // กรณีเกิดข้อผิดพลาดจะลบคุกกี้หรือทำการรีเซ็ตการตั้งค่าบางอย่าง
    console.error("Global error occurred:", error);
  }, [error]);

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <h1 className="display-1 text-danger">Oops!</h1>
        <p className="lead">Something went wrong.</p>
        <p>{error?.message || "We are unable to process your request."}</p>
        <div className="mt-4">
          <button onClick={() => reset()} className="btn btn-warning me-2">Try Again</button>
          <button onClick={() => router.push('/')} className="btn btn-primary">Go to Home</button>
        </div>
      </div>
    </div>
  );
}
