

export class RequestService {
  async post<T>(url: string, body: any): Promise<T> {

    const result = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })

    const response = await result.json()
    if (result.status < 200 || result.status >= 300 || response.error){
      throw new Error(response.error.message ? response.error.message : `Error ${result.status}`)
    }
    return response;
    
  }
}