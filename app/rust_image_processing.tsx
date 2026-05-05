'use server'

export async function uploadser(e: FormData) {
    
    const res = await fetch('http://127.0.0.1:8000/api/upload', {
      method: 'POST',
      body: e,
    });

    const data = await res.json();
    console.log(data);
  
  return data;
  }

